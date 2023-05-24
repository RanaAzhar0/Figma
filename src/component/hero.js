import React from "react";
import Img from "../images/Ellipse3(Stroke).png"

import { useNavigate } from "react-router-dom"


function Hero() {
    const navigate = useNavigate()
    const submit = () => {
        navigate('/page1')


    }


    return (
        <>
            <div className="  h-[85vh] w-[100%]  shadow-lg ">
                <div className="h-32 w-32 bgimg "></div>
                <div className=" h-[80vh] w-[100%]   flex justify-evenly items-center mt-[-20vh] ">
                    <div className="h-80 w-[45%] shadow-md  flex flex-col"    >
                        <p className="font-extrabold text-5xl ml-7 mt-8">Find Your <span className="text-[#49478C]">Blockchain <br />Dev </span>Job Today</p>
                        <p className=" font-normal text-base ml-7 mt-3">Discover the leading companies in the blockchain <br />industry and find job opportunities.</p>
                        <button onClick={submit} className="LoginNow ml-7 mt-6">Login Now</button>

                    </div>
                    <div className="h-[73vh] w-[30%]  shadow-md"    >
                        <div className="h-[12%] w-[100%]  flex justify-evenly items-center">
                            <p className="font-extrabold text-base"> Sign Up</p>
                            <button className="Employer py-1.5 px-5 rounded-md text-white bg-[#635EA3]">Job Seeker</button>
                            <button className="CreateProfile py-1 px-4 rounded-md text-[#635EA3]">Employer</button>

                        </div>
                        <div className="h-[70%] w-[100%]  flex flex-col ">
                            <p className="mt-3 ml-10"  style={{ "font-weight": "bold", "fontSize": "20px" }}>Name<span className="text-danger">*</span></p>
                            <input placeholder="Enter Name" className="text-slate-300 h-14 w-[65%] rounded-md ml-10 border" />
                            <p className="mt-3 ml-10"  style={{ "font-weight": "bold", "fontSize": "20px" }}>Email<span className="text-danger">*</span></p>
                            <input placeholder="email" className="text-slate-300 h-14 w-[65%] rounded-md ml-10 border" />
                             <p className="mt-3  ml-10" style={{ "font-weight": "bold", "fontSize": "20px" }}>Phone No<span className="text-danger">*</span></p>
                            <input placeholder="no" className="text-slate-300 h-14 w-[65%] rounded-md ml-10 border" />
                             <p className="mt-3  ml-10" style={{ "font-weight": "bold", "fontSize": "20px" }}>Address<span className="text-danger">*</span></p>
                            <input placeholder="address" className="text-slate-300 h-14 w-[65%] rounded-md ml-10 border" />
                        </div>
                        <div className="h-[18%] w-[100%] ">
                            <button className="RegisterNow ml-10 text-white rounded-md mt-2">Register Now</button>
                            <div className="h-5 w-[265px]  ml-10 flex items-center mt-2">
                                <div className="h-[2px] w-[40%] bg-black" ></div>
                                <p className="text-sm">SignIn/SignUp</p>
                                <div className="h-[2px] w-[40%] bg-black" ></div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="bgimges h-[200px] w-[380px] ml-[61rem] -mt-[12.6rem]"></div>
            </div>









            {/* <div className="" style={{"position":"relative","overflow":"hidden" }} >
            <div className="">
                <div className="flex justify-content-between "> 
                   
                    <div className="border"style={{"backgroundColor":"white"}}>
                        <div className="border">
                            <p style={{"font-weight":"bold","fontSize":"25px" ,"letterSpacing":"2px"}}>Sign UP</p>
                            <div className=" border">
                                <button className="border" style={{"border":"none","backgroundColor":"#514898"}}>Job seeker</button>
                                <button className="border" style={{"border":"none"}}>Employer</button>
                            </div>
                        </div>
                        <div className="border">
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Name<span className="text-danger">*</span></p>
                            <input placeholder="Enter Name" className="text-secondary p-2 rounded col-12"/>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Email<span className="text-danger">*</span></p>
                            <input placeholder="Enter Email" className="text-secondary p-2 rounded col-12"/>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Phone no<span className="text-danger">*</span></p>
                            <input placeholder="Enter Phone no" className="text-secondary p-2 rounded col-12"/>
                            <p className="mt-3" style={{"font-weight":"bold","fontSize":"20px"}}>Password<span className="text-danger">*</span></p>
                            <input placeholder="Enter Password" className="text-secondary p-2 rounded col-12"/>
                            <button onClick={submit} className="col-12 mt-5 rounded text-white py-2"style={{ "border":"none","font-weight":"bold","backgroundColor":"#514898"}} >Login Now</button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        </>

    );
}

export default Hero;