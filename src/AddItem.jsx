import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItems, setNewItems, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm flex ml-2 ' onSubmit={(e) => {handleSubmit(e)}}>
        <label htmlFor="addItem" className='hidden' >Add Item</label>
        <input 
        autoFocus
        ref={inputRef}
        className='w-full flex flex-start mt-0.5 py-3 pl-2 border '
        id='addItem'
        type="text" 
        placeholder='Add Item'
        required
        value={newItems}
        onChange={(e) => {
          setNewItems(e.target.value)
        }}
        />
        <button
        className='w-6 px-5 mr-6'
        type='submit'
        aria-label='add-item'
        onClick={() => {
          inputRef.current.focus()
        }}
        >
            <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem