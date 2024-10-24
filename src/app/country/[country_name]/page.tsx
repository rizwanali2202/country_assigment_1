import { AnyAaaaRecord } from "node:dns";

export default function CountryName({params}: any) {

    const countries : {
        name : string,
        population : number,
        capital : string,
    }[] = [{
        name : "pakistan",
        population : 12345678,
        capital : "Islamabad"
    },

    {
        name : "india",
        population : 5564879,
        capital : "Delhi"
    },

    {
        name : "japan",
        population : 951456,
        capital : "tokeyo"
    },

    {
        name : "afghanistan",
        population : 1546879,
        capital : "Kabul"
    },]

    function findCountry(web_url : string){
        return countries.find(country => country.name == web_url);

    }
    let result = findCountry(params.country_name)
    
    
    
    
    
    
    
    return (
        <div> {
            result ? (  
            
                <>
                        <h1>Country Name: {result.name}</h1>
                        <h1>Population : {result.population}</h1>
                        <h1>Capital Name: {result.capital}</h1>
                </>
                         ) : (
                        
                            <h1> Undefine country</h1>
                    
                            )
            } 
            
        </div>
    );
}