let { expect } = require('chai');
let { rentCar } = require("./rentCar.js")
describe('Repository', function () {
    describe("Search Car Method", function () {
        it("Search car method should throw an error if it has invalid input", function () {
            expect(() => rentCar.searchCar(1).to.throw(Error, 'Invalid input!'))
            expect(() => rentCar.searchCar().to.throw(Error, 'Invalid input!'))
            expect(() => rentCar.searchCar([1]).to.throw(Error, 'Invalid input!'))
        });
        it("Search car method should throw an error if there are no matching element", function () {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Ford').to.throw(Error, 'There are no such models in the catalog!'))
        });
        it("Search car method should work if there is matching element", function () {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal('There is 1 car of model Audi in the catalog!')
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW')).to.equal('There is 1 car of model BMW in the catalog!')
        });
        it("Search car method should work if there is matching element", function () {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi')).to.equal('There is 1 car of model Audi in the catalog!')
            expect(rentCar.searchCar([], 'BMW')).to.equal('There are no such models in the catalog!')
        });
        it("Search car method should work if there is more than 1 element", function () {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 'BMW')).to.equal('There is 2 car of model BMW in the catalog!')
        });
    });
    describe("Calculate Price of Car Method", function () {
        it("Calculate Price should throw error if there is no first input", function () {
            expect(() => rentCar.calculatePriceOfCar("Audi").to.throw(Error, 'Invalid input!'));
        });
        it("Calculate Price should throw error if the second input is invalid", function () {
            expect(() => rentCar.calculatePriceOfCar('Audi', 5).to.throw(Error, 'Invalid input!'));
        });
        it("Calculate Price should throw error if there is no input", function () {
            expect(() => rentCar.calculatePriceOfCar().to.throw(Error, 'Invalid input!'));
        });
        it("Calculate Price should throw error if there is no such model", function () {
            expect(() => rentCar.calculatePriceOfCar('Ferarri', 2).to.throw(Error, 'No such model in the catalog!'));
        });
        it("Calculate Price should work properly", function () {
            expect(rentCar.calculatePriceOfCar('Audi', 1)).to.equal('You choose Audi and it will cost $36!')
        });
        it("Calculate Price should work properly with 0", function () {
            expect(rentCar.calculatePriceOfCar('Audi', 0)).to.equal('You choose Audi and it will cost $0!')
        });
    });
    describe("Check Budget of Car Method", function () {
        it("Check Budget should throw error if the first input is invalid", function () {
            expect(() => rentCar.checkBudget(["Volkswagen", "BMW", "Audi"], 'Monday').to.throw(Error, 'Invalid input!'));
        });
        it("Check Budget should throw error if the second input is invalid", function () {
            expect(() => rentCar.checkBudget(["Volkswagen", "BMW", "Audi"], 'Monday', 2).to.throw(Error, 'Invalid input!'));
        });
        it("Check Budget should throw error if there is no input", function () {
            expect(() => rentCar.checkBudget().to.throw(Error, 'Invalid input!'));
        });
        it("Check Budget should return if there is not enough budget", function () {
            expect(rentCar.checkBudget(10, 3, 20)).to.equals('You need a bigger budget!');
        });
        it("Check Budget should return if there is enough budget", function () {
            expect(rentCar.checkBudget(10, 3, 40)).to.equals('You rent a car!');
        });
        it("Check Budget should return if there is equal budget", function () {
            expect(rentCar.checkBudget(10, 3, 30)).to.equals('You rent a car!');
        });
    });
});
