import React from 'react';
import "./Card.css";
const Card = (props) => {
  return (
    <div className="cont-card">
 <div className="con-card"   >
  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.data.id}.svg`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-uppercase">{props.data.name}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{`Health:- ${props.data.stats[0].base_stat}`}</li>
    <li className="list-group-item">{`id:-${props.data.id}`}</li>
    <li className="list-group-item">{`height:-${props.data.height}`}</li>
  </ul>
  <div className="card-bod">
    <a href="#" className="card-link">Details</a>
    <a href="#" className="card-link">Adopt</a>
  </div>
</div>
    </div>
    
  )
}

export default Card;