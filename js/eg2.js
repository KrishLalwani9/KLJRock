function getDesignation()
{
var code=document.getElementById("code").value;
var title=document.getElementById("title");
title.innerHTML="";
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var responseData=this.responseText;
if(responseData=='Invalid')
{
alert("Invalid designation code");
}
else
{
var designation=JSON.parse(responseData);
alert(designation);

title.innerHTML=designation.title;
}
}
else
{
alert('some problem');
}
}
};
var requestURL='servletTwo?code='+encodeURI(code);
xmlHttpRequest.open('GET',requestURL,true);
xmlHttpRequest.send();
}
