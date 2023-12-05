import { useState } from "react";

    //use state that monitors which country has been clicked as 'visited'. usestate will then update to true.
const Country = ({country, visitedConfirmed}) => {

const [visited, setVisited] = useState(false);

// when true, set visited countries list to (spread operator calls on this in container)
const handleClick=() => {
    console.log('hello');
// will need to set state to true
    setVisited(true);
    visitedConfirmed(country);

//planning notes: next steps - what info needs to be where to make the two separate lists?

}
    return ( 
<li>

     {country.name.common} 
     {/* the following line previously included 'disabled={visited}', which was causing array elements below selected element to disable their button - removing this fixed the issue after adding the 'allCountries' function into the CountriesList to remove the elements from all-list when they are added to the visited-list on button click */}
     <button onClick={handleClick} >Visited</button>
                
</li>

     );
}
 
export default Country;