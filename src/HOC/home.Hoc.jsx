// import React from "react";
// import { Route, Routes } from "react-router-dom"
// //Layout 
// import HomeLayout from "../Layout/home.Layout";

// const HomeLayoutHoc = ({ comonent: Component, ...rest }) => {
//     return (
//         <>
//         <Routes>
//         <Route 
//             {...rest}
//             component={(props) => (
//                 <HomeLayout>
//                     <Component {...props}/>
//                     <h2>HomeLayoutHoc</h2>
//                 </HomeLayout>
//             )}
//         />
//         </Routes>
//     </>
//     );
// };

// export default HomeLayoutHoc;
import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router";

//layout
import HomeLayout from "../Layout/home.Layout";

const HomeLayoutHoc = ({component:Component, ...rest}) => {
    return (
        <>
        
        <Routes>
        <Route {...rest} component = { (props) => (
            <HomeLayout>
                <Component {...props}/>
            </HomeLayout>
            )} 
        />
        </Routes>
    </>
    );
}

export default HomeLayoutHoc;