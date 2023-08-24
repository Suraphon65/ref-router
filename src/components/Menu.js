import {  NavLink } from "react-router-dom";
import './App.css'

function Menu(){
    return(
        <nav className="Menubg  p-3 mb-4 ">  
      <NavLink to="/" className="Menu1 px-3"
      > 🍱🍣🍲
        หน้าหลัก 
      </NavLink>

      <NavLink
        to="/product"
        className="Menu2 px-2"
       
      >
        เมนูอาหารญีปุ่น
      </NavLink>

      <NavLink
        to="/contact"
        className="Menu3 px-2"
        
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
    )
};

export default Menu();