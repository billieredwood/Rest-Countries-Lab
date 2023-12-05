// fetch countries here

//import use state to manage countries list components' state and use effect to 
import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";

//functional component to contain all components (i.e. countries list, country.):
const CountriesContainer = () => {
    // useState hook to create state variables for all the countries and visited countries lists:
    const [allCountries, setAllCountries] = useState([]); 
    // const [countriesVisited, setCountriesVisited] = useState([]);       //

    // a function to load/fetch data from the api:
    const loadCountriesData = async () => {           //async bc it loads data to api
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();         //await returns a promise (specifications of request).
        setAllCountries(data);  
    }
// useEffect hook loads countries objects' data when the component mounts:
    useEffect( () => {
        loadCountriesData();
    }, []);

    //do a function here:
    //(move countries between lists)
    //that on click of countries list, adds selected element to countries visited list.


    // function that moves the marked country to new list:
    // const moveCountryList = (country) => {
    // setCountriesVisited()
    // setAllCountries.pop([...allCountries, country]);
    // }
    
    //render each list and country buttons:
    return ( 
        <>
        <h1>🌎 Country Bucket List 🌍</h1>
        <div className="countries-container">
            <h3>All Countries 🗺</h3>
            <CountriesList countries={allCountries}/>
        
            {/* planning notes: maybe use spreader operator to move countries elements to 'visited array' */}
            
            {/* not needed: */}
            {/* <h3>Countries I've Visited📍</h3>
            <CountriesList countries={countriesVisited} /> */}
        </div>
        
        </>
     );

    
}
 
export default CountriesContainer;