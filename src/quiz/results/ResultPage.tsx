import Section from "../../components/ui/Section";
import Eyebrow from "../../components/ui/Eyebrow";
import Quote from "../../components/ui/Quote";
import FlameDivider from "../../components/ui/FlameDivider";
import DurgaPhoto from "../../components/ui/DurgaPhoto";
import Cta from "../../components/ui/Cta";
import { RESULTS } from "./content";
import type { Part } from "./content";
import type { TipoId, Urgencia } from "../types";
import { CHECKOUT_DESAPEGO, CHECKOUT_MECANICA } from "../../config";

function Parts({ parts }: { parts: Part[] }) {
  return (
    <>
      {parts.map((p, i) =>
        typeof p === "string" ? (
          <p key={i} className="mb-[18px] last:mb-0">
            {p}
          </p>
        ) : (
          <Quote key={i}>"{p.q}"</Quote>
        )
      )}
    </>
  );
}

export default function ResultPage({
  tipo,
  urgencia,
}: {
  tipo: TipoId;
  urgencia: Urgencia;
}) {
  const r = RESULTS[tipo];
  const bloco = urgencia === "aguda" ? r.aguda : r.cronica;
  const href = urgencia === "aguda" ? CHECKOUT_DESAPEGO : CHECKOUT_MECANICA;

  return (
    <main>
      {/* Seção 1 — Revelação do tipo */}
      <section className="bg-hero-glow text-center pt-9 pb-12 md:pb-16">
        <div className="wrap">
          <img
            src="/img/Alquimia-Logo-Horizontal-Gold.png"
            alt="Escola de Alquimia Ascensional"
            className="mx-auto h-auto w-[180px] mb-7"
          />
          <img
            src={r.emblema}
            alt={`Emblema — ${r.nomePublico}`}
            className="mx-auto h-auto w-[128px] mb-5"
          />
          <Eyebrow className="mb-3">Seu resultado</Eyebrow>
          <h1 className="text-[clamp(30px,7vw,48px)] mb-6">{r.headline}</h1>
          <div className="text-left max-w-narrow mx-auto">
            <Parts parts={r.abertura} />
          </div>
        </div>
      </section>

      {/* Seção 2 — O espelho */}
      <Section band narrow>
        <Parts parts={r.espelho} />
      </Section>

      {/* Seção 3 — O remédio */}
      <Section narrow>
        <FlameDivider lineOnly className="mb-7" />
        <Parts parts={r.remedio} />
      </Section>

      {/* Seção 4 — Bloco intercambiável (recomendação) */}
      <Section narrow tone="dark">
        <h2 className="text-[clamp(26px,6vw,38px)] mb-[22px]">{bloco.headline}</h2>
        <Parts parts={bloco.parts} />
        <div className="card mt-6 text-center">
          <p className="mb-5">{bloco.oferta}</p>
          <Cta href={href}>{bloco.ctaLabel}</Cta>
        </div>
        <p className="text-muted-token text-[14px] mt-5 mb-0">{bloco.nota}</p>
      </Section>

      {/* Seção 5 — Fecho */}
      <Section narrow>
        <DurgaPhoto
          tall
          className="mb-7"
          description="Durga, meio corpo, olhar direto na câmera. Fecho — verdade, não simpatia."
        />
        <Parts parts={r.fecho} />
      </Section>
    </main>
  );
}
