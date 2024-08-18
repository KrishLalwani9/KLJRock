//This will finally be part of KLJRock Javascript library
var $$$=(parameter)=>{
var designationsComboBox=document.getElementById(parameter);
//this part of code is your assignment
return $$$;
};

$$$.fillComboBox=(jsonObject)=>{
var designationsData=jsonObject.dataSource;
var optionText=jsonObject.text;
var optionValue=jsonObject.value;
var firstOption=jsonObject.firstOption;
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
object.text=designationsData[i][optionText];
object.value=designationsData[i][optionValue];
designationsComboBox.appendChild(object);
}
};

$$$.ajax=(httpParser)=>{ //we can dynamically add properties in javascript and assign value to them
var url;
var methodType;
var success;
var failuer;
url=httpParser.url;
methodType=httpParser.methodType;
success=httpParser.success;
failure=httpParser.failure;
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

//KLJRock Javascript Library code ends here

function populateDesignations()
{
$$$.ajax({
"url":"servletOne",
"methodType":"GET",
"success":function(responseData){
var designations=JSON.parse(responseData);
var titleString="title";
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
