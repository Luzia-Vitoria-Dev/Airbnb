import ButtonIcon from "@/components/ButtonIcon"
import Logo from "@/components/Logo"
import { IconUserCircle } from "@tabler/icons-react"
import Link from "next/link"

const TopBar = () => {
    return (
        <>
            <div className="container py-6 mx-auto flex justify-between items-center">

                <Logo/>                

                <div className="flex gap-6">
                    <Link className="font-semibold" href="/">Acomodações</Link>
                    <Link className="opacity-60" href="/">Experiências</Link>
                </div>

                <ButtonIcon 
                icon={(
                    <IconUserCircle
                    aria-label="User Icon"
                    size={20}
                    />
                )}>
                Entrar
                </ButtonIcon>

            </div>
        </>
    )
}

export default TopBar