
import './App.css';
import Accordian from './Components/Accordian';
import OtpInput from './Components/OtpInput';
import Tabs from './Components/Tabs';
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
const data1 = [
  {title:"One",desc:"hi one!"},
  {title:"Two",desc:" hello two!"},
  {title:"Three",desc:"sit three!"},
  {title:"Four",desc:"bye four!"},
]
function App() {
  const handleChange=(otp:string)=>{
    console.log(otp)
  }
  return (
    <div className="App">
      {/* -----------------------------------------OTP Box---------------------------------- */}
    <OtpInput inputNumber={5} onChange={handleChange} />
    <br /><hr /><br />
    {/* ---------------------------------------------Accordian-------------------------------- */}
    <Accordian data={data}/>
    <br /><hr /><br />
    {/* --------------------------------------------Tabs----------------------------------------- */}
    <Tabs data={data1}/>
    </div>
  );
}

export default App;
