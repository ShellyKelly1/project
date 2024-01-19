import { makeAutoObservable } from 'mobx';

class BasketStore {
	constructor() {
		this._products = [];
		makeAutoObservable(this);
	}
	setProducts(products) {
		this._products.push(products);
	}
	get products() {
		return this._products;
	}
}

export default BasketStore;
