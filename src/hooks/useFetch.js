import { useEffect, useState } from "react"


export const useFetch = (api , queryTerm="") => {
    const [data,setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(()=>{
        async function fetMovies(){
          const response = await fetch(url);
          const data = await response.json();
          setData(data.results)
        }
        fetMovies();
      },[url])
  return {data}
}
