
import Menu from "./Menu"
import { IMenu } from "../../types/menu";
import "./cardmenu.scss";
import { menus } from "../../data/menudata";



export default function CardMenu(){

  return (
    <div className="menus">
      {menus.map((d:IMenu)=><Menu {...d}/>)}
    </div>
  );


}