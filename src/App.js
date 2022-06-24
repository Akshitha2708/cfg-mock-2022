
import { useState } from 'react';
import Child1 from './components/child1';
function App() {
  let [counter, counterchange] = useState(0);
  const increment = () => {
    counterchange(counter++)
  }
  const decrement = () => {
    counterchange(counter--)
  }
  return (
    //one element to be returned
    // <div className="text-center">
    //   <img src={image}></img>
    //   <h1>welocme to react app</h1>
    //   <h2>name {data}</h2>
    //   <h3>pincode{obj.pincode}</h3>
    //   <button className="btn btn-success" onClick={change}>click me</button>
    // </div>
    <div className='text-center'>
      <div className='button btn btn-primary' onClick={increment}>+</div>
      <span>{counter}</span>
      <div className='button btn btn-secondary' onClick={decrement}>-</div>
      <div>
        <Child1></Child1>
      </div>
    </div>

  );
}

export default App;
