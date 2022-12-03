import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../images/unixube-logo.png"
// import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = ({collapse}) => (
  <Stack direction="row" alignItems="center" p={2}  sx={{ position:  "sticky", background: 'rgb(15, 23, 42)', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
    <div  className='items-center justify-center flex '>
        
        <img  src={logo} alt="logo" className='h-14' />
   
        {collapse ? "" :  <h1 className='Lobster font-bold text-5xl gradient-text -ml-1'>nixube</h1>}
        
        
        </div>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
