import Image from './../../assets/search-1.svg'

const Search = () => {
  return (
    <>
      <div>
        <img src={Image} alt="Search btn" />
        <input type="search" placeholder="Search for a country…" /></div>
    </>
  )
}

export default Search