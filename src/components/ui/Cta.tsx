type CtaProps = {
  children: React.ReactNode;
  /** destino do botão (checkout do produto). Ignorado se onClick for passado. */
  href?: string;
  microcopy?: string;
  /** ação client-side (ex.: avançar etapa) em vez de link */
  onClick?: () => void;
  disabled?: boolean;
};

export default function Cta({
  children,
  href = "#",
  microcopy,
  onClick,
  disabled,
}: CtaProps) {
  return (
    <div className="text-center">
      {onClick ? (
        <button
          type="button"
          className="cta disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      ) : (
        <a className="cta" href={href}>
          {children}
        </a>
      )}
      {microcopy && (
        <p className="text-muted-token text-[13.5px] mt-[14px]">{microcopy}</p>
      )}
    </div>
  );
}
