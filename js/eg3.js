function saveEnquiry()
{
var firstName=document.getElementById('firstName').value;
var lastName=document.getElementById('lastName').value;
var age=document.getElementById('age').value;
var customerJson={
"firstName": firstName,
"lastName": lastName,
"age": age
};
var section=document.getElementById('whatever');
section.innerHTML="";
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var responseData=this.responseText;
alert(responseData);
var customer=JSON.parse(responseData);
var a='<br>firstname : '+customer.firstName+'<br>lastName : '+customer.lastName+'<br>age : '+customer.age;
section.innerHTML=a;
}
else
{
alert('somthing not good');
}
}
};
xmlHttpRequest.open('POST','servletThree',true);
xmlHttpRequest.setRequestHeader('Content-Type','application/json');
xmlHttpRequest.send(JSON.stringify(customerJson));
}
