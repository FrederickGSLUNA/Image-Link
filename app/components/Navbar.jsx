import Image from 'next/image'
import Link from 'next/link'

export default function Navbar () {
  return (
    <header className='sticky py-3 px-10 backdrop-blur-2xl'>
      <nav className='flex flex-row justify-center items-center'>
        <Link href='/' className='flex flex-row items-center gap-1'>
          <Image className='w-7' width={40} height={40} src='/logo.svg' alt='logo image link' />
          <p className='text-2xl font-semibold'>Image<span className='text-gray-400'>Link</span></p>
        </Link>
      </nav>
    </header>
  )
}
