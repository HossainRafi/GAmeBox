import { useEffect } from "react"
import GlobalApi from "../services/GlobalApi";


function GenreList() {
  useEffect(()=>{
    getGenreList();
  },[])
  const getGenreList=()=>{
    GlobalApi.getGenreList.then((resp))=>{
      console.log(resp);
    })
  }
  return (
    <div>
      
    </div>
  )
}

export default GenreList
