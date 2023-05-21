import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Laptop1 from '../../img/preview-laptop.png'
import Laptop2 from '../../img/preview-laptop2.png'
import Image from 'next/image'

export default function Product() {
  return (
    <main className="flex flex-1 items-center flex-col min-h-screen font-sans ">
      <Header />
      <div className="flex flex-1 w-full items-start justify-center px-28 text-white">
        <section className="flex flex-col items-center mr-4 space-y-12">
          <div className="w-[560px] bg-card-dark rounded-md px-4 pt-4 pb-8 relative">
            <span className="absolute flex items-center justify-center bg-card-light rounded-full w-8 h-8 -top-3 -left-3">
              <p>1</p>
            </span>
            <h2 className="mb-2 font-bold text-2xl">Adicionando cards</h2>
            <p>
              No nosso site, você pode adicionar cards personalizados para cada
              uma das suas obrigações fiscais. Esses cards contêm informações
              essenciais, como o título da obrigação, responsável, nome da
              empresa e a data de vencimento. Essa funcionalidade permite que
              você tenha um panorama completo de todas as suas obrigações em um
              só lugar.
            </p>
          </div>
          <Image src={Laptop1} alt="laptop" className="w-[400px]" />

          <div className="w-[560px] bg-card-dark rounded-md px-4 pt-4 pb-8 relative">
            <span className="absolute flex items-center justify-center bg-card-light rounded-full w-8 h-8 -top-3 -left-3">
              <p>3</p>
            </span>
            <h2 className="mb-2 font-bold text-2xl">
              Privilégios de administrador
            </h2>
            <p>
              Para facilitar ainda mais o gerenciamento fiscal, os usuários com
              perfil de &quot;Administrador&quot; têm acesso a uma função
              adicional. Eles podem visualizar todos os cards relacionados à sua
              empresa, permitindo um controle centralizado e eficiente das
              obrigações fiscais. Essa funcionalidade é especialmente útil para
              empresas com várias equipes ou departamentos responsáveis pelo
              cumprimento das obrigações fiscais.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center ml-4 space-y-12">
          <div className="w-[560px] bg-card-dark rounded-md px-4 pt-4 pb-8 relative mt-[230px]">
            <span className="absolute flex items-center justify-center bg-card-light rounded-full w-8 h-8 -top-3 -left-3">
              <p>2</p>
            </span>
            <h2 className="mb-2 font-bold text-2xl">Gerenciamento eficiente</h2>
            <p>
              Cada usuário tem acesso ao seu próprio perfil, onde poderá
              visualizar informações valiosas sobre seus compromissos fiscais.
              Nós fornecemos uma visão geral clara de quantos cards estão
              vencidos, quantos vencem no dia atual, quantos estão próximos de
              vencer e quantos já foram concluídos. Essas informações são
              organizadas em quatro colunas distintas: &quot;A vencer&quot;,
              &quot;Hoje&quot;, &quot;Atrasado&quot; e &quot;Concluído&quot;.
            </p>
          </div>
          <Image src={Laptop2} alt="laptop" className="w-[400px]" />
        </section>
      </div>
      <div className="w-[560px] bg-card-dark rounded-md px-4 pt-4 pb-8 relative my-16 text-white">
        <span className="absolute flex items-center justify-center bg-card-light rounded-full w-8 h-8 -top-3 -left-3">
          <p>4</p>
        </span>
        <h2 className="mb-2 font-bold text-2xl">
          Excelência no gerenciamento fiscal
        </h2>
        <p>
          Nosso objetivo é oferecer a você uma solução completa para o
          gerenciamento fiscal, com excelência em todas as etapas do processo.
          Nossa plataforma intuitiva e de fácil uso permite que você mantenha o
          controle total das suas obrigações fiscais, evitando atrasos, multas e
          problemas com o fisco. Com um sistema organizado e informações claras,
          você terá mais tranquilidade e segurança no cumprimento de todas as
          suas responsabilidades fiscais.
        </p>
      </div>
      <Footer />
    </main>
  )
}
