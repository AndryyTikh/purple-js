class Car {
	constructor(brand, model, mileage) {
		this.#brand = brand
		this.#model = model
		this.#mileage = mileage
	}

	get mileage() {
		return this.#mileage
	}

	set mileage(newValue) {
		this.#mileage = newValue
	}

	info() {
		console.log(this.#brand, this.#model, this.#mileage)
	}
}
