 player1_name = localStorage.getItem("player1 name");
 player2_name = localStorage.getItem("player2 name");
 player1_score = 0;
 player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name +" : ";
document.getElementById("player2_name").innerHTML = player2_name +" : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("q_player").innerHTML = player1_name;
document.getElementById("ans_player").innerHTML = player2_name;

function send() {
    get_word = document.getElementById("question_ip").value;
    word = get_word.toLowerCase();
    new_word = word.toLowerCase();
    console.log("word in lower case = " + word);
    len = word.length;

    for(var i=1; i<len;)
    {
        temp = word.charAt(i);
        word = word.replace(temp, "_");
        i = i+2;
    }

console.log(word);

question_word = "<h4 id='word_display'> Q."+word+"</h4>";
input_box = "<br>Answer :<input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("question_ip").value = "";

}
