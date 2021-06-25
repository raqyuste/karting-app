const data = require("./data.json");

const timeToSeconds = (time) => {
  const arrayTime = time.split(":");
  const seconds = +arrayTime[0] * 3600 + +arrayTime[1] * 60 + +arrayTime[2];

  return seconds;
};

const getPointsByPosition = (position, numberOfPilots) => {
  return numberOfPilots / position;
};

const getPilotTimesByRace = (pilots) => {
  let pilotTimesByRace = {};

  pilots.forEach((pilot) => {
    pilot.races.forEach((race) => {
      pilotTimesByRace[race.name] = pilotTimesByRace[race.name] || [];
      pilotTimesByRace[race.name].push({
        pilot: pilot._id,
        time: race.time,
      });
    });
  });

  return pilotTimesByRace;
};

const getPilotTimesByRaceOrdered = (pilots) => {
  const pilotTimesByRace = getPilotTimesByRace(pilots);

  for (const race in pilotTimesByRace) {
    pilotTimesByRace[race] = pilotTimesByRace[race].sort(
      ({ time: firstTime }, { time: secondTime }) =>
        timeToSeconds(firstTime) - timeToSeconds(secondTime)
    );
  }

  return pilotTimesByRace;
};

const getPilotsWithRacingPositions = (pilots) => {
  const pilotTimesByRaceOrdered = getPilotTimesByRaceOrdered(pilots);

  return pilots.map((pilot) => {
    pilot.races = pilot.races.map((race) => {
      race.position =
        pilotTimesByRaceOrdered[race.name].findIndex(
          (element) => element.pilot === pilot._id
        ) + 1;

      return race;
    });

    return pilot;
  });
};

const populatePilotsWithPositions = (pilots) => {
  const pilotsWithRacingPositions = getPilotsWithRacingPositions(pilots);

  const numberOfPilots = pilots.length;
  const pilotWithPoints = pilotsWithRacingPositions.map((pilot) => ({
    ...pilot,
    points: pilot.races.reduce(
      (points, { position }) =>
        points + getPointsByPosition(position, numberOfPilots),
      0
    ),
  }));

  return pilotWithPoints
    .sort(({ points: firstEl }, { points: secondEl }) => secondEl - firstEl)
    .map((pilot, index) => ({ ...pilot, position: index + 1 }));
};

class Data {
  constructor() {
    this.data = populatePilotsWithPositions(data);
  }

  get() {
    return this.data;
  }
}

export default new Data();
