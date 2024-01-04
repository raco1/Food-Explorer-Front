import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dish } from '../pages/Dish';
import { NotFound } from '../pages/NotFound';

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/dishes/:id" element={<Dish />} />
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}