

module.exports = getDate;

// console.log(module);
function getDate(){
    
    let today = new Date();
     
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("hi-IN", options); /* en-US for english */
    return day;
}

function getDay(){

    let today = new Date();
     
    let options = {
        weekday: "long"
    };
    let day = today.toLocaleDateString("hi-IN", options); /* en-US for english */
    return day;
}