import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
  
    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
      .catch(err => console.error(err))
    }, []);
  
    const filteredCountries = countries.filter(country => { 
      if (selectedRegion && searchTerm){
        if (country.region === selectedRegion && country.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
          return country
        }
      } else if (searchTerm) {
        if (country.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
          return country
        }
      } else
      if (selectedRegion) {
        if (country.region === selectedRegion) {
          return country
        }
      }
      else {
        return country
      }
  
    });


    if (!countries.length) {
      return <h1>Loading...</h1>
    }

  return (
  <section className="px-4 lg:px-24 mt-12">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filters
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mt-16">
          
          {filteredCountries.map((country) => (
            <Link
              to={`/country/${country.cca2}`} // Navigate to country details page
              key={country.cca2}
              className="rounded-sm shadow-md overflow-hidden"
            >
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="h-44 w-full"
              />
              <div className="p-4 bg-white dark:bg-[#2b3945] dark:text-white">
                <h1 className="font-bold text-lg mb-4">{country.name.common}</h1>
                <p className="mb-2">
                  <span className="font-medium">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p className="mb-2">
                  <span className="font-medium">Region:</span> {country.region}
                </p>
                <p className="mb-2">
                  <span className="font-medium">Capital:</span> {country.capital}
                </p>
              </div>
            </Link>
          ))}
        </section>
      </section>
  );
};

export default Home;