import { useEffect, useState } from "react"
import { obtenerGifs } from "../helpers/obtenerGifs";

export const useFetchGifs = (categoria) => {
    //HOOK PARA GUARDAR LA DATA Y UN ESTADO DE CARGANDO
    const [state, setState] = useState({
        data:[],
        cargando:true,
    });

    //USAR EFECTO PARA SOLO CARGAR UNA VEZ O CUANDO CAMBIE LA CATEGORÍA
    useEffect( ()=>{
        //OBTENER LOS GIFS SEGÚN LA CATEGORIA
        obtenerGifs(categoria)
            .then(gifs => {
                //ACTUALIZAR EL HOOK CON LA DATA
                setState({
                    data:gifs,
                    cargando:false,
                })
            });
    }, [categoria]);



    return state;
}
