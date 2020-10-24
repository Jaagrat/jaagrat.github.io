var count=0;
var score=0;

function go(){

    if(count==0){
        startButton.style.display = 'none';
        ans.style.display='block';
        nextButton.style.display= 'block';
    }

    if(count==10)
    {
        ans.style.display='none';
        document.getElementById('Question').innerHTML="you have scored "+ (score) + " / 10 in this intuition test !";  
        nextButton.style.display= 'none';
        return;
    }

    
   
    document.getElementById('Question').innerHTML="Chance "+ (count+1);

    var randomNumberGenerated=Math.floor(Math.random()*10);
    var userInput=document.getElementById("ans").value;
    if(userInput==randomNumberGenerated)
    {
        score++;
    }
    count++; 
    if(count==10)
    {
        document.getElementById('nextButton').innerHTML="View Result";
    }
    document.getElementById("ans").value='';

}