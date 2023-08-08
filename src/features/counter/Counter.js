import { useDispatch, useSelector } from "react-redux";

//import the action creators
import { increment, decrement, increaseByAmount } from "./counterSlice";

//you can have local state from global state
import { useState } from "react";

export default function Counter() {
  //read data from redux store
  const count = useSelector((state) => state.counter.value);

  //function to send an action to the reducer
  const dispatch = useDispatch();

  //local state for the input
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>

      {/* listen to an onClick for this button to work */}
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>

      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && dispatch(increaseByAmount(amount))
        }
      />
    </div>
  );
}
