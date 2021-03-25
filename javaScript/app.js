

var firstName = prompt("enter your name ");
alert("Welcome to our restaurant " + firstName);
var favFood = prompt("enter your favorite food","burger, shawerma");

if(favFood === "burger"){
    document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg" />');
}

else if (favFood === "shawerma"){
 document.write('<img src="https://i1.wp.com/2qlam.com/wp-content/uploads/2020/04/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7.jpg?fit=780%2C521&ssl=1 />"');
}
else{
    alert(" Please select the right food ");

}
