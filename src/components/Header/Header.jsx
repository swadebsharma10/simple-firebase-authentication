import { NavLink } from "react-router-dom";


const Header = () => {

    const menu = <>

    <li> 
     <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-blue-600" : ""}
     > Home</NavLink>
    </li>
    <li> 
     <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-blue-600" : ""}
     > Github</NavLink>
    </li>
    <li> 
     <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "underline text-blue-600" : ""}
     > Login</NavLink>
    </li>
    
    </>

    return (
        <div>
        <div className="navbar bg-blue-400 px-5 py-3 rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-xl text-white rounded-box w-52">
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">FIRE BASE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl font-bold text-orange-400 px-1">
            {menu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div> 
        </div>
    );
};

export default Header;