import { useEffect, useRef, useState } from "react";

type VideoPlayerProps = { src: string; captions?: string };

export default function VideoPlayer({ src, captions }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const showCaptions = () => {
      for (let i = 0; i < v.textTracks.length; i++) v.textTracks[i].mode = "showing";
    };
    showCaptions();
    v.addEventListener("loadedmetadata", showCaptions);
    v.play().catch(() => {});
    return () => v.removeEventListener("loadedmetadata", showCaptions);
  }, [src]);

  function toggleSound() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  }
  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }

  return (
    <div className="relative w-full aspect-video rounded-md overflow-hidden photo bg-black">
      <video
        ref={videoRef}
        key={src}
        className="absolute inset-0 h-full w-full object-contain bg-black cursor-pointer"
        src={src}
        autoPlay
        muted
        playsInline
        preload="auto"
        onClick={togglePlay}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
      >
        {captions && (
          <track kind="captions" srcLang="pt" label="Português" default src={captions} />
        )}
      </video>
      {muted && (
        <button
          type="button"
          onClick={toggleSound}
          aria-label="Ativar som"
          className="absolute bottom-4 right-4 z-10 rounded-pill bg-gold text-brown-900 font-semibold text-[13px] px-4 py-2 shadow-glow-gold hover:bg-gold-light transition-colors"
        >
          🔊 Ativar som
        </button>
      )}
    </div>
  );
}
