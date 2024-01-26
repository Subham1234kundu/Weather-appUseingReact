
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let[error,setError]= useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ba079b7164f6a2dddd866254d2be3fbb";

    let getWeatherInfo = async () =>{
       try{
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonRes = await res.json();
       let result = {
        city:city,
        temp:jsonRes.main.temp,
        tempMin:jsonRes.main.temp_min,
        tempMax:jsonRes.main.temp_max,
        humidity:jsonRes.main.humidity,
        feelsLike:jsonRes.main.feels_like,
        weather:jsonRes.weather[0].description
       };
       console.log(result); 
       return result;
       }catch(err){
        throw(err);
       }

    }
 
    
    let handleChange =  (e)=>{
        setCity(e.target.value);
    }

    let handleSubmit = async(e)=>{
       try{ e.preventDefault();
        console.log(city);
        setCity("");
      let newInfo =  await getWeatherInfo();
      updateInfo(newInfo)}catch(err){
        setError(true);
      }
    }
    return(
        <div style={{textAlign:"center",marginBottom:"50px",}}>
            
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" onChange={handleChange} required value={city} style={{marginRight:"20px"}}/>
            <Button variant="contained" type="submit" >Search</Button>
            {error && <p>No such place is exist</p>}
            </form>
        </div>
    )
}