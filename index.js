let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", " Owen Wilson", " Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", " Gwnyeth Paltrow", " Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: ["George Clooney", " Meryl Streep", " Bill Murray", " Jason Schwartzman"],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", " F. Murray Abraham", " Mathieu Amalric"],
    },
  };

let moviesArray =  Object.entries(movieData); //returns an array of [key, value] pairs.
let mTable = document.getElementById("moviesTable");
let dropdown = document.getElementById("movies");
let movieTitleTxt = document.getElementById("mTitle");
let movieYearTxt = document.getElementById("mYear");
let movieRuntimeTxt = document.getElementById("mRuntime");
let movieRatingTxt = document.getElementById("mRating");
let movieCastTxt = document.getElementById("mCast");
let moviePlotTxt = document.getElementById("mPlot");

for (const movie of moviesArray) {
  let row =  mTable.insertRow(-1);
  let cell0 = row.insertCell(0);
  cell0.innerHTML = movie[0];

  let cell1 = row.insertCell(1);
  cell1.innerHTML = movie[1].year;
  
  let cell2 = row.insertCell(2);
  cell2.innerHTML = movie[1].runtime;

  let cell3 = row.insertCell(3);
  cell3.innerHTML = movie[1].rating;

  let cell4 = row.insertCell(4);
  cell4.innerHTML = movie[1].cast;

  let cell5 = row.insertCell(5);
  cell5.innerHTML = movie[1].plot; 
}

sortTable() ;

function sortTable() {
  let rows, switching, i, x, y, shouldSwitch, rowIndex;
  let dropdownValue = dropdown.value;
  if (dropdownValue == "year") {
    rowIndex = 1;
  }else if (dropdownValue == "rating") {
    rowIndex = 3;
  }else{
    rowIndex = 0;
  }
  switching = true;
  /*Make a loop that will continue until no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = mTable.rows;
    /*Loop through all table rows (except the first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare, one from current row and one from the next:*/
   
      
      x = rows[i].getElementsByTagName("TD")[rowIndex];
      y = rows[i + 1].getElementsByTagName("TD")[rowIndex];
      //check if the two rows should switch place:
      
      if (rowIndex == 0) {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
          shouldSwitch = true;
          break;
        }
      } else {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}


function addMovie() {
  document.getElementById("addMovieForm").style.display = "block";
}

function closeForm() {
  document.getElementById("addMovieForm").style.display = "none";
}


function addNewMovie(){
  console.log("Zayd");

  let row =  mTable.insertRow(-1);
  let cell0 = row.insertCell(0);
  cell0.innerHTML = movieTitleTxt.value;

  let cell1 = row.insertCell(1);
  cell1.innerHTML = movieYearTxt.value;
  
  let cell2 = row.insertCell(2);
  cell2.innerHTML = movieRuntimeTxt.value;

  let cell3 = row.insertCell(3);
  cell3.innerHTML = movieRatingTxt.value;

  let cell4 = row.insertCell(4);
  cell4.innerHTML = movieCastTxt.value;

  let cell5 = row.insertCell(5);
  cell5.innerHTML = moviePlotTxt.value; 

  closeForm();
 /*movieData["Titanic"] = { year: 2000,
    runtime: 200,
    rating: 8.5,
    plot: "dfdfdf",
    cast: ["Hasdfan", " Gwnsdfrow", " Asdf"]
    };
    moviesArray.push(movieData.Titanic.);
    /*movieData[movieTitleTxt.value] = { year: movieYearTxt.value,
                                        runtime: movieRuntimeTxt.value,
                                        rating: movieRatingTxt.value,
                                        plot: moviePlotTxt.value,
                                        cast: movieCastTxt.value,
                                      };

    moviesArray.push([movieData[movieTitleTxt.value],
                      { year: movieYearTxt.value,
                      runtime: movieRuntimeTxt.value,
                      rating: movieRatingTxt.value,
                      plot: moviePlotTxt.value,
                      cast: movieCastTxt.value,
                    }]); //returns an array of [key, value] pairs.*/                              

}


  
