import './App.css';
import Card from './components/Card'
import { useState, useEffect } from 'react';
import axios from 'axios'


function App() {
  const [Robot, SetRobot] = useState('');
  const [Robotfriend, setRobotfriend] = useState([]);
  const [Load, setLoad]= useState(true);
  //const fetch = require("node-fetch");
  const[erreur, setErreur]= useState(true)
  const handleChange = e => { SetRobot(e.target.value) };
  

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
     axios.get(url)
      .then(response => response.data)
      .then(data => { setRobotfriend(data); setLoad(false)})
      .catch(err => {console.log(`Erreur avec le message : ${err}`); setErreur(false)});

  }, []);

  const robotfiltre =()=>{
    return Robotfriend.filter((friendro)=>{
      
       if(Robot===""){
          return friendro;
       }else if(friendro.name.toLowerCase().includes(Robot.toLowerCase())){   
         return friendro
       }
       return null;
       
    }).map((friendro, key)=>{
      return(
        <Card id={friendro.id}  nom={friendro.name} email={friendro.email} key={friendro.id}/>
      );
    });
  }

  return (
    < >
      <div className='App'>
      <h1>Amis Robot</h1>
      <form>
        <input type='text' value={Robot} name='Robot' onChange={handleChange} placeholder='recherche'/>
        </form>
      <div className='bloccard'>
        
        {
          (Load===false)? robotfiltre(): (erreur===false)?<div className='loading'>une erreur a etait trouve</div>:<div className='loading'>chargement</div>
         
        }
      </div>
      </div>
    </>
  );
}

export default App;
