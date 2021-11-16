import React  from "react";
import { FiChevronRight } from "react-icons/fi";
const Info = () => {
    return (
        <>
            <div className="my-16 ml-5">
                <h1 className="text-center text-2xl font-bold"> <span className="bg-yellow-400 my-3">SILARRA</span></h1>
                <hr className="my-6"/>
                <ul className="flex flex-col justify-between h-80 ml-5 text-gray-50">
                    <li>My Info.</li>
                    <li>Blogs</li>
                    <li className="flex items-center justify-between">General Info<FiChevronRight /></li>
                    <li className="flex items-center justify-between">Team <FiChevronRight /></li>
                    <li className="bg-gray-50 text-green-900 -mr-5 px-5 p-3  rounded-l-full">HR Management</li>
                </ul>
            </div>
        </>
    );
};
export default Info;