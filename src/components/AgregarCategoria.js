import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AgregarCategoria = ({setCategoria}) => {
    //HOOK DEL INPUT
    const [valorInput, setValorInput] = useState('');

    //FUNCION PARA ACTUALIZAR VALOR DEL INPUT (PODRIA IR DIRECTO EN EL ONCHANGE)
    const cambiarValorInput = (e) =>{
        setValorInput(e.target.value);
    }

    //FUNCION MANEJAR EL SUBMIT
    const manejarSubmit = (e) =>{
        e.preventDefault();
        if(valorInput.trim().length > 2){
            //ACTUALIZAR EL HOOK CON EL LISTADO DE CATEGORIAS
            setCategoria(categorias => {
                //VALIDA QUE LA NUEVA CATEGORÍA NO ESTÉ INGRESADA
                const encontrarCategoria = categorias.find(categoria => { return categoria === valorInput});
                if(!encontrarCategoria)
                    return [valorInput,...categorias]
                else
                    return [...categorias]
            });
            //ACTUALIZO VALOR DEL INPUT
            setValorInput('');
        }
    }

    return (
        <form onSubmit={manejarSubmit} autoComplete="off">
            <input
                type="text"
                className="input"
                name="nombre-categoria"
                placeholder="Nombre Categoria"
                value={valorInput}
                onChange={cambiarValorInput}
            />
            <button
                type="submit"
                className="button is-primary mt-2 is-fullwidth">
                    Agregar Categoría
            </button>
        </form>
    )
}

//VALIDAR QUE LA PROPIEDAD SEA UNA FUNCIÓN
AgregarCategoria.propTypes = {
    setCategoria: PropTypes.func
}