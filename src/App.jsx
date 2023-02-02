import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useEffect, useState } from "react";

function App() {
  const configuration = new Configuration({
    apiKey: process.env.VITE_OPEN_AI_KEY,
  });
  // console.log(import.meta.env.VITE_Open_AI_Key);

  // Use console for the result we import the data in app.jsx file
  // console.log(arrayItems);
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  // console.log(import.meta.env.VITE_Open_AI_Key);

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);
    console.log(response);
    setResult(response.data.choices[0].text);
  };

  useEffect(() => {
    doStuff();
  }, []);

  // console.log(input);

  // console.log(Object.values(option).length);
  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;
