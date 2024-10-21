import Counter from './Counter'
import './App.css'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('button clicked')
  }
 const handleClick2=()=>{
  alert('button 2 click')
 }
 const addToFive=(num)=>{
  alert(num+5)
 }

  return (
    <>
      <h1> React Core concept 2 </h1>
      <User></User>
      <Friends></Friends>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>CLick Me</button>
      <button onClick={handleClick2}>CLick Me</button>
      <button onClick={()=>{alert('third click')}}>Third</button>
      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
