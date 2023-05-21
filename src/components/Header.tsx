import Link from 'next/link'

export function Header() {
  return (
    <header className="flex flex-1 justify-end w-full h-4 font-sans">
      <ul className="flex space-x-8 mr-4">
        <Link href="/">
          <li className="transition hover:bg-mdBgCard hover:text-white cursor-pointer p-4 rounded-b-md">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className='className="transition hover:bg-mdBgCard hover:text-white cursor-pointer p-4 rounded-b-md'>
            Sobre nós
          </li>
        </Link>
        <Link href="/product">
          <li className='className="transition hover:bg-mdBgCard hover:text-white cursor-pointer p-4 rounded-b-md'>
            Como funciona?
          </li>
        </Link>
        <Link href="/contact">
          <li className='className="transition hover:bg-mdBgCard hover:text-white cursor-pointer p-4 rounded-b-md'>
            Contato
          </li>
        </Link>
        <Link href="/login">
          <li className='className="transition hover:bg-mdBgCard hover:text-white cursor-pointer p-4 rounded-b-md'>
            Entrar
          </li>
        </Link>
      </ul>
    </header>
  )
}
