import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [items, setItems] = useState()
  useEffect(() => {
    const getProducts = () => {
      axios.get('https://fakestoreapi.com/products')
      .then(response => setItems(response.data))
      .catch(error => console.log(error))
    }

    getProducts()
  }, [])

  return (
    <div className="products">
      {
        items && items.map(x => {
          return(
            <div className='item'>
              <img src={x.image}/>
              <span className={x.price > 100 ? 'premium' : 'classic'}>
                {x.price > 100 ? 'Premium' : 'Classic'}
              </span>
              <h5>{x.title}</h5>
              <p>{x.price} ₼</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
