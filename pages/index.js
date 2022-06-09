import { useSession } from "next-auth/react"
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login';

export default function Home() {
  const { data: session } = useSession()
  if (!session) return <Login />
  return (
    <div>
      <Head>
        <title>Facebook Next App</title>
      </Head>

      <Header />

      <main>
        { /* sidebar */}
        { /* feed */}
        { /* widget */}

      </main>
    </div>
  )
}

