import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { obtenerGifs } from '../helpers/obtenerGifs';
import { VistaGiftImagen } from './VistaGiftImagen';

export const VistaGift = ({categoria}) => {

    //CUSTOM HOOK, SE CREA PARA HACER LA PETICIÓN HTTP EN BUSCA DE LOS GIFS SEGÚN LA CATEGORIA
    const {data:imagenes,cargando} = useFetchGifs(categoria);

    return (

        <li className='column is-12 animate__animated animate__fadeIn'>
            <h3 className="mb-3"><b>{categoria}</b></h3>
            { cargando && <progress className="progress is-small is-primary" max="100">15%</progress>}
            { imagenes.length === 0 && !cargando && <div className="notification is-primary">No existen imagenes para esta categoría</div>
            }
             <div className="columns is-mobile is-multiline">
                {
                    imagenes.map( imagen => {
                        return <VistaGiftImagen imagen={imagen} key={imagen.id}/>
                    })
                }
            </div>
        </li>
    )

}
