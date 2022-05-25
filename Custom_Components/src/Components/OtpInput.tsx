import { useRef, useState } from "react";
import "./otp.css";
type otpInpuType = {
  inputNumber: number;
  onChange:(otp:string)=>void;
  
};
const OtpInput = ({ inputNumber,onChange}: otpInpuType) => {
    const [otp,setOtp]=useState<string>("")
  const inputRef = useRef<HTMLInputElement[]>([]);
  return (
    <div>
      {new Array(inputNumber).fill(1).map((e, index) => (
        <input
        onKeyUp={(e)=>{
          if(e.code==="Backspace" && index>0){
            inputRef.current[index-1].focus();
            inputRef.current[index-1].select();
        }
        else if(index<inputNumber-1 && e.code!=="Backspace"){
            inputRef.current[index+1].focus();
        }
        onChange(otp)
        }}
        onChange={(e)=>{
            setOtp(otp+e.target.value)
        }}
          ref={(element)=>{
              if(inputRef.current && element){
                  inputRef.current[index]=element
              }

          }}
          className="input"
          type="text"
          maxLength={1}
          key={index}
        />
      ))}
    </div>
  );
};

export default OtpInput;
