import "./Sign-UP.css"
import React from 'react'
import Header from "../..//Components/HomeUI/Header"
import Footer from  "../../Components/HomeUI/Footer"
import { FaStar ,FaFileDownload , FaFileUpload } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import Upload from "../Upload-Doucuments/Upload"
const SignUp = () => {
  return (
    <div>
      <Header/>
      <div className="sigN">
        <div className="aside">
         <div className="aside_inner_div"> 
          <p className="star"><FaStar />   <FaStar />   <FaStar />   <FaStar />   <FaStar /></p>
          <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt voluptatum eveniet blanditiis molestias quos ipsam nisi illum? Qui debitis nulla sunt! Tempora praesentium error, aperiam a dignissimos soluta consectetur.
          Excepturi doloribus amet a natus, dignissimos numquam quia deleniti eveniet pariatur fugiat? Repellendus tempora, beatae deleniti ullam quae officiis delectus, corporis enim quasi dolore ipsa eos, rem perferendis possimus voluptas.</p> 
          </div>
        </div>
        <div className="formContainer">
        <h3 className="top_text">Join Our Cooprative</h3>
        <p className="formP">Ogbomoso Ifedayo Alajo Cooperative Investment & Credit Union Limited.</p>
         <form action="">
            <div className="inputDiv">
                 <h3 className="inputText">Email </h3>
                 <input type="email" placeholder='email' className='input' />
            </div>
           
            <div className="inputDiv">
                 <h3 className="inputText">password</h3>
                 <input type="password" placeholder='password' className='input' />
            </div>
            <div className="inputDiv">
                 <h3 className="inputText">Re-enter password</h3>
                 <input type="password" placeholder='password' className='input' />
            </div>
              <button className="LogBTn"><NavLink to="/upload" className="upload"> upload documents < FaFileUpload/>  </NavLink></button>
              <p className="downText">already have an account ?  <NavLink to="/Login"> sign in</NavLink></p>
         </form>
       </div>
      </div>
       <Footer/>
    </div>
  )
}

export default SignUp
