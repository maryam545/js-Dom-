const inputFild = document.getElementById("inputFild");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
const warning = document.getElementById("warning");


submitBtn.addEventListener('click',function(){
    if(inputFild.value===""){
        warning.style.display='block';
        output.textContent=''
    }else{
        warning.style.display='none';
        output.textContent=inputFild.value;
    }
})
