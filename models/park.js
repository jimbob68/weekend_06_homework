const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
  this.dinosaurs = [];
  this.totalVisitorsPerYear = [];
};

Park.prototype.numberOfDinosaurs = function (){
  return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
  const indexOfDinosaurs =
  this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaurs, 1);
};

Park.prototype.guestsAttractedPerDay = function(dinosaur) {
return this.collectionOfDinosaurs.guestsAttractedPerDay;
};

// Park.prototype.findDinosaurBySpecies = function(species) {
//   return this.dinosaurs.filter((species) => {
//     return  dinosaur.species === species;
//   })
// };

Park.prototype.totalGuestsAttractedPerDay = function (){
  return  this.guestsAttractedPerDay.reduce((total, guestsAttractedPerDay) => {
    return total += guestsAttractedPerDay.total;
  }, 0);
};

Park.prototype.totalGuestsAttractedPerYear = function (){
  let guestsAttractedPeryear = this.guestsAttractedPerDay *= 365;
  return this.guestsAttractedPerYear.reduce((total,  totalGuestsAttractedPerYear) => {
  return total += guestsAttractedPerYear;
  }, 0);
};

Park.prototype.totalAnnualRevenue = function (){
  return this.totalVisitorsPerYear * this.ticketPrice;
  return  totalAnnualRevenue;
};






module.exports = Park;
