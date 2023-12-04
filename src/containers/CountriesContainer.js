// fetch countries here

//import use state to manage countries list components' state and use effect to 
import { useState, useEffect } from "react";
import CountriesList from "./components/CountriesList";


const CountriesContainer = () => {

    const [allCountries, setAllCountries] = useState(null); 
    const [countriesVisited, setCountriesVisited] = useState(null);       //

    // a function to load/fetch data from the api:
    const loadCountriesData = async () => {           //async bc it loads data to api
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();         //await returns a promise too.
        setCountriesVisited(data);  
    }

    return ( 
        <>
        <h1>Select which countries you have already visited from the list below</h1>
        <CountriesList />
        <h2>Countries I've visited</h2>
        
        </>
     );

    
}
 
export default CountriesContainer;