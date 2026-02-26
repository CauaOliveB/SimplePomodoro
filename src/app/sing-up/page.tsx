import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";



export default function SingUp() {
    return(
        <main className="min-h-screen animated-bg-focus flex items-center justify-center p-4">
            <Card className="glass w-full max-w-md p-8 flex flex-col gap-6 border-none text-foreground ">
                <h1 className="text-2xl text-white font-bold text-center mb-1">Sign Up</h1>
                <p className="text-center text-white/20">Please enter your details to create an account</p>
                <Label>Username</Label>
                <Input className="glass-subtle border-white/10" placeholder="your@email.com"></Input>
                <Label>Password</Label>
                <Input type="password" className="glass-subtle border-white/10" placeholder="*********"></Input>
                <Button className="mt-4 bg-primary text-white"><Link href="/timer">Sign Up</Link></Button>
                <p className="text-center text-white/20">Already have an account? <Link href="/" className="text-primary hover:underline">Login</Link></p>
            </Card>
        </main>

    )
};