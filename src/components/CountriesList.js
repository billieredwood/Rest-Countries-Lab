//consider what props and states are being pulled 

import Country from "./Country";
import { useState } from "react";


// functional component called CountriesList, which takes in a countries prop (property):
const CountriesList = ({countries}) => {

// a useState hook to create a piece of state called 'visitedCountries', with a function  called 'setVisitedCountries' to update this state:
    const [visitedCountries, setVisitedCountries] = useState([]);

// callback function called 'handleCountryVisited', which takes in a country to update the 'visitedCountries' state
// by adding the selected country to the new list of visited countries via the spreader operator:
    const handleCountryVisited = (country) => {
    setVisitedCountries([...visitedCountries, country]);
    }

    // an array that will be a list of countries that have not yet been visited (i.e., not present in the visitedCountries array).
    const allCountries = countries.filter(
        (country) => !visitedCountries.includes(country)
      );

// rendering the above component:
    return ( 
        //react fragment groups elements together:
        <>
       
        <ul>
        {/* map over countries prop and split into an array of country objects to render a list of countries */}
            {allCountries.map((country, id) => (
                <Country country={country} key={id} 
                visitedConfirmed={handleCountryVisited} />
            ))}
        </ul>

        {/* Render a list of visited countries */}
        <ul>
        <h3>Countries I've Visited📍</h3>
        {visitedCountries.map((country, id) => (
          <li key={id}>{country.name.common}</li>
        ))}
        </ul>
       

        </>

     );
}
 
export default CountriesList;
