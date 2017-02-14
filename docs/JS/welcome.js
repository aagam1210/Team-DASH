function myD(){
  searchBar = document.getElementById('searchBar');
  if(searchBar.value){
    if(searchBar.value == "Cake"){
      alert("Your Favourite Dessert is a Cake. It has so much Calories. One piece of Cake has 500 Calories. You are gonna be fat. Please SignUp or Login to track your dessert intake.");
    }
    if(searchBar.value == "Chocolate Mousse"){
      alert("Your Favourite Dessert is a Chocolate Mousse. I love it too. One piece has 300 Calories. Please SignUp or Login to track your dessert intake.");
    }
    if(searchBar.value == "Tart"){
      alert("Your Favourite Dessert is a Tart. It has so much Calories. One piece of Tart has 200 Calories. It's healthy. Please SignUp or Login to track your dessert intake.");
    }
    if(searchBar.value == "Ice Cream"){
      alert("Your Favourite Dessert is a Ice Cream. Yummy!!!. One scoop of Ice Cream has 250 Calories. Please SignUp or Login to track your dessert intake.");
    }
   if(searchBar.value == "Oreo Shake"){
      alert("Your Favourite Dessert is a Oreo Shake. Oreo and Milk Shake - an AWESOME Combination. One glass of Oreo Shake has 1000 Calories. You are gonna regret this. Please SignUp or Login to track your dessert intake.");
    }
   else{ 
      alert("Your Favourite Dessert is a " + searchBar.value + ". It has 350 calories. Please SignUp or Login to track your dessert intake.");}
  }
}
