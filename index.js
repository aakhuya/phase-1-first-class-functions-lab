const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
};

console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers =function(drivers) {
    return drivers.slice(-2);
};

console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[1](drivers)); 

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare*multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

console.log(fareDoubler(20));

const fareTripler = createFareMultiplier(3);

console.log(fareTripler(10)); 

const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
};

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));