const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
  this.dinosaurs = [];
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



module.exports = Park;
