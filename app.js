let display="";
let std1 = {
    name: "Adnan Ahmed",
    dept: "Computer Science",
    university: "UBIT",
    status: function(city){
        display += `<h1>The Student name ${this.name} department ${this.dept} studies in ${this.university} lives in ${city}</h1>`;
        document.getElementById("display").innerHTML = display;
    }
}

let std2 = {
    name: "Ahsan Shahid",
    dept: "Computer Engineering",
    university: "SSUET",
}

std1.status("Karachi");
std1.status.call(std2, "Lahore");