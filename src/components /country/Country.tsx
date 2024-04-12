import useFetch from "../../hooks/useFetch";
import Header from "../header/Header";
import { Link, useParams } from "react-router-dom";
import { CountryTypes } from "../../types/Types";
import Loader from "../loader/Loader";

const Country = () => {
  const { name } = useParams();
  const { data, isLoading } = useFetch(
    `https://restcountries.com/v3.1/name/${name}`
  );

  if (isLoading) return <Loader title="Please wait..." />;

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
            <div
              key={country.population}
              className="flex gap-[200px] pt-20 max-[768px]:flex-col max-[768px]:gap-0"
            >
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
                <div className="gap-[50px] pt-10 flex flex-col">
                  <div className="flex">
                    {" "}
                    <div className="mr-16">
                      <p>
                        <span className="font-semibold">Native Name:</span>{" "}
                        {country.name.nativeName?.eng?.common ||
                          "Not available"}
                      </p>
                      <p>
                        <span className="font-semibold">Population:</span>{" "}
                        {country.population.toLocaleString()}
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
                        <span className="font-semibold">Top Level Domain:</span>{" "}
                        {country.tld}
                      </p>
                      <p>
                        <span className="font-semibold">Currencies:</span>
                      </p>
                      <p>
                        <span className="font-semibold">Languages:</span>{" "}
                      </p>
                    </div>
                  </div>
                  {country.borders && (
                    <ul>
                      <div className="flex max-[1024px]:flex-col max-[1024px]:w-[100px]">
                        <h5 className="pr-2 font-semibold flex items-center">
                          Border Countries:
                        </h5>
                        {country.borders.map((border:any, index:any) => (
                          <li
                            key={index}
                            className="mr-2 px-5 py-1 cursor-pointer"
                            id="li"
                          >
                            {border}
                          </li>
                        ))}
                      </div>
                    </ul>
                  )}
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
