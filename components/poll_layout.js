import React, { useState, useEffect } from "react"
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PollLayout(){
    return (
        <div className="poll">
            <h1>Which option do you like the best?</h1>
            <ul className={voted ? "results" : "options"}>
          {pollOptions}
            </ul>
            <p>Total Votes: {totalVotes}</p>
      </div>
    )




}
