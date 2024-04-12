import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Filter from "../filter/Filter";
import Loader from "../loader/Loader";
import Search from "../search /Search";
import { Country } from "./../../types/Types";

const Countries = () => {
  const { data, isLoading, isError } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  const [search,setSearch] = useState<string>("")


  if (isLoading) return <Loader title="Please wait..." />;
  if (isError) return <h1>Something went wrong!</h1>;

  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="flex flex-col p-16">
          <div className="flex justify-between">
            <Search setSearch={setSearch}/>
            <Filter />
          </div>
          <div className="grid grid-cols-4 pt-20  g-[50px] md:max-xl:grid-cols-2  max-[768px]:grid-cols-1 justify-items-center">
            {(data || [])
              .filter((item: Country) => {
                return (
                  search.toLowerCase() === "" ||
                  item.name.common.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((country: Country, index: number) => (
                <div
                  key={index}
                  className="bg-white w-[250px] rounded-lg cursor-pointer m-8"
                >
                  <img
                    key={index}
                    src={country.flags.svg}
                    className="w-[250px] h-[180px] rounded-t-lg"
                  />
                  <div className="p-5">
                    <h1 className="font-extrabold text-[18px] pb-5">
                      {country.name.common}
                    </h1>
                    <div className="flex">
                      <h3 className="pr-2 font-semibold">Population:</h3>
                      {country.population}
                    </div>
                    <div className="flex">
                      <h3 className="pr-2 font-semibold">Region:</h3>
                      {country.region}
                    </div>
                    <div className="flex">
                      <h3 className="pr-2 font-semibold">Capital:</h3>
                      {country.capital}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;
