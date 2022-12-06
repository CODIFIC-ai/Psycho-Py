import { Outlet, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/experiment/wwwhen") return <Outlet />;
  
  return (
    <>
      <div className="container texto-header">
        <header className="d-flex justify-content-center py-2 border-bottom">
          <a href="/" className="d-flex align-items-center me-md-auto text-dark text-decoration-none">
            <img className="header-image" alt="No data" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Psychopy.png" />
            <span>Psycho Py</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="/experiment/wwwhen" className={`nav-link ${currentPath === "/experiment/wwwhen" && "active"}`}>
                WWWHEN
              </a>
            </li>
            <li className="nav-item">
              <a href="/experiment/contexto" className={`nav-link ${currentPath === "/experiment/contexto" && "active"}`}>
                CONTEXTO
              </a>
            </li>
          </ul>
        </header>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
