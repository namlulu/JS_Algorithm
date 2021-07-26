const fs = require('fs');

class StationNode {
  constructor(stationName) {
    this.stationName = stationName;
  }
}

function createStationNodes(inputFile) {
  const stations = {};

  return new Promise((reslove, reject) => {
    fs.readFile(inputFile, 'utf8', (err, data) => {
      for (let line of data.split('\n')) {
        const subwayLine = line.trim().split(' - ');

        for (let name of subwayLine) {
          const stationName = name.trim();

          if (!stations.hasOwnProperty(stationName)) {
            const newNode = new StationNode(stationName);
            stations[stationName] = newNode;
          }
        }
      }
      reslove(stations);
    });
  });
}

createStationNodes('./stations.txt').then((data) => console.log(data));
