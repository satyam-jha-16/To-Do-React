import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => {e.preventDefault()}}>
        <label htmlFor="search" className='hidden'>Search</label>
        <input 
            className='w-full flex flex-start mt-0.5 py-3 pl-2 border'
            type="text" 
            id='search' 
            role='searchbox' 
            placeholder='Search Item'
            value={search}
            onChange={(e) => {
                setSearch(e.target.value)
            }}
        />

    </form>
  )
}

export default SearchItem