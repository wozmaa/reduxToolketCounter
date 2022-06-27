import { useDispatch, useSelector } from "react-redux"
import './App.css';
import { dec, inc } from "./features/counterReduxer";


function App() {
  const num = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const handleInc = () => {
    dispatch(inc())
  }

  const handleDec = () => {
    dispatch(dec())
  }
  return (
  <div>
    <div>{num}</div>
    <button onClick={handleInc}>+</button>
    <button onClick={handleDec}>-</button>
  </div>
  );
}

export default App;
