const fs = require('fs');

class StationNode {
  constructor(stationName) {
    this.stationName = stationName;
    this.adjacentStations = [];
  }

  addConnection(otherStation) {
    this.adjacentStations.push(otherStation);
    otherStation.adjacentStations.push(this);
  }

  log() {
    let str = `${this.stationName}`;

    for (let station of this.adjacentStations) {
      str += `${station.stationName}`;
    }

    return str;
  }
}

function createStationNodes(inputFile) {
  const stations = {};

  return new Promise((reslove, reject) => {
    fs.readFile(inputFile, 'utf8', (err, data) => {
      for (let line of data.split('\n')) {
        let previousStation = null;
        let currentStation = null;
        const subwayLine = line.trim().split(' - ');

        for (let name of subwayLine) {
          const stationName = name.trim();

          if (!stations.hasOwnProperty(stationName)) {
            let currentStation = new StationNode(stationName);
            stations[stationName] = currentStation;
          } else {
            currentStation = stations[stationName];
          }

          if (previousStation !== null) {
            currentStation.addConnection(previousStation);
          }

          previousStation = currentStation;
        }
      }
      reslove(stations);
    });
  });
}

createStationNodes('./stations.txt').then((data) => console.log(data));
