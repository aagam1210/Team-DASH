function validate () {
	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	pnumber = document.getElementById('pnumber').value;
	age = document.getElementById('age').value;
	uname = document.getElementById('uname').value;
	passwd = document.getElementById('passwd').value;
	repasswd = document.getElementById('re-passwd').value;
	var atposition = email.indexOf("@");
	var dotposition = email.lastIndexOf(".");
	gender = document.getElementById("gender").value;

	if(name == "" || email == "" || age == "" || pnumber == "" || uname == "" || passwd == "" || repasswd == "") {
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
  	else if(passwd.length < 6) {
  		alert("Please enter minimum 6 character password");
  		flag=false;
  	}
	else if(passwd != repasswd) {
  		alert("The entered passwords do not match");
  		flag=false;
  	}
  	else {
      var string_url = "../HTML/profile.html?name=" + name + "&email=" + email + "&age=" + age + "&pnumber=" + pnumber + "&gender=" +gender;

  		// myStorage.setItem("name", name);
  		// myStorage.setItem("email", email);
  		// myStorage.setItem("age", age);
  		// myStorage.setItem("pnumber", pnumber);
  		// myStorage.setItem("gender", name);
  		window.location.href=string_url;
  	}
}
