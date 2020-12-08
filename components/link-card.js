import React from "react"
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const LinkCard = ({ link, title, description }) => {
  return(
    <Link href={ link }>
      <div className="card" className={styles.card}>
          <div className="card-body">
              <h5 className="card-title">{ title } &rarr;</h5>
              <p className="card-text">{ description }</p>
          </div>
      </div>
    </Link>
  )
}

export default LinkCard;