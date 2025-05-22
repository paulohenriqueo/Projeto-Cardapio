var prods = [
    {id : 1, name : "Bife com batata", price : 30.00},
    {id : 2, name : "Coxa de Frango Crocante", price : 25.00},
    {id : 3, name : "Carne de Panela", price : 22.00},
    {id : 4, name : "Farofa", price : 10.00},
    {id : 5, name : "Salada", price : 8.00},
    {id : 6, name : "Torresmo", price : 12.00},
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output     = document.getElementById("output");
    var total      = 0;

    output.innerHTML = "";

        var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    
    for (var input of quantities){
        var id = input.id;

        if (input.value > 0) {
            output.innerHTML += `Prato: ${prods[id-1].name}  - Preço Unitário: ${formatter.format(prods[id-1].price)} - 
                                    Quantidade: ${input.value} - Total : ${formatter.format(input.value * prods[id-1].price)} </br>`;
            total            += prods[id-1].price * parseFloat(input.value);
        }
    }

    output.innerHTML += `<h2>Preço Final: ${formatter.format(total)}</h2>`;

}
