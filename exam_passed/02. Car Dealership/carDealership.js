class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model === '' || model === null || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!')
        }
        let car = {
            model,
            horsepower,
            price,
            mileage,
        }
        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model, desiredMileage) {
        let car = this.availableCars.findIndex(x => x.model === model);
        if (car === -1) {
            throw new Error(`${model} was not found!`)
        }
        if (this.availableCars[car].mileage > desiredMileage) {
            if (this.availableCars[car].mileage - desiredMileage <= 40000) {
                this.availableCars[car].price -= Number(this.availableCars[car].price * 0.05);
            } else if (this.availableCars[car].mileage - desiredMileage > 40000) {
                this.availableCars[car].price -= Number(this.availableCars[car].price * 0.10);
            }
        }
        let soldPrice = this.availableCars[car].price;
        this.totalIncome += soldPrice;
        let soldCar = {
            model: this.availableCars[car].model,
            horsepower: this.availableCars[car].horsepower,
            soldPrice,
        }
        this.availableCars.splice(car, 1);
        this.soldCars.push(soldCar);
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }
    currentCar() {
        if (this.availableCars.length > 0) {
            let result = [];
            result.push('-Available cars:');
            for (const car of this.availableCars) {
                result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
            }
            return result.join('\n');
        } else {
            return 'There are no available cars'
        }
    }
    salesReport(criteria) {
        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`)
        result.push(`-${this.soldCars.length} cars sold:`);
        if (criteria === 'horsepower') {
            let sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
            for (const car of sortedCars) {
                result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
            }
        } else if (criteria === 'model') {
            let sortedCars = this.soldCars.sort((a, b) => b.model - a.model);
            for (const car of sortedCars) {
                result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
            }
        } else {
            throw new Error('Invalid criteria!');
        }
        return result.join('\n');
    }
}
//-SoftAuto has a total income of 29600.00$\n2 cars sold:\n---Mercedes C63 - 300 HP - 26100.00$\n---Toyota Corolla - 100 HP - 3500.00$
//-SoftAuto has a total income of 29600.00$\n-2 cars sold:\n---Mercedes C63 - 300 HP - 26100.00$\n---Toyota Corolla - 100 HP - 3500.00$

// let dealership = new CarDealership('SoftAuto');

// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// //New car added: Toyota Corolla - 100 HP - 190000 km - 3500.00$'
// //New car added: Toyota Corolla - 100 HP - 190000.00 km - 3500.00$
// //Fifth Test
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));
//Fourth Test
// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.currentCar());
//Third Test
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

//Second Test
// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

//First Test
//let dealership = new CarDealership('SoftAuto');
//console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
//console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
//console.log(dealership.addCar('', 120, 4900, 240000));