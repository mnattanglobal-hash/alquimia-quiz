import { useState } from "react";
import Eyebrow from "../../components/ui/Eyebrow";

export default function EmailCapture({
  onSubmit,
}: {
  onSubmit: (firstname: string, email: string) => void;
}) {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const valid = firstname.trim().length > 1 && /\S+@\S+\.\S+/.test(email);

  function handle(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || sending) return;
    setSending(true);
    onSubmit(firstname.trim(), email.trim());
  }

  return (
    <section className="bg-hero-glow min-h-screen flex items-center py-12">
      <div className="wrap narrow w-full text-center">
        <img
          src="img/Alquimia-Logo-Horizontal-Gold.png"
          alt="Escola de Alquimia Ascensional"
          className="mx-auto h-auto w-[180px] mb-8"
        />
        <Eyebrow className="mb-3">Seu diagnóstico está pronto</Eyebrow>
        <h1 className="text-[clamp(28px,6vw,40px)] mb-4">
          Pra onde eu mando o seu resultado?
        </h1>
        <p className="text-[17px] max-w-[520px] mx-auto mb-8">
          Vou montar o seu diagnóstico e te mandar junto o primeiro passo pra sair
          desse padrão. Sem isso aqui o teste não tem pra onde ir.
        </p>

        <form onSubmit={handle} className="max-w-[420px] mx-auto text-left">
          <label className="block mb-4">
            <span className="block text-[13px] text-muted-token mb-1">
              Primeiro nome
            </span>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Como você quer ser chamada"
              className="w-full rounded-md px-4 py-3 bg-[var(--card-bg)] border border-[color:var(--border)] text-[var(--text)] outline-none focus:border-gold"
            />
          </label>
          <label className="block mb-6">
            <span className="block text-[13px] text-muted-token mb-1">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full rounded-md px-4 py-3 bg-[var(--card-bg)] border border-[color:var(--border)] text-[var(--text)] outline-none focus:border-gold"
            />
          </label>

          <div className="text-center">
            <button
              type="submit"
              disabled={!valid || sending}
              className="cta w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {sending ? "ABRINDO SEU RESULTADO…" : "QUERO MEU RESULTADO"}
            </button>
            <p className="text-muted-token text-[13px] mt-[14px]">
              Seus dados ficam comigo. Você sai quando quiser, é um clique.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
