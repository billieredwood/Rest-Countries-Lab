// fetch countries here

//import use state to manage countries list components' state and use effect to 
import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";


const CountriesContainer = () => {

    const [allCountries, setAllCountries] = useState([]); 
    const [countriesVisited, setCountriesVisited] = useState([]);       //

    // a function to load/fetch data from the api:
    const loadCountriesData = async () => {           //async bc it loads data to api
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json();         //await returns a promise too.
        setAllCountries(data);  
    }

    useEffect( () => {
        loadCountriesData();
    }, []);

    //do a function here:
    //(move countries between lists)
    //that on click of countries list, adds selected element to countries visited list.
    // ? ternerary operator? 


    // // function that moves the marked country to new list:
    // const moveCountryList = (country) => {
    // setCountriesVisited()
    // setAllCountries
    // }
    
    //render each list and country buttons:
    return ( 
        <>
        <h1>Country Bucket List</h1>
    
        <h3>All Countries</h3>
        <CountriesList countries={allCountries}/>
        
        {/* use spreader operator to move countries elements to 'visited array' */}
        
        <CountriesList countries={countriesVisited} />
        </>
     );

    
}
 
export default CountriesContainer;