// var reloadButton = document.getElementById('reloadButton');

// // Add a click event listener to the button
// reloadButton.addEventListener('click', function () {
//     // Use location.reload() to reload the page
//     location.reload();
// });
const button=document.querySelector("button");
button.addEventListener("click",()=> {window.location.reload();});
var b = Math.floor(Math.random()*6+1);
var w = Math.floor(Math.random()*6+1);


if (b===1){ 
document.querySelectorAll(".dice1 .first")[0].classList.add("invisible1");
document.querySelectorAll(".dice1 .first")[1].classList.add("invisible1");
document.querySelectorAll(".dice1 .first")[2].classList.add("invisible1");
document.querySelectorAll(".dice1 .first")[3].classList.add("invisible1");
document.querySelectorAll(".dice1 .first")[4].classList.remove("invisible1");
document.querySelectorAll(".dice1 .first")[5].classList.add("invisible1");
document.querySelectorAll(".dice1 .first")[6].classList.add("invisible1");
document.querySelectorAll(".dice1 .first")[7].classList.add("invisible1");
document.querySelectorAll(".dice1 .first")[8].classList.add("invisible1");
}
else if (b===2){ 
    document.querySelectorAll(".dice1 .first")[0].classList.remove("invisible1");
    document.querySelectorAll(".dice1 .first")[1].classList.add("invisible1");
    document.querySelectorAll(".dice1 .first")[2].classList.add("invisible1");
    document.querySelectorAll(".dice1 .first")[3].classList.add("invisible1");
    document.querySelectorAll(".dice1 .first")[4].classList.add("invisible1");
    document.querySelectorAll(".dice1 .first")[5].classList.add("invisible1");
    document.querySelectorAll(".dice1 .first")[6].classList.add("invisible1");
    document.querySelectorAll(".dice1 .first")[7].classList.add("invisible1");
    document.querySelectorAll(".dice1 .first")[8].classList.remove("invisible1");
    }
    else if (b===3){ 
        document.querySelectorAll(".dice1 .first")[0].classList.remove("invisible1");
        document.querySelectorAll(".dice1 .first")[1].classList.add("invisible1");
        document.querySelectorAll(".dice1 .first")[2].classList.add("invisible1");
        document.querySelectorAll(".dice1 .first")[3].classList.add("invisible1");
        document.querySelectorAll(".dice1 .first")[4].classList.remove("invisible1");
        document.querySelectorAll(".dice1 .first")[5].classList.add("invisible1");
        document.querySelectorAll(".dice1 .first")[6].classList.add("invisible1");
        document.querySelectorAll(".dice1 .first")[7].classList.add("invisible1");
        document.querySelectorAll(".dice1 .first")[8].classList.remove("invisible1");
        }
       else if (b===4){ 
            document.querySelectorAll(".dice1 .first")[0].classList.remove("invisible1");
            document.querySelectorAll(".dice1 .first")[1].classList.add("invisible1");
            document.querySelectorAll(".dice1 .first")[2].classList.remove("invisible1");
            document.querySelectorAll(".dice1 .first")[3].classList.add("invisible1");
            document.querySelectorAll(".dice1 .first")[4].classList.add("invisible1");
            document.querySelectorAll(".dice1 .first")[5].classList.add("invisible1");
            document.querySelectorAll(".dice1 .first")[6].classList.remove("invisible1");
            document.querySelectorAll(".dice1 .first")[7].classList.add("invisible1");
            document.querySelectorAll(".dice1 .first")[8].classList.remove("invisible1");
            }
        else if (b===5){ 
                document.querySelectorAll(".dice1 .first")[0].classList.remove("invisible1");
                document.querySelectorAll(".dice1 .first")[1].classList.add("invisible1");
                document.querySelectorAll(".dice1 .first")[2].classList.remove("invisible1");
                document.querySelectorAll(".dice1 .first")[3].classList.add("invisible1");
                document.querySelectorAll(".dice1 .first")[4].classList.remove("invisible1");
                document.querySelectorAll(".dice1 .first")[5].classList.add("invisible1");
                document.querySelectorAll(".dice1 .first")[6].classList.remove("invisible1");
                document.querySelectorAll(".dice1 .first")[7].classList.add("invisible1");
                document.querySelectorAll(".dice1 .first")[8].classList.remove("invisible1");
                }
               else if (b===6){ 
                    document.querySelectorAll(".dice1 .first")[0].classList.remove("invisible1");
                    document.querySelectorAll(".dice1 .first")[1].classList.add("invisible1");
                    document.querySelectorAll(".dice1 .first")[2].classList.remove("invisible1");
                    document.querySelectorAll(".dice1 .first")[3].classList.remove("invisible1");
                    document.querySelectorAll(".dice1 .first")[4].classList.add("invisible1");
                    document.querySelectorAll(".dice1 .first")[5].classList.remove("invisible1");
                    document.querySelectorAll(".dice1 .first")[6].classList.remove("invisible1");
                    document.querySelectorAll(".dice1 .first")[7].classList.add("invisible1");
                    document.querySelectorAll(".dice1 .first")[8].classList.remove("invisible1");
                    }
                    
               
if(w===1){
document.querySelectorAll(".dice2 .first")[0].classList.add("invisible1");
document.querySelectorAll(".dice2 .first")[1].classList.add("invisible1");
document.querySelectorAll(".dice2 .first")[2].classList.add("invisible1");
document.querySelectorAll(".dice2 .first")[3].classList.add("invisible1");
document.querySelectorAll(".dice2 .first")[4].classList.remove("invisible1");
document.querySelectorAll(".dice2 .first")[5].classList.add("invisible1");
document.querySelectorAll(".dice2 .first")[6].classList.add("invisible1");
document.querySelectorAll(".dice2 .first")[7].classList.add("invisible1");
document.querySelectorAll(".dice2 .first")[8].classList.add("invisible1");
}
else if (w===2){ 
    document.querySelectorAll(".dice2 .first")[0].classList.remove("invisible1");
    document.querySelectorAll(".dice2 .first")[1].classList.add("invisible1");
    document.querySelectorAll(".dice2 .first")[2].classList.add("invisible1");
    document.querySelectorAll(".dice2 .first")[3].classList.add("invisible1");
    document.querySelectorAll(".dice2 .first")[4].classList.add("invisible1");
    document.querySelectorAll(".dice2 .first")[5].classList.add("invisible1");
    document.querySelectorAll(".dice2 .first")[6].classList.add("invisible1");
    document.querySelectorAll(".dice2 .first")[7].classList.add("invisible1");
    document.querySelectorAll(".dice2 .first")[8].classList.remove("invisible1");
    }
    else if (w===3){ 
        document.querySelectorAll(".dice2 .first")[0].classList.remove("invisible1");
        document.querySelectorAll(".dice2 .first")[1].classList.add("invisible1");
        document.querySelectorAll(".dice2 .first")[2].classList.add("invisible1");
        document.querySelectorAll(".dice2 .first")[3].classList.add("invisible1");
        document.querySelectorAll(".dice2 .first")[4].classList.remove("invisible1");
        document.querySelectorAll(".dice2 .first")[5].classList.add("invisible1");
        document.querySelectorAll(".dice2 .first")[6].classList.add("invisible1");
        document.querySelectorAll(".dice2 .first")[7].classList.add("invisible1");
        document.querySelectorAll(".dice2 .first")[8].classList.remove("invisible1");
        }
       else if (w===4){ 
            document.querySelectorAll(".dice2 .first")[0].classList.remove("invisible1");
            document.querySelectorAll(".dice2 .first")[1].classList.add("invisible1");
            document.querySelectorAll(".dice2 .first")[2].classList.remove("invisible1");
            document.querySelectorAll(".dice2 .first")[3].classList.add("invisible1");
            document.querySelectorAll(".dice2 .first")[4].classList.add("invisible1");
            document.querySelectorAll(".dice2 .first")[5].classList.add("invisible1");
            document.querySelectorAll(".dice2 .first")[6].classList.remove("invisible1");
            document.querySelectorAll(".dice2 .first")[7].classList.add("invisible1");
            document.querySelectorAll(".dice2 .first")[8].classList.remove("invisible1");
            }
          else  if (w===5){ 
                document.querySelectorAll(".dice2 .first")[0].classList.remove("invisible1");
                document.querySelectorAll(".dice2 .first")[1].classList.add("invisible1");
                document.querySelectorAll(".dice2 .first")[2].classList.remove("invisible1");
                document.querySelectorAll(".dice2 .first")[3].classList.add("invisible1");
                document.querySelectorAll(".dice2 .first")[4].classList.remove("invisible1");
                document.querySelectorAll(".dice2 .first")[5].classList.add("invisible1");
                document.querySelectorAll(".dice2 .first")[6].classList.remove("invisible1");
                document.querySelectorAll(".dice2 .first")[7].classList.add("invisible1");
                document.querySelectorAll(".dice2 .first")[8].classList.remove("invisible1");
                }
              else  if (w===6){ 
                    document.querySelectorAll(".dice2 .first")[0].classList.remove("invisible1");
                    document.querySelectorAll(".dice2 .first")[1].classList.add("invisible1");
                    document.querySelectorAll(".dice2 .first")[2].classList.remove("invisible1");
                    document.querySelectorAll(".dice2 .first")[3].classList.remove("invisible1");
                    document.querySelectorAll(".dice2 .first")[4].classList.add("invisible1");
                    document.querySelectorAll(".dice2 .first")[5].classList.remove("invisible1");
                    document.querySelectorAll(".dice2 .first")[6].classList.remove("invisible1");
                    document.querySelectorAll(".dice2 .first")[7].classList.add("invisible1");
                    document.querySelectorAll(".dice2 .first")[8].classList.remove("invisible1");
                    }

            
                            if(w<b){
                                document.querySelector("h1").innerHTML=("<< Congratulations for Player 1 !");
                                
                            }
                            else if(w>b){
                                document.querySelector("h1").innerHTML=(" Congratulations for Player 2 >> !");
                            }
                            else {
                                document.querySelector("h1").innerHTML=("<< Draw >>");
                            }
                        

       
                        
       