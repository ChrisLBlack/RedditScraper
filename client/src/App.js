import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card/Card';

const App = () => {
  const [testData, setTestData] = useState();
  const [loaded, setLoaded] = useState(false);
  const getTestData = async () => {
    await fetch('http://localhost:9000/redditAPI')
        .then(res => res = res.json()).then(res => {
          const data = res.data.children;
          console.log(data);
          setTestData(data);
          setLoaded(true)
        });
  }
  useEffect(() => { getTestData() }, []);
  if(loaded === false) {
    return(
      <div className="App container">
        <div className="row">
            <div className="col-12"><h2>Loading...</h2></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="App container">
        <div className="row">
            {
              testData.map((cardData, index) => <Card key={index} cardData={cardData.data} />)
            }
        </div>
      </div>
    );
  }
}

export default App;
