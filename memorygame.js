var boxes = document.getElementsByClassName('box');
var table = document.getElementById("myTable");
var rowsCollection = table.querySelectorAll('tr');
var tableHeaders = table.querySelectorAll('th');
var scoreTracker = 0;
var failTracker = 0;
var click_id = [];
var open_img = [];
var img1;
var img2;


var clickcount = 0;
var rows = Array.from(rowsCollection);
var headers = Array.from(tableHeaders);
var elemetNumInROw = headers.length/rows.length;
shuffleArray(rows);
shuffleArray(headers);

var i = 0;
for(const row of rows){
    table.appendChild(row);
    while( i <elemetNumInROw){
        row.appendChild(headers[i]);
        i++;
    }
    elemetNumInROw += i;
    
}










for(let i of boxes){
    i.addEventListener('click',boxAction);

}



function boxAction(e){

    
    if(clickcount < 2){
        var img_box = e.target ||e.srcElement;
        img_box.style.display = 'none';
        img_box.parentElement.lastElementChild.style.display ='block';
        click_id.push(img_box.parentElement.lastElementChild.id);
        open_img.push(img_box.parentElement.lastElementChild);
        clickcount++;
    }
    
    checkMatches(open_img.length);
    if(scoreTracker == headers.length/rows.length){
            setTimeout(()=>{
                if(confirm("YOU WON!!     press ok to restart the game")){
                    location.reload();
                }
            },100)    
    }        
}


function checkMatches(open_img_length){   
    if(open_img_length == 2){
        img1 = open_img[0]
        img2 = open_img[1]; 
        if(click_id[0] != click_id[1] ){
            setTimeout(()=>{   
                img1.style.display = 'none';
                img1.parentElement.firstElementChild.style.display ='block';
                img2.style.display = 'none';
                img2.parentElement.firstElementChild.style.display ='block';
                clickcount = 0;
                failTracker++;
                fails.textContent = 'Failed Attemps: '+failTracker;

             }, 700);
                 
        }       
        else{
            clickcount = 0;
            scoreTracker++;
            score.textContent = 'Score: '+scoreTracker;
        }    
        open_img = [];
        click_id = [];
        
    }    
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }











