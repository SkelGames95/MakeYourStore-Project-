import { Hero } from "../Components/Hero";
import { Searchbar } from "../Components/Searchbar";
import { Welcome } from "../Components/Welcome";
import { Nav } from "../Components/Nav";
import "./Homepage.css";
import Footer from "../Footer";

function onSearch(data) {
  console.log(data);
}
export function Homepage() {
  return (
    <div>
      <Hero />
      {/* <Searchbar onSearch={onSearch} /> */}
      <Welcome />
    </div>
  );
}
