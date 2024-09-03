# KLJRock
This a light-weight JavaScript framework which makes a web developer's life easier by providing many built-in functions using which the user can accomplish various tasks and make a responsive web sites easily and quickly. The framework simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.

## Features
* Handling AJAX request (GET/POST)
* Modal View
* Accordian Pane
* Form Validation
* Filling Combo Box

## How to setup this Framework?

At First, you need to download KLJRock.js file and place it in some js folder. Now include that KLJRock.js in you html file.

```<script src='js/KLJRock.js'></script>```

Now you are all set to use the framework:

## How to use the framework ?

### Modal view

```
//KLJRock modal user script starts here
function createModal1()
{
$$$.modals.show("ab");
}
function createModal2()
{
$$$.modals.show("cd");
}
function xyz()
{
alert(document.getElementById("myTextBox"));
}
//KLJRock Modal user script ends here


<!-- KLJRock Modal testing part -->
<h1>KLJRock Modal example</h1><br>
<button type='button' onClick='createModal1()'>show first modal</button>
<button type='button' onClick='createModal2()'>show Second modal</button>
<div id='ab' style='display:none' areaClose="true" forModal="true" size="450x300" header="Some heding" footer="Some footer" maskColor="#7C7B7B" modalBackgroundColor="white" closeButton="True" afterOpening=abOpened() beforeOpening=abBeforeOpening() afterClosing=abClosed() beforeClosing=abBeforeClosing()>
<h1>god is great</h1>
<input type='text' id='myTextBox' value="Great"><br>
One kiss is all it takes
Fallin' in love with me
Possibilities
I look like all you need
Let me take the night, I love real easy
And I know that you'll still wanna see me
On the Sunday morning, music real loud
Let me love you while the moon is still out
Something in you, lit up heaven in meThe feeling won't let me sleep'Cause I'm lost in the way you move, the way you feel
One kiss is all it takes
Fallin' in love with me
Possibilities
I look like all you need
One kiss is all it takes
Fallin' in love with me
Possibilities
I look like all you need
One
One
One
One
I just wanna feel your skin on mine
Feel your eyes do the exploring
Passion in the message when you smile
Take my time
Something in you lit up heaven in me
The feeling won't let me sleep
'Cause I'm lost in the way you move, the way you feel
One kiss is all it takes
Fallin' in love with me
Possibilities
I look like all you need
One kiss is all it takes
Fallin' in love with me
Possibilities
I look like all you need
One
One
One
One
See a wonderland in your eyes
Might need your company tonight
Something in you lit up heaven in me
The feeling won't let me sleep
'Cause I'm lost in the way you move, the way you feel
One kiss is all it takes
Fallin' in love with me
Possibilities
I look like all you need
One kiss is all it takes
Fallin' in love with me
Possibilities
I look like all you need
One
One
One
One
</div>
<div id='pqr' style='display:none' areaClose="true" forModal="false">
<h1>I am here the big dog big steper</h1>
</div>
<div id='cd' style='display:none' areaClose="false" forModal="true">
<h1>Ujjain is the city of gods</h1>
</div>
<button type='button' onclick='xyz()'>xyz</button>
<!--KLJRock modal part ends here -->
```

**Output**
![modal](https://user-images.githubusercontent.com/55887060/116877826-721bfb00-abec-11eb-93af-b9afaa2bde7f.PNG)
______________________________________________________________________________________________________________________________________________

### Grid View

```
//KLJRockGrid user script starts here
function populateEmployees(){
var employees=null;
$$$.ajax({
"url" : "servletOneEmployee",
//"url" : "servletOne",
"methodType" : "GET",
"success" : function(responseData){
employees=JSON.parse(responseData);
$$$.model.grid=new Grid('mainDivision','dataTableId',employees,2);
},
"failure":function(){
alert('Something wrong');
}
});
}
$$$.onDocumentLoaded(function(){
populateEmployees();
});
//KLJRockGrid user script ends here

<!-- KLJRock grid part starts here -->
<h1>KLJRock Grid example</h1><br>
<div id='mainDivision' class='someClass'>
<div class="kljrock_klgrid_header_division">
<table id='headingId'>
<tr>
<td>S.NO</td>
<td>Roll.No</td>
<td>Name</td>
<td>Designation Id.</td>
<td>Designation</t>
<td>Date of Birth</td>
<td>Gender</td>
<td>Is Indian</td>
<td>Basic Salary</td>
<td>Pan Number</td>
<td>Aadhar Card Number</td>
</tr>
</table>
</div>
<div class="kljrock_klgrid_body_division">
<table  id="dataTableId">
</table>
</div>
</div>
</body>
<!-- KLJRock grid part ends here -->
```
**Output**
![grid_view](https://user-images.githubusercontent.com/55887060/116878640-a5ab5500-abed-11eb-901e-ddeff6a24803.PNG)
__________________________________________________________________________________________________________________________

### Accordian-Pane
```
<!-- KLJRock accordian testing part -->
<h1>KLJRock Accordian Example</h1>
<div accordian="true">
<h3>Heading 1</h3>
<div>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
</div>
<h3>Heading 2</h3>
<div>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
</div>
<h3>Heading 3</h3>
<div>
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3<br>
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3<br>
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3<br>
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3<br>
</div>
</div>

<div accordian="true">
<h3>Heading 1000</h3>
<div>
Content 111 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 111 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 111 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 111 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 111 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
Content 1 Content 1 Content 1 Content 1 Content 1 Content 1<br>
</div>
<h3>Heading 2000</h3>
<div>
Content 222 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 222 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 222 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
Content 2 Content 2 Content 2 Content 2 Content 2 Content 2<br>
</div>
<h3>Heading 3000</h3>
<div>
Content 3233 Content 3 Content 3 Content 3 Content 3 Content 3<br>
Content 3333 Content 3 Content 3 Content 3 Content 3 Content 3<br>
Content 3333 Content 3 Content 3 Content 3 Content 3 Content 3<br>
Content 3 Content 3 Content 3 Content 3 Content 3 Content 3<br>
</div>
</div>
<!-- KLJRock Accordian testing part -->
```
**Output**
![accordian-Pane](https://user-images.githubusercontent.com/55887060/116878205-05553080-abed-11eb-8bf1-f2b9e607ae5f.PNG)
_____________________________________________________________________________________________________________

### Form Validation
```
//KLJRock validation user script starts here 
function doSomething(formId)
{
return $$$.isValid(formId,{
//user have to specify there name which they provided at the time of tag creation example name='name',address='address' in input tag and according to this specify key for validation "name":{jsonObject}
"name" : {
"required" : true,
"max-length" : 20,
"error-pane" : "nmErrorSection",
"errors" : {
"required" : "Name Required",
"max-length" : "Name cannot exceed 20 characters"
}
},
"address" : {
"required" : true,
"error-pane" : "adErrorSection",
"errors" : {
"required" : "Address Required"
}
},
"city" : {
"Invalid" : -1,
"error-pane" : "ctErrorSection",
"errors" : {
"Invalid" : "Select City"
}
},
"gender" : {
"required" : true,
"error-pane" : "genderErrorSection",
"errors" : {
"required" : "Select Gender"
}
},
"agree" : {
"required-state" : true,
"display-alert" : true,
"errors" : {
"required-state" : "Select I agree Checkbox"
}
}
});
}
//KLJRock validation user script ends here

<!-- KLJRock validation testing part -->
<h1>KLJRock Validitions</h1>
<form id='someForm' action='watever' onsubmit='return doSomething("someForm")'>
Name <input type='text' id='nm' name='name'>
<span id='nmErrorSection'></span><br>
Address <textarea name='address' id='address'></textarea>
<span id='adErrorSection'></span><br>
Select City
<select id='ct' name='city'>
<option value='-1'>&lt;select City&gt;</option>
<option value='1'>Ujjain</option>
<option value='2'>Dewas</option>
<option value='3'>Bhopal</option>
<option value='4'>Indore</option>
</select>
<span id='ctErrorSection'></span><br>
Gender &nbsp;&nbsp;&nbsp;&nbsp;
Male<input type='radio' id='ml' name='gender' value='M'>
&nbsp;&nbsp;&nbsp;&nbsp;
Female<input type='radio' id='fe' name='gender' value='F'>
<span id='genderErrorSection'></span><br>
I Agree<input type='checkBox' id='' name='agree' value='Y'><br>
<button type='submit'>Register</button>
</form>
<!-- KLJRock validation testing part -->
```
**Output**

![form-validation](https://user-images.githubusercontent.com/55887060/116878354-3897bf80-abed-11eb-8309-1c9257b44efa.PNG)
______________________________________________________________________________________________________________________________

### AJAX Call & Filling Combo Box
```
//KLJRock fillComboBox user script starts here
function populateDesignations()
{
$$$.ajax({
"url" : "servletOne",
"methodType" : "GET",
"success" : function(responseData){
let designations=JSON.parse(responseData);
//let titleString="title";
$$$("designationsComboBox").fillComboBox({
"dataSource" : designations,
"text" : "title",
"value" : "code",
"firstOption" : {
"text" : "<select desigantion>",
"value" : "-1"
}});
},
"failure":function(){
alert('some problem');
}
});
}
$$$.onDocumentLoaded(function(){
populateDesignations();
});
//KLJRock fillComboBox user script ends here

<!--KLJRock fillComboBox part -->
<h1>KLJRock Get type example with JSON and AJAX call</h1><br>
Designations
<select id='designationsComboBox'>
</select>
<!-- fill ComboBox part ends here -->
```
**Output**

![combo-box](https://user-images.githubusercontent.com/55887060/116878880-f28f2b80-abed-11eb-885e-b5af5601680b.png)
____________________________________________________________________________________________________________________________