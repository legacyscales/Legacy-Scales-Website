import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AboutServices } from './pages/AboutServices';
import { BookCall } from './pages/BookCall';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutServices />} />
          <Route path="book" element={<BookCall />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
