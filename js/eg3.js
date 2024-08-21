//KLJRock part starts here

function $$$(elementId)
{
let element=document.getElementById(elementId);
if(!element) throw "Invalid id "+elementId;
return new KLJRockElement(element);
}

function KLJRockElement(element)
{
this.element=element;
this.html=function(content){
if((typeof this.element.innerHTML)=='string')
{
if((typeof content)=='string')
{
this.element.innerHTML=content;
}
return this.element.innerHTML;
}
return null;
};//html function ends here
this.value=function(content){
if(this.element.value)
{
if((typeof content)=='string')
{
this.element.value=content;
}
return this.element.value;
}
return null;
};//value function ends here
}//class KLJRockElement ends here


$$$.ajax=function(jsonObject){
let url=jsonObject['url'];
if(!url) throw "URL property is missing in call to ajax";
if((typeof url)!="string")  throw "url property should be of string type in call to ajax";
let methodType="GET";
if(jsonObject['methodType'])
{
methodType=jsonObject['methodType'];
if((typeof methodType)!='string') throw "methodtype property should be of string type in call to ajax";
methodType=methodType.toUpperCase();
if(!["GET","POST"].includes(methodType)) throw "methodType should be of GET/POST in call to ajax";
}
let onSuccess=jsonObject['success'];
if(onSuccess)
{
if((typeof onSuccess)!="function") throw "success should be a function in call to ajax";
}
let onFailure=jsonObject['failure'];
if(onFailure)
{
if((typeof onFailure)!="function") throw "failure should be a function in call to ajax"
}
if(methodType=='GET')
{
let xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
let responseData=this.responseText;
responseData;
if(onSuccess) onSuccess(responseData);
}
else
{
if(onFailure) onFailure();
}
}
};
let jsonData=jsonObject['data'];
// we will change the code to traverse in jsonData
if(jsonData)
{
let i=0;
let queryString='';
let qsName;
let qsValue;
for(let x in jsonData)
{
if(i>0) queryString+='&';
else queryString+='?';
qsName=encodeURI(x);
qsValue=encodeURI(jsonData[x]);
queryString+=qsName+'='+qsValue;
i++;
}
url+=queryString;
}
xmlHttpRequest.open(methodType,url,true);
xmlHttpRequest.send();
}
if(methodType=='POST')
{

let xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
let responseData=this.responseText;
responseData;
if(onSuccess) onSuccess(responseData);
}
else
{
if(onFailure) onFailure();
}
}
};
let jsonData={};
// we will change the code to traverse in jsonData
if(jsonObject['data'])
{
if(jsonObject['sendJSON'])
{
jsonData=jsonObject['data'];
let i=0;
let queryString='';
let qsName;
let qsValue;
for(let x in jsonData)
{
alert(x);
if(i>0) queryString+='&';
//else queryString+='?';
qsName=encodeURI(x);
qsValue=encodeURI(jsonData[x]);
queryString+=qsName+'='+qsValue;
i++;
}
alert(queryString);
xmlHttpRequest.open(methodType,url,true);
xmlHttpRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xmlHttpRequest.send(queryString);
}
else
{
jsonData=jsonObject['data'];
xmlHttpRequest.open(methodType,url,true);
xmlHttpRequest.setRequestHeader('Content-Type','application/json');
xmlHttpRequest.send(JSON.stringify(jsonData));
}
}

}
}

//KLJRock part ends here



function saveEnquiry()
{
let firstName=$$$('firstName').value();
let lastName=$$$('lastName').value();
let age=$$$('age').value();
let customerJson={
"firstName": firstName,
"lastName": lastName,
"age": age
};
$$$.ajax({
"url" : "servletThreeWithoutParsing",
"data" : customerJson,
"sendJSON" : true,
"methodType" : "POST",
"success" : function(responseData){
let section=$$$('whatever');
section.html("");
let customer=JSON.parse(responseData);
let a='<br>firstname : '+customer.firstName+'<br>lastName : '+customer.lastName+'<br>age : '+customer.age;
section.html(a);
},
"failure" : function(){
alert('something wrong');
}
});
}
