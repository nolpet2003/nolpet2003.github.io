let questionIndex = 0;

let questions = [
    "Is the person on the regional team?",                  // 0
    "Was this person one of the seven runners at regionals?",   // 1
    "Did they finish top 5 for the team?",                  // 2
    "Is English their first language?",                     // 3
    "Is the person an upperclassman?",                      // 4
    "Does this person have a sibling that ran for the team?",    // 5
    "Does the person tend to ride a Blue Jay flyer?",       // 6 
    "Does the person usually have a red beard?",         // 7
    "Did this person win the Fastest Sister Award?",           // 8
    "Is the person either a freshman or sophomore?",        // 9
    "Has the person broken 10 minutes in a 3k (this season)?",            // 10
    "Would you describe this person as a frat version of Todd?",     // 11
    "Does this person complain a lot (especially during core)?",                      // 12
    "Is this person a computer science major?",   // 13
    "Back in blue mountain?",                                // 14
    "Is the person from Pennsylvania?",                      // 15
    "Is the person a Clash Royale legend?",                  // 16
    "Is this person going to study abroad soon?",            // 17
    "Has this person been to Ireland?",            // 18
    "Does this person live in either Hackman North or South?",   // 19
    "Could this person, paired with another on the team, be considered part Dumb & Dumber?",     // 20
    "Does this person have luscious flowing locks that glide with the wind?",               // 21
    "Does this person do the best `Etown on 3` callout?",       // 22
    "Does this person run the 400m in track?",                  // 23
    "Did this person trip and fracture part of their leg?",      // 24
    "Are you trying to trick me by thinking of a coach?",        // 25
    "Is the person a man?",                                      // 26
    "Does this person wear glasses on a daily basis?"           // 27
];

function answerQuestion(answer) {
    switch (questionIndex) {
        case 0: // person on regional team
            if (answer === 'yes') {
                questionIndex = 1;
            } else {
                questionIndex = 9;
            }
            break;

        case 1: // person run at regionals
            if (answer === 'yes') {
                questionIndex = 2;
            } else {
                questionIndex = 8;
            }
            break;

        case 2: // finish top 5
            if (answer === 'yes') {
                questionIndex = 3;
            } else {
                questionIndex = 7;
            }
            break;

        case 3: // english first language
            if (answer === 'yes') {
                questionIndex = 4;
            } else {
                displayResult("Ben Ortiz", "ben.png");
                return;
            }
            break;

        case 4: // upperclassman?
            if (answer === 'yes') {
                questionIndex = 5;
            } else {
                displayResult("Derek Kendig", "derek.png");
                return;
            }
            break;

        case 5: // taller than 6 foot 2
            if (answer === 'yes') {
                displayResult("Daniel Myers", "daniel.png");
                return;
            } else {
                questionIndex = 6;
            }
            break;

        case 6: // bluejay flyer
            if (answer === 'yes') {
                displayResult("Matt Fick");
            } else {
                displayResult("Brandon Baxter", "brandon.png");
            }
            return;

        case 7: // red beard
            if (answer === 'yes') {
                displayResult("Nolan Pettit", "nolan.png");
            } else {
                displayResult("Jake Forgione", "jakef.png");
            }
            return;

        case 8: // hottest sister award
            if (answer === 'yes') {
                displayResult("Will Inglis", "will.png");
            } else {
                displayResult("Christian Gingrich", "christian.png");
            }
            return;

        case 9: // underclassman
            if (answer === 'yes') {
                questionIndex = 10;
            } else {
                questionIndex = 19;
            }
            break;

        case 10: // broke 10 minutes in 3k
            if (answer === 'yes') {
                questionIndex = 11;
            } else {
                questionIndex = 15;
            }
            break;

        case 11: // frat todd
            if (answer === 'yes') {
                displayResult("Jake Smith", "jakes.png");
            } else {
                questionIndex = 12;
            }
            break;

        case 12: // complain
            if (answer === 'yes') {
                displayResult("Braydon Malley", "braydon.png");
            } else {
                questionIndex = 13;
            }
            break;

        case 13: // computer science major
            if (answer === 'yes') {
                displayResult("Marty Ratchford", "marty.png");
            } else {
                questionIndex = 14;
            }
            break;

        case 14: // bluemountain
            if (answer === 'yes') {
                displayResult("Chase Wargo", "chase.png");
            } else {
                questionIndex = 27;
            }
            break;

        case 27: // glasses
            if (answer === 'yes') {
                displayResult("Wyatt Peeling", "wyatt.png");
            } else {
                displayResult("Congrats, you have stumped the computer");
            }
            return;

        case 15: // from pa?
            if (answer === 'yes') {
                questionIndex = 16;
            } else {
                displayResult("Anthony Imperatore", "anthony.png");
            }
            break;

        case 16: // clash royale
            if (answer === 'yes') {
                displayResult("Carson Brooks", "carsonb.png");
            } else {
                questionIndex = 17;
            }
            break;

        case 17: // study abroad
            if (answer === 'yes') {
                questionIndex = 18;
            } else {
                displayResult("Congrats you have stumped the computer");
            }
            break;

        case 18: // ireland
            if (answer === 'yes') {
                displayResult("Brian Solly", "brians.png");
            } else {
                displayResult("Brian Merk", "brianm.png");
            }
            return;

        case 19: // hackman
            if (answer === 'yes') {
                questionIndex = 20;
            } else {
                questionIndex = 22;
            }
            break;

        case 20: // dumb and dumber
            if (answer === 'yes') {
                questionIndex = 21;
            } else {
                displayResult("Nate Johanneman", "nate.png");
            }
            break;

        case 21: // hair
            if (answer === 'yes') {
                displayResult("Carson Wiley", "carsonw.png");
            } else {
                displayResult("Todd Shifflet", "todd.png");
            }
            return;

        case 22: // yelling etown
            if (answer === 'yes') {
                displayResult("Alex Fox", "alex.png");
            } else {
                questionIndex = 23;
            }
            break;

        case 23: // run the 400
            if (answer === 'yes') {
                questionIndex = 24;
            } else {
                questionIndex = 25;
            }
            break;

        case 24: // break the leg
            if (answer === 'yes') {
                displayResult("Grant Kuhn", "grant.png");
            } else {
                displayResult("Andrew Reice", "andrew.png");
            }
            return;

        case 25: // coach
            if (answer === 'yes') {
                questionIndex = 26;
            } else {
                displayResult("Carter Balliet", "carter.png");
            }
            break;

        case 26: // falk or maria
            if (answer === 'yes') {
                displayResult("Coach Falk", "falk.png");
            } else {
                displayResult("Coach Anderson", "maria.png");
            }
            break;

        
    }

    // Display the next question or final result
if (questionIndex < questions.length) {
    document.getElementById('question').innerText = questions[questionIndex];
} else {
    displayResult();
}

}

function displayResult(result = '', imagePath = '') {
    // Display the final result
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('guessed-result').innerText = result;
    document.getElementById("logo").classList.add("hidden");
    // Display the image
    if (imagePath) {
        document.getElementById('result-image').src = imagePath;
        document.getElementById('result-image').style.display = 'block';
    } else {
        document.getElementById('result-image').style.display = 'none';
    }
}

document.getElementById('question').innerText = questions[0];
