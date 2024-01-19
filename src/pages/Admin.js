import React from 'react';
import { observer } from 'mobx-react-lite';
import './css/Admin.css'
import CardRequestSetItem from "../components/CardRequestSetItem.js";

const Admin = observer(() => {
  const dish = {id: 1, name: "Блюдо", calories: 12, fats: 15, proteins: 20, carbohydrates: 30}
  return (
    <div className='admin-main-div'>
      <div className='admin-requests'>
      <CardRequestSetItem product={dish}></CardRequestSetItem>
      </div>
    </div>
  );
});

export default Admin;
