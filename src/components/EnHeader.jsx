import { Link, useLocation } from "react-router-dom";

function EnHeader() {
  const location = useLocation();

  const isExportPage = location.pathname === "/export";

  return (
    <header className="max-w-screen-xl mx-auto border-b-2">
      <nav className="container mx-auto flex flex-wrap justify-between items-center w-full p-4 lg:p-8">
        <Link
          to={
            isExportPage || location.pathname === "/contactEN" ? "/export" : "/"
          }
          className="text-gray-600"
        >
          <img
            className="h-9"
            src="https://www.joma-tools.com/catalogo/img/logo-1666880563.jpg.pagespeed.ce.71kNUIfzUR.jpg"
            alt="Logo de la empresa"
          />
        </Link>
        <Link
          className="text-gray-600 border border-joma-blue border-solid rounded-md p-3 hover:bg-joma-blue hover:text-white"
          to="/contactEN"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default EnHeader;
