import { Hero } from "../Components/Hero";
import { Searchbar } from "../Components/Searchbar";
import { Welcome } from "../Components/Welcome";
import "./Homepage.css";
import Footer from "../Footer";
import { Header } from "../Header";

function onSearch(data) {
  console.log(data);
}
export function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <Searchbar onSearch={onSearch} />
      <Welcome />
      <Footer />
    </div>
  );
}
