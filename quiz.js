var readlinesync = require('readline-sync');
score = 0;
var uname  = readlinesync.question ("what's your name? ");
console.log ("welcome : " + uname +  " to do you know smit");
//function
function play (question,answer)
{
  var userans = readlinesync.question(question);

  if (userans == answer)
  {
    console.log ("right !");
    score = score + 1;
  }
  else
  {
    console.log ("wrong !");
    score = score - 1;
  }
   console.log("here is your score :" + score);
   console.log ("------------------------------");
}
 //calling the function




var question = [{
  question : "where i do live ? :" ,
  answer : "surendranagar"
},{
  question : "my favorite superhero would be ? :" ,
  answer : "superman"
}]
//loop

for (var i = 0 ; i<question.length ; i++)
{
  var currentquestion = question[i];
  play(currentquestion.question , currentquestion.answer)
}