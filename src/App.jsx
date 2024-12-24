import Description from "./components/Description";
import Heading from "./components/Heading";
import Time from "./components/Time";

function App() {
  return (
    <div className="container">
      <div className="text-center">
        <Heading></Heading>
        <Description></Description>
        <Time></Time>
      </div>
    </div>
  );
}

export default App;
