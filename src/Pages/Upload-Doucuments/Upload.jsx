import React from 'react'
import "./Upload.css"
import Header from '../../Components/HomeUI/Header'
import { NavLink } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
const Upload = () => {
  return (
    <div>
        <Header/>
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
                 <h3 className="inputText">Address</h3>
                 <input type='text' placeholder='Address' className='input' />
            </div>
            
            <div className="inputDiv">
                 <h3 className="inputText">Upload Passport</h3>
                 <input type="image" placeholder='password' className='input'></input>
            </div>
             
             
             
             
              <button className="LogBTn"><NavLink to="/upload" className="upload"> upload documents </NavLink></button>
              <p className="downText">already have an account ?  <NavLink to="/Login"> sign in</NavLink></p>
         </form>
       </div>
    </div>
  )
}

export default Upload
