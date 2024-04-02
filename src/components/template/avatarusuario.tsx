import Link from "next/link";

import useAuth from "@/src/data/context/hook/useauth";



interface AvatarUsuarioProps {
    className?: string;
  }
  
  export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth();
    return (
      <Link href="/perfil">
      </Link>
    );
  }