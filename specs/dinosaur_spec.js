const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');
const Park = require('../models/park.js');
describe('Dinosaur', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Brontosaurus', 'vegitarian', 48);
    dinosaur3 = new Dinosaur('Oviraptor', 'omnivore', 35);
    dinosaur4 = new Dinosaur('t-rex', 'carnivore', 49);
  });

  it('should have a species', function () {
    const actual = dinosaur1.species;
    assert.strictEqual(actual, 't-rex');
  });

  it('should have a diet', function () {
    const actual = dinosaur1.diet;
    assert.strictEqual(actual, 'carnivore');
  });

  it('should have an average number of visitors it attracts per day', function () {
    const actual = dinosaur1.guestsAttractedPerDay;
    assert.strictEqual(actual, 50);
  });

});
