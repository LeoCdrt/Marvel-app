import { useLoaderData } from "react-router";

function DetailCharacter(){
    const id = useLoaderData();
    return(
    
    <>
      <h1>{id.name}</h1>
      <img src = {`${id.thumbnail.path}/standard_large.${id.thumbnail.extension}`}/>
      <p>{id.description}</p>
    </>
    )
  }
      
  export default DetailCharacter;