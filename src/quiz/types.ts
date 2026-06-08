export type TipoId =
  | "ama_negativo"
  | "guerreira"
  | "em_guerra"
  | "conquista"
  | "cria_filho";

export type Urgencia = "aguda" | "cronica";

export type TipoOption = { text: string; tipo: TipoId };
export type UrgenciaOption = { text: string; urgencia: Urgencia; peso: number };

export type Question =
  | { kind: "tipo"; n: number; prompt: string; options: TipoOption[] }
  | { kind: "urgencia"; n: number; prompt: string; options: UrgenciaOption[] };

export type QuizResult = { tipo: TipoId; urgencia: Urgencia };
