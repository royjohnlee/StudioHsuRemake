import React, { useEffect } from "react";
// import React, { useRef} from "react";
import Aos from "aos";
import Header from "../../components/Header/Header"


function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header></Header>
      <h1 className="text-3xl font-bold underline">Top Page</h1>
    </>
  )
}

export default App;
