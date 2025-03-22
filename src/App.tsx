import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ReadingPage from './pages/ReadingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/reading" element={<ReadingPage />} />
    </Routes>
  );
}

export default App;
