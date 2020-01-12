const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');
const Park = require('../models/park.js');
describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    // dinosaur = new Dinosaur('Brontosaurus', 'vegitarian', 48);
    // dinosaur = new Dinosaur('Oviraptor', 'omnivore', 35);
  });

  it('should have a species', function () {
    const actual = dinosaur.species;
    assert.strictEqual(actual, 't-rex');
  });

  it('should have a diet', function () {
    const actual = dinosaur.diet;
    assert.strictEqual(actual, 'carnivore');
  });

  it('should have an average number of visitors it attracts per day', function () {
    const actual = dinosaur.guestsAttractedPerDay;
    assert.strictEqual(actual, 50);
  });

});
