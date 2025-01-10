import { Link, Outlet } from "react-router-dom";
import logo from "./assets/hoaxify.png";
import { LanguageSelector } from "./shared/components/LanguageSelector";
import { useTranslation } from "react-i18next";

function App() {
  const{t}=useTranslation();
  return (
    <>
      <nav className="navbar navbar-expand bg-body-tertiary shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} width={60} />
            Hoaxify
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/singup">{t('singUp')}</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-3">
      <Outlet />  
      </div>
      <div className="text-center">
        <LanguageSelector />
      </div>
      
    </>
  );
}

export default App;
