import React, { useEffect } from 'react'
import foodToFork from '../apis/foodToFork';

const App = () => {
  useEffect(() => {
    const fetchApi = async () => {
      const { data: { receipes } } = await foodToFork.get('/search').catch(err => console.log(err));
      console.log(receipes);
    }
    fetchApi();
  }, [])

  return (
    <div>
      hi
    </div>
  )
}

export default App
