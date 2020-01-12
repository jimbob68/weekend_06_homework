const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 100, 'Apex Predators')
  })

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.collectionOfDinosaurs;
    assert.strictEqual(actual, 'Apex Predators');
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur('Brontosaurus');
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.addDinosaur('Pterosaur')
    park.addDinosaur('Megalodon')
    park.removeDinosaur('Pterosaur');
    const expected = ['Megalodon'];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    const actual = park.collectionOfDinosaurs;
    const expected = 'Apex Predators';
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species')//, function (){
  //   const actual = park.species('t-rex');
  //   const expected = 2
  //   assert.strictEqual(actual, 2)
  // });

  it('should be able to calculate the total number of visitors per day')// function (){
  //   const actual = park.guestsAttractedPerDay();
  //   assert.strictEqual(actual, 182);
  // });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = park.totalGuestsAttractedPerYear();
    assert.strictEqual(actual, 66430);
  });

  it('should be able to calculate total revenue for one year', function (){
    const totalAnnualRevenue = park.ticketPrice *= totalGuestsAttractedPerYear;
    assert.strictEqual(actual, 6643000);

  });



});
