function insertPlanet(
  name: string,
  coordinates: [number, number, number, number],
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
    alert("planeta não encontrado");
  }
}

function addSatellite(name: string, satelliteToAdd: string) {
  let planetToAddSatellite = listOfPlanets.find(
    (element) => element.name === name
  );
  if (planetToAddSatellite) {
    planetToAddSatellite.satellites.push(satelliteToAdd);
  } else {
    alert("planeta não encontrado");
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
      alert("satelite não existe");
    }
  } else {
    alert("planeta não encontrado");
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

type Planet = {
  name: string;
  coordinates: [number, number, number, number];
  situation: Situation;
  satellites: string[];
};
type Situation = "habitado" | "habitável" | "inabitável" | "inexplorado";
let listOfPlanets: Planet[] = [];
