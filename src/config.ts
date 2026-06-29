// Placeholders centralizados — Quiz Alquimia Ascensional.

// Checkouts dos produtos recomendados nos blocos de resultado.
export const CHECKOUT_DESAPEGO = "https://checkout.thebank.com.br/7473493593052389376"; // Desapego de Uma Vez R$147
export const CHECKOUT_MECANICA = "https://checkout.thebank.com.br/7473492511508979712"; // A Mecânica do Amor R$197

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
