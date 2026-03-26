"use client";

import { Button } from "@/components/atoms/Button/button";
import { Play, Pause, RotateCcw, SkipForward } from "lucide-react";
import { useTimer } from "@/hooks/use-time";

export default function Timer() {
  // Pegamos tudo pronto do nosso Hook
  const { timeDisplay, toggleActive, isActive, reset } = useTimer(1500);

  return (
    <main className="min-h-screen animated-bg-focus flex flex-col items-center justify-center p-4 gap-12">
      
      {/* Visor do Tempo */}
      <div className="flex flex-col items-center gap-2">
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
    </main>
  );
}