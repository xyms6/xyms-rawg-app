import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Xyms Games</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>

      </div>
    </nav>
  );
};

export default Navbar;  