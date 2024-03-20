import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";


const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImages = async()=>{
        const newImages = await getGifs(category);
        setimages(newImages);
        setisLoading(false);
      
    }
  
  
   useEffect(() => {
        getImages();
   }, []) //se dispara solo una vez cuando se construye el componente
  return {
    images, //emascript 6 , si la variable tiene el mismo nombre de lo q vamos a mandar, ponemos el nombre directamente images: images,
    isLoading
  }
   
  
}

export default useFetchGifs