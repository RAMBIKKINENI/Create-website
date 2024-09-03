document.write("welcome to javascript");

var a=22;
var b=33;
document.write(a*b+"<br/>");

let c=44;
let d=55;
let e=c+d;
document.write(e+"<br/>");

var f=34;

if(f>=75)
{
    document.write("the value is valid");
}
else{
    document.write("the value is not valid");
}

var g=35;
if(g>=75)
{
    document.write("the student get the 'A' grade"+"<br/>");
}
else if(g>=60)
{
    document.write("the student get 'B' grade"+"<br/>");
}
else if(g>=45)
{
    document.write("the student get the 'C' grade"+"<br/>");
}
else
{
    document.write("the student get the 'F' grade, Tell to your parents come to school tomorrow afternoon"+"<br/>");
}

//loops statements
var h=55;
while(h<=60)
{
    document.write("the number is accepted"+"<br/>");
    h=h+1;
}
//for loop
var i=22;
for(i=10;i<=22;i++)
{
    document.write(i+ "<br/>");
}
//do-while
var j=10;
do{
    document.write(j+"<br/>");
    j=j-1;
}
while(j>=1);