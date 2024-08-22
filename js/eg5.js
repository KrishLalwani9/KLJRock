function $$$(elementId)
{
let element=document.getElementById(elementId);
if(!element) throw "Invalid id "+elementId;
return new KLJRockElement(element);
}

function KLJRockElement(element)
{
this.element=element;
this.sendContent=function(heading,collection){
let content=collection.get(heading);
heading.remove();
alert(content.innerHTML);
alert(heading.innerHTML);
document.body.append(content);
};

this.sendContentForce=function(heading,collection){
return function(){
sendContent(heading,collection);
};
};
this.toAccordian=()=>{
let elementChildrens=Object.values(this.element.children);

//travers on children and storing content against heading
let collection = new Map();
let heading;

for(let x=0;x<elementChildrens.length;x++)
{
let elementChildren=elementChildrens[x];
heading=elementChildren.children[0];
let headingCloneNode=heading.cloneNode(true);
collection.set(headingCloneNode,elementChildren);
document.body.appendChild(headingCloneNode);
alert(headingCloneNode.innerHTML);
heading.addEventListener('click',this.sendContentForce(headingCloneNode,collection));
elementChildren.remove();
}

/*
let div1 =section.children[0];
let div2 =section.children[1];
let div3 =section.children[2];
let heading1=div1.children[0];
let heading2=div2.children[0]
let heading3=div3.children[0];
document.body.append(heading1);
document.body.append(heading2);
document.body.append(heading3);
heading1.addEventListener('click',()=>{
heading1.remove();
heading2.remove();
heading3.remove();
div1.remove();
div2.remove();
div3.remove();
document.body.append(heading1);
document.body.append(heading2);
document.body.append(heading3);
document.body.insertBefore(div1,heading2);
});
heading2.addEventListener('click',()=>{
heading1.remove();
heading2.remove();
heading3.remove();
div1.remove();
div2.remove();
div3.remove();
document.body.append(heading1);
document.body.append(heading2);
document.body.append(heading3);
document.body.insertBefore(div2,heading3);
});
heading3.addEventListener('click',()=>{
heading1.remove();
heading2.remove();
heading3.remove();
div1.remove();
div2.remove();
div3.remove();
document.body.append(heading1);
document.body.append(heading2);
document.body.append(heading3);
document.body.append(div3);
});
*/
}; //toAccordianFunction Ends here
}
setTimeout(()=>{
window.addEventListener('load',$$$("mymy").toAccordian());
},10);

//KLJRock part ends here
