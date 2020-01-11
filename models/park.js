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



module.exports = Park;
