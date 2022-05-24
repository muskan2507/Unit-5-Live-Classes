import "./otp.css"
type otpInpuType={
    inputNumber:number;
}
const OtpInput = ({inputNumber}:otpInpuType) => {
  return (
    <div>
         {new Array(inputNumber).fill(1).map((e,index)=>(
             <input className='input' type="text" maxLength={1} key={index}/>
         ))}
    </div>
  )
}

export default OtpInput