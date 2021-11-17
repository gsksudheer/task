import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between mx-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-20 border px-4 py-2">
                        <input type="text"  placeholder="Search by name"/>
                        <span className="text-gray-400"><FiSearch /></span>
                    </div>               
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-10 border rounded-2xl px-4 py-2 bg-gray-50">
                        <button>
                            All
                        </button>
                        <span><FiChevronDown/></span>
                    </div>
                    <div className="flex items-center gap-10 border rounded-2xl px-4 py-2 bg-gray-50">
                        <button>
                            Designer 
                        </button>
                        <span><FiChevronDown/></span>
                    </div>
                    <div className="flex items-center gap-20 border rounded-2xl px-4 py-2 bg-green-800 text-gray-100">
                        <button className="">Add Employee</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;