import React,{useState} from 'react'


function Search(props) {
  const [choice, setChoice] = useState("")

  let mealData = props.meals
  let timeMeal 
  function handleChange(e) {
    setChoice(e.target.value)

  }
  console.log(props.meals)

  function selectMeal(param,e) {
    e.preventDefault()
    
    let meal = mealData && mealData.filter(function(item){
      return item.title===param
    })
    // let meal = mealData.filter(item => item["title"] === param)
    timeMeal = meal[0].recommendations
    console.log(timeMeal)
   let randomMeal = timeMeal[Math.floor(Math.random() * timeMeal.length)]
   
    console.log(randomMeal)
  }


  return (
      
    <div>
      <form>
        <select defaultValue={"value"} onChange={handleChange}>
              <option value='value' > --select-- </option>
              {props.meals.map((items, index)=>{
                  return <option key={index} value={items.title}>{items.title}</option>
                })}
        </select>
        <button onClick={(e) => selectMeal(choice,e)}>submit</button>
      </form>

     
      
    </div>
            

  );
}

export default Search;


// <select value="Radish">
            //         <option value="Orange">Orange</option>
            //         <option value="Radish">Radish</option>
            //         <option value="Cherry">Cherry</option>
            // </select>