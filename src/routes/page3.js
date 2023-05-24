import React from "react";
import Img from "../images/image1.png"
import Img1 from "../images/Avatar.png"
import Img2 from "../images/Ellipse3(Stroke).png"
import Img3 from "../images/Path.png"
import Img4 from "../images/Shape.png"
import Img5 from "../images/Shape (1).png"
import Img6 from "../images/Shape (2).png"
import {Link, useNavigate} from "react-router-dom"






function Page3() {
  const navigate=useNavigate()
    const goOn =()=>{
        navigate('/page1')


    }
  
  return (
    <>
      <div className=" h-20 w-[100%] flex  items-center">
        <div className="h-16 w-[73px]    ml-40">
          <img src={Img} className="h-[100%] w-[100%]" />
        </div>
        <div className="h-14  w-52 flex ml-[150vh]">
          <img src={Img1} className="h-[100%] w-14" />
          <h1 className=" Wade mt-4 ml-4"> Wade Warren </h1>
        </div>
      </div>
      <div className="h-[900px] w-[100%]">
        <div className="step1 h-[270px] w-[99.8%]   ml-[0.5px] flex justify-center items-center flex-col">
          <p className="text-white font-extrabold leading-10 text-4xl">Step 2: Contact Information</p>
          <p className="text-white leading-10 "> Let’s get to know you, please fill out some basic information </p>
          <p className="text-white leading-6 ">about yourself</p>
        </div>

        <div className="h-[623px] w-[100%] ml-[10rem] ">
          <div className="h-[100%] w-[75%] shadow-lg   flex flex-col items-center">
            <div className="h-10 w-[21rem]    flex  items-center ">
              <div onClick={goOn} className="h-5 w-5 bg-[#3B3775] text-xs  rounded-full flex items-center justify-center cursor-pointer">1</div>
              <div className="h-[0.5px] w-20 bg-slate-400"></div>
              <div  className="h-5 w-5 bg-slate-400 text-xs rounded-full flex items-center justify-center ">2</div>
              <div className="h-[0.5px] w-20 bg-slate-400"></div>
              <div  className="h-5 w-5 bg-slate-400 text-xs rounded-full flex items-center justify-center ">3</div>
              <div className="h-[0.5px] w-20 bg-slate-400"></div>
              <div className="h-5 w-5 bg-slate-400 text-xs rounded-full flex items-center justify-center">4</div>
            </div>
            <div className="h-4 w-[23rem]    flex justify-around">
              <p className="text-xs text-[#444444]"> Basic Information</p>
              <p className="text-xs text-[#444444]"> Contact Information</p>
              <p className="text-xs text-[#444444]">Experience </p>
              <p className="text-xs text-[#444444]">Complete your Profile</p>
            </div>

            <div className="h-[35vh] w-[40rem]    grid grid-cols-2 gap-4 mt-10">
              <div className="h-20 w-60 ml-16 ">
                <p className="mt-3" >Job City<span className="text-[#252525]">*</span></p>
                <input placeholder="place" className=" p-2 rounded h-10 w-60 border border-black" />
              </div>

              <div className="h-20 w-60  ">
                <p className="mt-3" >Expected Designation<span className="text-[#252525]">*</span></p>
                <input placeholder="......" className=" p-2 rounded  h-10 w-60  border border-black " />
              </div>

              <div className="h-20 w-60 ml-16  mt-[-40px]">
                <p className="mt-3" >Experience<span className="text-[#463535]">*</span></p>
                <input type="no" placeholder="fresh" className=" p-2 rounded h-10 w-60 border border-black" />
              </div>
             
            </div>
            <div className="h-24 w-[100%]  flex justify-evenly mt-10"> 
              <button className="Priviousbtn nextbtn mt-10">Privious</button>
            <button className="nextbtn mt-10">NEXT</button>
            </div>


          </div>
        </div>
        <div className="h-40 w-56  float-right mt-[-170px]" >
          <img src={Img2} className="h-[100%] w-[100%]" />
        </div>
      </div>

      <div className="h-[20rem] w-[100%]  grid grid-cols-5 items-center shadow-sm ">
        <div className="h-[12rem] w-[14vh]    ml-24">
          <ul>
            <li className=" leading-10 font-normal">Services</li>
            <li className=" text-xs leading-6">List Item 1</li>
            <li className=" text-xs leading-6">List Item 2</li>
            <li className=" text-xs leading-6">List Item 3</li>
            <li className=" text-xs leading-6">List Item 4</li>
            <li className=" text-xs leading-6">List Item 5</li>
            <li className=" text-xs leading-6">List Item 6</li>
          </ul>

        </div>
        <div className="h-[8rem] w-[14vh]  mt-[-4rem] ml-12">
          <ul>
            <li className=" leading-10 font-normal">Company</li>
            <li className=" text-xs leading-6">List Item 1</li>
            <li className=" text-xs leading-6">List Item 2</li>
            <li className=" text-xs leading-6">List Item 3</li>

          </ul>
        </div>
        <div className="h-[10rem] w-[14vh] mt-[-2rem] ml-8">
          <ul>
            <li className=" leading-10 font-normal">About</li>
            <li className=" text-xs leading-6">List Item 1</li>
            <li className=" text-xs leading-6">List Item 2</li>
            <li className=" text-xs leading-6">List Item 3</li>
            <li className=" text-xs leading-6">List Item 4</li>


          </ul>
        </div>
        <div className="h-[10rem] w-[14vh]  mt-[-2rem] ml-8">
          <ul>
            <li className=" leading-10 font-normal">Links</li>
            <li className=" text-xs leading-6">List Item 1</li>
            <li className=" text-xs leading-6">List Item 2</li>
            <li className=" text-xs leading-6">List Item 3</li>
            <li className=" text-xs leading-6">List Item 4</li>


          </ul>
        </div>
        <div className="h-[13rem] mt-[-2] w-[42vh]  bg-slate-100 ml-[-20px]">
          <p className="font-semibold mt-4  ml-4 ">Subscribe</p>
          <div className="h-10 w-[100%] hover:border flex items-center mt-4">
            <button className="subbtn ml-4">Email address</button>
            <img src={Img3} className="h-4 w-6   ml-4" />
          </div>
          <p className="font-thin text-xs leading-6 mt-4 ml-4">Hello, we are Lift Media. Our goal is to   </p>
          <p className="font-thin text-xs leading-6 ml-4">translate the positive effects</p>
          <p className="font-thin text-xs leading-6 ml-4">from revolutionizing how companies engage with</p>
          <p className="font-thin text-xs leading-6 ml-4"> their clients & their team.</p>
        </div>

      </div>
      <div className="h-20 w-[100%]  flex justify-around">
        <div className="h-[70px] w-[5%]">
          <img src={Img} className="h-[100%] w-[100%]"/>
        </div>
        <div className="h-16 w-[18%]  ml-2">
          <ul  className="flex justify-evenly mt-5 text-[#635EA3]">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
          </ul>

        </div>
        <div className="h-16 w-[16%]  flex items-center justify-evenly">
          <img src={Img4} className="py-2 px-2 border rounded-full"/>
          <img src={Img5} className="py-2 px-2 border rounded-full"/>
          <img src={Img6} className="py-1.5 px-2 border rounded-full"/>

        </div>

      </div>

    </>

  );
}

export default Page3;