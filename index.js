// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) => drivers.slice(2,4);
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier = (fare) => (muliplier) => fare*muliplier;
const fareDoubler = (fare) => createFareMultiplier(fare)(2);
const fareTripler = (fare) => createFareMultiplier(fare)(3);
const selectDifferentDrivers = (drivers,twoDrivers) => twoDrivers(drivers);