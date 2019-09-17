//declaring global variable for the sum of the scores of the game and making two different variables 
let sumTeamOne = 0
let sumTeamTwo = 0


//made two different functions for the clicable <a> tags and set to a block and 100% height so you can click on the whole area
function incrementTeamOneScore (){
    console.log("hi");
    
    let clickedScoreTeamOne = document.querySelector(".scoreone");
    sumTeamOne++;
    clickedScoreTeamOne.innerHTML = sumTeamOne;
}

function incrementTeamTwoScore (){
    console.log("hi");
    
    let clickedScoreTeamTwo = document.querySelector(".scoretwo");
    sumTeamTwo++;
    clickedScoreTeamTwo.innerHTML = sumTeamTwo;
}

$.ajax({
    url:"https://seinfeld-quotes.herokuapp.com/quotes",
    dataType:"JSON",
    method:"GET"
    }).then(function (response) {
        console.log("success", response) 
}).catch(error => {
    console.log("error", error);
});