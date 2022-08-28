 import React from "react";
import Back from "../Back";
 
class ReactPage extends React.Component{
  constructor(props:any){
    super(props);
    this.state = {value:0};
  }
  componentWillMount(): void {
      alert("Component Will Mount");
  }
  componentDidMount(): void {
    alert("Component Did Mount");
  }
  componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
      alert("Component Will Update");
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
      alert("Componet Did Update");
  }

  render(): React.ReactNode {
      return(
        <>
          <Back/>
          <h1 className="text-center m-2"> Just a Regular Compent Will show the life cyle of React</h1>
          <p className="m-2" style={{display:"flex", justifyContent:"center"}}>
            <button className="btn btn-success btn-lg" onClick={()=>this.setState({value:1})}>Update Componet</button>
          </p>
        </>
      )
  }




}

export default ReactPage;