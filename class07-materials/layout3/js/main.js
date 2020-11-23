// The date
document.getElementById("date").innerHTML = formatAMPM();
function formatAMPM() {
var d = new Date(),
    months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
return days[d.getDay()]+', '+d.getDate()+' ' +months[d.getMonth()];
}