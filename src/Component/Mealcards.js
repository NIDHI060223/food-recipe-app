import React from 'react'
import { NavLink } from 'react-router-dom';

function Mealcards({detail}) {
    console.log(detail);
  return (
    <div className='meals'>
       {!detail ? "Data Not Found" : detail.map((curItem, index) =>{
        return(
           <div className='mealImg' key={index}>
            <img src={curItem.strMealThumb} alt='image1'/>
            <p>{curItem.strMeal}</p>
            <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button></NavLink>
            
           </div>
        )
       })}
    </div>
  )
}

export default Mealcards
