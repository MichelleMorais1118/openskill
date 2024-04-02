import Titulo from "./Titulo"
import useAppData from "@/src/data/context/hook/useAppData";
import BotaoAlternarTema from "./botaoalternartema";
import AvatarUsuario from "./avatarusuario";

interface CabecalhoProps {
    titulo: string;
    subtitulo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
   
    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-grow justify-end items-center`}>
                <AvatarUsuario className="ml-3" />
            </div>
        </div>
    );
}