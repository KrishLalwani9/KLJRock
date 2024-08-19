//In this part TMJrock programmer should do something
var $$$=()=>{
};
/*
$$$.onDocumentLoaded=(load)=>{
window.addEventListener('load',loadEventCall);
};
function loadEventCall(){
return function(){
alert('mymy');
load()};
}
*/
$$$.grid=(someId,jsonObject)=>{
let model= jsonObject['model'];
let pagination=jsonObject['pagination'];
let pageSize=jsonObject['pageSize'];
let rowSelectionEnabled=jsonObject['rowSelectionEnabled'];
let loadHere=document.getElementById(someId);
let table=document.createElement('table');
let tableHeading=document.createElement('thead');
let th=document.createElement('th');
let tableBody=document.createElement('tbody');
let tableRow=document.createElement('tr');
let tableData=document.createElement('td');
table.border='1';
let cloneRow=tableRow.cloneNode();
let cloneth;
let columnTitless=model.getColumnTitle();
for(let i=0;i<model.getColumnCount();i++)
{
cloneth=th.cloneNode();
cloneth.innerHTML=columnTitless[i];
cloneRow.appendChild(cloneth);
}
tableHeading.appendChild(cloneRow);
table.appendChild(tableHeading);
let cloneTableData;
let data=model.getRows();
for(let i=0;i<data.length;i++)
{
cloneRow=tableRow.cloneNode();
cloneRow.onclick=createRowClickHandler(cloneRow);
cloneTableData=tableData.cloneNode();
cloneTableData.innerHTML=i+1;
cloneRow.appendChild(cloneTableData);
var values=Object.values(data[i]);
for(let j=0;j<values.length;j++)
{
cloneTableData=tableData.cloneNode();
cloneTableData.innerHTML=values[j];
cloneRow.appendChild(cloneTableData);
}
tableBody.appendChild(cloneRow);
}
table.appendChild(tableBody);
loadHere.appendChild(table);
alert(loadHere.innerHTML);
function createRowClickHandler(cloneRow)
{
return function(){selectRow(cloneRow)};
}
var selectedRow=null;
function selectRow(row)
{
if(rowSelectionEnabled)
{
if(row==selectedRow) return;
if(selectedRow!=null)
{
selectedRow.style.background='white';
selectedRow.style.color='black';
}
row.style.background='gray';
row.style.color='white';
selectedRow=row;
}
}
};