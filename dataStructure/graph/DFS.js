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
            currentStation = new StationNode(stationName);
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

function dfs(graph, startNode) {
  const stack = [];

  for (let stationNode of Object.values(graph)) {
    stationNode.visited = 0;
  }

  startNode.visited = 1;
  stack.push(startNode);

  while (stack.length > 0) {
    const currentStation = stack.pop();
    currentStation.visited = 2;

    for (station of currentStation.adjacentStations) {
      if (station.visited === 0) {
        station.visited = 1;
        stack.push(station);
      }
    }
  }
}

createStationNodes('./new_stations.txt').then((stations) => {
  const gangNamStation = stations['강남'];
  dfs(stations, gangNamStation);
  console.log(stations['강동구청'].visited);
  console.log(stations['평촌'].visited);
  console.log(stations['송도'].visited);
  console.log(stations['개화산'].visited);
  console.log(stations['반석'].visited);
  console.log(stations['지족'].visited);
  console.log(stations['노은'].visited);
  console.log(stations['(대전)신흥'].visited);
});
