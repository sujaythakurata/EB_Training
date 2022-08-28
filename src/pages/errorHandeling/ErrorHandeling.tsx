import { useState } from "react";
import Back from "../Back";
import "./errorHandel.scss"

const ErrorHandeling = ()=>{
  const [error, setError] = useState(false);
  return (
      <>
        <Back/>
        <div className="content">
          <button className="btn btn-danger btn-xl" onClick={()=>setError(true)}>Make This Page Error</button>
        </div>
        {error?Error():null}
      </>
  )
}




export default ErrorHandeling;