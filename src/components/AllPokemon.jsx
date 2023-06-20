import React, { useEffect, useState } from 'react'
import Card from './Card';
import axios from 'axios';
import "./Allpokemon.css"
const AllPokemon = () => {
    const [data,setData]=useState([]);
    const pokfun = async () => {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        getPokemon(res.data.results);
      };
      const getPokemon = async (res) => {
        res.forEach(async (item) => {
          const result = await axios.get(item.url);
          setData((state) => [...state, result.data]);
        });
    }
    useEffect( ()=>{
         pokfun();
    },[])
  return (
    <div className='All-pokemon text-center text-capitalize'>
       <header>
         <h1>Pokemons</h1>  
       </header> 
       <main className='d-flex flex-wrap justify-content-center'>
        {
            data.map((item)=>{
                return <Card  data={item}/>
            })
        }
       </main>
    </div>
  )
}

export default AllPokemon;