// Placeholders centralizados — Quiz Alquimia Ascensional.

// Checkouts dos produtos recomendados nos blocos de resultado.
export const CHECKOUT_DESAPEGO = "{{CHECKOUT_DESAPEGO}}"; // Desapego de Uma Vez R$147
export const CHECKOUT_MECANICA = "{{CHECKOUT_MECANICA}}"; // A Mecânica do Amor R$197

// Integração Mautic (captura de email + tags). Ponto de integração:
// no submit, POSTa firstname/email pro form do Mautic e aplica as tags calculadas.
// Enquanto não houver endpoint, o submit só avança (lead fica em memória/console).
export const MAUTIC_FORM_ACTION = "{{MAUTIC_FORM_ACTION}}";

// Tags por tipo/urgência (referência pro Mautic).
export const TIPO_TAG: Record<string, string> = {
  ama_negativo: "tipo-ama-no-negativo",
  guerreira: "tipo-guerreira-cansada",
  em_guerra: "tipo-em-guerra",
  conquista: "tipo-conquista-nao-sustenta",
  cria_filho: "tipo-cria-filho",
};
export const URGENCIA_TAG: Record<string, string> = {
  aguda: "urgencia-aguda",
  cronica: "urgencia-cronica",
};
export const TAG_CONCLUIDO = "quiz-concluido";
