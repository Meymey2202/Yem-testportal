const questions = [
  {
    number: 1,
    que: " Which type of JavaScript language is ___",
    ans1: "Object-Oriented",
    ans2: "Object-Based",
    ans3: "Assembly-language",
    ans4: "High-level",
    ans: "2"
  },
  {
    number: 2,
    que: "Which of the following keywords is used to define a variable in Javascript?",
    ans1: "var",
    ans2: "let",
    ans3: "Both 1-2",
    ans4: "None of Above",
    ans: "3"
  },
  {
    number: 3,
    que: "Which of the following methods is used to access HTML elements using Javascript?",
    ans1: "getElementByID",
    ans2: "getElementsByClassName",
    ans3: "Both 1-2",
    ans4: "None of Above",
    ans: "3"
  },
  {
    number: 4,
    que: "Which of the following methods can be used to display data in some form using Javascript?",
    ans1: "document.write()",
    ans2: "console.log()",
    ans3: "window.alert",
    ans4: "All of the Above",
    ans: "4"
  },
  {
    number: 5,
    que: "What is JavaScript?",
    ans1: "JavaScript is a scripting language used to make the website interactive",
    ans2: "JavaScript is an assembly language used to make the website interactive",
    ans3: "JavaScript is a compiled language used to make the website interactive",
    ans4: "None of the mentioned",
    ans: "1"
  },
  {
    number: 6,
    que: "Which of the following function of Number object returns the number's value?",
    ans1: "toString()",
    ans2: "valueOf()",
    ans3: "toLocaleString()",
    ans4: "toPrecision()",
    ans: "2"
  },
  {
    number: 7,
    que: "Which of the following function of String object returns the calling string value converted to upper case?",
    ans1: "toLocaleUpperCase()",
    ans2: "toUpperCase()",
    ans3: "toString()",
    ans4: "substring()",
    ans: "2"
  },
  {
    number: 8,
    que: "Which of the following function of Array object reverses the order of the elements of an array?",
    ans1: "reverse()",
    ans2: "push() ",
    ans3: "reduce() ",
    ans4: "reduceRight()",
    ans: "1"
  },
  {
    number: 9,
    que: "In which HTML element, we put the JavaScript code?",
    ans1: "< javascript >...< /javascript > ",
    ans2: "< js >...< /js > ",
    ans3: "< script >...< /script >",
    ans4: "< css >...< /css >",
    ans: "3"
  },
  {
    number: 10,
    que: "JavaScript code can be written in ____.",
    ans1: "JavaScript file (.js file) ",
    ans2: "HTML document directly",
    ans3: "JavaScript file and in HTML document directly",
    ans4: "In style sheets (.css file)",
    ans: "3"
  }
  ,
  {
    number: 11,
    que: "Which symbol is used separate JavaScript statements?",
    ans1: "Comma (,)",
    ans2: "Colon (:) ",
    ans3: "Hyphen (_)",
    ans4: "Semicolon (;)",
    ans: "4"
  },
  {
    number: 12,
    que: "Which is the correct syntax to call an external JavaScript file in the current HTML document?",
    ans1: '< script src="jsfile.js" >< /script>',
    ans2: '< script href=" jsfile.js" >< /script> ',
    ans3: '< import src=" jsfile.js" >< /import>',
    ans4: '< script link=" jsfile.js" >< /script>',
    ans: "1"
  },
  {
    number: 13,
    que: "Which property is used to define the HTML content to an HTML element with a specific id?",
    ans1: "innerText ",
    ans2: "innerContent ",
    ans3: "elementText",
    ans4: "innerHTML",
    ans: "4"
  },
  {
    number: 14,
    que: "Which JavaScript method is used to write into an alert box?",
    ans1: "window.alertHTML()",
    ans2: "window.alert()",
    ans3: "window.alertBox()",
    ans4: "window.alertContent()",
    ans: "2"
  },
  {
    number: 15,
    que: "In JavaScript, single line comment begins with ___.",
    ans1: "#",
    ans2: "/*",
    ans3: "//",
    ans4: "None of the above",
    ans: "3"
  },
  {
    number: 16,
    que: "Does JavaScript support increment (++) and decrements (--) Operators?",
    ans1: "Yes",
    ans2: "Maybe",
    ans3: "No",
    ans4: "None of the above",
    ans: "1"
  },
  {
    number: 17,
    que: "JavaScript arrays are written with _____.",
    ans1: "round brackets ()",
    ans2: "curly brackets {}",
    ans3: 'double quotes ("")',
    ans4: "square brackets []",
    ans: "4"
  },
  {
    number: 18,
    que: "Which keyword is used to define a JavaScript function?",
    ans1: "module",
    ans2: "fun",
    ans3: "func",
    ans4: "function",
    ans: "4"
  },
  {
    number: 19,
    que: "An JvaScript program is saved by using the ____ extension.",
    ans1: "html",
    ans2: "js",
    ans3: "css",
    ans4: "None of the above",
    ans: "2"
  },
  {
    number: 20,
    que: "Which property is used to get the length of a string in JavaScript?",
    ans1: "strlen",
    ans2: "len",
    ans3: "length",
    ans4: "Length",
    ans: "3"
  }


]
const liveScore = document.querySelector(".live-score");
const time = document.querySelector(".time");
const userName = document.querySelector(".user-name");
const massageArea = document.querySelector(".display-massage");

// buttons......
const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const submitBtn = document.querySelector(".submit-btn");
const cirtificateHideBtn = document.querySelector(".cancel-btn");
let question = document.querySelector(".question-section")

const cirtificate = document.querySelector(".complete");

const nameBtn = document.querySelector(".name-btn");
let name = prompt("enter your name", "");
nameBtn.addEventListener('click', () => {
  document.querySelector(".collect-name").value = name;
  nameBtn.remove();
})

let currentScore = 0;

let i = 0;

function worngansalert(msg) {
  massageArea.textContent = "OHH! Wrong Answer😥";
  massageArea.style.color = "red";
}
function rightansalert() {
  massageArea.textContent = "Great! Correct Answer😍"
  massageArea.style.color = "green";
}


userName.textContent = `" ${name} "`;

const startUsername = document.querySelector(".start-username")
startUsername.textContent = ` Welcome ! ${name}`

const startBtn = document.querySelector(".start-btn");
const startPage = document.querySelector(".start-section");

startBtn.addEventListener('click', () => {
  startPage.classList.add("start-section-hide");
  Createquestion(questions[0].number, questions[0].que, questions[0].ans1, questions[0].ans2, questions[0].ans3, questions[0].ans4);
  console.log(name)

})


function Createquestion(number, que, ans1, ans2, ans3, ans4) {

  const newquestin = document.createElement('div');
  // console.log(newquestin)
  // newquestin.classList.add("question-section");
  newquestin.innerHTML = ` <!-- <div class="question-title"> -->
    <p class="question-title-no">${number}</p>
    <h1 class="question">👉${que}</h1>
<!-- </div> -->
<form class="answers">
   <div class="ans" id="1">
    <input class="check" type="radio" value="1" name="ans" id="ans">
    <label for="">${ans1}</label>
   </div>
   <div class="ans" id="2">
    <input class="check" type="radio" value="2" name="ans" id="ans">
    <label for="">${ans2}</label>
   </div>
   <div class="ans" id="2">
    <input class="check" type="radio" value="3" name="ans" id="ans">
    <label for="">${ans3}</label>
   </div>
   <div class="ans" id="2">
    <input class="check" type="radio" value="4" name="ans" id="ans">
    <label for="">${ans4}</label>
   </div>
</form>`

  question.appendChild(newquestin);

}

function Removequestion() {
  document.querySelector(".question-section").innerHTML = "";
}


let ansi = 0;

function Calculatescore() {
  let inputvalue;
  // let userAns =[];
  const checkip = document.getElementsByClassName('check');
  for (let i = 0; checkip[i]; i++) {
    if (checkip[i].checked) {
      inputvalue = checkip[i].value;
      break;
    }
  }
  //  console.log(inputvalue)
  let actualAns = questions[ansi++].ans;
  console.log({ actualAns, inputvalue })
  if (actualAns === inputvalue) {
    currentScore += 5;
    rightansalert();
    setTimeout(() => {
      massageArea.textContent = "";
    }, 1500);
  }
  else if (actualAns !== inputvalue) {
    worngansalert("OH! Worng Answer");
    setTimeout(() => {
      massageArea.textContent = "";
    }, 1500);
  }
  document.querySelector(".current-score").textContent = currentScore + "%";
}

//  function for certificate showing .)))))))))))))))))))))))))))))))))))))))))))))))000000

function generateCirtificate() {

  const date = new Date();
  const yr = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const dateSec = document.querySelector(".current-date");
  const scoreSec = document.querySelector(".cirtificate-score");
  const nameSec = document.querySelector(".cirtificate-name");
  const idSec = document.querySelector(".cirtificate-id");

  // assigning values ... to cirtificate ..........
  scoreSec.textContent = currentScore + "% ";
  nameSec.textContent = name;
  idSec.textContent = " Congratulatios ! You have completed the quiz successfully";
  dateSec.textContent = day + "/" + month + "/" + yr;

  // hide cirtificate.....
  cirtificateHideBtn.addEventListener('click', () => {
    hideCirtificate();
    restartQuiz();
  })


}

function hideCirtificate() {
  cirtificate.classList.add("complete-hide");

}
function restartQuiz() {
  currentScore = 0;
  i = 0;
}


nextBtn.addEventListener('click', () => {
  Calculatescore();


  Removequestion();
  if (i === questions.length - 1) {
    cirtificate.classList.remove("complete-hide");
    generateCirtificate();
    // console.log("ses");

  }
  i++;
  Createquestion(questions[i].number, questions[i].que, questions[i].ans1, questions[i].ans2, questions[i].ans3, questions[i].ans4);

})

let timeLeft = 600; // 10 minutes in seconds

const countdown = setInterval(() => {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  // Display the remaining time
  time.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Check if time is up
  if (timeLeft === 0) {
    clearInterval(countdown);
    // Generate certificate or perform other actions
  }

  timeLeft--;
}, 1000);
