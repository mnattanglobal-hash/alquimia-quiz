// Placeholders centralizados — Quiz Alquimia Ascensional.

// Checkouts dos produtos recomendados nos blocos de resultado.
export const CHECKOUT_DESAPEGO = "{{CHECKOUT_DESAPEGO}}"; // Desapego de Uma Vez R$147
export const CHECKOUT_MECANICA = "{{CHECKOUT_MECANICA}}"; // A Mecânica do Amor R$197

// Captura de lead → Google Sheets (via Apps Script Web App do cliente).
// Cada conclusão do quiz grava Nome + Email + Tipo + Urgência numa linha da planilha.
export const LEADS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyn5IKCTS5ONnyYpIOcTYrda2hxOcfcy6HLpvSRvt-Mb-JsZFdDI3yPm909dG6zWnyEGQ/exec";

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
