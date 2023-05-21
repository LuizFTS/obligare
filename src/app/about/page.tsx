import Image from 'next/image'
import LgLogo from '../../img/lgLogo.svg'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function about() {
  return (
    <div className="flex flex-col flex-1 min-h-screen items-center font-sans">
      <Header />
      <main className="flex flex-1 items-center justify-center w-full mx-28">
        <section className="w-1/2 ml-28 space-y-16">
          <Image src={LgLogo} alt="LgLogo" />
        </section>
        <section className="flex justify-end w-1/2 mr-28">
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
      </main>
      <Footer />
    </div>
  )
}
