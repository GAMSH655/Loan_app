import React , {useState , useEffect} from 'react'
import "./Header.css"
import { FaTelegramPlane  , FaBars , FaTimes} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/Logo.png"
const Header = () => {

  const [openMenu , setOpenMenu] = useState(false)

  const HandleMenuBtn=()=>{
    setOpenMenu(!openMenu)
  }
  return (
    <div>
        <div className="header">
       <img src={Logo} alt="" />
       <div className="Nav_Container">
        <a href="#">about</a>
        <a href="#">community</a>
        <a href="#">F.A.Q</a>
        <a href="#">Career</a>
       </div>
        <div className="Button-Container">
           <button className="header_Btn"><NavLink to="/Login" className="btn_Link">sign in </NavLink></button>
           <button className="header_Btn"><NavLink to="/Signup" className="btn_Link">sign up </NavLink></button>
        </div>
         <button className="menuBtn" onClick={HandleMenuBtn}>
           {openMenu ? <FaTimes/> :<FaBars/> }
         </button>
        </div>

        {/* mobile header */}
         {
          openMenu && (<div className="mobile_header ">
       <div className="mobile_header_Nav_Container">
        <a href="#" className='mobLink'>about</a>
        <a href="#" className='mobLink'>community</a>
        <a href="#" className='mobLink'>F.A.Q</a>
        <a href="#" className='mobLink'>Career</a>
       </div>
        <div className="mobile_header_Button-Container">
           <button className="mobile_header_Btn"><NavLink to="/Login" className="btn_Link">sign in </NavLink></button>
           <button className="mobile_header_Btn"><NavLink to="/Signup" className="btn_Link">sign up </NavLink></button>
        </div>
        </div>)
         }
    </div>
  )
}

export default Header
