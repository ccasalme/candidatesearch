import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", padding: "10px", background: "#282c34", color: "white" }}>
      <h2>Candidate Search</h2>
      <div>
        <Link to="/" style={{ marginRight: "20px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/saved" style={{ color: "white", textDecoration: "none" }}>Saved Candidates</Link>
      </div>
    </nav>
  );
};

export default Nav;
