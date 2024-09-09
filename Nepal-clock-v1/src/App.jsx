import ClockSlogan from "./components/ClockSlogan";
import CurentTime from "./components/CurentTime";
import HeadingClock from "./components/HeadingClock";

function App(){
  return (
    <center>
      <HeadingClock/>
      <ClockSlogan />
      <CurentTime />
    </center>
  )
}
export default App;