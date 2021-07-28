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

function bfs(graph, startNode) {
  const queue = [];

  for (let stationNode of Object.values(graph)) {
    stationNode.visited = false;
    stationNode.predecessor = null;
  }

  startNode.visited = true;
  queue.push(startNode);

  while (queue.length > 0) {
    const currentStation = queue.shift();

    for (station of currentStation.adjacentStations) {
      if (station.visited === false) {
        station.visited = true;
        station.predecessor = currentStation;
        queue.push(station);
      }
    }
  }
}

function backTrack(destinationNode) {
  let str = '';
  let temp = destinationNode;

  while (temp !== null) {
    str = temp.stationName + ' ' + str;
    temp = temp.predecessor;
  }

  return str;
}

createStationNodes('./new_stations.txt').then((stations) => {
  bfs(stations, stations['을지로3가']);
  console.log(backTrack(stations['강동구청']));
});
