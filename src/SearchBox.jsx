import {useState} from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
export default function SearchBox(){
     let [city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="6e84d3f1651b07bb238118ffc1747d14"
    let getWeatherInfo=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
    }
   
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
    return (
        <div className='SearchBox'>
            <h3>
                Search for the Weather
            </h3>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required onChange={handleChange}/><br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>

        </div>
    )
}