// JAVASCRIPT 

var $contador=0;
var $botao=document.getElementById("botao");
var $paragrafo=document.getElementById("paragrafo");

function myFunction(elemento){

  if(document.getElementById(elemento).innerHTML=="X" || document.getElementById(elemento).innerHTML=="Y"){
      alert('Este quadrado ja foi escolhido!');
  }else{ 
        if($contador % 2==0){
            document.getElementById(elemento).innerHTML="X";
             document.getElementById(elemento).style.backgroundColor="#609732";

        }else{
            document.getElementById(elemento).innerHTML="Y";
             document.getElementById(elemento).style.backgroundColor="#BAE397";

        }
        $contador++;


    }
  }

function quemGanhou(){
var $quadrado1=document.getElementById("quadrado1").innerHTML;
var $quadrado2=document.getElementById("quadrado2").innerHTML;
var $quadrado3=document.getElementById("quadrado3").innerHTML;
var $quadrado4=document.getElementById("quadrado4").innerHTML;
var $quadrado5=document.getElementById("quadrado5").innerHTML;
var $quadrado6=document.getElementById("quadrado6").innerHTML;
var $quadrado7=document.getElementById("quadrado7").innerHTML;
var $quadrado8=document.getElementById("quadrado8").innerHTML;
var $quadrado9=document.getElementById("quadrado9").innerHTML;



    if(
    ($quadrado1!="" && $quadrado2!="" && $quadrado3!="") && ($quadrado1==$quadrado2 && $quadrado1==$quadrado3)||
    ($quadrado4!="" && $quadrado5!="" && $quadrado6!="") && ($quadrado4==$quadrado5 && $quadrado4==$quadrado6)||
    ($quadrado7!="" && $quadrado8!="" && $quadrado9!="") && ($quadrado7==$quadrado8 && $quadrado7==$quadrado9)||
    ($quadrado1!="" && $quadrado4!="" && $quadrado7!="") && ($quadrado1==$quadrado4 && $quadrado1==$quadrado7)||
    ($quadrado2!="" && $quadrado5!="" && $quadrado8!="") && ($quadrado2==$quadrado5 && $quadrado2==$quadrado8)||
    ($quadrado3!="" && $quadrado6!="" && $quadrado9!="") && ($quadrado3==$quadrado6 && $quadrado3==$quadrado9)||
    ($quadrado1!="" && $quadrado5!="" && $quadrado9!="") && ($quadrado1==$quadrado5 && $quadrado1==$quadrado9)||
    ($quadrado3!="" && $quadrado5!="" && $quadrado7!="") && ($quadrado3==$quadrado5 && $quadrado3==$quadrado7)
    ){


        alert('Você ganhou!');
        $paragrafo.style.opacity=1;
        setTimeout(limpar,3000);


    }else{
        if($quadrado1!="" && $quadrado2!="" && $quadrado3!="" && $quadrado4!="" && $quadrado5!="" && $quadrado6!="" && $quadrado7!="" && $quadrado8!="" && $quadrado9!=""){

            alert('Deu velha!');
            $botao.style.opacity=1;
        }

     }


}

    function limpar(){
        location.reload();
    }
    $botao.addEventListener('click',limpar);