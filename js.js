const itemDeListaIndividual = document.querySelectorAll('.itemDeListaIndividual');
const listaIndividual = document.querySelectorAll('.listaIndividual');

let itemAgarrado = null;

for(let i = 0 ; i < itemDeListaIndividual.length ; i++){
    const item = itemDeListaIndividual[i];
        item.addEventListener('dragstart', function() {
            itemAgarrado = item;
            setTimeout(function(){
                item.style.display = 'none';
            },0)
        });
        
        item.addEventListener('dragend' , function(){
            setTimeout(function(){
                itemAgarrado.style.display = 'block';
                itemAgarrado = null;
            }, 0);

        })
        for (let j = 0 ; j < listaIndividual.length ; j++){
            const list = listaIndividual[j];

            list.addEventListener('dragover', function(e){
                e.preventDefault();
            });
            list.addEventListener('dragenter', function(e){
                e.preventDefault();
            });
            list.addEventListener('drop', function(e){
                this.append(itemAgarrado);
            });
        }
}