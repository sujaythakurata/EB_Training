
import ReactDOM from "react-dom";
import { menus } from "../../data/menudata";
import Menu from "./Menu"

const menuLen = menus.length;
const menu2 = [...menus];

describe("Menu Data", ()=>{
  test("Menus length should be 6", ()=>{
    expect(menuLen).toBeGreaterThanOrEqual(6);
  });
  
  test("Both menu same", ()=>{
    expect(menus).toEqual(expect.arrayContaining(menu2));
  });
});
