import React from "react"
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function LinkCard({ link, title, description }) {
  return (
    <a href={link} className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}