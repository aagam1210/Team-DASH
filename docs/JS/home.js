var calender = document.querySelector(".calender"),
topDiv = document.querySelector('.month'),
monthDiv = calender.querySelector("h1"),
yearDiv = calender.querySelector('h2'),
weekDiv = calender.querySelector(".weeks"),
dayNames = weekDiv.querySelectorAll("li"),
dayItems = calender.querySelector(".days"),
prev = calender.querySelector(".prev"),
next = calender.querySelector(".next"),

years = new Date().getFullYear(),
    monthes = new Date(new Date().setFullYear(years)).getMonth(),
lastDayOfMonth = new Date(new Date(new Date().setMonth(monthes + 1)).setDate(0)).getDate(),
    dayOfFirstDateOfMonth = new Date(new Date(new Date().setMonth(monthes)).setDate(1)).getDay(),
 monthNames = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"],
    colors = ['#FFA549', '#F7FFA0', '#1DABB8', '#953163', '#E7DF86', '#E01931', '#92F22A', '#FEC606', '#563D28', '#9E58DC', '#48AD01', '#0EBB9F'],
    i,
    x,
    counter;
function days(x) {
  'use strict';
  dayItems.innerHTML = "";
  monthes = monthes + x;

  if (monthes > 11) {
    years = years + 1;
    monthes = new Date(new Date(new Date().setFullYear(years)).setMonth(0)).getMonth();
  }
  if (monthes < 0) {
    years = years - 1;
    monthes = new Date(new Date(new Date().setFullYear(years)).setMonth(11)).getMonth(); }
  lastDayOfMonth = new Date(new Date(new Date(new Date().setFullYear(years)).setMonth(monthes + 1)).setDate(0)).getDate();
  dayOfFirstDateOfMonth = new Date(new Date(new Date(new Date().setFullYear(years)).setMonth(monthes)).setDate(1)).getDay();
  yearDiv.innerHTML = years;
  monthDiv.innerHTML = monthNames[monthes];
  for (i = 0; i <= dayOfFirstDateOfMonth; i = i + 1) {
    if (dayOfFirstDateOfMonth === 6) { break; }
    dayItems.innerHTML += "<li> - </li>";
  }
  for (counter = 1; counter <= lastDayOfMonth; counter = counter + 1) {
    dayItems.innerHTML += "<li>" + (counter) + "</li>";
  }
  topDiv.style.background = colors[monthes];
  dayItems.style.background = colors[monthes];
  if (monthes === new Date().getMonth() && years === new Date().getFullYear()) {
    dayItems.children[new Date().getDate() + dayOfFirstDateOfMonth].style.background = "#2ecc71";
  }
}
prev.onclick = function () {
  days(-1);
};
next.onclick = function () {
  days(1);
};
days(0);

function myD(){
document.getElementById("searchBar");  
  if(searchBar.value){
      screen1 = document.getElementById("serving");
        { screen1.innerHTML = "1";}
      screen2 = document.getElementById("servingcalories");
        { screen2.innerHTML = "150 KCal";}}false};


function reset() {
  screen = document.getElementById("searchBar"); 
    if(searchBar.value){
      searchBar.value = screen.innerHTML ="";
      screen1 = document.getElementById("serving");
        { screen1.innerHTML = "0";}
      screen2 = document.getElementById("servingcalories");
        { screen2.innerHTML = "0 KCal";}}false};

function addserv(){
  screen1 = document.getElementById("serving");
  screen2 = document.getElementById("servingcalories");
  screen = document.getElementById("searchBar"); 
    var table = document.getElementById("myTable");
    if(screen1.innerHTML!= "0"){
    var row = table.insertRow(0);
    var cell11 = row.insertCell(0);
    var cell12 = row.insertCell(1);
    var cell13 =row.insertCell(2);
    cell11.innerHTML = screen.value;
    cell12.innerHTML = screen1.innerHTML;
    cell13.innerHTML =screen2.innerHTML;
    }
}

