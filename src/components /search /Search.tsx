import Image from "./../../assets/search-1.svg";

const Search = ({setSearch}:any) => {


  return (
    <>
      <div className="flex relative">
        <img
          src={Image}
          alt="Search btn"
          className="absolute top-5 left-2 z-[10000] cursor-pointer"
        />
        <input
          type="search"
          placeholder="Search for a country…"
          className="p-4 pl-10 w-[400px] rounded-lg outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
