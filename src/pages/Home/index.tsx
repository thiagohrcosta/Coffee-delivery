import Navbar from "../../components/Navbar";
import Banner from "./components/Banner";
import CoffeList from "./components/CoffeeList";
import { HomeContainer } from "./styles";

export default function Home(){
  return (
    <HomeContainer>
      <Navbar />
      <Banner />
      <CoffeList />
    </HomeContainer>
  )
}
