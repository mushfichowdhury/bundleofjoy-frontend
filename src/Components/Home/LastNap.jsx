import React from 'react'

export default function LastNap(props) {
    let dateCreated = new Date(Date.parse(props.naps[props.naps.length-1].created_at))
    let dateNow = Date.now()
    let difference = new Date(dateNow - dateCreated).getMinutes()
    return (
        <div>
            <h1>Last Nap</h1>
            <h3>{difference} minutes ago</h3>
            <p>Napped for: <strong>{props.naps[props.naps.length-1].duration}</strong></p>
        </div>
    )
}
