import { useEffect, useState } from "react";
import Abertura from "./quiz/screens/Abertura";
import Questions from "./quiz/screens/Questions";
import EmailCapture from "./quiz/screens/EmailCapture";
import ResultPage from "./quiz/results/ResultPage";
import { computeResult } from "./quiz/scoring";
import { submitLead } from "./quiz/mautic";
import type { QuizResult, TipoId, Urgencia } from "./quiz/types";

type Phase = "intro" | "quiz" | "email" | "result";

const TIPOS: TipoId[] = [
  "ama_negativo",
  "guerreira",
  "em_guerra",
  "conquista",
  "cria_filho",
];

export default function App() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [result, setResult] = useState<QuizResult | null>(null);

  // Deep-link: ?tipo=...&urgencia=... abre o resultado direto (links de email).
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const t = p.get("tipo");
    const u = p.get("urgencia");
    if (t && TIPOS.includes(t as TipoId) && (u === "aguda" || u === "cronica")) {
      setResult({ tipo: t as TipoId, urgencia: u as Urgencia });
      setPhase("result");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [phase]);

  function handleComplete(answers: number[]) {
    setResult(computeResult(answers));
    setPhase("email");
  }

  function handleEmail(firstname: string, email: string) {
    if (result) {
      submitLead({ firstname, email }, result);
      const url = new URL(window.location.href);
      url.searchParams.set("tipo", result.tipo);
      url.searchParams.set("urgencia", result.urgencia);
      window.history.replaceState({}, "", url.toString());
    }
    setPhase("result");
  }

  if (phase === "result" && result)
    return <ResultPage tipo={result.tipo} urgencia={result.urgencia} />;
  if (phase === "email") return <EmailCapture onSubmit={handleEmail} />;
  if (phase === "quiz") return <Questions onComplete={handleComplete} />;
  return <Abertura onStart={() => setPhase("quiz")} />;
}
