window.addEventListener("load", function () {
  init();
});

function init() {
  getEvents();
  console.log("script.js loaded");

  document.createRace.raceCreate.addEventListener("click", function (e) {
    e.preventDefault();
    createRace();
    document.createRace.reset();
  });
}

function getEvents() {
  console.log("made it here");

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/race");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let raceJson = xhr.responseText;
        let raceArray = JSON.parse(raceJson);
        console.log(raceArray);

        createTable(raceArray);
      } else if (xhr.status === 404) {
        console.log("Race not found");
      } else {
        console.log("Error retrieving all the races");
      }
    }
  };
  xhr.send();
  console.log("events got");
}

function createTable(raceArray) {
	var totalLength = 0;
  let raceTable = document.getElementById("div1");
  raceTable.textContent = "";
  let table = document.createElement("table");
  table.setAttribute("id", "raceList");
  raceTable.appendChild(table);
  let tableHead = createTableHead();
  table.appendChild(tableHead);
  if (typeof raceArray !== "undefined") {
    for (let i = 0; i < raceArray.length; i++) {
      let singleRace = raceArray[i];
      let tableRow = createRow(singleRace);
	  table.appendChild(tableRow);
	  totalLength += singleRace.length;
    }
  }
  let tr = document.createElement("tr");
  let lengthTotal = document.createElement("td");
  let total = document.createElement("td");
  lengthTotal.textContent = 'Total Length of All Tracks: '
  total.textContent = totalLength;
  tr.appendChild(lengthTotal);
  tr.appendChild(total);
  table.appendChild(tr);
}

function createTableHead() {
  let tHead = document.createElement("thead");
  let track = document.createElement("th");
  let race = document.createElement("th");
  let lengthInMiles = document.createElement("th");
  track.textContent = "Track Name";
  race.textContent = "Race Name";
  lengthInMiles.textContent = "Track Length";
  tHead.appendChild(track);
  tHead.appendChild(race);
  tHead.appendChild(lengthInMiles);
  return tHead;
}

function createRow(singleRace) {
  let tr = document.createElement("tr");
  let track = document.createElement("td");
  let race = document.createElement("td");
  let lengthInMiles = document.createElement("td");
  track.textContent = singleRace.track;
  race.textContent = singleRace.name;
  lengthInMiles.textContent = singleRace.length;

  tr.appendChild(track);
  tr.appendChild(race);
  tr.appendChild(lengthInMiles);

  tr.addEventListener("click", function (e) {
    e.preventDefault();
    getSingleRace(singleRace);
    console.log(singleRace);
  });
  return tr;
}

function createRace() {
  let form = document.createRace;
  let race = {};
  race.track = form.track.value;
  race.name = form.name.value;
  race.length = form.lengthInMiles.value;
  postRace(race);
}

function postRace(race) {
  let raceJson = JSON.stringify(race);
  let xhr = new XMLHttpRequest();
  let uri = "api/race";
  xhr.open("PUT", uri);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201) {
        getEvents();
      } else {
        if (xhr.status === 400) {
          // create an error div
          console.log("Invalid film data");
        } else {
          console.log("Unknown error creating film" + xhr.status);
        }
      }
    }
  };
  xhr.send(raceJson);
}

function getSingleRace(singleRace) {
  let raceDiv = document.getElementById("div2");
  raceDiv.textContent = "";
  console.log(singleRace);

  let h2 = document.createElement("h2");
  h2.textContent = `Race: ${singleRace.name}`;
  raceDiv.appendChild(h2);
  let form = document.createElement("form");
  form.name = 'updateRace';

  let trackLabel = document.createElement("label");
  trackLabel.for = "track";
  trackLabel.textContent = "Track Name";
  let trackNameInput = document.createElement("input");
  trackNameInput.type = "text";
  trackNameInput.name = "track";
  trackNameInput.value = singleRace.track;
  form.appendChild(trackLabel);
  form.appendChild(trackNameInput);
  form.appendChild(document.createElement("br"));

  let raceLabel = document.createElement("label");
  raceLabel.for = "name";
  raceLabel.textContent = "Race Name";
  let raceNameInput = document.createElement("input");
  raceNameInput.type = "text";
  raceNameInput.name = "name";
  raceNameInput.value = singleRace.name;
  form.appendChild(raceLabel);
  form.appendChild(raceNameInput);
  form.appendChild(document.createElement("br"));

  let lengthLabel = document.createElement("label");
  lengthLabel.for = "lengthInMiles";
  lengthLabel.textContent = "Length In Miles";
  let lengthInput = document.createElement("input");
  lengthInput.type = "text";
  lengthInput.name = "lengthInMiles";
  lengthInput.value = singleRace.length;
  form.appendChild(lengthLabel);
  form.appendChild(lengthInput);
  form.appendChild(document.createElement("br"));

  raceDiv.appendChild(form);

  let submitButton = document.createElement("input");
  submitButton.name = "submit";
  submitButton.type = "submit";
  submitButton.value = "Update Race";
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    let div = document.getElementById('div2');
    updateRace(singleRace.id);
    div.textContent = '';
  });
  form.appendChild(submitButton);

  let deleteButton = document.createElement('input');
  deleteButton.name = 'submit';
  deleteButton.type = 'submit';
  deleteButton.value = 'Delete Race';
  deleteButton.addEventListener('click', function(e){
  e.preventDefault();
  let div = document.getElementById('div2');
  deleteRace(singleRace.id);
  div.textContent = '';
  });
  form.appendChild(deleteButton);
}

function updateRace(id){
	let form = document.updateRace;
	let singleRace = {};
	singleRace.id = id;
	singleRace.track = form.track.value;
	singleRace.name = form.name.value;
	singleRace.length = form.lengthInMiles.value;
	updateRaceXHR(singleRace);
}

function updateRaceXHR(singleRace){
	let raceJson = JSON.stringify(singleRace);
  	let xhr = new XMLHttpRequest();
  	let uri = `api/race/${singleRace.id}`;
  	xhr.open('POST', uri);
  	xhr.setRequestHeader('Content-type', 'application/json');
  	xhr.onreadystatechange = function (){
  		if (xhr.readyState === 4){
  			if (xhr.status === 200) {
				  getEvents(); 
  			}
  			else {
  				if (xhr.status === 400){
  					console.log('Invalid race data, unable to update')
  					
  				}
  				else if (xhr.status === 404) {
  					console.log('No Race Found');
  				}
  			}
  		}
  	};
  	xhr.send(raceJson);
  }

  function deleteRace(id){
	  let form = document.updateRace;
	  let singleRace = {};
	  singleRace.id = id;
	  deleteRaceXHR(singleRace.id);
  }

  function deleteRaceXHR(singleRaceId){
	// let raceJson = JSON.stringify(singleRace);
  	let xhr = new XMLHttpRequest();
  	let uri = `api/race/${singleRaceId}`;
  	xhr.open('DELETE', uri);
  	xhr.setRequestHeader('Content-type', 'application/json');
  	xhr.onreadystatechange = function (){
  		if (xhr.readyState === 4){
  			if (xhr.status === 200) {
				  getEvents(); 
  			}
  			else {
  				if (xhr.status === 400){
  					console.log('Invalid race data, unable to update')
  					
  				}
  				else if (xhr.status === 404) {
  					console.log('No Race Found');
  				}
  			}
  		}
  	};
  	xhr.send();
  }

