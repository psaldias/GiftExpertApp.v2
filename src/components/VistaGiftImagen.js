import React from 'react'

export const VistaGiftImagen = ({imagen}) => {
    return (
        <div className="column is-2-fullhd is-4-desktop is-6-touch animate__animated animate__fadeIn" >
            <img src={imagen.url} alt={imagen.title}/>
            <p>{imagen.title}</p>
        </div>
    )
}
