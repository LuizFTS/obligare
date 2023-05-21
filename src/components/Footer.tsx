import Image from 'next/image'
import Logo from '../img/logo.svg'

export function Footer() {
  return (
    <footer className="flex bg-zinc-800 h-44 w-full">
      <Image src={Logo} alt="Logo" className="mx-28" />
    </footer>
  )
}
