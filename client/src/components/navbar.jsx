import React from "react";
import { VscBell } from "react-icons/vsc";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between mx-4 my-2 p-2">
                <div>
                    <h2 className="bold text-2xl text-gray-900 font-bold">HR Management</h2>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <span><VscBell /></span>
                    <h4>Nirav Parmar</h4>
                    <span><FiChevronDown /></span>
                </div>
            </div>
            
            
           
        </>
    );
};
export default Navbar;
