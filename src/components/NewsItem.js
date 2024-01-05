import React from 'react'

const NewsItem =(props)=> {
    let {documentation,title,ImageUrl,NewsUrl}=props; 
    return (
      <div>
        <div className="card" >
          <img src={ImageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}<span class="badge text-bg-secondary mx-1"> {props.source}</span></h5>
            <p className="card-text">{documentation}</p>
            <p className="card-text"><small className="text-body-secondary">Updated by {props.author?props.author:"Unknown"} on {new Date(props.publishedAt).toGMTString()} </small></p>
            <a href={NewsUrl} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
