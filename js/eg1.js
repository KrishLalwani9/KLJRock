//This will finally be part of KLJRock Javascript library
let $$$=(parameter)=>{
let element=document.getElementById(parameter);
//this part of code is your assignment
return new KLJRockElement(element);
};
function KLJRockElement(element)
{
this.fillComboBox=(jsonObject)=>{
let designationsData=jsonObject.dataSource;
let optionText=jsonObject.text;
let optionValue=jsonObject.value;
let firstOption=jsonObject.firstOption;
let firstOptionText=firstOption.text;
let firstOptionValue=firstOption.value;
let object;
object=document.createElement("option");
object.text=firstOptionText;
object.value=firstOptionValue;
element.appendChild(object);
for(let i=0;i<designationsData.length;i++)
{
object=document.createElement("option");
object.text=designationsData[i][optionText];
object.value=designationsData[i][optionValue];
element.appendChild(object);
}
};
}
$$$.ajax=(httpParser)=>{ //we can dynamically add properties in javascript and assign value to them
let url;
let methodType;
let success;
let failuer;
url=httpParser.url;
methodType=httpParser.methodType;
success=httpParser.success;
failure=httpParser.failure;
let xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
let responseData=this.responseText;
success(responseData);
}
else
{
failure();
}
}
};
xmlHttpRequest.open(methodType,url,true);
xmlHttpRequest.setRequestHeader("Content-Type","application/json");
xmlHttpRequest.send();
}

//KLJRock Javascript Library code ends here

function populateDesignations()
{
$$$.ajax({
"url":"servletOne",
"methodType":"GET",
"success":function(responseData){
let designations=JSON.parse(responseData);
let titleString="title";
$$$("designationsComboBox").fillComboBox({
"dataSource" : designations,
"text" : "title",
"value" : "code",
"firstOption" : {
"text" : "<select desigantion>",
"value" : "-1"
}});
},
"failure":function(){
alert('some problem');
}
});
}
window.addEventListener('load',populateDesignations);
