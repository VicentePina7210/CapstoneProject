import "../home.css";
function Home() {
  let convoHistory = ["convo 1, convo 2, convo 3"];
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
          <img
            src="src/assets/menus.png"
            alt="Hamburger Icon"
            className="img-fluid"
          />
        </div>
        <div>
          <h1>Local Rag UI</h1>
        </div>
        <div>
          <img
            src="src/assets/user.png"
            alt="Profile Icon"
            className="img-fluid"
          />
        </div>
      </nav>
      <div className="text-center mt-4">
        <h2 className="text-light fw-bold">Say hello!</h2>
        <p className="text-secondary fs-5">Start typing...</p>
      </div>
    </div>
  );
}

export default Home;
