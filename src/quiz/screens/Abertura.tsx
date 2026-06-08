import Eyebrow from "../../components/ui/Eyebrow";
import Cta from "../../components/ui/Cta";
import DurgaPhoto from "../../components/ui/DurgaPhoto";

export default function Abertura({ onStart }: { onStart: () => void }) {
  return (
    <section className="bg-hero-glow text-center min-h-screen flex items-center py-12">
      <div className="wrap">
        <img
          src="img/Alquimia-Logo-Horizontal-Gold.png"
          alt="Escola de Alquimia Ascensional"
          className="mx-auto h-auto w-[200px] sm:w-[224px] mb-7"
        />

        <DurgaPhoto
          tall
          className="mb-7 max-w-narrow mx-auto"
          description="Durga olhando direto pra câmera, fundo escuro, expressão séria mas acolhedora — sem sorriso de coach."
        />

        <Eyebrow className="mb-3">
          2 minutos · 9 perguntas · a verdade que ninguém te disse ainda
        </Eyebrow>
        <h1 className="text-[clamp(32px,7vw,52px)] mb-5">
          Os nomes mudam.
          <br />A sensação é <span className="text-gold">sempre a mesma.</span>
        </h1>
        <p className="text-[18px] max-w-[600px] mx-auto mb-7">
          Você já tentou de tudo pra mudar como você ama e nada segura. É porque
          você tá mexendo no errado. Existe um padrão operando por baixo de tudo.
          Descubra qual é o seu.
        </p>

        <ul className="bullets text-left max-w-[520px] mx-auto mb-7">
          <li>Descobre qual dos 5 padrões está comandando o seu jeito de amar</li>
          <li>Entende por que a dor sempre volta com cara diferente</li>
          <li>
            Recebe o caminho certo pra você sair disso, do jeito que cabe no seu
            momento
          </li>
        </ul>

        <p className="font-display italic text-accent-strong text-[18px] max-w-[560px] mx-auto mb-8">
          "18 anos ouvindo mulher chorando do outro lado. Eu já fui cada uma
          dessas mulheres. Não vou te julgar. Vou te dizer a verdade."
          <span className="block not-italic text-[14px] text-muted-token mt-2">
            — Durga
          </span>
        </p>

        <Cta onClick={onStart} microcopy="Leva menos de 2 minutos">
          COMEÇAR O TESTE
        </Cta>
      </div>
    </section>
  );
}
