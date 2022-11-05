import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePages } from '../pages/HomePages';
import { MeetPage } from '../pages/MeetPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/meet/:id' element={<MeetPage />} />
      </Routes>
    </BrowserRouter>
  );
};
