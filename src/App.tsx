import { Container } from './styles/Common.styles';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Container>
      <Header />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
