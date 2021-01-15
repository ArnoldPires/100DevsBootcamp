//Create a conditonal that checks the day
document.querySelector('#check').addEventListener('click', dayCheck)

function dayCheck() {
  let day = document.querySelector("#whatDay").value.toLowerCase();
  let house = document.querySelector("#whatHouse").value.toLowerCase();
  console.log(day, house);
  //If Tuesday or Thursday, tell them they have class
   if ( day === "tuesday" || day === "tues" || day === "Tuesday" || day === "thursday" || day === "Thursday" || day === "thurs") {
     document.getElementById("yell").innerHTML = "You have class today";
     //If Saturday, tell them they have Office Hours
   } else if (day === "saturday" || day === "Saturay" || day === "sat") {
        document.getElementById("yell").innerHTML = "Today is office hours";
      //If Friday and House Turing, they have private office hours
    } else if (day === "Friday" || day === "friday" || day === "fri" && house === "turing" || house === "Turing") {
        document.getElementById("yell").innerHTML ="You can schedule private office hours";
      //If Wednesday and House Hopper, tell them they have private office hours
    } else if ( day === "Wednesday" || day === "wednesday" || day === "wed" && house === "Hopper" || house === "hopper") {
        document.getElementById("yell").innerHTML = "You can schedule private office hours for hopper";
      //If Monday and House Hamilton, tell them to book a 1on1
    } else if ( day === "Monday" || day === "monday" || day === "mon" && house === "Hamilton" || house === "hamilton") {
        document.getElementById("yell").innerHTML = "You can book a 1 on 1";
        //If any other day or wrong house, tell them to study
    } else {
        document.getElementById("yell").innerHTML = "Please study"
    }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
