
var QuouteArray = [
    q1= {
        Qut: "Be yourself; everyone else is already taken.",
        name: "-- Oscar Wild"
    },
    q2= {
        Qut: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        name: "-- Marilyn Monroe"
    },
    q3= {
        Qut: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        name: "-- Albert Einstein"
    },
    q4= {
        Qut: "So many books, so little time.",
        name: "-- Frank Zappa"
    },
    q5= {
        Qut: "A room without books is like a body without a soul.",
        name: "-- Marcus Tullius Cicero"
    },
    q6= {
        Qut: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        name: "-- Bernard M. Baruch"
    },
    q7= {
        Qut: "You've gotta dance like there's nobody watching,</br> Love like you'll never be hurt,</br>Sing like there's nobody listening,</br>And live like it's heaven on earth.",
        name: "-- William W. Purkey"
    },
    q8= {
        Qut: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        name: "-- Dr. Seuss"
    }
]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function PrintQuoute() {
    var randomNumb = getRandomInt((QuouteArray.length))
    console.log(randomNumb);
    document.getElementById("Quoute").innerHTML= QuouteArray[randomNumb].Qut
    document.getElementById("Quoute-Sayer").innerHTML= QuouteArray[randomNumb].name
    document.getElementById("QuteImage").innerHTML= `<img src="Images/${randomNumb}.jpg" style="border-radius: 50%;margin-top: 25px;" alt="">`
}