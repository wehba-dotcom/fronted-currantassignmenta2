import { NavLink } from 'react-router-dom';

function Header({ facade, loggedIn }) {
  return (
    <div>
      <ul className="header">
        <li> <NavLink exact activeClassName="active" to="/"> Home </NavLink></li>
      
         
        
        {facade.hasUserAccess('user', loggedIn) && (
          <li><NavLink activeClassName="active" to="/security">Security</NavLink></li>
        )}
         {facade.hasUserAccess('user', loggedIn) && (
          <li><NavLink activeClassName="active" to="/thread">Thread</NavLink></li>
        )}
         {facade.hasUserAccess('user', loggedIn) && (
          <li><NavLink activeClassName="active" to="/routering">Routering</NavLink></li>
        )}
        {facade.hasUserAccess('admin', loggedIn) && (
          <li><NavLink activeClassName="active" to="/securityFetch"> SecurityFetch</NavLink></li>
        )}
         <li><NavLink  activeClassName="active" to="/signin">SignIn</NavLink></li>
      </ul>
    </div>
  );
}

export default Header;
