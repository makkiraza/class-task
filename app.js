// var firstname = ["Blur Ray" , " Upchuck" , "Lojack" , "Gizmo" , "Do-Rag"];
// var lastname = [" Upchuck" , "Lojack" , "Gizmo" , "Do-Rag" ];
// var fullname = [];
// for (var i = 0;1 )

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
//  for (var j = 0; j < lastNames.length; j++) {
//  fullNames.push(firstNames[i] + lastNames[j]);
//  document.write(j," ")
// }
// document.write("<br>")
// }

var userinp = prompt('Enter City name')
var arr = ['karachi' , 'faislabad' , 'lahore' , 'islamabad' , 'murree']
var match = 'saad'
for(var i=0; i < arr.length; i++){
    if(userinp == arr [i]){
        match = 'umair'
        alert('City Found')
        break
    }
}
if (match == 'saad'){
    alert('City not found')
}

var abc = 'kArAChi'

var abc2 = abc.slice(0,1)
var abc3 = abc.toUpperCase()
var abc4 = abc.slice(1)
var abc5 = abc4.toLocaleLowerCase()
document.write(abc3+abc5)











