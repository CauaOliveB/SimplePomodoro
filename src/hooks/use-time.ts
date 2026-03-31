import { useEffect, useState } from "react";

export function useTimer(initialSeconds: number) {
    
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  // Lógica de Formatação: Transforma o número bruto em "25:00"
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const timeDisplay = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    // Limpeza automática ao pausar ou desmontar o componente
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleActive = () => setIsActive(!isActive);
  
  const reset = () => {
    setIsActive(true);
    setSeconds(initialSeconds);
  };

  return { 
    seconds, 
    timeDisplay, 
    isActive, 
    toggleActive, 
    reset 
  };
}

// export function TimerMode( Mode: string){

//     const[focus, setFocus] = useState(Mode)
//     const steps = ["Foco", "Pausa Curta", "Pausa Longa"]
//     if (Mode == "Foco") {
//         toggleActive()
//     }
// }