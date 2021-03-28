

var firstName = prompt("enter your name ");
alert("Welcome to our restaurant " + firstName);
var favFood = prompt("enter your favorite food","burger, shawerma");

while (favFood !== "burger" && favFood !== "shawerma")
{
    favFood= prompt("please select right food ", "burger, shawerma");
}

var foodNum= prompt("how many burger or shawerma woluld like to see");
var image ='';
console.log(image);
for(var i=1; i<=foodNum;i++)
{
    if(favFood === "burger"){
        
        image += '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg" />';
    }
    
    else if (favFood === "shawerma"){
   
     image += '<img src="https://i1.wp.com/2qlam.com/wp-content/uploads/2020/04/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7.jpg?fit=780%2C521&ssl=1" />';
    }
    else{
        alert(" Please select the right food ");
    
    }
    

}
console.log(image);
document.write(image);

