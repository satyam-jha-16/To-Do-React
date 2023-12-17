import React from 'react'
import {FaTrashAlt } from 'react-icons/fa';
import LineItem from './LineItem';

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <div>
        <ul>
          {items.map((item) => {
            return (
              <LineItem
              key={item.id}
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              />
            )

          })}
        </ul>
    </div>
  )
}

export default ItemList