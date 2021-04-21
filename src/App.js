import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import { useState, useEffect } from 'react';

function App() {
  const [Robot, SetRobot] = useState('');
  const [Robotfriend, setRobotfriend] = useState([]);

  const handleChange = e => { SetRobot(e.target.value) };
  

  useEffect(() => {
    const url = 'http://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(data => { setRobotfriend(data) });
       

  }, []);
  const robotfiltre =()=>{
    return Robotfriend.filter((friendro)=>{
       if(Robot==""){
         return friendro
       }else if(friendro.name.toLowerCase().includes(Robot.toLowerCase())){
          return friendro
       }
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
          robotfiltre()
        }
      </div>
      </div>
    </>
  );
}

export default App;
