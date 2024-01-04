import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { CreateDish } from '../pages/CreateDish';
import { EditDish } from '../pages/EditDish'
import { Dish } from '../pages/Dish';
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/editdish/:id" element={<EditDish/>}/>
      <Route path="/newdish" element={<CreateDish />} />
      <Route path="/dishes/:id" element={<Dish />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}