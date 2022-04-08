import { useState } from "react";
import Output from "./output";
const Greetings = (props) => {
  const [changeText, setChangeText] = useState(false);
  console.log("changeText",changeText);
  const changeHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h1>hello world</h1>
      {!changeText && <Output>good to see you</Output>}
      {changeText && <Output>changed</Output>}
      <button onClick={ changeHandler}>change text</button>
    </div>
  );
};
export default Greetings;
