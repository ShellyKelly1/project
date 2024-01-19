import { makeAutoObservable } from "mobx";

export const ogurec = `https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg?w=740&t=st=1705257560~exp=1705258160~hmac=9a5ab5827e5bfc7c115febd8d51e042d7ea724efa565da6f400725482a50705e`;

export default class ProductStore {
  constructor() {
    this._products = [
      {
        id: 1,
        name: "Огурец",
        calories: 1,
        fats: 15,
        proteins: 152,
        carbohydrates: 12141,
        img: ogurec,
        inDatabase: false,
        type: 1,
      },
      {
        id: 2,
        name: "Помидор",
        calories: 1,
        fats: 15,
        proteins: 152,
        carbohydrates: 141,
        img: ogurec,
        inDatabase: false,
        type: 1,
      },
      {
        id: 3,
        name: "Морква",
        calories: 123,
        fats: 321,
        proteins: 15,
        carbohydrates: 16,
        img: ogurec,
        inDatabase: false,
        type: 1,
      },
      {
        id: 4,
        name: "Салат",
        calories: 123,
        fats: 321,
        proteins: 15,
        carbohydrates: 1216,
        img: ogurec,
        inDatabase: false,
        type: 2,
      },
      {
        id: 5,
        name: "Суп",
        calories: 123,
        fats: 321,
        proteins: 15,
        carbohydrates: 1216,
        img: ogurec,
        inDatabase: false,
        type: 2,
      },
      {
        id: 6,
        name: "Тест3",
        calories: 123,
        fats: 321,
        proteins: 15,
        carbohydrates: 1216,
        img: ogurec,
        inDatabase: false,
        type: 2,
      },
      {
        id: 7,
        name: "Тест4",
        calories: 123,
        fats: 321,
        proteins: 15,
        carbohydrates: 1216,
        img: ogurec,
        inDatabase: false,
        type: 2,
      },
    ];
    this._types = [
      { id: 1, name: "Продукты" },
      { id: 2, name: "Блюда" },
    ];
    this._selectedType = null;
    makeAutoObservable(this);
  }

  addProduct(product) {
    this._products = [
      ...this._products,
      { ...product, id: this._products.length + 1, type: 2 },
    ];
  }

  setDishes(dishes) {
    this._dishes = dishes;
  }

  setTypes(types) {
    this._types = types;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get products() {
    return this._products;
  }
  get dishes() {
    return this._dishes;
  }

  get types() {
    return this._types;
  }

  get selectedType() {
    return this._selectedType;
  }
}
