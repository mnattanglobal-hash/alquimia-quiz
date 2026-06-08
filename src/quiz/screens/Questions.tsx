import { useState } from "react";
import { QUESTIONS } from "../questions";

export default function Questions({
  onComplete,
}: {
  onComplete: (answers: number[]) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const total = QUESTIONS.length;
  const q = QUESTIONS[idx];
  const progress = Math.round(((idx + (answers[idx] != null ? 1 : 0)) / total) * 100);

  function pick(optionIndex: number) {
    const next = [...answers];
    next[idx] = optionIndex;
    setAnswers(next);
    // pequena pausa pro feedback visual e avança
    window.setTimeout(() => {
      if (idx < total - 1) setIdx(idx + 1);
      else onComplete(next);
    }, 160);
  }

  function back() {
    if (idx > 0) setIdx(idx - 1);
  }

  return (
    <section className="py-10 md:py-14 min-h-screen">
      <div className="wrap narrow">
        <img
          src="img/Alquimia-Logo-Horizontal-Gold.png"
          alt="Escola de Alquimia Ascensional"
          className="mx-auto h-auto w-[150px] mb-8"
        />

        {/* Barra de progresso */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-eyebrow text-[11px] tracking-[0.16em] text-accent-strong uppercase">
            Pergunta {idx + 1} de {total}
          </span>
          {idx > 0 && (
            <button
              type="button"
              onClick={back}
              className="text-[13px] text-muted-token hover:text-accent-strong"
            >
              ← voltar
            </button>
          )}
        </div>
        <div className="h-[6px] rounded-pill bg-[color:var(--hairline)] overflow-hidden mb-8">
          <div
            className="h-full bg-gold transition-all duration-300"
            style={{ width: `${Math.max(progress, (idx / total) * 100)}%` }}
          />
        </div>

        <h2 className="text-[clamp(22px,5vw,30px)] mb-7">{q.prompt}</h2>

        <div className="grid gap-3">
          {q.options.map((opt, i) => {
            const selected = answers[idx] === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => pick(i)}
                className={`card text-left transition-all duration-150 hover:border-gold ${
                  selected ? "border-gold shadow-glow-gold" : ""
                }`}
              >
                {opt.text}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
