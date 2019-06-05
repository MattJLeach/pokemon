import React from 'react'
import { Link } from 'react-router-dom';
import { Image } from '../ui';
import './ListItem.css';

export default function ListItem({ pokemon: { number, name, image } }) {
  return (
    <div className="list-item col-sm-3">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>#{number} - {name}</h3>
        </div>
        <div className="panel-body">
          <Image src={image} alt={name} type="thumb" />
          <Link to={name} className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  )
}
