import './App.css';
import Home from './components/Home';
import  {useSelector}  from "react-redux"

function App() {
  const state=useSelector(state=>state)
  console.log(state)
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
