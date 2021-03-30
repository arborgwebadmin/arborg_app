import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import Layout from '/components/layout'
import Link from 'next/link'
import MyLayout from "../components/layout"
import LinkCard from "../components/link-card"

export default function Home() {
  return (
    <>
      <Head>
        <title>Reiknivél Árborgar</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container-lg text-center">
          <a href="https://www.arborg.is/" target="_blank" rel="noopener noreferrer" className={styles.logo}>
            <img src="/arborglogo.svg" alt="Merki Árborgar" />
          </a>
          <h1 className={styles.title}>Reiknivél Árborgar</h1>
        </div>
        <div className="ar-links" className={styles.grid}>
          <LinkCard link="/calc/leikskolagjold" title="Leikskólagjöld" description="Reiknaðu leikskólagjöldin"></LinkCard>
          <LinkCard link="/calc/lodagjold" title="Gatnagerðargjöld" description="Reiknaðu áætluð gatnagerðargjöld"></LinkCard>
          <LinkCard link="/calc/fasteignagjold" title="Fasteignagjöld" description="Reiknaðu fasteignagjöldin"></LinkCard>
          <LinkCard link="/calc/fristund" title="Frístundaheimili" description="Reiknaðu gjöldin við frístundaheimili"></LinkCard>
          <LinkCard link="/calc/blandgjold" title="Mismunandi skólastig" description="Reiknaðu öll gjöldin varðandi vistun barna á mismunandi stigum"></LinkCard>
          <LinkCard link="/polls/poll" title="Kosning" description="Ýmsar kosningar"></LinkCard>
        </div>

      </main>

      <footer className={styles.footer}>
      </footer>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossOrigin="anonymous"></script>
    </>
  )
}
