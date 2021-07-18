import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState,useEffect } from 'react';
import React from 'react';
import './App.css';
import {FetchImage,SearchedImage} from './Components/Api';
import Image from './Components/Image';
function App() 
{
 const [query,setQuery] = useState()
 const [Searchvalue,setSearch] = useState()
 const data= FetchImage()
//  console.log(SearchedImage(query))

 const Search=()=>{
  setSearch(query)
 }
 const searchData = SearchedImage(Searchvalue)
 console.log(searchData)
//  console.log(query)
  return (<div className="App"> 
    <div>
      <input type="text" onChange={(event) =>setQuery(event.target.value)}/>
      <button onClick={Search}>Search</button>
    </div>
    <div className="section">
    <div className="container">
    {Searchvalue ? searchData.map((imag,key) => (
      <Image  src={imag.thumbnailUrl} key={key} title={imag.title} />
    )   ):
    data.map((imag,key) => (
      <Image  src={imag.thumbnailUrl} key={key} title={imag.title} />
    )   )}
    </div>
    </div>
    </div>);
}

export default App;
