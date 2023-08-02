import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import BigPhoto from "./components/Banner/BigPhoto";
import SearchForm from './components/Search/SearchForm'
import PartnersGallery from './components/PartnersGallery/PartnersGallery'
import Introduct from "./components/Introduct/Introduct";
import Tours from "./components/Tours/Tours";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
        <BigPhoto/> 
        <SearchForm />
      </Banner>
      <Projects />
      <Tours/>
      <Introduct />
      <PartnersGallery/>
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  // background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  // height: 200vh;
  @media (max-width: 640px) {
    // height: 100%;
    margin-bottom: 20rem;
  }
`;

const LightColor = styled.div`
  background: #F4EAE5;
  z-index:0;

`;
