import React from 'react'
const Spotify = ({ link }) => {
    return(
        <iframe src={ link } width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    )
}

export default Spotify;