import React, { useContext } from "react";
import { AppContext } from "../App";

const ResultValue = ()=> {
    const [appData] = useContext(AppContext);
    return (
        <div>
        Results:
        {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
            <p key={currentIndex}>{answer.value}</p>
    
    ) )}
    </div>
    )
};


export default ResultValue ;