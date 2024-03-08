const questions = [
  {
    number: 1,
    que: " Group nila kb sa pr?",
    ans1: "1",
    ans2: "2",
    ans3: "3",
    ans4: "4",
    ans: "2"
  },
  {
    number: 2,
    que: "Group nila Yem at Zy sa PR?",
    ans1: "1",
    ans2: "2",
    ans3: "3",
    ans4: "4",
    ans: "3"
  },
  {
    number: 3,
    que: "Group nila Kai at KC sa PR?",
    ans1: "1",
    ans2: "2",
    ans3: "3",
    ans4: "4",
    ans: "1"
  },
  {
    number: 4,
    que: "Group nila Dui at Gian sa PR?",
    ans1: "1",
    ans2: "2",
    ans3: "3",
    ans4: "4",
    ans: "4"
  },
  {
    number: 5,
    que: "Adviser ng ICT12-A?",
    ans1: "Sir EJ",
    ans2: "Sir Jeff",
    ans3: "Sir Ced",
    ans4: "Sir Ronald",
    ans: "1"
  },
  {
    number: 6,
    que: "Sino pinaka pogi sa ICT12A?",
    ans1: "Steven",
    ans2: "PJ",
    ans3: "Galario",
    ans4: "Mazo",
    ans: "1"
  },
  {
    number: 7,
    que: "Sino pinaka tahimik sa room?",
    ans1: "Caren",
    ans2: "Jenica",
    ans3: "Mazo",
    ans4: "Jules",
    ans: "2"
  },
  {
    number: 8,
    que: "Sino ang bestfriend ng ICT12A?",
    ans1: "Ma'am Manalo",
    ans2: "Ma'am Mariz ",
    ans3: "Sir Ronald ",
    ans4: "Sir EJ",
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
    que: "Si Khalid ay _______.",
    ans1: "Mabangon ",
    ans2: "KJ",
    ans3: "Papansin",
    ans4: "All of the above",
    ans: "4"
  }
  ,
  {
    number: 11,
    que: "Si Justine ay hirap sa kanyang  _______?",
    ans1: "Group",
    ans2: "Katabi ",
    ans3: "Jowa",
    ans4: "Kaklase",
    ans: "1"
  },
  {
    number: 12,
    que: "Si Steven ang pinaka ________",
    ans1: "Mabait",
    ans2: "Masipag ",
    ans3: "Gwapo",
    ans4: "All of the above",
    ans: "1"
  },
  {
    number: 13,
    que: "Sino pinaka babaero??",
    ans1: "Samson ",
    ans2: "PJ ",
    ans3: "Buriel",
    ans4: "All of the above",
    ans: "4"
  },
  {
    number: 14,
    que: "Pinaka Inosente?",
    ans1: "PJ",
    ans2: "Samson",
    ans3: "Steven",
    ans4: "Elpos",
    ans: "4"
  },
  {
    number: 15,
    que: "Pinaka malakas uminom?",
    ans1: "Elpos",
    ans2: "Elpos",
    ans3: "Elpos",
    ans4: "All of the above",
    ans: "4"
  },
  {
    number: 16,
    que: "Pinaka malakas kumain?",
    ans1: "Steven",
    ans2: "Steven",
    ans3: "Steven",
    ans4: "All of the above",
    ans: "1"
  },
  {
    number: 17,
    que: "Pinaka matakaw matulog.",
    ans1: "Sherwin",
    ans2: "Sherwin",
    ans3: "Sherwin",
    ans4: "All of the above",
    ans: "4"
  },
  {
    number: 18,
    que: "Sino ang nawala sa ICT12A?",
    ans1: "Adrian C.",
    ans2: "Joshua I.",
    ans3: "Jasmine C.",
    ans4: "All of the above",
    ans: "4"
  },
  {
    number: 19,
    que: "Sino bestfriend ni Zyree?",
    ans1: "Thea",
    ans2: "Thea",
    ans3: "Thea",
    ans4: "All of the above",
    ans: "4"
  },
  {
    number: 20,
    que: "Pano magalit si sir EJ?",
    ans1: "Worksheet w/o discussion",
    ans2: "Quiz w/o discussion",
    ans3: "Di ka papansinin",
    ans4: "Papakabahin sa pr",
    ans: "2"
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
