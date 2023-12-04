//what props and states are you pulling 

import Country from "./Country";
import { useState } from "react";


// functional component called CountriesList, which takes in a countries prop (property)
const CountriesList = ({countries}) => {

    //Present the user with a list of countries from which they can select from
    //Create a means to mark a country as "visited"
    //Additionally display a list of "visited countries"
    
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleCountryVisited = (country) => {
    setVisitedCountries([...visitedCountries, country]);
    }


    return ( 

        <>
        <ul>
            {/* split country elements in array and for each that is clicked as 'visited',  */}
            {countries.map((country, id) => (
                <Country country={country} key={id} 
                visitedConfirmed={handleCountryVisited} />
            ))}
        </ul>
       
        <ul>
        <h3>Countries I've Visited</h3>
        {visitedCountries.map((country, id) => (
          <li key={id}>{country.name.common}</li>
        ))}
        </ul>

        </>

     );
}
 
export default CountriesList;
