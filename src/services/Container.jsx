import React from "react";


const Container = ({children}) => {
    return(
        <div className="bg-white justify-start flex flex-col text-gray-400">
            {children}
        </div>
    )
}