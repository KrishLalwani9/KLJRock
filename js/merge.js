//KLJRock part starts here
function $$$(elementId)
{
let element=document.getElementById(elementId);
if(!element) throw "Invalid id "+elementId;
return new KLJRockElement(element);
}
//model for maintanit datastructures about acoordians and all the functions to call
$$$.model={
"onStartup" : [],
"accordians" : [],
"modals" : []
};

$$$.modals={};

//its work to populate all the functions in onStartup array
$$$.onDocumentLoaded=function(func){
if((typeof func) != 'function') throw "Expected function ,found "+(typeof func)+" in call to onDocumentLoaded";
$$$.model.onStartup[$$$.model.onStartup.length]=func;
};

//its work to call all the functions populated in onStartup array
$$$.initFramework=function(){ 
let allTags=document.getElementsByTagName("*");
let tag=null;
let accord=null;
for(let x=0;x<allTags.length;x++)
{
tag=allTags[x];
if(tag.hasAttribute("accordian"))
{
accord=tag.getAttribute("accordian");
if(accord.toUpperCase()=="TRUE")
{
$$$.toAccordian(tag);
}
}
}
for(let x=0;x<$$$.model.onStartup.length;x++)
{
$$$.model.onStartup[x]();
}

//setting up modal part starts here
for(let i=0;i<allTags.length;i++)
{
tag=allTags[i]; //conflict optimize it
if(tag.hasAttribute("forModal"))
{
if(tag.getAttribute("forModal").toUpperCase()=="TRUE")
{
tag.setAttribute("forModal","false");
$$$.model.modals[$$$.model.modals.length]=new Modal(tag);
i--;
}
}
}
};//inintFramework ends here


//modal specific code starts here
$$$.modals.show=function(mid){
let modal=null;
for(let x=0;x<$$$.model.modals.length;x++)
{
if($$$.model.modals[x].getContentId()==mid)
{
modal=$$$.model.modals[x];
break;
}
}
if(modal==null) return;
if(modal) modal.show();
};


//this is class
function Modal(contentReference)
{
var objectAddress=this; 
this.getContentId=function()
{
return contentReference.id;
}
this.afterOpening=null;
this.afterClosing=null;
this.beforeOpening=null;
this.beforeClosing=null;
let contentParentReference=contentReference.parentElement;
let contentIndex=0
for(;contentParentReference.children.length;contentIndex++)
{
if(contentReference==contentParentReference.children[contentIndex]) break;
}
let modalMaskDivision=document.createElement('div');
modalMaskDivision.style.display="none";
let modalDivision=document.createElement('div');
modalDivision.style.display="none";
modalMaskDivision.classList.add('kljrock_modalMask');
modalDivision.classList.add('kljrock_modal');
document.body.appendChild(modalMaskDivision);
document.body.appendChild(modalDivision);

let headerDivision=document.createElement('div');
headerDivision.style.right="0";
headerDivision.style.padding="5px";
headerDivision.style.background="pink";
headerDivision.style.height="40px";
modalDivision.appendChild(headerDivision);

if(contentReference.hasAttribute("size"))
{
let size=contentReference.getAttribute("size");
let xpos=size.indexOf("x");
if(xpos==-1) xpos=size.indexOf("X");
if(xpos==-1) throw "In case of modal size should be specified as widthxheight";
if(xpos==0 || xpos==size.length-1) throw "In case of modal size should be specified as widthxheight";
let width=size.substring(0,xpos);
let height=size.substring(xpos+1);
modalDivision.style.width=width+"px";
modalDivision.style.height=height+"px";
modalDivision.style['min-width']=width+"px";
modalDivision.style['min-height']=height+"px";
}
else
{
modalDivision.style.width="400px";
modalDivision.style.height="300px";
}
if(contentReference.hasAttribute("header"))
{
let header=contentReference.getAttribute("header");
headerDivision.innerHTML=header;
}

if(contentReference.hasAttribute("maskColor"))
{
let maskColor=contentReference.getAttribute("maskColor");
modalMaskDivision.style.background=maskColor;
}

if(contentReference.hasAttribute("modalBackgroundColor"))
{
let modalBackgroundColor=contentReference.getAttribute("modalBackgroundColor");
modalDivision.style.background=modalBackgroundColor;
}

let contentDivision=document.createElement('div');
contentDivision.style.right="0";
contentDivision.style.padding="5px";
contentDivision.style.height=(modalDivision.style.height.substring(0,modalDivision.style.height.length-2)-(headerDivision.style.height.substring(0,headerDivision.style.height.length-2)*2+30))+"px";
contentDivision.style.background="purple";
contentDivision.style.overflow="auto";
contentReference.remove();
contentDivision.appendChild(contentReference);
contentReference.style.display="block";
contentReference.style.visiblity="visible";
modalDivision.appendChild(contentDivision);

let footerDivision=document.createElement('div');
footerDivision.style.right="0";
footerDivision.style.left="0";
footerDivision.style.background="red";
footerDivision.style.padding="5px";
footerDivision.style.position="absolute";
footerDivision.style.bottom="0";
footerDivision.style.height="40px";
modalDivision.appendChild(footerDivision);

if(contentReference.hasAttribute("footer"))
{
let footer=contentReference.getAttribute("footer");
footerDivision.innerHTML=footer;
}
if(contentReference.hasAttribute("afterOpening"))
{
let oo=contentReference.getAttribute("afterOpening");
//alert(eval(oo)); // whatever we pass to eval it considered regular expression to it and execute it
//example
//let k="c=10+20";
//eval(k);
//alert(c);
this.afterOpening=oo;
}

if(contentReference.hasAttribute("beforeOpening"))
{
let bo=contentReference.getAttribute("beforeOpening");
this.beforeOpening=bo;
}

if(contentReference.hasAttribute("afterClosing"))
{
let oc=contentReference.getAttribute("afterClosing");
this.afterClosing=oc;
}

if(contentReference.hasAttribute("beforeClosing"))
{
let bc=contentReference.getAttribute("beforeClosing");
this.beforeClosing=bc;
}


if(contentReference.hasAttribute("closeButton"))
{
let closeButton;
closeButton=contentReference.getAttribute("closeButton");
if(closeButton.toUpperCase()=='TRUE')
{
let closeButtonSpan=document.createElement('span');
closeButtonSpan.classList.add('kljrock_closeButton');
let closeButtonMarker=document.createTextNode('X');
closeButtonSpan.appendChild(closeButtonMarker);
headerDivision.appendChild(closeButtonSpan);

closeButtonSpan.onclick=function(){
let closeModal=true;
if(objectAddress.beforeClosing)
{
closeModal=eval(objectAddress.beforeClosing);
}
if(closeModal)
{
modalMaskDivision.style.display="none";
modalDivision.style.display="none";
/*
if(contentIndex==contentParentReference.children.length) contentParentReference.appendChild(contentReference);
else
{
contentParentReference.insertBefore(contentReference,contentParentReference.children[contentIndex]);
}
*/
if(objectAddress.afterClosing) setTimeout(()=>{
eval(objectAddress.afterClosing);
},2);
}
};
}
}

this.show=function(){
let openModal=true;
if(this.beforeOpening)
{
openModal=eval(this.beforeOpening);
}
if(openModal)
{
modalMaskDivision.style.display="block";
modalDivision.style.display="block";
if(objectAddress.afterOpening) setTimeout(()=>{
eval(objectAddress.afterOpening);
},2);
}
};

let areaClose=contentReference.getAttribute('areaClose');
if(areaClose.toUpperCase()=="TRUE")
{
modalMaskDivision.onclick=()=>{
let closeModal=true;
if(objectAddress.beforeClosing)
{
closeModal=eval(objectAddress.beforeClosing);
}
if(closeModal)
{
modalMaskDivision.style.display="none";
modalDivision.style.display="none";
/*if(contentIndex==contentParentReference.children.length) contentParentReference.appendChild(contentReference);
else
{
contentParentReference.insertBefore(contentReference,contentParentReference.children[contentIndex]);
}*/
if(objectAddress.afterClosing) setTimeout(()=>{
eval(objectAddress.afterClosing);
},2);
}
};
}
}//Modal function ends here

function abOpened(){
alert('Modal will be opned');
}
function abClosed(){
alert('Modal will be closed');
}
//by this two events we can manuplate rateher our modal has to be open or not or close or not
function abBeforeOpening(){
alert('Modal with ab is about to be open');
return true;
}
function abBeforeClosing(){ 
alert('Modal with ab is about to be closed');
return true;
}

window.addEventListener('load',function(){
$$$.initFramework();
});

//Modal specifit code ends here

$$$.acordianHeadingClicked=function(accordianIndex,panelIndex){
alert(accordianIndex+','+panelIndex);
if($$$.model.accordians[accordianIndex].expandedIndex!=-1) $$$.model.accordians[accordianIndex].panels[$$$.model.accordians[accordianIndex].expandedIndex].style.display='none';
//panels[panelIndex+1].style.display='inline'; or block
$$$.model.accordians[accordianIndex].panels[panelIndex+1].style.display=$$$.model.accordians[accordianIndex].panels[panelIndex+1].oldDisplay;
$$$.model.accordians[accordianIndex].expandedIndex=panelIndex+1;
};


$$$.toAccordian=(accord)=>{
let expandedIndex=-1;
let panels =[];
let childrens=accord.childNodes;
//travers on childrens and populate panels 
for(let x=0;x<childrens.length;x++)
{
//alert(childrens[x].nodeName);
if(childrens[x].nodeName=='H3') panels[panels.length]=childrens[x];
if(childrens[x].nodeName=='DIV') panels[panels.length]=childrens[x];
}
//validations
if(panels.length % 2 != 0) throw 'Headings and divisions malformed to create accordian';

let accordianIndex=$$$.model.accordians.length;
for(let x=0;x<panels.length;x+=2)
{
if(panels[x].nodeName!='H3') throw 'Headings and divisions malformed to create accordian';
if(panels[x+1].nodeName!='DIV') throw 'Headings and divisions malformed to create accordian';
panels[x].onclick = ()=>{
$$$.acordianHeadingClicked(accordianIndex,x);
}; 
panels[x+1].oldDisplay=panels[x+1].style.display;
panels[x+1].style.display='none';
}

$$$.model.accordians[accordianIndex]={
"panels" : panels,
"expandedIndex" : -1
};

}; //toAccordianFunction Ends here


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
//fillComboBox function starts here
this.fillComboBox=(jsonObject)=>{
if(this.element.nodeName!='SELECT') throw "fillComboBox can be called on SELECT type element";
let collection=jsonObject['dataSource'];
let optionText=jsonObject['text'];
let optionValue=jsonObject['value'];
let firstOption=jsonObject['firstOption'];
let firstOptionText=firstOption['text'];
let firstOptionValue=firstOption['value'];

if(!collection) throw "dataSource required";
if((typeof collection)!='object') throw "collection must have of object type";

if(!optionText) throw "text required";
if((typeof optionText)!='string') throw "optionText must have of string type";

if(!optionValue) throw "value required";
if((typeof optionValue)!='string') throw "optionValue must have of string type";

if(!firstOption) throw "firlstOption required";
if((typeof firstOption)!='object') throw "firstOption must have of object type";
if(!firstOptionText) throw "firstOption mush have text property";
if(!firstOptionValue) throw "firstOption mush have value property";
if((typeof firstOptionText)!='string') throw "firstOptionText mush have of string type";
if((typeof firstOptionValue)!='string') throw "firstOption mush have of string type";
if(collection.length)
{ 
if(!collection[0][optionText]) throw "Invalid text";
if(!collection[0][optionValue]) throw "Invalid value";
}
this.element.innerHTML='';
let object;
object=document.createElement("option");
object.text=firstOptionText;
object.value=firstOptionValue;

this.element.appendChild(object);
for(let i=0;i<collection.length;i++)
{
object=document.createElement("option");
object.text=collection[i][optionText];
object.value=collection[i][optionValue];
this.element.appendChild(object);
}
}; //fill comboBox function ends here
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
let sendJSON=jsonObject['sendJSON'];
if(!sendJSON) sendJSON=false;
if((typeof sendJSON) != 'boolean') throw "sendJSON property should be of boolean type";
let queryString='';
if(jsonObject['data'])
{
if(sendJSON)
{
jsonData=jsonObject['data'];
}
else
{
jsonData=jsonObject['data'];
let i=0;
queryString='';
let qsName;
let qsValue;
for(let x in jsonData)
{
if(i>0) queryString+='&';
//else queryString+='?';
qsName=encodeURI(x);
qsValue=encodeURI(jsonData[x]);
queryString+=qsName+'='+qsValue;
i++;
}
}
}
xmlHttpRequest.open(methodType,url,true);
if(sendJSON)
{
xmlHttpRequest.setRequestHeader('Content-Type','application/json');
xmlHttpRequest.send(JSON.stringify(jsonData));
}
else
{
xmlHttpRequest.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
xmlHttpRequest.send(queryString);
}
}
};