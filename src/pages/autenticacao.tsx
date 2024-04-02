import { useState } from "react";
import AuthInput from "../components/auth/Authinput";
import { IconeAtencao } from "../components/icons";
import useAuth from "../data/context/hook/useauth";
import { useRouter } from "next/router";

export default function Autenticacao() {
    const {usuario, loginGoogle } = useAuth()
    const router = useRouter() 

    
  
    const [erro, setErro] = useState<string | null>(null); // Defina o tipo de estado como string | null
    const [modo, setModo] = useState<'login' | 'cadastro'>('login');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const {cadastrar} = useAuth()
    const  {login} = useAuth()
  
    function exibirErro(msg: string, tempoEmSegundos = 5) {
      setErro(msg);
      setTimeout(() => setErro(null), tempoEmSegundos * 1000);
    }
  
    async function submeter() {
      try {
        if (modo === 'login') {
          await login!(email, senha);
        } else {
          await cadastrar!(email, senha);
        }
      } catch (e) {
        if (e instanceof Error) {
          exibirErro(e.message || 'Erro desconhecido!');
        } else {
          exibirErro('Erro desconhecido!');
        }
      }
    }
  
    return (
      <div className="flex h-screen items-center justify-center bg-orange-700">
         <div className="hidden md:block md:w-1/2 lg:w-2/3 ">    
          <img
          src="https://source.unsplash.com/random"
           alt="Imagem da Tela de Autenticação"
           className="h-screen w-full object-cover"
           width="800" 
           height="300"     
           />
        </div>
          <div className="m-10 w-full md:w-1/2 lg:w-1/3 " >
        <h1 className="text-2xl font-bold mb-5">
          {modo === 'login' ? 'Entre com a sua Conta' : 'Cadastre-se na Plataforma'}
        </h1>
  
      {erro ? (
          <div className={`
          flex items-center
          bg-red-400 text-white py-3 px-5 my-2
          border border-red-700 rounded-lg
          `}>
              {IconeAtencao()}
              <span className="ml-2"> {erro}</span>
          </div>
  
      ) : false}
  
  
        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
  
        <button onClick={submeter} className="w-full bg-green-500 hover:bg-green-400 text-white rounded-lg px-4 py-3 mt-6">
          {modo === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
  
        <hr className="my-6 border-gray-300 w-full" />
  
        <button onClick={loginGoogle} className="w-full bg-slate-100 hover:bg-slate-200 text-black rounded-lg px-4 py-3 mt-6 flex items-center justify-center">
        <svg role="img" className="h-4 w-6 pr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Google</title>
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
        </svg>
          Entrar com o Google
        </button>
  
        {modo === 'login' ? (
            <p className="mt-8">
              Novo por aqui?
              <a onClick={() => setModo('cadastro')} className={`
                text-green-500 hover:text-green-700
                font-medium cursor-pointer
              `}> Crie uma conta gratuitamente</a>
            </p>
        ) : (
          <p className="mt-8">
              Já faz parte da nossa comunidade?
              <a onClick={() => setModo('login')} className={`
                text-blue-500 hover:text-blue-700
                font-medium cursor-pointer
              `}> Entre com a suas credencias </a>
            </p>
  
             )}
        </div>
      </div>
    );
  }