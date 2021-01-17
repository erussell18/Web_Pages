var StartTime, EndTime, SubmitTime, Schedule, StartDate, EndDate, Reason, Day, CalcTime, Weekdays;
//Declare the Variables
StartTime = document.getElementById("StartTime");
EndTime = document.getElementById("EndTime");
SubmitTime = document.getElementById("SubmitTime");
Schedule = document.getElementById("Schedule");
StartDate = document.getElementById("StartDate");
Reason = document.getElementById("Reason");
//Day = document.getElementById("Day")
CalcTime = document.getElementById("CalcTime");
Weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
TotalH = 0;

//When clicked will add inputs to the textarea
SubmitTime.onclick = function() {
    var WorkedHours = parseInt(EndTime.value.slice(0,2)) - parseInt(StartTime.value.slice(0,2)); //Adds the Start Time + End Time to get hours worked
    //Formats the date value into dd/mm/yyyy
    var StartMonth = StartDate.value.slice(5,7); //Gets the Month from date value
    var StartDay = StartDate.value.slice(8,10); //Gets the Day
    var StartYear = StartDate.value.slice(0,4); //Gets the Year
    var FullDate = StartMonth + "/" + StartDay + "/" + StartYear; //Formats the values
    //Gets the Day from Date Input
    var SDay = new Date(StartDate.value);
    var Weekday = SDay.getDay();
    console.log(Weekdays[Weekday]);

    // Puts the information into the textarea
    var PrintSch = Schedule.innerHTML += Weekdays[Weekday] + ", " + FullDate + ", " + StartTime.value + " - " + EndTime.value + ": " + WorkedHours + " Hours" + "\n" + "Reason: " + Reason.value + "\n \n";
    // Gets Total Hours Worked
    TotalH += WorkedHours;

    CalcTime.onclick = function() {
        Schedule.innerHTML = PrintSch +"\n \n" + TotalH + " Hours Worked";
    }
}


