canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
Car1_height=90;
Car1_width=100;
Car1_x=10;
Car1_y=10;
Car2_height=90;
Car2_width=100;
Car2_x=10;
Car2_y=100;
background_image="racing.gif";
Car1_image="RED.png";
Car2_image="Black.png";
function add(){
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    Car1_imageTag = new Image();
    Car1_imageTag.onload = uploadCar1;
    Car1_imageTag.src = Car1_image;

    Car2_imageTag = new Image();
    Car2_imageTag.onload = uploadCar2;
    Car2_imageTag.src = Car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0 ,canvas.width,canvas.height);
}
function uploadCar1(){
    ctx.drawImage(Car1_imageTag, Car1_x , Car1_y, Car1_width, Car1_height);
}
function uploadCar2(){
    ctx.drawImage(Car2_imageTag, Car2_x , Car2_y, Car2_width, Car2_width);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log (keyPressed);
if (keyPressed == '38')
{
    Car1_up();
    console.log("up");
} 
if (keyPressed == '40')
{
    Car1_down();
    console.log("down");
} 
if (keyPressed == '37')
{
    Car1_left();
    console.log("left");
} 
if (keyPressed == '39')
{
    Car1_right();
    console.log("right");
} 
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log (keyPressed);
if (keyPressed == '38')
{
    Car2_up();
    console.log("up");
} 
if (keyPressed == '40')
{
    Car2_down();
    console.log("down");
} 
if (keyPressed == '37')
{
    Car2_left();
    console.log("left");
} 
if (keyPressed == '39')
{
    Car2_right();
    console.log("right");
} 
}