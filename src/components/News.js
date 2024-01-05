import React from 'react'
import './News.css';
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState ,useEffect} from 'react'

const News=(props)=> {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(1)
  const [totalResults,settotalResults]=useState(0)
  const updatenews=async()=>{
    props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3900c185d1a54ed1a4ec39bdde7a40dc&page=${page}&pagesize=9`
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let pdata = await data.json();
    props.setProgress(70)
    setArticles(pdata.articles)
    setLoading(false)
    props.setProgress(100)
  }
  useEffect(()=>{
    updatenews();
   },[])

  const fetchMoreData = async()=>{
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3900c185d1a54ed1a4ec39bdde7a40dc&page=${page}&pagesize=9`
    let data = await fetch(url);
    let pdata = await data.json();
    setArticles(articles.concat(pdata.articles))
    settotalResults(pdata.totalResults)
  };
  return ( 
      <div className = "conatainer my-5" >
       <h1 className = 'text-center alha' > Top headlines </h1> 
        {loading && < Loading / >}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Loading/>}
        > 
        <div className = "row mx-4" > 
          {articles.map((element) => {
            return <div className = 'col-md-4 my-3' key = {element.url}>
                <NewsItem title ={element.title} documentation ={element.description} ImageUrl = {element.urlToImage} NewsUrl = {element.url} author = {element.author} publishedAt = {element.publishedAt} source = {element.source.name}/> 
            </div>
            })} 
        </div> 
        </InfiniteScroll>
        </div>
      )
  }
  export default News