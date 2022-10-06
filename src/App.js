import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Recipe from './components/Recipe';
import Search from './components/Search';
import { useState, useEffect} from 'react';
import recipes from "./recipes.json"


function App() {
  

  const [meals,setMeals] = useState([])
  const [time, setTime] = useState({})

  useEffect(() =>{
  setMeals(recipes.meals)
  fetchTimeData()
  }, [])

  console.log(meals)
//    let recipes = meals.map((item) => {
//     return <p>{item.title}</p>
//   })
    function fetchTimeData() {
        fetch("http://worldtimeapi.org/api/ip")
        .then((response) => response.json())
        .then((data) => setTime(data))

    }
    console.log(time)

    let welcome;  
    let date = new Date();  
    let hour = date.getHours();  
    let minute = date.getMinutes();  

    
    if (minute < 10) {  
      minute = "0" + minute;  
    }  
    if (hour < 12) {  
      welcome = "good morning";  
    } else if (hour < 17) {  
      welcome = "good afternoon";  
    } else {  
      welcome = "good evening";  
    }
 console.log(welcome)
  return (
    <div className="App">
            <NavBar />

      <h1 className='heading'>CHAKULA APP</h1>
      <div>
        <h4>{welcome}</h4>
        <p>timezone {time.timezone}</p>
        <p>Day of the week {time.day_of_week}</p>
        <p> abbreviation {time.abbreviation}</p>
      </div>
   
      <Search meals={meals}/>
      
      <Outlet/>
    </div>
  );
}

export default App;