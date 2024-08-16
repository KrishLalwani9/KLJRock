//This will finally be part of KLJRock Javascript library
function $$$(parameter){
var designationsComboBox=document.getElementById(parameter);
//this part of code is your assignment
return this;
};
$$$.ajax=function(httpParser){ //we can dynamically add properties in javascript and assign value to them
var url;
var methodType;
var success;
var failuer;
url=httpParser.url;
methodType=httpParser.methodType;
success=httpParser.success;
failuer=httpParser.failuer;
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var responseData=this.responseText;
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

function fillComboBox(jsonObject){
var designationsData=jsonObject.dataSource;
var optionText=jsonObject.text;
var firstOption=jsonObject.firstOption;
var optionValue=jsonObject.value;
var firstOptionText=firstOption.text;
var firstOptionValue=firstOption.value;
var object;
object=document.createElement("option");
object.text=firstOptionText;
object.value=firstOptionValue;
designationsComboBox.appendChild(object);
for(let i=0;i<designationsData.length;i++)
{
object=document.createElement("option");
object.text=designationsData[i].title;
object.value=designationsData[i].code;
designationsComboBox.appendChild(object);
}
}
//KLJRock Javascript Library code ends here

function populateDesignations()
{
$$$.ajax({
"url":"servletOne",
"methodType":"GET",
"success":function(responseData){
var designations=JSON.parse(responseData);
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
