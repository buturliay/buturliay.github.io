import { Link } from 'react-router-dom';
import { HeaderContainer, NavLink } from '../styles/Header.styles.ts';

function Header() {
  return (
    <HeaderContainer>
      <h1>Yuliya Buturlia</h1>
      <nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <NavLink>About</NavLink>
        </Link>
        <Link to="/reading" style={{ textDecoration: 'none' }}>
          <NavLink>Reading</NavLink>
        </Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header; 