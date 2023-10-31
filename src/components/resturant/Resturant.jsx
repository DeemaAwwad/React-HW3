import React, { useState } from 'react';

export default function Restaurant() {
  const [recipes, setRecipes] = useState([]);
  
  const getPizza = async () => {
    let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    let data = await response.json();
    setRecipes(data.recipes);
  }

  const getCarrot = async () => {
    let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=carrot");
    let data = await response.json();
    setRecipes(data.recipes);
  }

  const getOnion = async () => {
    let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
    let data = await response.json();
    setRecipes(data.recipes);
  }

  return (
    <div className='row mt-4'>
      <div className='btns d-flex justify-content-around'>
      <button onClick={getPizza}>Pizza </button>
      <button onClick={getCarrot}>Carrot</button>
      <button onClick={getOnion}>Onion</button>
      </div>
      {
           recipes.map((ele)=>{
                return (
                    <div className='col-md-4' key={ele.recipe_id}>
                       <h2>{ele.title}</h2>
                       <img src={ele.image_url} className='w-50'/>
                    </div>
                )
            })
        }

    </div>
  );
}