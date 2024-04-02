
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"
import useAppData from "@/src/data/context/hook/useAppData"
import ForcarAutenticacao from "../auth/forcarautenticacao"


interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { tema } = useAppData()
    return (
        <ForcarAutenticacao>
        <div className={`${tema} flex h-screen w-screen`}>
            <MenuLateral />
        <div className={`
        flex flex-col w-full p-7
        bg-gray-300 dark:bg-slate-300
        `}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
            <Conteudo>
                {props.children}
            </Conteudo>
        </div>
        </div>
        </ForcarAutenticacao>
    )
}