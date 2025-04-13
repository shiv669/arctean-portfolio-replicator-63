
import { Routes, Route } from 'react-router-dom';
import MainIndex from './pages/MainIndex';
import NotFound from './pages/NotFound';
import { Toaster } from "./components/ui/sonner";

const AppWrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default AppWrapper;
