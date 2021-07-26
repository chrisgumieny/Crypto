import React from "react";
import { Card } from "react-bootstrap" // npm i bootstrap react-bootstrap

export const ThirdPartyEducation = () => {

    function retrieve(e){
        e.preventDefault()

        const searchFrom = document.querySelector('search');
        const input = document.querySelector('.input');
        const newsList = document.querySelector('.news-list');

        if (input.value === ''){
            alert('Input field is empty.')
            return
        }
      
        newsList.innerHTML = ''
      
        const apiKey = ''
        
        let topic = input.value
        let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
      
        fetch(url).then((res)=>{
          return res.json()
          }).then((data)=>{
              console.log(data)
      
              data.articles.forEach(article =>{
      
                let li = document.createElement('li');
                let a = document.createElement('a');
      
                a.setAttribute('href', article.url);
                a.setAttribute('target', '_blank');
      
                a.textContent = article.title;
      
                li.appendChild(a);
      
                newsList.appendChild(li);
              })
          })
          .catch((error)=>{
      
          })
      
          console.log(topic)
          input.innerHTML = ''
      }

      return (
        <Card>
            <Card.Header> Third Party Education</Card.Header>
            <Card.Body>

                <form onSubmit={(e)=>retrieve(e)} className="search" action ="">
                    <input placeholder= "Search Cryptos"className ="input" type="text" /><br/>
                    <input type="submit"/> 
                </form>

                <div className="container">
                    <ul className="news-list"></ul>
                </div>

            </Card.Body>
        </Card>
      )
    
}
