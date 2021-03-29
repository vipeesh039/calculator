function displayText(num){
    var input=document.querySelector(".form-control");
    input.value+=num
}

function calculate(){
    var curval=document.querySelector(".form-control").value;
    var res=eval(curval);
    var curval=document.querySelector(".form-control").value=res;
}
function backspace(){
    var curval=document.querySelector(".form-control").value;
    res=curval.slice(0,-1)
    var curval=document.querySelector(".form-control").value=res;

}