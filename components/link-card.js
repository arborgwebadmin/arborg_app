import React from "react"
import Link from 'next/link'

const LinkCard = ({ link, title, description }) => {
  return(
    <Link href={ link }>
      <div className="card">
          <div className="card-body">
              <h5 className="card-title">{ title }</h5>
              <p className="card-text">{ description }</p>
          </div>
      </div>
    </Link>
  )
}

export default LinkCard;