import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifElement } from "./GifElement";
export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);


  useEffect(() => {
    getGifs(category).then( newImages => setImages(newImages)); 
  }, []);

  return (
    <>
        <h3>{category}</h3>

        <div className="GifGrid">
          {
            // images.map(image => (
            //   <li key={image.id}>{image.title}</li>
            // ))
            //! className="" assim tem que ser para o css
            // images.map(({id, title, url}) => (
            //   <GifElement
            //     key = {id}
            //     title = {title}
            //     url = {url}
            //   />
            // ))
            //! EM CASO DQ QUE TEMOS MUITAS PROPRIEDADES PODEMOS UAR O OPREADOR DE SPREAD
            //! ASSIM NAO TENHO QUE ESPECIFICAR CADA PROPRIEDADE E PASA CADA UMA COM SEU RESPECTIVO VALOR E NOME
            images.map((image) => (
              <GifElement
                key = {image.id}
                {...image}
              />
            ))
          }
        </div>
    </>
  );
};
