type Situation = "habitado" | "habitável" | "inabitável" | "inexplorado";
type Coordinates = [number, number, number, number];
type Planet = {
  name: string;
  coordinates: Coordinates;
  situation: Situation;
  satellites: string[];
};
let listOfPlanets: Planet[] = [];

function insertPlanet(
  name: string,
  coordinates: Coordinates,
  situation: Situation,
  satellites: string[]
) {
  let planet: Planet = {
    name,
    coordinates,
    situation,
    satellites,
  };
  listOfPlanets.push(planet);
}

function updatePlanetSituation(name: string, newSituation: Situation) {
  let planetToUpdate = listOfPlanets.find((element) => element.name === name);
  if (planetToUpdate) {
    planetToUpdate.situation = newSituation;
  } else {
    console.log("planeta não encontrado");
  }
}

function addSatellite(name: string, satelliteToAdd: string) {
  let planetToAddSatellite = listOfPlanets.find(
    (element) => element.name === name
  );
  if (planetToAddSatellite) {
    planetToAddSatellite.satellites.push(satelliteToAdd);
  } else {
    console.log("planeta não encontrado");
  }
}

function removeSatellite(name: string, satelliteToRemove: string) {
  let planetToRemoveSatellite = listOfPlanets.find(
    (element) => element.name === name
  );
  if (planetToRemoveSatellite) {
    let findSatellite = planetToRemoveSatellite.satellites.find(
      (element) => element === satelliteToRemove
    );
    if (findSatellite) {
      let satelliteIndex =
        planetToRemoveSatellite.satellites.indexOf(satelliteToRemove);
      planetToRemoveSatellite.satellites.splice(satelliteIndex, 1);
    } else {
      console.log("satelite não existe");
    }
  } else {
    console.log("planeta não encontrado");
  }
}

function showPlanets() {
  for (let i of listOfPlanets) {
    for (let j in i) {
      if (j === "name") {
        console.log("Nome do planeta: " + i[j]);
      }
      if (j === "coordinates") {
        console.log("Coodernadas: " + i[j]);
      }
      if (j === "situation") {
        console.log("Situação: " + i[j]);
      }
      if (j === "satellites") {
        console.log("Satélites: " + i[j] + "\n");
      }
    }
  }
}

// // teste geral de todas as funções
// insertPlanet("mercurio", [0, 0, 0, 0], "inabitável", ["N/A"]);
// insertPlanet("venus", [1, 1, 1, 1], "inabitável", ["N/A"]);
// insertPlanet("terra", [2, 2, 2, 2], "habitado", ["lua"]);
// insertPlanet("marte", [3, 3, 3, 3], "habitável", ["fobos, deimos"]);
// insertPlanet("júpter", [4, 4, 4, 4], "inabitável", [
//   "io, europa, ganimedes, calisto",
// ]);
// showPlanets();
// updatePlanetSituation("terra", "inabitável");
// showPlanets();
// addSatellite("júpter", "temisto");
// showPlanets();
// removeSatellite("júpter", "temisto");
// showPlanets();
