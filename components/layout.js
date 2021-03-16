import React from "react"

const MyLayout = ({ children }) => {
  return(
    <React.Fragment>
      <div class="layout">{children}</div>
    </React.Fragment>
  )
}

export default function Layout({ children }) {
  return <>{children}</>
}

