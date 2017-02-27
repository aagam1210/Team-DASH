window.onload = function() {

  name=getQueryVariable("name");
  email=getQueryVariable("email");
  age=getQueryVariable("age");
  pnumber=getQueryVariable("pnumber");
  gender=getQueryVariable("gender");

  if(window.location.search.length == 0 ) {
    document.getElementById('name').value = "Lionel Messi";
    document.getElementById('email').value = "me@leomessi.com";
    document.getElementById('age').value = "29";
    document.getElementById('pnumber').value = "301456999";
    document.getElementById('gender').value = "Male";
  }
  else{
    document.getElementById('name').value = decodeURI(name);
    document.getElementById('email').value = email;
    document.getElementById('age').value = age;
    document.getElementById('pnumber').value = pnumber;
    document.getElementById('gender').value = gender;
  }
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function validate () {
	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	pnumber = document.getElementById('pnumber').value;
	age = document.getElementById('age').value;
	gender = document.getElementById('gender').value;
	Height = document.getElementById('Height').value;
	Weight = document.getElementById('Weight').value;
	var atposition = email.indexOf("@");
	var dotposition = email.lastIndexOf(".");
	var Weight1;
	var Height1;
	var BMI;
	var CC;

	if(name == "" || email == "" || age == "" || pnumber == "" || gender == "") {
		alert("Please enter all required fields");
		flag=false;
	}
	else if (atposition < 1 || dotposition < atposition+2 || dotposition+2 >= email.length) {  
  		alert("Please enter a valid e-mail address");
  		flag=false;
  	}
  	else if(isNaN(age) || age < 0 || age > 99) {
  		alert("Please enter valid age");
  		flag=false;
  	}
	else if(isNaN(pnumber) || pnumber < 1000000000 || pnumber > 9999999999) {
  		alert("Please enter valid phone number");
  		flag=false;
  	}
  	else if(Height != '' || Weight !='') {
 		Weight1 = Weight * 0.45;
		Height1 = (Height * 12 * 0.025)*(Height * 12 * 0.025);
		BMI = Weight1/Height1;
		if(BMI < 19)
			document.getElementById('CalorieCount').value = "1600";
		else if(19 < BMI && BMI < 25)
			document.getElementById('CalorieCount').value = "1300";
		else if(BMI > 25) 
			document.getElementById('CalorieCount').value = "1000";
		CC = document.getElementById('CalorieCount').value;
	}
  	
/* 	var string_url = "../HTML/profile.html?name=" + name + "&email=" + email + "&age=" + age + "&pnumber=" + pnumber + "&gender=" + gender + "&Height=" + Height + "&Weight=" + Weight + "&CalorieCount=" + CC;
  	window.location.href=string_url; */

}
