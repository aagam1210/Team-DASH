window.onload = function() {

  name=getQueryVariable("name");
  email=getQueryVariable("email");
  age=getQueryVariable("age");
  pnumber=getQueryVariable("pnumber");
  gender=getQueryVariable("gender");

  if(name != false) {
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