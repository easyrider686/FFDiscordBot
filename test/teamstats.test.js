const expect = require("chai").expect;
const teamstats = require("../lib/teamstats.js");

describe('Teamstats functions', function () {
    let input = 'OAK';
    let teamname = 'Oakland Raiders'
    it('getBreakdown function should return a valid object', function () {
      let stats = teamstats.getBreakdown(teamname, input);
      expect(Object.keys(stats).length).to.equal(9);
      expect(stats.offensivePlay).to.be.a.string;
      expect(stats.passingPercentage).to.be.a.string;
      expect(stats.passingYards).to.be.a.string;
      expect(stats.yardsPerPass).to.be.a.string;
      expect(stats.shortPass).to.be.a.string;
      expect(stats.deepPass).to.be.a.string;
      expect(stats.rushingPercentage).to.be.a.string;
      expect(object.rushingYards).to.be.a.string;
      expect(object.yardsPerRush).to.be.a.string;      
    });

    it('getTargets function should return a string length greater than 300', function(){
      let targets = teamstats.getTargets(input);
      return expect(targets).to.have.length.above(300);
    });
});