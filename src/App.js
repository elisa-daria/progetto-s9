import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import EpiflixNavBar from "./components/EpiflixNavBar";
import logo from "./logoNetflix.png";
import EpiflixGenres from "./components/EpiflixGenres";
import EpiflixFooter from "./components/EpiflixFooter";
import EpiflixSaga from "./components/EpiflixSaga";

function App() {
  return (
    <>
      <header>
        <EpiflixNavBar logo={logo} logoAlt="netflix-logo" />
        <EpiflixGenres genre="Drama,LGBTQ+,Crime" />
      </header>
      <main className="bg-black">
        <EpiflixSaga sagaName="Jurassic Park" searchTerm="jurassic%20park" />
        <EpiflixSaga sagaName="Indiana Jones" searchTerm="indiana%20jones" />
        <EpiflixSaga sagaName="The Mummy" searchTerm="the%20mummy" />
        {/* sarebbe bello se funzionasse */}
      </main>
      <footer>
        <EpiflixFooter />
      </footer>
    </>
  );
}

export default App;
