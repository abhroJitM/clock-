import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="p-12 bg-black text-white w-full h-screen justify-center flex">
      <h1 className="text-3xl">
        A Todo Application
      </h1>
    </div>
  )
}
