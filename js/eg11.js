//This will finally be part of KLJRock Javascript library
var $$$={
"ajax":(httpParser)=>{
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
//this part of code is your assignment

};
//KLJRock Javascript Library code ends here

function populateDesignations()
{
$$$.ajax({
"url":"servletOne",
"methodType":"GET",
"success":function(responseData){
var designations=JSON.parse(responseData);
var designationsComboBox=document.getElementById('designationsComboBox');
var obj;
for(let i=0;i<designations.length;i++)
{
obj=document.createElement('option');
obj.value=designations[i].code;
obj.text=designations[i].title;
designationsComboBox.appendChild(obj);
}
},
"failure":function(){
alert('some problem');
}
});
}
window.addEventListener('load',populateDesignations);
