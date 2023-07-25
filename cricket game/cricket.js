var teamA = prompt("Team A", "Paksiatn");
var teamB = prompt("Team B", "Australia");
var overs = parseInt(prompt("Overs", 3));
var tossWinner = Math.floor(Math.random() * 1 + 0);
  var tossLoser;
  var teamSocreA = 0;
  var teamSocreB = 0;
  var teamOutA = 0;
  var teamOutB = 0;
  var target = 1;
  var victory = false;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function InninsOne() {
  await delay(1000);
  document.write(
    "The match is between " +
      teamA +
      " and " +
      teamB +
      " of " +
      overs +
      " overs.<br>"
  );
  await delay(2000);
  document.write("Toss between " + teamA + " and " + teamB + "<br>");
  

  if (tossWinner == 0) {
    tossWinner = teamA;
    tossLoser = teamB;
    await delay(1000);
    document.write(tossWinner + " won the toss <br>");
  } else {
    tossWinner = teamB;
    tossLoser = teamA;
    await delay(1000);
    document.write(tossWinner + " won the toss <br>");
  }
  await delay(2000);
  document.write(
    overs + " Overs match started " + tossWinner + " is to Bat <br>"
  );

  for (var i = 1; i <= overs; i++) {
    await delay(2000);
    document.write("<br>Over Numbers " + i + " started <br>");
    for (var j = 1; j <= 6; j++) {
      var scorePerBall = Math.floor(Math.random() * 6 + 0);
      if (scorePerBall == 1) {
        teamSocreA += 1;
        await delay(1000);
        document.write("Score 1 ly laya<br>");
      } else if (scorePerBall == 2) {
        teamSocreA += 2;
        await delay(1000);
        document.write("Score 2 ly laya <br>");
      } else if (scorePerBall == 3) {
        teamSocreA += 3;
        await delay(1000);
        document.write("Score 3 ly laya<br>");
      } else if (scorePerBall == 4) {
        teamSocreA += 4;
        await delay(1000);
        document.write("Score 4 ly laya<br>");
      } else if (scorePerBall == 5) {
        teamSocreA += 5;
        await delay(1000);
        document.write("Score 5 ly laya<br>");
      } else if (scorePerBall == 6) {
        teamSocreA += 6;
        await delay(1000);
        document.write("Score 6 ly laya<br>");
      } else {
        teamOutA += 1;
        await delay(1000);
        document.write("Its out! Oooo warrrr gya eeee.....<br>");
      }
    }
    await delay(2000);
    document.write(
      "<br>" + tossWinner + " : " + teamSocreA + " / " + teamOutA + "<br>"
    );
  }
  target+=teamSocreA;
  await delay(3000);
  document.write("<br><br>"+tossLoser+" needs "+target+" runs to win.<br> Second Innings will start shortly.<br><br><br>");
}

async function InninsTwo(){
    
   delay(3000);
    document.write("Second inning started!!<br><br>");
    for (var i = 1; i <= overs; i++) {
        await delay(2000);
        document.write("<br>Over Numbers " + i + " started <br>");
        for (var j = 1; j <= 6; j++) {
          var scorePerBall = Math.floor(Math.random() * 6 + 0);
          if (scorePerBall == 1) {
            teamSocreB += 1;
            await delay(1000);
            document.write("Score 1 ly laya<br>");
          } else if (scorePerBall == 2) {
            teamSocreB += 2;
            await delay(1000);
            document.write("Score 2 ly laya <br>");
          } else if (scorePerBall == 3) {
            teamSocreB += 3;
            await delay(1000);
            document.write("Score 3 ly laya<br>");
          } else if (scorePerBall == 4) {
            teamSocreB += 4;
            await delay(1000);
            document.write("Score 4 ly laya<br>");
          } else if (scorePerBall == 5) {
            teamSocreB += 5;
            await delay(1000);
            document.write("Score 5 ly laya<br>");
          } else if (scorePerBall == 6) {
            teamSocreB += 6;
            await delay(1000);
            document.write("Score 6 ly laya<br>");
          } else {
            teamOutB += 1;
            await delay(1000);
            document.write("Its out! Oooo warrrr gya eeee.....<br>");
          }
          if(teamSocreB>=target)
          {
            victory=true;
            break;
          }
        }

        if(victory)
        {
            break;
        }
        await delay(2000);
        document.write(
          "<br>" + tossLoser + " : " + teamSocreB + " / " + teamOutB + "<br>"
        );
      }
      if(victory){
        document.write("<br><b>"+tossLoser+" won by "+ (11-teamOutB)+" wickets<br><b>")
      }
      else{
        document.write("<br><b>"+tossWinner+" won by "+ (target-teamSocreB-1)+" runs<br><b>")
      }
}


InninsOne().then(()=>{
    InninsTwo();
});
