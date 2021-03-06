import { useState } from "react"
import './App.css';

const App = () => {
  import('wasm').then(({ add_two_ints, fib }) => {
    const sumResult = add_two_ints(10, 20)
    const fibResult = fib(10)
    setSum(sumResult)
    setFib(fibResult)
  })
  const [sum, setSum] = useState<number>(0)
  const [fib, setFib] = useState<number>(0)

  return (
    <div className="App">
      <header>
        <p>Sum Results: {sum}</p>
        <p>Fib Results: {fib}</p>
      </header>
    </div>
  );
}

export default App;
