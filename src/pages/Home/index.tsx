import Navbar from "../../components/Navbar";
import Banner from "./components/Banner";
import { HomeContainer } from "./styles";

export default function Home(){
  return (
    <HomeContainer>
      <Navbar />
      <Banner />
    </HomeContainer>
  )
}
