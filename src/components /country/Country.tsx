import useFetch from "../../hooks/useFetch";
import Header from "../header/Header";
import { Link, useParams } from "react-router-dom";
import { CountryTypes } from "../../types/Types";

const Country = () => {
  const { name } = useParams();
  const { data } = useFetch(`https://restcountries.com/v3.1/name/${name}`);
  console.log(data);

  return (
    <>
      <Header />
      <div>
        {(data || []).map((country: CountryTypes) => (
          <div className="flex flex-col p-[50px]">
            <Link
              to={"/"}
              className="w-[80px] hover:bg-sky-500 rounded text-center"
            >
              ← Back
            </Link>
            <div key={country.population} className="flex gap-[200px] pt-20">
              <div>
                <img
                  src={country.flags.svg}
                  className="w-[400px] h-[350px] rounded-lg"
                />
              </div>
              <div>
                <div className="pt-20">
                  <h1 className="font-extrabold text-3xl">
                    {country.name.common}
                  </h1>
                </div>
                <div className="flex gap-10 pt-10">
                  <div>
                    <p>
                      <span className="font-semibold">Native Name:</span>{" "}
                      {country.name.nativeName?.eng?.common ||
                        "Native name not available"}
                    </p>
                    <p>
                      <span className="font-semibold">Population:</span>{" "}
                      {country.population}
                    </p>
                    <p>
                      <span className="font-semibold">Region:</span>{" "}
                      {country.region}
                    </p>
                    <p>
                      <span className="font-semibold">Sub region:</span>{" "}
                      {country.subregion}
                    </p>
                    <p>
                      <span className="font-semibold">Capital:</span>{" "}
                      {country.capital}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold">Top Level Domain:</span> {country.tld}
                    </p>
                    <p>
                      <span className="font-semibold">Currencies:</span>
                    </p>
                    <p>
                      <span className="font-semibold">Languages:</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Country;
