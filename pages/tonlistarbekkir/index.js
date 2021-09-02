import React from 'react';
import styles from '../../styles/Music.module.css';
import PageHead from '../../components/page-head';
import Link from 'next/link'

class Bekkir extends React.Component {

  render() {

    return (
      <div className={ styles.container }>
				<div className={ styles.body }>
					<PageHead title="Tónlistarbekkir"></PageHead>
					<img src="/thumbnail_tonlistarbekkir.png" className={styles.logo} alt="logo tonlistarbekkir"></img>
					<div className={styles.text_box}>
						<p className={styles.text_align_justify}>Tónlistarbekkir er verkefni sem þróað er af Ingu Margrét Jónsdóttir og er hrundið af stað til að gera tónlistarsögu Árborgar sýnilega og aðgengilega fyrir almenning. Árborg hefur í gegnum tíðina gefið af sér hæfileikaríkt tónlistarfólk sem hefur látið af sér kveða í íslensku tónlistarlífi. Tónlistarbekkirnir vekja athygli á þessu listafólki og tónlistararfi Árborgar á skemmtilegan og heilsueflandi hátt. Hægt er að finna Tónlistarbekkina á gönguleiðakortinu hér fyrir neðan. </p>
						<p>Fáið ykkur göngutúr, hlaupið eða hjólið á milli og njótið góðrar tónlistar úr ykkar heimabyggð.</p>
						<br></br>
						<p className={ styles.text_footnote }>Hönnun & Þróun: Inga Margrét Jónsdóttir, viðskiptafræðingur og menningarstjóri.</p>
						<p className={ styles.text_footnote }>Grafísk hönnun á myndum: Þorgerður Helgadóttir, grafískur hönnuður.</p>
					</div>
					<div className={styles.divider}></div>
					<div className={styles.text_box}>
						<p className={styles.text_en}>Tónlistarbekkir, or Music benches is a project developed by Inga Margrét Jónsdóttir. The purpose of the project is to make the music history of Árborg visible and accessible to the public. Over the years Árborg has produced talented musicians that have become a big part of the music scene in Iceland. Music benches celebrities these artists and Árborg´s musical heritage in a fun and health promoting way. You can find the benches on the hiking map below.</p>
						<p className={styles.text_en}>Take a walk, run or bike in between the benches and enjoy good music from your hometown.</p>
						<br></br>
						<p className={ styles.text_footnote_en }>Design & Development: Inga Margrét Jónsdóttir, business and cultural manager.</p>
						<p className={styles.text_footnote_en}>Graphic design of images: Þorgerður Helgadóttir, graphic designer.</p>
					</div>
				</div>
				<p className={styles.map_header}>Selfoss</p>
            <div className={styles.map_box}>
                <iframe src="https://www.google.com/maps/d/embed?mid=1KMRDIleU_vBjMVfp6NYBRMZ00DBwaoBR&hl=en&ll=63.93752971960021%2C-21.00237765046096&z=15" width="600" height="450" loading="lazy" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className={styles.maps_header}>
                <p className={styles.map_header}>Eyrarbakki</p>
                <p className={styles.map_header}>Stokkseyri</p>
            </div>
            <div className={styles.maps_box}>
                <iframe src="https://www.google.com/maps/d/embed?mid=1KMRDIleU_vBjMVfp6NYBRMZ00DBwaoBR&hl=eni&ll=63.86375810125256%2C-21.15314480978699&z=16" width="640" height="240" frameBorder="0" allowFullScreen></iframe>
                <iframe src="https://www.google.com/maps/d/embed?mid=1KMRDIleU_vBjMVfp6NYBRMZ00DBwaoBR&hl=en&ll=63.836405490379875%2C-21.0661848888855&z=16" width="640" height="240" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
			
		);
	}

}

export default Bekkir;