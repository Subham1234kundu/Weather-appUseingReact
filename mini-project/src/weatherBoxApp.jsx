import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherBoxApp(){
    const[weatherInfo,setWeatherInfo] = useState("");

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>My Weather APP</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}