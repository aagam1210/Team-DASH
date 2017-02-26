function myD(){
  searchBar = document.getElementById('searchBar');
  if(searchBar.value){
    if(searchBar.value == "Cheesecake"){
      alert("Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar; if there is a bottom layer it often consists of a crust or base made from crushed cookies (or digestive biscuits), graham crackers, pastry, or sponge cake.\n\n Calorie - 401 kcal");
    }
    else if(searchBar.value == "Brownie"){
      alert("A brownie is a square baked dessert. It is a cross between a cake and a soft cookie in texture[1] and comes in a variety of forms. Depending on its density, it may be either fudgy or cakey and may include chocolate chips, nuts, or other ingredients. \n\n Calorie - 132 kcal ");
    }
    else if(searchBar.value == "Tart"){
      alert("A tart is a baked dish consisting of a filling over a pastry base with an open top not covered with pastry. The pastry is usually shortcrust pastry; the filling may be sweet or savoury, though modern tarts are usually fruit-based, sometimes with custard. \n\n Calorie - 193 kcal");
    }
    else if(searchBar.value == "Ice Cream"){
      alert("Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It is usually made from dairy products, such as milk and cream, and often combined with fruits or other ingredients and flavours. It is typically sweetened with sugar or sugar substitutes. \n\n Calorie - 137 kcal");
    }
   else if(searchBar.value == "Oreo"){
      alert("is a sandwich cookie consisting of two chocolate wafers with a sweet creme filling in between, and (as of 1974) are marketed as Chocolate Sandwich Cookies on the package in which they are held. The version currently sold in the United States is made by the Nabisco. \n\n Calorie - 270 kcal ");
    }
   else{ 
      alert("Please enter a valid option.");}
  }
}

function reset(){
  searchBar = document.getElementById('searchBar');
  if(searchBar.value){
   searchBar.value = screen.innerHTML ="";
  }}