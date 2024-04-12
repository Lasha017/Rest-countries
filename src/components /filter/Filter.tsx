import useFetch from "../../hooks/useFetch";

const Filter = () => {
  const { data } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  const regions = [
    {
      name: "africa"
    }, {
      name: "europe"
    },{
      name: "asia"
    },{
      name: "antarctic"
    },{
      name: "ocenania"
    },{
      name: "americas"
    }
  ]
  return (
    <>
      <form>
      <select
        name="filter-by-region"
        id="filter-by-region"
        className="w-[200px] h-[30px] outline-none shadow rounded px-4 "
        > {regions.map((region, index) => (
          <option key={index} value={region.name}>{region.name}</option>
        ))}</select>
     </form>
    </>
  );
};

export default Filter;
