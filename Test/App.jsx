import { useState } from 'react'
import './App.css'

function App() {
  const [sliderValue, setSliderValue] = useState(8) ; // Define state
  const [randValue, setRandValue]=useState([]);

  let handleSlider=(e)=>{
    let newSliderVal=e.target.value;
    setSliderValue(e.target.value)
    // e is the event object that is automatically passed to the event handler
    //e.target is the element that triggered the event like <input/> in this case
    //e.target.value is the value of the input element.
    console.log(e.target.value)

    let arr=[];

    for(let i=0; i<newSliderVal; i++){
      arr[i]=Math.floor(Math.random()*10);
    }
    setRandValue(arr);
    console.log(arr);
  }
  return (
    <>
    <p>{randValue}</p>
      <input 
      type="range" 
      min="8" 
      max="15"
      value={sliderValue}
      onChange={handleSlider}
      // onchange triggers the function called handleSlider when changes are made to the slider
      />

      <p>Slider Value :{sliderValue}</p>
      <div class="Checkbox">
      <input 
      type="checkbox"
      />
      <p>Alphabets</p>
      <input 
      type="checkbox"
      />
      <p>Special Characters</p>
      </div>
    </>
  )
}

export default App