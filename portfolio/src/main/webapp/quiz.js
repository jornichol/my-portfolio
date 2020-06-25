// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Prompts the user with a quiz.
 */

function quiz(){
    var totalscore = 6;
    let myinformation = {};
    myinformation.name = "jordan";
    myinformation.surname = "nicholson";
    myinformation["favorite sport"] = "soccer";
    myinformation["second favorite sport"] = "wrestling";
    myinformation["favorite hobby"] = "working out";
    myinformation["favorite city"] = "San Francisco";

    //prompt user with a question
    var userscore = 0;
    for (let info in myinformation){
        let useranswer = prompt("What is my " + info + "?", "");
        if (useranswer.toLowerCase === myinformation[info].toLowerCase) {
            userscore++;
        }  
    }

    //display final score
    alert("Your score is " + 100*userscore/totalscore + "%");
}

