(function(){
    
    window.onload = function() {
        $form = document.getElementsByTagName('form')[0];
        var $limpar = document.getElementById('limpar');
        var $mostar_condicao_fisica = document.forms['calculo_imc'].mostar_condicao_fisica;

        $form.addEventListener("submit", mostrarIMC);          
        $mostar_condicao_fisica.addEventListener('change', mostrarIMC)
                
        $limpar.addEventListener('click', function(){
            var $mostra_imc = document.getElementById("mostrar_imc");
            $mostra_imc.textContent = '';
            mostra_imc.mostar_condicao_fisica = '';
        });
    }

    function calcularImc(peso, altura) {
        var imc = peso / (altura * altura);
        return imc;
    }

    function identificarImc(imc) {
        
        if (imc <= 18.5) {
            return "abaixo do peso";
            
        }

        if (imc >= 18.6 && imc < 25) {
            return "no peso Ideal";
        }

        if (imc >= 25 && imc < 30) {
            return "levemente acima do peso";
        }

        if (imc >= 30 && imc < 35) {
            return "com obesidade grau I";
        }

        if (imc >= 35 && imc < 40) {
            return  "com obesidade grau II";
        }

        if (imc >= 40) {
            return  "com obesidade grau III";
        }
    }

    function mostrarIMC(event) {    
        event.preventDefault();

        var $peso = document.forms['calculo_imc'].peso;
        var $altura = document.forms['calculo_imc'].altura; 
        var imc = calcularImc($peso.value, $altura.value).toFixed(2);
        
        var $mostra_imc = document.getElementById("imc");    
    
        $mostra_imc.textContent = "Seu IMC:" +imc+". Voce esta "+ identificarImc(imc) + ".";                        
    }
})();