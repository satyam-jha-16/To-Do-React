import React from 'react'
import ItemList from './ItemList'

const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <main>
      {items.length ? (
        <ItemList
          items = {items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p className='mt-8'>This list sure looks empty</p>
      )}
    </main>
  )



}

export default Content