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
            <div className={styles.map_box}>
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
            <div className={styles.map_box}>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1v7dD9bQ4EVH6AAW9h8p7ZcZtC7XCeWmi" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default MusicLayout