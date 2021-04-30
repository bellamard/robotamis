import './App.css';
import Card from './components/Card'
import { useState, useEffect } from 'react';


function App() {
  const [Robot, SetRobot] = useState('');
  const [Robotfriend, setRobotfriend] = useState([]);
  const [Load, setLoad]= useState(true);
  //const fetch = require("node-fetch");
  const handleChange = e => { SetRobot(e.target.value) };
  

  useEffect(() => {
    const url = 'http://jsonplaceholder.typicode.com/users';
     fetch(url,{headers:{Accept:"application/json"}})
      .then(response => response.json())
      .then(data => { setRobotfriend(data); setLoad(false)})
      .catch(err => console.log(`Erreur avec le message : ${err}`));

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
console.log(Load);
  return (
    < >
      <div className='App'>
      <h1>Amis Robot</h1>
      <form>
        <input type='text' value={Robot} name='Robot' onChange={handleChange} placeholder='recherche'/>
        </form>
      <div className='bloccard'>
        
        { 
          (Load===false)? robotfiltre():<div className='loading'>chargement...</div>
          
          
        }
      </div>
      </div>
    </>
  );
}

export default App;
