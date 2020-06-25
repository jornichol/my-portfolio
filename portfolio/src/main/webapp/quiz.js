function quiz(){
    var totalscore = 6;
    let myinformation = {};
    myinformation.name = "jordan";
    myinformation.surname = "nicholson";
    myinformation["favorite sport"] = "soccer";
    myinformation["second favorite sport"] = "wrestling";
    myinformation["favorite hobby"] = "working out";
    myinformation["favorite city"] = "San Francisco";
    var userscore = 0;
    for (let info in myinformation){
        let useranswer = prompt("What is my " + info + "?", "");
        if (useranswer.toLowerCase === myinformation[info].toLowerCase) {
            userscore++;
        }  
    }
    alert("Your score is " + 100*userscore/totalscore + "%");
}

