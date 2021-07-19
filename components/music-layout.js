import React from 'react'
import styles from '../styles/Music.module.css';
import PageHead from '../components/page-head';
import Spotify from '../components/spotify'

const MusicLayout = ({ image, title, text, link, text_en}) => {
    return(
        <div className={ styles.container }>
            <div className={ styles.body }>
                <PageHead title={title}></PageHead>
                <img src={ image } className={styles.main_image} alt={'mynd af '+ title }></img>
            </div>
            <div className={styles.player_box}>
                <Spotify link={ link }></Spotify>
            </div>
            <div className={styles.text_box }>
                {text.map((v, i) => {
                    return <p className={ styles.text_align_justify } key={ i }>{ v }</p>
                })}
            </div>
            <div className={ styles.divider }></div>
            <div className={styles.text_box}>
                {text_en.map((v, i) => {
                    return <p className={ styles.text_en } key={ i }>{ v }</p>
                })}
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
    )
}

export default MusicLayout