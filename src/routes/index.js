import React, { Suspense } from "react";
import Loader from "../components/Loader";
const Home = React.lazy(() => import("../pages/Dashboard"));


const SuspenseWrapper = ({ children }) => {

// const Navbar=React.lazy(() => import("../components/Navbar/Navbar"));

    return (
        <Suspense fallback={<Loader isLoading={true}/>}>
            {children}
        </Suspense>
    );
};


export const routes = [

    {
        path: "/",
        element: <SuspenseWrapper><Home/></SuspenseWrapper>,
    },{
        path:'*',
        element: <SuspenseWrapper><Home/></SuspenseWrapper>,
    }

]
