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

//planning notes: next steps - what info needs to be where to make the two seperate lists?

}
    return ( 
<li>

     {country.name.common} 
     <button onClick={handleClick} disabled={visited} >Visited</button>
                
</li>

     );
}
 
export default Country;