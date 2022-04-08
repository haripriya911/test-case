import { useState } from "react";
const Greetings = () => {
  const [changeText, setChangeText] = useState(false);
  console.log("changeText",changeText);
  const changeHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h1>hello world</h1>
      {!changeText && <p>good to see you</p>}
      {changeText && <p>changed</p>}
      <button onClick={ changeHandler}>change text</button>
    </div>
  );
};
export default Greetings;
