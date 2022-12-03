
import { Link } from "react-router-dom";
import logo from "../images/unixube-logo.png"
// import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = ({collapse}) => (
  <div className="w-full sticky top-0 flex items-center justify-between  py-6" >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
    <div  className='items-center justify-center flex '>
        
        <img  src={logo} alt="logo" className={`h-14 ${collapse ? "rotate-[360deg] transition-all duration-700 ease-out" : ""} `} />
   
        {collapse ? "" :  <h1 className='Lobster font-bold text-5xl gradient-text -ml-1'>nixube</h1>}
        
        
        </div>
    </Link>
    <SearchBar />
  </div>
);

export default Navbar;
