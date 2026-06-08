import { QUESTIONS } from "./questions";
import type { TipoId, Urgencia, QuizResult } from "./types";

// Ordem de prioridade fixa pro desempate final (quiz_inicial.md §4.1).
const FIXED_PRIORITY: TipoId[] = [
  "ama_negativo",
  "cria_filho",
  "em_guerra",
  "guerreira",
  "conquista",
];

/**
 * Calcula tipo + urgência a partir das respostas (índice da alternativa por pergunta).
 * answers.length === 9.
 */
export function computeResult(answers: number[]): QuizResult {
  // ---- TIPO (perguntas 1–6) ----
  const count: Record<TipoId, number> = {
    ama_negativo: 0,
    guerreira: 0,
    em_guerra: 0,
    conquista: 0,
    cria_filho: 0,
  };

  for (let i = 0; i < 6; i++) {
    const q = QUESTIONS[i];
    if (q.kind !== "tipo") continue;
    const opt = q.options[answers[i]];
    if (opt) count[opt.tipo]++;
  }

  const max = Math.max(...Object.values(count));
  let candidates = (Object.keys(count) as TipoId[]).filter(
    (t) => count[t] === max
  );

  let tipo: TipoId;
  if (candidates.length === 1) {
    tipo = candidates[0];
  } else {
    // Desempate 1: tipo pontuado na Pergunta 5 (a verdade dura)
    const q5 = QUESTIONS[4];
    const q5tipo = q5.kind === "tipo" ? q5.options[answers[4]]?.tipo : undefined;
    if (q5tipo && candidates.includes(q5tipo)) {
      tipo = q5tipo;
    } else {
      // Desempate 2: tipo pontuado na Pergunta 1
      const q1 = QUESTIONS[0];
      const q1tipo =
        q1.kind === "tipo" ? q1.options[answers[0]]?.tipo : undefined;
      if (q1tipo && candidates.includes(q1tipo)) {
        tipo = q1tipo;
      } else {
        // Desempate 3: ordem de prioridade fixa
        tipo = FIXED_PRIORITY.find((t) => candidates.includes(t))!;
      }
    }
  }

  // ---- URGÊNCIA (perguntas 7–9) ----
  let aguda = 0;
  let cronica = 0;
  for (let i = 6; i < 9; i++) {
    const q = QUESTIONS[i];
    if (q.kind !== "urgencia") continue;
    const opt = q.options[answers[i]];
    if (!opt) continue;
    if (opt.urgencia === "aguda") aguda += opt.peso;
    else cronica += opt.peso;
  }

  // AGUDA > CRONICA → aguda; CRONICA >= AGUDA → crônica.
  let urgencia: Urgencia = aguda > cronica ? "aguda" : "cronica";

  // Override: P7=A (pessoa específica) E P8=A (semanas) → força AGUDA.
  if (answers[6] === 0 && answers[7] === 0) urgencia = "aguda";

  return { tipo, urgencia };
}
