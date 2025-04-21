import "../home.css";
import menuIcon from "../assets/menus.png";
import userIcon from "../assets/user.png";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "rgb(31, 34, 37)",
        opacity: 1,
        minHeight: "100vh",
      }}
    >
      <nav className="navbar sticky-top bg-dark text-light">
        <div>
          <img src={menuIcon} alt="Hamburger Icon" className="img-fluid" />
        </div>
        <div>
          <h1 style={{ opacity: "90%" }}>Local Rag UI</h1>
        </div>
        <div>
          <img src={userIcon} alt="Profile Icon" className="img-fluid" />
        </div>
      </nav>
    </div>
  );
}

export default Home;
