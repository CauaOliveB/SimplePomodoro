"use client";

import { Button } from "@/components/atoms/button/Button";
import { TimerMode } from "@/components/molecules";
import { Play, Pause, RotateCcw, SkipForward } from "lucide-react";
import { useTimer } from "@/hooks/use-time";

export default function Timer() {
  const { timeDisplay, toggleActive, isActive, reset } = useTimer(1500);
  
  return (
    <main className="min-h-screen animated-bg-focus flex flex-row">

      {/* ── Painel Esquerdo — Timer + Controles ── */}
      <section className="flex flex-1 flex-col items-center justify-center gap-12 p-66">
 
        {/* Visor do Tempo */}
        <div className="flex flex-col items-center gap-2">
          <div>
            <TimerMode />
          </div>
          <h1 className="text-[120px] font-bold tracking-tighter text-white font-mono leading-none">
            {timeDisplay}
          </h1>
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs font-medium">
            {isActive ? "Foco Ativo" : "Pausado"}
          </p>
        </div>

        {/* Controles Principais */}
        <div className="flex items-center gap-8">

          {/* Botão Reset */}
          <Button variant="glass" size="glassrounded" onClick={reset}>
            <RotateCcw size={20} />
          </Button>

          {/* Botão Play/Pause Dinâmico */}
          <Button size="play" onClick={toggleActive}>
            {isActive ? (
              <Pause size={30} fill="currentColor" />
            ) : (
              <Play size={30} fill="currentColor" className="translate-x-0.5" />
            )}
          </Button>

          {/* Botão Skip */}
          <Button variant="glass" size="glassrounded">
            <SkipForward size={20} />
          </Button>

        </div>
      </section>

      {/* ── Divisor Glass Vertical ── */}
      <div className="w-px self-stretch my-8 bg-white/10" />

      {/* ── Painel Direito — Containers ── */}
      <section className="flex flex-1 flex-col gap-4 p-8">

        {/* Container Superior */}
        <div className="flex-1 glass rounded-2xl" />

        {/* Container Inferior */}
        <div className="flex-1 glass rounded-2xl" />

        

      </section>

    </main>
  );
}