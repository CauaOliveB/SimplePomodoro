import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResetPassword() {
    return(
        <main className="min-h-screen animated-bg-focus flex items-center justify-center p-4">
            <Card className="glass w-full max-w-md p-8 flex flex-col gap-6 border-none text-foreground ">
                <h1 className="text-2xl text-white font-bold text-center mb-1">Reset Password</h1>
                <p className="text-center text-white/20">Please enter your new password</p>
                <Label>New Password</Label>
                <Input type="password" className="glass-subtle border-white/10" placeholder="*********"></Input>
                <Label>Confirm Password</Label>
                <Input type="password" className="glass-subtle border-white/10" placeholder="*********"></Input>
                <Button className="mt-4 bg-primary text-white"><Link href="/">Reset Password</Link></Button>
                <p className="text-center text-white/20"><Link href="/" className="text-primary hover:underline">Back to Login</Link></p>
            </Card> 
        </main>
    )
}