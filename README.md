# HCJRock
This a light-weight JavaScript framework which makes a web developer's life easier by providing many built-in functions using which the user can accomplish various tasks and make a responsive web sites easily and quickly. The framework simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

## Features
* Handling AJAX request (GET/POST)
* Modal View
* Accordian Pane
* Form Validation
* Filling Combo Box

## How to setup this Framework?

At First, you need to download HCJRock.js file and place it in some js folder. Now include that HCJRock.js in you html file.

```<script src='js/HCJRock.js'></script>```

Now you are all set to use the framework:

## How to use the framework ?

### Modal view

```
<!doctype html>
<html lang='en'>
<head>
<meta charset='utf-8'>
<title>AJAX Examples</title>
<script src='js/HCJRock.js'></script>
<script>
function modalLoader()
{
listOfComponents=document.getElementsByTagName("*");
var modal;
var i;
for(i=0;i<listOfComponents.length;i++)
{
if(listOfComponents[i].hasAttribute('forModal'))
{
if(listOfComponents[i].getAttribute('forModal')=='true')
{
listOfComponents[i].setAttribute('forModal','false');
modal=new Modal(listOfComponents[i]);
$$$.model.modals[$$$.model.modals.length]=modal;
i--;
}
}
}
}

function abOpened()
{
alert('Modal with ab opened');
}
function abClosed()
{
alert("Modal with ab will be closed");
}

function pqOpened()
{
alert('Modal with pq opened');
}
function pqClosed()
{
alert("Modal with pq will be closed");
}


function createModal1()
{
var modal=$$$.model.modals[0];
modal.afterOpening=abOpened;
modal.afterClosing=abClosed;
$$$('ab').show();
}

function abBeforeOpening()
{
alert('Modal with ab is about to be opened');
return true;
}

function abBeforeClosing()
{
alert('Modal with ab is about to be closed');
return true;
}
$$$.onDocumentLoaded(modalLoader);
</script>
</head>
<body>
<button onclick='createModal1()'>First Modal</button>
<div id='ab' style='display:none' forModal='true' header='some heading' footer='some footer' size='500x500' closeButton='true' maskColor='#000000'
modalBackgroundColor='#F3FFFF'
afterOpening='abOpened()'
afterClosing='abClosed()'
beforeOpening='abBeforeOpening()'
beforeClosing='abBeforeClosing()'
>

<table id='pqr'>
<tr><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td></tr>
<tr><td>Whatever 2</td><td>Whatever 22</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td></tr>
<tr><td>Whatever 3</td><td>Whatever 33</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td></tr>
<tr><td>Whatever 4</td><td>Whatever 44</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td></tr>
<tr><td>Whatever 5</td><td>Whatever 55</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td></tr>
<tr><td>Whatever 6</td><td>Whatever 66</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td></tr>
<tr><td>Whatever 7</td><td>Whatever 77</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td></tr>
<tr><td>Whatever 8</td><td>Whatever 88</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td><td>Whatever 1</td></tr>
</table>
</div>

</body>
</html>
```

**Output**
![modal](https://user-images.githubusercontent.com/55887060/116877826-721bfb00-abec-11eb-93af-b9afaa2bde7f.PNG)
______________________________________________________________________________________________________________________________________________

### Grid View

```
<!doctype html>
<html lang='en'>
<head>
<meta charset='utf-8'>
<title>AJAX Examples</title>
<script src='js/HCJRock.js'></script>
<style>
.hcjrock_hcgrid_header_division
{
overflow-x: hidden;
overflow-y: hidden;
width: 309px;
}

.hcjrock_hcgrid_body_division
{
overflow-x: scroll;
overflow-y: scroll;
height: 300px;
width: 317px;
}

.hcjrock_hcgrid_pagination
{
margin-top:10px;
}

.hcjrock_hcgrid_pagination td
{
width: 20px;
text-align: center;
}

.hcjrock_hcgrid_pagination a {
background-color: pink;
color:black;
padding: 1px 5px;
text-decoration: none;
text-transform: uppercase;
}

.hcjrock_hcgrid_head
{
border: 1px groove green'
border-bottom: 0px;
border-spacing: 0px;
border-collapse: collapse;
background: lightgray;
width:750px;
}

.hcjrock_hcgrid_head td
{
border-left: 1px groove red;
border-right: 1px groove red;
border-top: 1px groove red;
border-bottom: 0px groove red;
width: 50px;
text-align: right;
}

.hcjrock_hcgrid_head td+td
{
width: 100px;
text-align: left;
}

.hcjrock_hcgrid_head td+td+td
{
width=150px;
text-align: left;
}

.hcjrock_hcgrid_head td+td+td+td
{
width=150px;
text-align: left;
}

.hcjrock_hcgrid_head td+td+td+td+td
{
width=150px;
text-align: left;
}

.hcjrock_hcgrid_body
{
border: 1px groove green'
border-spacing: 0px;
border-collapse: collapse;
width:750px;
}

.hcjrock_hcgrid_body td
{
border: 1px groove red;
width: 50px;
text-align: right;
}
.hcjrock_hcgrid_body td+td
{
width: 100px;
text-align: left;
}
.hcjrock_hcgrid_body td+td+td
{
width=150px;
text-align: left;
}
.hcjrock_hcgrid_body td+td+td+td
{
width=150px;
text-align: left;
}
.hcjrock_hcgrid_body td+td+td+td+td
{
width=150px;
text-align: left;
}
</style>
<script>
class Student
{
constructor(rollNumber,name,nameOfMother,nameOfFather)
{
this.rollNumber=rollNumber;
this.name=name;
this.nameOfMother=nameOfMother;
this.nameOfFather=nameOfFather;
}
}

function gridLoader()
{
var hcjrock_hcgrid_header_division=document.querySelector('.hcjrock_hcgrid_header_division');
var hcjrock_hcgrid_body_division=document.querySelector('.hcjrock_hcgrid_body_division');
hcjrock_hcgrid_body_division.addEventListener('scroll',function(){
hcjrock_hcgrid_header_division.scrollLeft=hcjrock_hcgrid_body_division.scrollLeft;
});

var i;
var students=new Array();
for(i=0;i<=1000;i++)
{
students.push(new Student(i,i+"Name",i+"Mother",i+"Father"));
}
$$$.model.grid=new Grid('dataTable','dataTablePagination',students,15);
}
$$$.onDocumentLoaded(gridLoader);
</script>
</head>
<body>
<div class='somestyle'>
<div class='hcjrock_hcgrid_header_division'>
<table class='hcjrock_hcgrid_head'>
<tr>
<td>S.No.</td>
<td>Roll Number.</td>
<td>Name.</td>
<td>Father Name.</td>
<td>Mother Name.</td>
</tr>
</table>
</div>
<div class='hcjrock_hcgrid_body_division'>
<table class='hcjrock_hcgrid_body' id='dataTable'>
</table>
</div>

<div class='hcjrock_hcgrid_pagination_division'>
<table class='hcjrock_hcgrid_pagination' id='dataTablePagination'>
</table>
</div>
</div>
</body>
</html>
```
**Output**
![grid_view](https://user-images.githubusercontent.com/55887060/116878640-a5ab5500-abed-11eb-901e-ddeff6a24803.PNG)
__________________________________________________________________________________________________________________________

### Accordian-Pane
```
<!doctype html>
<html lang='en'>
<head>
<meta charset='utf-8'>
<style>
.div {
width: 97%;

border: 5px solid gray;
margin: 0;
}
.heading
{
color: white;
background-color: #222124;
}

</style>
<title>AJAX Examples</title>
<script src='js/HCJRock.js'></script>
</head>
<body>
<div accordian="true">
<h3 class='heading'>Heading 1</h3>
<div id='abcdef' class='div'>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
</div>

<h3 class='heading'>Heading 2</h3>
<div class='div'>
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 
</div>

<h3 class='heading'>Heading 3</h3>
<div class='div'>
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
</div>
</div>




<div accordian="true">
<h3 class='heading'>Heading 1000</h3>
<div id='abcdef' class='div'>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1
</div>

<h3 class='heading'>Heading 2000</h3>
<div class='div'>
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2
Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 Content2 
</div>

<h3 class='heading'>Heading 3000</h3>
<div class='div'>
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3 Content 3
</div>
</div>



</body>
</html>
```
**Output**
![accordian-Pane](https://user-images.githubusercontent.com/55887060/116878205-05553080-abed-11eb-8bf1-f2b9e607ae5f.PNG)
_____________________________________________________________________________________________________________

### Form Validation
```
<!doctype html>
<html lang='en'>
<head>
<title>Ajax Example</title>
<script src='js/JRock.js'></script>
<script>
function doSomething()
{
return $$$.validateForm("someForm").isValid({
"nm":{
"required":true,
"maxLength":20,
"errorPane":"nmErrorSection",
"errors":{
"required":"Name required",
"maxLength":"Name cannot exceed 20 characters"
}
},
"ad":{
"required":true,
"errorPane":"adErrorSection",
"errors":{
"required":"Address required"
}
},
"ct":{
"invalid":-1,
"errorPane":"ctErrorSection",
"errors":{
"invalid":"Select city"
}
},
"gender":{
"required":true,
"errorPane":"genderErrorSection",
"errors":{
"required":"select gender"
}
},
"agree":{
"requiredState":true,
"displayAlert":true,
"errors":{
"requiredState":"Select I agree checkbox"
}
}
});
}
</script>
</head>
<body>
<h1>HCJRock validations</h1>
<form id='someForm' onsubmit='return doSomething()'>
<table>
<tbody>
<tr>
<td>Name</td> 
<td><input type='text' name='nm' id='nm'><span id='nmErrorSection' style='color:red'></span></td> 
</tr>
<tr>
<td>Address</td> 
<td><textarea id='ad' name='ad'></textarea><span id='adErrorSection' style='color:red'></span></td> 
</tr>
<tr>
<td>Select city</td> 
<td>
<select id='ct' name='ct'>
<option value='-1'>select city</option>
<option value='1'>Ujjain</option>
<option value='2'>Dewas</option>
<option value='3'>Indore</option>
</select>
<span id='ctErrorSection' style='color:red'></span><br>
</td> 
</tr>
<tr>
<td>
Gender</td> 
<td> Male <input type='radio' name='gender' id='ml' value='M'>&nbsp;&nbsp;&nbsp;Female <input type='radio' name='gender' id='fe' value='F'> 
<span id='genderErrorSection' style='color:red'></span></td> 
</tr>
<tr>
<td> <input type='checkbox' name='agree' id='ag' value='y'></td> 
<td>  I agree?</td> 
</tr>
<tr>
<br>
<td> <button type='submit'>Registor</button></td> 
</tr>
</tbody>
</table>
</form>
</body>
</html>
```
**Output**

![form-validation](https://user-images.githubusercontent.com/55887060/116878354-3897bf80-abed-11eb-8309-1c9257b44efa.PNG)
______________________________________________________________________________________________________________________________

### AJAX Call & Filling Combo Box
```
<!Doctype html>
<html lang='en'>
<head>
<meta charset='utf-8'>
<title>Ajax Example</title>
<script src='js/HCJRock.js'></script>
<script>
function populateDesignations()
{
$$$.ajax({
"url":"servletOne",
"methodType":"GET",
"success":function(responseData){
var designations=JSON.parse(responseData);
alert(designations);
var designationComboBox=document.getElementById("designationCode");
var obj;
for(var i=0;i<designations.length;i++)
{
obj=document.createElement("option");
obj.value=designations[i].code;
obj.text=designations[i].title;
designationComboBox.appendChild(obj);
}
},
"failure":function(){
alert("Some problem");
}
});
}
window.addEventListener('load',populateDesignations);
</script>
</head>
<body>
<h1>Get type request</h1>
<select id='designationCode'></select>
<br>
<br>
<a href='index.html'>Home</a>
</body>
</html>
```
**Output**

![combo-box](https://user-images.githubusercontent.com/55887060/116878880-f28f2b80-abed-11eb-885e-b5af5601680b.png)
____________________________________________________________________________________________________________________________