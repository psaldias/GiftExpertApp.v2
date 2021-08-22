
//FUNCIÓN PARA OBTENER LOS GIFS DE LA API DE GIPHY
export const obtenerGifs = async (categoria) => {
    const apiKey = 'GbaldlLEpcmkpLhMNOnCxBDSFoXe03NG';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${ encodeURI(categoria) }&limit=10`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map( img => {
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_large.url,
        }
    });
    return gifs;
}