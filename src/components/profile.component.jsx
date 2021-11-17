import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
const Profile = (props) => {    
    return (
        <>
             <div className="bg-gray-50 shadow-2xl rounded-3xl px-10 pt-8 w-72 h-80">
                <div className="float-right">
                    <BsThreeDotsVertical />
                </div>
                <div className="w-28 h-28 bg-red-300 flex items-center rounded-full">
                    <img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="User" className="w-full h-full rounded-full"/>
                </div>                
                <div>
                    <h3 className="text-xl mt-3 ml-3 font-bold">{props.name}</h3>
                    <span className="">
                        <h5 className="bg-blue-100 mt-2 rounded-full text-center mx-5 my-5">UI Designer</h5>
                    </span>
                    <h6 className="mt-1 text-gray-400 my-8">{props.email}</h6>
                </div>
            </div>
        </>
    );
};
export default Profile;