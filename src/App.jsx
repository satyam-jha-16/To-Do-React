import Header from './Header';
import { useState} from 'react'; 
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('toDoList')));
  const [search, setSearch] = useState('')
  const [newItem, setNewItems] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('toDoList', JSON.stringify(newItems));
  }

  const addItems = (item) =>{ 
    const id = items.length ? (items[items.length - 1].id + 1) : 1 ;
    const myNewItem = {id, checked : false, item};
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems);
  }

  const handleCheck = (id) => {
    // console.log(`key : ${id}`);
    const listItems = items.map(item =>item.id === id ? {...item, checked: !item.checked } : item)
    setAndSaveItems(listItems);
  }

  const handleDelete = (id) => {
    // console.log(`key : ${id}`);
    const listItems = items.filter(item => {
      return (item.id !== id);
    })
    setAndSaveItems(listItems)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!newItem)return;
    //setting new items to the list
    setNewItems('')
    addItems(newItem)

  }

  return (
    <div className='App text-center'>
      <Header/>
      
      <AddItem
      newItem = {newItem}
      setNewItems = {setNewItems}
      handleSubmit = {handleSubmit}
      />
      <SearchItem
      search =  {search}
      setSearch = {setSearch}
      />
      <Content
      items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer
      length={items.length}
      />
    </div>
  );
}

export default App;
