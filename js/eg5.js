function $$$()
{
alert(document.body.innerHTML);
}
$$$.onDocumentLoaded=(address)=>{
address();
};

$$$.toAccordian=(divId)=>{

setTimeout(() => {
  console.log("Delayed for 1 second.");
var section=document.getElementById(divId);
section.remove();
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
}, "0.1");
};
window.addEventListener('load',$$$.onDocumentLoaded(function(){
$$$.toAccordian("mymy");
}));

//KLJRock part ends here
