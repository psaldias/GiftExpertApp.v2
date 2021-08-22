import { useState } from "react";
import { AgregarCategoria } from "./components/AgregarCategoria";
import { VistaGift } from "./components/VistaGift";

const GiftExpertApp  = () => {
    // const categorias = ['Dragon Ball','One Punch','Samurai x'];

    //CREAR HOOK PARA ALMACENAR CATEGORIAS Y PODER ACTUALIZARLAS
    const [categorias, setCategoria] = useState(['Dragon Ball']);



    return (
        <>
            <h2 className="has-text-centered">GiftExpertApp</h2>
            <hr />
            <div className="block">
                <AgregarCategoria setCategoria={setCategoria}/>
            </div>
            <ul className='columns is-mobile is-multiline'>
                {
                    categorias.map( categoria => {
                        return <VistaGift categoria={categoria} key={categoria}/>
                    })
                }

            </ul>
        </>
    );
};
export default GiftExpertApp;