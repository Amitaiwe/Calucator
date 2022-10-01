function getHistory(){
    return document.getElementById("past-val").innerText;
}
function printHistory(num){
    document.getElementById("past-val").innerText = num;
}

function getOutput(){
    return document.getElementById("output-val").innerText;
}
function printOutput(num){
    if(num==""){
    document.getElementById("output-val").innerText = num;
    }
    else{
        document.getElementById("output-val").innerText = commaNum(num);
    }
}

function commaNum(num){
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var val = n.toLocaleString("en");
    return val;
}
function back2normal(num){
    return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");//OPERATOR
for(var i =0; i < operator.length; i++){
    
    operator[i].addEventListener('click',function(){
        if(this.id == "clear"){
            printOutput("");
            printHistory("");
        }
        if(this.id == "erase"){
            var output = back2normal(getOutput()).toString();
            if(output){
                output = output.substring(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output=="" && history!== ""){
                if(isNaN(history[history.length-1])){
                    history = history.substring(0,history.length-1);
                }
            }
            if(output!="" || history != ""){
                output = output==""? output :back2normal(output);
                history = history+output;
                if(this.id == "equal"){
                    var result = eval(history); 
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history += this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}
var number = document.getElementsByClassName("num");//NUMBER
for(var i =0; i < number.length; i++){
    number[i].addEventListener('click',function(){
        var output = back2normal(getOutput());
        if(output!=NaN){
            output += this.id;
            printOutput(output);
        }
    })
}