import Header from "./Components/Header";
import { useState } from "react";
import Content from "./Components/Content";

function App() {
  const [data, setData] = useState("");

  const handleInput = (params) => {
    setData(params);
  }

  return (
    <>
      <Header handleInput={handleInput} />
      <Content data={data} />
    </>
  );
}

export default App;
