import { Card } from "@/components/ui/card"
import  Link  from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function ForgotPassword() {
    return(
        <main className="min-h-screen animated-bg-focus flex items-center justify-center p-4">
            <Card className="glass w-full max-w-md p-8 flex flex-col gap-6 border-none text-foreground ">
                <h1 className="text-2xl text-white font-bold text-center mb-1">Forgot Password</h1>
                <p className="text-center text-white/20">Please enter your email to reset your password</p>
                <Label>Email</Label>
                <Input className="glass-subtle border-white/10" placeholder="your@email.com"></Input>
                <Button className="mt-4 bg-primary text-white"><Link href="/reset-password">Reset Password</Link></Button>
                <p className="text-center text-white/20"><Link href="/" className="text-primary hover:underline">Back to Login</Link></p>
            </Card>
        </main>
    )
};