import { useEffect } from "react";
import { getGifs } from "../helpers/getGif";

const GifGrid = ({category}) => {


 useEffect(() => {
    getGifs(category);
 }, []) //se dispara solo una vez cuando se construye el componente
 
        
   
    


  return (
    <>
      
      <h3>{category}</h3>
    </>
  );
};

export default GifGrid;
