// Import from Next
import Image from 'next/image'

// Imports images
import Logo from '../img/logo.svg'
import LgLogo from '../img/lgLogo.svg'

// Components
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen items-center font-sans">
      <Header />
      <main className="flex flex-1 items-center justify-center w-full mx-28">
        <section className="w-1/2 ml-28 space-y-16">
          <Image src={LgLogo} alt="LgLogo" />
          <div className="flex flex-col  space-y-4">
            <div className="bg-lgBgCard text-white px-4 py-2 rounded-md h-[150px] w-[560px]">
              <h2 className="font-bold text-2xl">Gestão Descomplicada</h2>
              <p className=" mt-2">
                Simplifique e gerencie suas obrigações contábeis e fiscais com a
                Obligare. Economize tempo e evite erros com nossa solução
                intuitiva.
              </p>
            </div>
            <div className="bg-lgBgCard text-white px-4 py-2 rounded-md h-[150px] w-[560px]">
              <h2 className="font-bold text-2xl">
                Controle Total das Obrigações Fiscais
              </h2>
              <p className=" mt-2">
                Simplifique a gestão fiscal do seu negócio com a Obligare. Nosso
                sistema avançado permite que você acompanhe e cumpra suas
                obrigações fiscais de forma precisa e eficiente.
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-end w-1/2 mr-28">
          <div className="flex flex-col bg-lgBgCard rounded-md text-white px-12 justify-center items-center">
            <form className="flex flex-col items-center">
              <div className="flex flex-col space-y-8 py-8">
                <label>
                  <p>E-mail:</p>
                  <input
                    type="email"
                    className="rounded-tl-md text-black rounded-br-md transition border-b-2 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-300"
                  />
                </label>
                <label>
                  <p>Senha:</p>
                  <input
                    type="password"
                    className="rounded-tl-md text-black rounded-br-md transition border-b-2 border-transparent focus:outline-none focus:border-b-2 focus:border-blue-300"
                  />
                </label>
              </div>
              <input
                type="submit"
                className="px-4 py-2 bg-xlBgCard rounded cursor-pointer transition hover:bg-mdBgCard"
                value="Entrar"
              />
            </form>
            <button className="px-4 py-2 bg-xlBgCard rounded my-4 cursor-pointer transition hover:bg-mdBgCard">
              Criar Conta
            </button>
          </div>
        </section>
      </main>
      <footer className="flex bg-zinc-800 h-44 w-full">
        <Image src={Logo} alt="Logo" className="mx-28" />
      </footer>
    </div>
  )
}
