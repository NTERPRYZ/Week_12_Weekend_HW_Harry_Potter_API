const app = function(){

  const url = "http://hp-api.herokuapp.com/api/characters"
  makeRequest(url,requestComplete)
}

const makeRequest = function (url, callback) {
 const request    = new XMLHttpRequest();
 request.open("GET", url);
 request.addEventListener("load", callback);
 request.send(); //sending request to the server

}

const requestComplete = function () {
 if(this.status !== 200) return;  //404 cant find it, 500 server error, 200 everything ok and carries on. this.status same as saying request.status
 const jsonString  = this.responseText;
 const characters  = JSON.parse(jsonString);
 console.log(characters);
 let series = createSeries(characters);
 //
 // const columnChart = new ColumnChart(series);
 characterList(characters)
}

const createSeries = function(characters){
  const allCharactersWandLength = characters.sort(function(characterA, characterB){
    return characterA.wand.length - characterB.wand.length
  })


  let series = [{name: "Character", data: []}];
  for(let index = 14; index < 25; index++){
    let dataSet = {name: allCharactersWandLength[index].name, y: allCharactersWandLength[index].wand.length};
    series[0].data[0] = 0
    series[0].data.push(dataSet);
  }
console.log(series);
  return series;
}

const characterList = function(characters){
    const div = document.getElementById("characters")

    characters.forEach(function(character, index){
      const parentDiv = document.createElement("div")
      const list      = document.createElement("p");
      const image     = document.createElement("img")
      // const br       = document.createElement("br");


      list.innerText = (index+1) + ".  " + character.name
      image.src      = character.image

      parentDiv.appendChild(list)
      parentDiv.appendChild(image)
      div.appendChild(parentDiv)

  })
}


document.addEventListener("DOMContentLoaded", app)
