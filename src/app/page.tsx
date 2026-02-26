import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { Timer } from "lucide-react"
import Link from "next/link";


export default function Login() {
  return (
    <main className="min-h-screen animated-bg-focus flex items-center justify-center p-4">
      <Card className="glass w-full max-w-md p-8 flex flex-col gap-6 border-none text-foreground ">
        <div className="flex justify-center mb-1">
          <Timer className="h-15 w-15 text-primary bg-primary/30 rounded-md p-2" />
        </div>
        <h1 className="text-2xl text-white font-bold text-center mb-1">Pomodoro Timer</h1>
        <p className="text-center text-white/20">Please enter your credentials to continue</p>
        <Label >Username</Label>  
        <Input className="glass-subtle border-white/10" placeholder="your@email.com"></Input>
        <Label>Password</Label>
        <Input type="password" className="glass-subtle border-white/10" placeholder="*********"></Input>
        <Button className="mt-4 bg-primary text-white"><Link href="/timer">Login</Link></Button>
        <p className="text-center text-white/20">Do not have an account? <Link href="/sing-up" className="text-primary hover:underline">Sign Up</Link></p>
        <p className="text-center text-white/20"><Link href="/forgot-password" className="text-primary hover:underline">Forgot password?</Link></p>
      </Card>      
    </main>
  );
}
