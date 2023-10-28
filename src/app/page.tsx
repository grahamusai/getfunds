import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
       <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
    </main>
    </div>
   
  )
}
