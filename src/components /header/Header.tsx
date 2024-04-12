const Header = () => {
  return (
    <div className="flex justify-between p-8 shadow-md bg-white" id="hd">
      <a href="/"><h1 className="font-extrabold">Where in the world?</h1></a>
      <button className="font-semibold pointer">Dark Mode</button>
    </div>
  );
};

export default Header;
