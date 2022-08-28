
import { useNavigate } from "react-router-dom";

export default function Back(){
  const navigate = useNavigate();
  return (

    <>
      <div style={{display:"flex", justifyContent:"right", paddingRight:"20px", width:"100%"}}>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
      </div>
    </>

  )
}