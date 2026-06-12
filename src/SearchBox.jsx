import {useState} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox({updateInfo}){
     let [city,setCity]=useState("");
     let [err,setErr]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="6e84d3f1651b07bb238118ffc1747d14"
    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:city, 
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        return result;
        }
        catch(err){
            throw err;
        }
        
    }
   
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            setErr(true);
        }
        
    }
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required onChange={handleChange}/><br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {err&&<p style={{color:"red"}}>No such place Exists!</p>}
            </form>

        </div>
    )
}