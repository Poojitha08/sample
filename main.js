// function getfile(file,callback) {
// var xhr = new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.open("GET",file,true);
// xhr.onreadystatechange=function(){
//   if(xhr.readyState === 4 && xhr.status =="200"){
//     callback(xhr.responseText);
//   }
// };
// xhr.send(null);
// }
//
// getfile("data.json",function (text) {
// var  data=JSON.parse(text);
// console.log(data);
// })
function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(responce=>{
      if(responce.ok){
        resolve(responce.json());
      }
      else{
        reject(new error("error"));
      }
    })
  })
}
var newFile=loadJSON("data.json");
newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  achievements(data.achievements);
})
var childtwo=document.querySelector(".childtwo");
function career(careerObj){
var careerHeading=document.createElement("h2");
careerHeading.textContent="CareerObjective";
childtwo.appendChild(careerHeading);
var hr=document.createElement("hr");
careerHeading.appendChild(hr);
var p=document.createElement("p");
p.textContent=careerObj.info;
childtwo.appendChild(p);
}
function education(edu){
  var careerHeading1=document.createElement("h2");
  careerHeading1.textContent="Graduation Details";
  childtwo.appendChild(careerHeading1);
  var hr=document.createElement("hr");
  careerHeading1.appendChild(hr);
  for(var i=0;i<edu.length;i++){
    eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childtwo.appendChild(eduH3);
    var eduUl=document.createElement("ul");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduUl.appendChild(eduLi);
    childtwo.appendChild(eduUl);
    var eduLi2=document.createElement("li2");
    eduLi2.textContent=edu[i].data;
    eduUl.appendChild(eduLi2);
    childtwo.appendChild(eduUl);
  }
}
function skills(skillInfo){
var careerHeading1=document.createElement("h2");
careerHeading1.textContent="Technical Skills";
childtwo.appendChild(careerHeading1);
var hr=document.createElement("hr");
careerHeading1.appendChild(hr);
var skillsTable=document.createElement("table");
skillsTable.border="1";
childtwo.appendChild(skillsTable);
var tableData="";
for(var i=0;i<skillInfo.length;i++){
tableData+="<tr><td>"+skillInfo[i].title+"</td><td>"+skillInfo[i].info+"</td></tr>";
}
skillsTable.innerHTML=tableData;
}
function achievements(ach){
  var careerHeading1=document.createElement("h2");
  careerHeading1.textContent="Achievements";
  childtwo.appendChild(careerHeading1);
  var hr=document.createElement("hr");
  careerHeading1.appendChild(hr);
  var ul=document.createElement("ul");
  childtwo.appendChild(ul);
  var li="";
  for(i=0;i<ach.length;i++){
  li+="<li>"+ach[i].achieveData;+"</li>";
  ul.innerHTML=li;
  }
}
