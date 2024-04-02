import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/template/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex  justify-center items-center h-screen bg-gradient-to-r from-orange-600 to-amber-800`}>
      <Layout titulo="OpenSkill" subtitulo="ranking de padel">

        <h3>Conteudo</h3>
      </Layout>
    </div>
    
  );
}
