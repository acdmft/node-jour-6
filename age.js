function calculateAge(date) {
    let currDate = new Date();
    let provDate = new Date(date);
    let age = currDate.getFullYear() - provDate.getFullYear() - 1;
    if (currDate.getMonth() > provDate.getMonth()) {
        age++;
    } 
    if (currDate.getMonth() === provDate.getMonth()) { 
        if (currDate.getDate() > provDate.getDate()) {
            age++;
        } 
    } 

    console.log(age);
    
}

calculateAge("12/14/2000");