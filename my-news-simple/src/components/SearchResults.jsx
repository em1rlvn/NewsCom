import { useEffect,useState } from "react"
import NewsCard from "./NewsCard"

const API_KEY="453345d76903e5ddd44b5b3512d043a7"

export default function SearchResults({query}){

  const [articles,setArticles]=useState([])

  useEffect(()=>{

    if(!query) return

    async function load(){

      const res = await fetch(
        `https://gnews.io/api/v4/search?q=${query}&lang=ru&max=12&apikey=${API_KEY}`
      )

      const data = await res.json()

      setArticles(data.articles || [])

    }

    load()

  },[query])

  if(!articles.length) return <p>Ничего не найдено</p>

  return(

    <div className="news-list">

      {articles.map((a,i)=>(
        <NewsCard
          key={a.url}
          article={a}
          hero={i===0}
        />
      ))}

    </div>

  )

}