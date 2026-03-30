import { useState } from "react";
import { Button } from "@/components/atoms/button/Button";

export function TimerMode() {
    const [mode, setMode] = useState<"foco" | "pausaCurta" | "pausaLonga">("foco");

    return (
        <div className="flex flex-row py-0 bg-white/5 rounded-full p-0">
            <Button
                variant="timerMode"
                size="glassrounded"
                onClick={() => setMode("foco")}
                className={`hover:bg-primary/70 ${mode === "foco" ? "text-primary" : "text-slate-400"}`}
            >
                Foco
            </Button>

            <Button
                variant="timerMode"
                size="glassrounded"
                onClick={() => setMode("pausaCurta")}
                className={`hover:bg-primary/70 ${mode === "pausaCurta" ? "text-primary" : "text-slate-400"}`}
            >
                Pausa Curta
            </Button>

            <Button
                variant="timerMode"
                size="glassrounded"
                onClick={() => setMode("pausaLonga")}
                className={`hover:bg-primary/70 ${mode === "pausaLonga" ? "text-primary" : "text-slate-400"}`}
            >
                Pausa Longa
            </Button>
        </div>
    );
}