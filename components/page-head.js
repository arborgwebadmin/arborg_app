import Head from 'next/head'

const PageHead = ({ title }) => {
	return(
		<Head>
			<title>{ title }</title>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"></link>
      		<link rel="icon" href="/favicon.ico" />
		</Head>
	)
}

export default PageHead