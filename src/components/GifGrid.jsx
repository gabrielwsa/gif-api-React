import { GifElement } from "./GifElement";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>

        {
            isLoading && (<h2>Carregando...</h2>)
        }

        <div className="GifGrid">
          {
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
