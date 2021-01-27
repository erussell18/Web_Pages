const 
//Declare the Variables
StartTime = document.getElementById("StartTime"),
EndTime = document.getElementById("EndTime"),
SubmitTime = document.getElementById("SubmitTime"),
Schedule = document.getElementById("Schedule"),
StartDate = document.getElementById("StartDate"),
Reason = document.getElementById("Reason"),
//Day = document.getElementById("Day")
CalcTime = document.getElementById("CalcTime"),
Weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let TotalH = 0;
let WorkedHours;
//When clicked will add inputs to the textarea
SubmitTime.onclick = function() {

    if (EndTime.value.slice(4,8) =='PM'){// If the end time is in the afternoon it will add 12 before subtraction to get the correct time
        WorkedHours = parseInt(EndTime.value.slice(0,1)) + 12 - parseInt(StartTime.value.slice(0,2));
        console.log(WorkedHours);
    }

    else {// If the end time is not in the afternoon it will just subtract
        WorkedHours = parseInt(EndTime.value.slice(0,2)) - parseInt(StartTime.value.slice(0,2)); //Adds the Start Time + End Time to get hours worked
    }

    //Formats the date value into dd/mm/yyyy
    const StartMonth = StartDate.value.slice(5,7), //Gets the Month from date value
        StartDay = StartDate.value.slice(8,10), //Gets the Day
        StartYear = StartDate.value.slice(0,4), //Gets the Year
        FullDate = StartMonth + "/" + StartDay + "/" + StartYear; //Formats the values
    //Gets the Day from Date Input
    const SDay = new Date(StartDate.value),
        Weekday = SDay.getDay();
    console.log(Weekdays[Weekday]);

    // Puts the information into the textarea
    const PrintSch = Schedule.innerHTML += `${Weekdays[Weekday]}, ${FullDate}, ${StartTime.value} - ${EndTime.value}: ${WorkedHours} Hours \n Reason: ${Reason.value} \n \n`;
    // Gets Total Hours Worked
    TotalH += WorkedHours;

    CalcTime.onclick = function() {
        Schedule.innerHTML = `${PrintSch} \n \n ${TotalH} Hours Worked`;
    }
}


