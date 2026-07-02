import { LEADS_ENDPOINT, N8N_WEBHOOK } from "../config";
import { RESULTS } from "./results/content";
import type { QuizResult, TipoId } from "./types";

export type Lead = { firstname: string; email: string };

const TIPO_TO_RESULTADO: Record<TipoId, string> = {
  ama_negativo: "ama_no_negativo",
  guerreira:    "guerreira_cansada",
  em_guerra:    "esta_em_guerra",
  conquista:    "conquista_nao_sustenta",
  cria_filho:   "cria_filho",
};

export async function submitLead(lead: Lead, result: QuizResult): Promise<void> {
  const nome     = lead.firstname;
  const email    = lead.email;
  const urgencia = result.urgencia;
  const origem   = "quiz";

  // 1. Google Sheets (fire-and-forget, no-cors)
  if (LEADS_ENDPOINT && !LEADS_ENDPOINT.startsWith("{{")) {
    fetch(LEADS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        nome, email, urgencia, origem,
        tipo: RESULTS[result.tipo].nomePublico,
      }),
    }).catch(() => {});
  }

  // 2. n8n → Listmonk + sequência de emails (fire-and-forget, no-cors)
  if (N8N_WEBHOOK) {
    fetch(N8N_WEBHOOK, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        nome, email, urgencia, origem,
        resultado: TIPO_TO_RESULTADO[result.tipo],
      }),
    }).catch(() => {});
  }
}
