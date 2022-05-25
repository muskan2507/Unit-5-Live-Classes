
import './App.css';
import Accordian from './Components/Accordian';
import OtpInput from './Components/OtpInput';
const data = [
  {
    desc:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    title: "This is panel header 1",
  },
  {
    desc:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "This is panel header 2",
  },
  {
    desc:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "This is panel header 3",
  },
  {
    desc:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "This is panel header 4",
  },
  {
    desc:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "This is panel header 5",
  },
];
function App() {
  const handleChange=(otp:string)=>{
    console.log(otp)
  }
  return (
    <div className="App">
    <OtpInput inputNumber={4} onChange={handleChange} />
    <br /><hr /><br />
    <Accordian data={data}/>
    </div>
  );
}

export default App;
