import { makeAutoObservable } from "mobx";

class BasketStore {
  constructor() {
    this._products = [];
    makeAutoObservable(this);
  }
  setProduct(product) {
    this._products.push(product);
  }
  get products() {
    return this._products;
  }
}

export default BasketStore;
