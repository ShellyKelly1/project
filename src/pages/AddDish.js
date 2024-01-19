import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import "./css/Admin.css";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { MAIN_ROUTE } from "../utils/consts";

const AddDish = observer(() => {
  const navigate = useNavigate();
  const { product } = useContext(Context);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [dish, setDish] = useState({
    proteins: "",
    fats: "",
    carbohydrates: "",
    calories: "",
  });
  const handleSubmit = () => {
    product.addProduct({ ...dish, name, img: image });
    navigate(MAIN_ROUTE);
  };

  const handleOnDishChange = (dishKey) => (event) => {
    const onlyNumbers = event.target.value.replace(/[^$0-9\.]/g, "");

    setDish((prev) => ({
      ...prev,
      [dishKey]: Number(onlyNumbers),
    }));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (file.type === "image/jpeg" || file.type === "image/png")
        setImage(String(reader.result));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="admin-main-div">
      <div className="admin-requests">ADD DISH</div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Calories:
          <input
            value={dish.calories}
            type="text"
            name="calories"
            onChange={handleOnDishChange("calories")}
          />
        </label>
        <label>
          Fats:
          <input
            value={dish.fats}
            type="text"
            name="fats"
            onChange={handleOnDishChange("fats")}
          />
        </label>
        <label>
          Proteins:
          <input
            value={dish.proteins}
            type="text"
            name="proteins"
            onChange={handleOnDishChange("proteins")}
          />
        </label>
        <label>
          Carbohydrates:
          <input
            value={dish.carbohydrates}
            type="text"
            name="carbohydrates"
            onChange={handleOnDishChange("carbohydrates")}
          />
        </label>
        <label>
          Image:
          <input type="file" onChange={handleAddImage} />
        </label>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
});

export default AddDish;
