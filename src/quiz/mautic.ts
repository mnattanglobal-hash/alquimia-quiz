import { LEADS_ENDPOINT } from "../config";
import { RESULTS } from "./results/content";
import type { QuizResult } from "./types";

export type Lead = { firstname: string; email: string };

/**
 * Envia o lead pro Google Sheets (Apps Script Web App do cliente).
 * Grava Nome + Email + Tipo (nome público) + Urgência numa linha da planilha.
 * fire-and-forget (no-cors): não bloqueia o usuário de ver o resultado.
 */
export async function submitLead(lead: Lead, result: QuizResult): Promise<void> {
  const payload = {
    nome: lead.firstname,
    email: lead.email,
    tipo: RESULTS[result.tipo].nomePublico,
    urgencia: result.urgencia,
    origem: "quiz",
  };

  const configured = LEADS_ENDPOINT && !LEADS_ENDPOINT.startsWith("{{");
  if (!configured) {
    // eslint-disable-next-line no-console
    console.log("[quiz] lead (endpoint não configurado):", payload);
    return;
  }

  try {
    await fetch(LEADS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn("[quiz] falha ao enviar lead:", e);
  }
}
