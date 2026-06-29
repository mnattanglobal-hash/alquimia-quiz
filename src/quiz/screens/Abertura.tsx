import Cta from "../../components/ui/Cta";

export default function Abertura({ onStart }: { onStart: () => void }) {
  return (
    <section className="bg-hero-glow text-center py-12 md:py-16">
      <div className="wrap">
        <img
          src="img/Alquimia-Logo-Horizontal-Gold.png"
          alt="Escola de Alquimia Ascensional"
          className="mx-auto h-auto w-[200px] sm:w-[224px] mb-7"
        />

        <img
          src="img/quiz_hero.jpg"
          alt="Os nomes mudam. A sensação é sempre a mesma. Descubra qual padrão comanda o seu jeito de amar."
          className="block w-full mx-auto h-auto rounded-md shadow-[var(--card-shadow)] mb-7"
        />

        <h1 className="sr-only">Os nomes mudam. A sensação é sempre a mesma.</h1>
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
