import './App.css';
import Gif from './components/Gif';
import Form from './components/Form';
import { useEffect, useState } from 'react';

function App() {
  const [gifUrl, setGifURL] = useState('');

  const getGif = (url) => {
    fetch(url)
      .then(response => {
        console.log(response)
        return response.json();
      }).then(respJson => {
        console.log(respJson)
        setGifURL(respJson.data[0].images.fixed_height.url);
      })
  }
  // Set a random gif on load
  useEffect( () => {
    getGif('https://api.giphy.com/v1/gifs/search?api_key=KMspxCJe2Zr8FiEG3H7WqPVaph0PPlst&q=random&limit=1')
  }, []);
  
  const searchNewGif = (search) => {
    getGif(`https://api.giphy.com/v1/gifs/search?api_key=KMspxCJe2Zr8FiEG3H7WqPVaph0PPlst&q=${search}&limit=1`);
  }

  return (
    <div className="App container vh-100">
      <h1 className="mt-5">Giphy</h1>
      <Form searchNewGif={searchNewGif}/>
      <div className='row align-items-center mt-5'>
        <div className='col'>
          <img src="https://i.imgur.com/579PYMP.gif" alt="It's peanut butter jelly time" className='img-fluid gif'/>
        </div>
        <div className='col'>
          <Gif imgUrl={gifUrl}/>
        </div>
        <div className='col'>
          <img src="https://i.imgur.com/579PYMP.gif" alt="It's peanut butter jelly time" className='img-fluid gif'/>
        </div>
      </div>
    </div>
  );
}
export default App;