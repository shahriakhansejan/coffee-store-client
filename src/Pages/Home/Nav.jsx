import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Coffee Store</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addCoffee'>Add Coffee</NavLink></li>
      <li><NavLink to='/signin'>SignIn</NavLink></li>
      <li><NavLink to='/signup'>SignUp</NavLink></li>
      <li><NavLink to='/users'>Users</NavLink></li>
      
    </ul>
  </div>
</div>
    );
};

Nav.propTypes = {
    
};

export default Nav;