import { Button } from "./atoms";
import { Menu } from "lucide-react";

export function Header() {
    return(
        <header>
            <Button>
                <Menu />
            </Button>
        </header>
    )
}