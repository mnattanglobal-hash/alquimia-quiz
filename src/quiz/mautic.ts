import {
  MAUTIC_FORM_ACTION,
  TIPO_TAG,
  URGENCIA_TAG,
  TAG_CONCLUIDO,
} from "../config";
import { RESULTS } from "./results/content";
import type { QuizResult } from "./types";

export type Lead = { firstname: string; email: string };

/**
 * Envia o lead pro Mautic com as tags/campos calculados.
 * PONTO DE INTEGRAÇÃO: enquanto MAUTIC_FORM_ACTION for placeholder, só loga.
 * Quando tiver o endpoint real, troca o console.log por um POST (form do Mautic
 * ou API) com firstname, email, tags e custom fields.
 */
export async function submitLead(
  lead: Lead,
  result: QuizResult
): Promise<void> {
  const payload = {
    firstname: lead.firstname,
    email: lead.email,
    tags: [TIPO_TAG[result.tipo], URGENCIA_TAG[result.urgencia], TAG_CONCLUIDO],
    fields: {
      quiz_tipo: RESULTS[result.tipo].nomePublico,
      quiz_urgencia: result.urgencia,
    },
  };

  const configured = MAUTIC_FORM_ACTION && !MAUTIC_FORM_ACTION.startsWith("{{");
  if (!configured) {
    // eslint-disable-next-line no-console
    console.log("[quiz] lead pronto pro Mautic (placeholder):", payload);
    return;
  }

  try {
    await fetch(MAUTIC_FORM_ACTION, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    // não bloqueia o usuário de ver o resultado
    // eslint-disable-next-line no-console
    console.warn("[quiz] falha ao enviar lead:", e);
  }
}
