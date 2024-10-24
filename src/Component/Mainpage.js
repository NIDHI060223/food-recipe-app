import React, { useState } from 'react'
import Mealcards from './Mealcards';

function Mainpage() {

    const [data, setData] = useState();
    const [search, setSearch] = useState('');
    const [msg, setMsg] = useState();
    
    const handleInput = (e) =>{
       setSearch(e.target.value);
    }

    const myFun = async() =>{
        if(search === ''){
          setMsg('Please Enter Something');
        }else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
            //console.log(jsonData.meals);
            setData(jsonData.meals);
            setMsg('');
        }
       
    }
    //console.log(data);
  return (
    <div>
        <h1 className='head'>FOOD RECIPE APP</h1>
      <div className='container'>
        <div className='searchBar'>
            <input type='text' placeholder='Enter Dishes' onChange={handleInput}/>
            <button onClick={myFun}>Search</button>
        </div>
        <h3>{msg}</h3>
        <div>
            <Mealcards detail = {data}/>
        </div>
      </div>
    </div>
  )
}

export default Mainpage
