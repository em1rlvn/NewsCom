import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import NewsCard from "./NewsCard"

const API_KEY="453345d76903e5ddd44b5b3512d043a7"

export default function Category(){

  const {category} = useParams()

  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{

    async function load(){

      setLoading(true)

      try{

        const res = await fetch(
          `https://gnews.io/api/v4/top-headlines?topic=${category}&lang=ru&max=12&apikey=${API_KEY}`
        )

        const data = await res.json()

        setArticles(data.articles || [])

      }catch(err){

        console.log(err)

      }finally{

        setLoading(false)

      }

    }

    load()

  },[category])

  if(loading) return <p>Загрузка...</p>

  if(!articles.length) return <p>Новостей не найдено</p>

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