import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Octave Systems | Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        
        <Image src="/logo.svg" height="auto" width="auto"/>
        <h1 className={styles.h1}>
          Octave Systems
        </h1>

        <p className={styles.description}>
          Coming Soon
        </p>

      </main>

    </div>
  )
}
