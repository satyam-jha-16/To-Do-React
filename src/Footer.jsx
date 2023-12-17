import React from 'react'

const Footer = ({length}) => {
    const today = new Date();

  return (
    <footer className='bg-blue-400 bottom-0 w-full fixed ' >
        <p>{length} List {(length ==1 )? "item" : "items"}</p>
    </footer>
  )
}

export default Footer;