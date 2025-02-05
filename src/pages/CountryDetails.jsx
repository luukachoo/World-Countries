import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";

const CountryDetails = () => {
  const { code } = useParams(); // Get the country code from the URL
  const [country, setCountry] = useState(null);

  // Fetch country details based on the code
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch((err) => console.error(err));
  }, [code]);

  if (!country) {
    return <Loader />; // Show loading while fetching data
  }


  return (
    <main className="min-h-[100vh] p-8 lg:p-16">
      <Link
        to="/"
        className="inline-block px-8 py-2 bg-white dark:bg-[#2b3945] shadow-lg  rounded-sm mb-16"
      >
        <FaArrowLeftLong className="inline mr-2"/> Back
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-[200px] md:h-[300px] lg:h-[400px] shadow-lg"
        />
        <div className="flex flex-col lg:mt-8">
          <h1 className="font-bold text-3xl mb-8">{country.name.common}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-2">
                <span className="font-medium">Native Name:</span>{" "}
                {Object.values(country.name.nativeName)[0].common}
              </p>
              <p className="mb-2">
                <span className="font-medium">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              <p className="mb-2">
                <span className="font-medium">Region:</span> {country.region}
              </p>
              <p className="mb-2">
                <span className="font-medium">Sub Region:</span>{" "}
                {country.subregion}
              </p>
              <p className="mb-2">
                <span className="font-medium">Capital:</span> {country.capital}
              </p>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-medium">Top Level Domain:</span>{" "}
                {country.tld.join(", ")}
              </p>
              <p className="mb-2">
                <span className="font-medium">Currencies:</span>{" "}
                {Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
              <p className="mb-2">
                <span className="font-medium">Languages:</span>{" "}
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;