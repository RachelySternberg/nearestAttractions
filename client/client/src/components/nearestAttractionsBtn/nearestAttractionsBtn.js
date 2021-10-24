import React from "react";
import { Link } from "react-router-dom";

const NearestAttractionsBtn=({lat,lng})=>{

    return(
        <>
        <Link to={{pathname: `/attractions`,
               state: { lat, lng }}}>
            <button className="button">מצא אטרקציות בסביבתי</button>
        </Link>
        </>
    )
}

export default NearestAttractionsBtn;