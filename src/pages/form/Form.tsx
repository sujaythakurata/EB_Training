
import { useRef } from "react";
import Back from "../Back";


const Form = ()=>{
  const name:any = useRef("");
  const age:any = useRef("");
  const tech:any = useRef("");
  const techStack:any = useRef("");
  const handel = (event:any)=>{
    event.preventDefault();
    alert("Name: "+ name.current.value + " Age: " + age.current.value + " Checkbox: "+tech.current.checked + " Tech Stack: "+ techStack.current.value);
  }
  return (
    <div className="form">
      <Back/>
      <form className="text-cetner">
        <div className="form-group m-2">
          <input type="text" ref={name} className="form-control" placeholder="Enter Name"/>
        </div>
        <div className="form-group m-2">
          <input type="number" ref={age} className="form-control" placeholder="Enter Age"/>
        </div>
        <div className="form-group m-2">
          <div className="form-check">
            <input className="form-check-input" ref={tech} type="checkbox" value=""/>
            <label className="form-check-label">
              Angular
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" ref={tech} type="checkbox" value="" />
            <label className="form-check-label">
              React
            </label>
          </div>
        </div>
        <div className="form-group m-2">
          <label>Choose Tech Stack:</label>
          <select name="cars" ref={techStack} className="form-select">
            <option value="React">React</option>
            <option value="Redux">Redux</option>
            <option value="Node.js">Node.js</option>
            <option value="Express">Express</option>
          </select> 
        </div>

        <button className="btn btn-success btn-lg" onClick={handel}>Submit</button>

      </form>
    </div>
  )
}

export default Form;