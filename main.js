// THIS IS THE REAL JAVASCRIT FILE /// 
// ALL LIVE / WORKING VERSION IN HERE ///

// Funciton that works the drop down link
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// end of dropdown function 


// END OF PLATE SEARCH FEATURE

// Opens and close the new job menu
function openJobMenu() {
    console.log("open job menu");
    var newJobmenu = document.getElementById('newJobmenu')
    if (newJobmenu.style.display == "block") {
        newJobmenu.style.display = "none";
    } else {
        newJobmenu.style.display = "block";
    }
}
// Time Part of the details //
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// NEW JOB FUNCTION // UPDATE JOB FUNCTION // 
function collectInfo() {
    var form1 = document.getElementById("location").value;
    var form2 = document.getElementById("code").value;
    var form2 = form2.toUpperCase();
    var form3 = document.getElementById("description").value;
    var form4 = document.getElementById("plate").value;
    var form5 = document.getElementById("unit").value;
    var form5 = form5.toUpperCase();

    console.log(form1);
    sessionStorage.setItem(form1, form2, form3, form4, form5);
    console.log(form1, form2, form3, form4, form5);
    printForm(form1, form2, form3, form4, form5);
}

function printForm(form1, form2, form3, form4, form5) { // run on load of dashboard
    var info = sessionStorage.getItem(form1, form2, form3, form4, form5);
    console.log("printer running");
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var time = h + ":" + m + ":" + s;

    var box = document.getElementById("jobDetails"); // Getting the box where content go
    var jobCreated = "Job Created: " + time;
    console.log(form1);
    console.log(form1, form2, form3, form4, form5);
    box.innerHTML = jobCreated + "<br />Location: " + form1 + "<br />Code: " + form2 + "<br />Description: " + form3 + "<br />Plate: " + form4 + "<br />Units: " + form5;
    newJobmenu.style.display = "none";
}

/// BREAK //////

// 10-2 10-7 BUTTONS ////
function changeEnroute() {
    console.log("Enroute");
    var title = document.getElementById('title');
    title.innerHTML = "Enroute";
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var time = h + ":" + m + ":" + s;

    var textbox = "Enroute";

    var newMessage = document.createElement("LI");
    console.log(textbox); // Console.log of input from text box
    var full = time + ": Your " + textbox; // combines the time and user input
    console.log(full);
    var node = document.createElement("li"); // Finding the li 
    var textnode = document.createTextNode(full); // Create the node with the full text
    node.appendChild(textnode);
    document.getElementById("jobDetails").appendChild(node);
}

function changeArrived() {
    console.log("Arrived");
    var title = document.getElementById('title');
    title.innerHTML = "Arrived";
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var time = h + ":" + m + ":" + s;

    var textbox = "Arrived";

    var newMessage = document.createElement("LI");
    console.log(textbox); // Console.log of input from text box
    var full = time + ": You " + textbox; // combines the time and user input
    console.log(full);
    var node = document.createElement("li"); // Finding the li 
    var textnode = document.createTextNode(full); // Create the node with the full text
    node.appendChild(textnode);
    document.getElementById("jobDetails").appendChild(node);
}
// END OF 10-2 10-7 BUTTONS /// 

/// CLEAR JOB FUNCTIONS /// 
function clearJob() {
    var menu = document.getElementById('clearMenu')
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function jobK1() {
    alert("Job K1");
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var time = h + ":" + m + ":" + s;
    var textbox = "Job K1";

    var newMessage = document.createElement("LI");
    console.log(textbox); // Console.log of input from text box
    var full = time + ": "+ textbox; // combines the time and user input
    console.log(full);
    var node = document.createElement("li"); // Finding the li 
    var textnode = document.createTextNode(full); // Create the node with the full text
    node.appendChild(textnode);
    document.getElementById("jobDetails").appendChild(node);
}

function jobK6() {
    alert("Job K6");
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var time = h + ":" + m + ":" + s;
    var textbox = "Job K6";

    var newMessage = document.createElement("LI");
    console.log(textbox); // Console.log of input from text box
    var full = time + ": "+ textbox; // combines the time and user input
    console.log(full);
    var node = document.createElement("li"); // Finding the li 
    var textnode = document.createTextNode(full); // Create the node with the full text
    node.appendChild(textnode);
    document.getElementById("jobDetails").appendChild(node);
}

function jobK9() {
    alert("Job K9");
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var time = h + ":" + m + ":" + s;
    var textbox = "Job K9";

    var newMessage = document.createElement("LI");
    console.log(textbox); // Console.log of input from text box
    var full = time + ": "+ textbox; // combines the time and user input
    console.log(full);
    var node = document.createElement("li"); // Finding the li 
    var textnode = document.createTextNode(full); // Create the node with the full text
    node.appendChild(textnode);
    document.getElementById("jobDetails").appendChild(node);
}

function jobOther() {
    var otherReason = prompt("Clear the job?(Reason)");
    alert("Job Cleared for other reason: " + otherReason)
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var time = h + ":" + m + ":" + s;
    var textbox = "Job Othered: " + otherReason;

    var newMessage = document.createElement("LI");
    console.log(textbox); // Console.log of input from text box
    var full = time + ": "+ textbox; // combines the time and user input
    console.log(full);
    var node = document.createElement("li"); // Finding the li 
    var textnode = document.createTextNode(full); // Create the node with the full text
    node.appendChild(textnode);
    document.getElementById("jobDetails").appendChild(node);
}
function editJob() {
    var Jobmenu = document.getElementById('Jobmenu')
    if (Jobmenu.style.display == "block") {
        Jobmenu.style.display = "none";
    } else {
        Jobmenu.style.display = "block";
    }
}
// Update Text //
function update() {
    console.log("update function running");
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var time = h + ":" + m + ":" + s;

    var messages = document.getElementById("messages");
    var textbox = document.getElementById("updateBox");
    var button = document.getElementById("updateButton");

    var newMessage = document.createElement("LI");
    console.log(textbox.value); // Console.log of input from text box
    var full = time + ": " + textbox.value; // combines the time and user input
    console.log(full);
    var node = document.createElement("li"); // Finding the li 
    var textnode = document.createTextNode(full); // Create the node with the full text
    node.appendChild(textnode);
    document.getElementById("jobDetails").appendChild(node);
    textbox.value = '';
}
// Function for searching plates on plateSearch.html
function searchPlate() { // Function for built in searcher dashboard
    var userPlate = document.getElementById('userPlate').value;
    window.open("https://www.carjam.co.nz/car/?plate=" + userPlate);
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    var time = h + ":" + m + ":" + s;

    var newMessage = document.createElement("LI");
    var full = time + ": QVR: " + userPlate; // combines the time and user input
    var node = document.createElement("li"); // Finding the li 
    var textnode = document.createTextNode(full); // Create the node with the full text
    node.appendChild(textnode);
    document.getElementById("jobDetails").appendChild(node);
}
function searchPlateSECOND() { // Function for searching plates on plateSearch.html
    var plateSecond = document.getElementById('plateSecond').value;
    window.open("https://www.carjam.co.nz/car/?plate=" + plateSecond);
}
function openPlate() {
    var plateSearchMenu = document.getElementById('plateSearchMenu')
    if (plateSearchMenu.style.display == "block") {
        plateSearchMenu.style.display = "none";
    } else {
        plateSearchMenu.style.display = "block";
    }
}

function openMap() {
    console.log("Open map LINK NEEDS TO FIXED");
     window.open("https://www.google.com/maps/place/Invercargill/data=!4m2!3m1!1s0xa9d2c494ac1469d7:0xa00ef88e796a420?sa=X&ved=2ahUKEwj5n6-yjp3jAhVHfSsKHfjfBr8Q8gEwG3oECA4QBA");
}

function logIn() {
    console.log("Log in working ");
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    if (userName == "truckerblake" && password == "password1") {
        console.log("Hello Blake");
    }
    else {
        alert("Wrong account");
    }
}
