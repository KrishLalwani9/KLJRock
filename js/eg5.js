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

let panels = [];
this.toAccordian=()=>{
let elementChildrens=Object.values(this.element.children);
let childrens=this.element.childNodes;
//travers on childrens and populate panels 
for(let x=0;x<childrens.length;x++)
{
//alert(childrens[x].nodeName);
if(childrens[x].nodeName=='H3') panels[panels.length]=childrens[x];
if(childrens[x].nodeName=='DIV') panels[panels.length]=childrens[x];
}
//validations
if(panels.length % 2 != 0) throw 'Headings and divisions malformed to create accordian';

let expandedIndex = -1;
function acordianHeadingClicked(x){
if(expandedIndex!=-1) panels[expandedIndex].style.display='none';
//panels[x+1].style.display='inline';
panels[x+1].style.display=panels[x+1].oldDisplay;
expandedIndex=x+1;
};

for(let x=0;x<panels.length;x+=2)
{
if(panels[x].nodeName!='H3') throw 'Headings and divisions malformed to create accordian';
if(panels[x+1].nodeName!='DIV') throw 'Headings and divisions malformed to create accordian';
panels[x].onclick = ()=>{
acordianHeadingClicked(x);
};
panels[x+1].oldDisplay=panels[x+1].style.display;
panels[x+1].style.display='none';
}
}; //toAccordianFunction Ends here
}
setTimeout(()=>{
window.addEventListener('load',$$$('mymy').toAccordian());
},1);
//KLJRock part ends here
