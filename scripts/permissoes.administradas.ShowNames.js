// Função para trocar o SIAPE pelo nome do servidor com permissão 
function processa(permissao){
    // Seleciona somente a coluna dois e o elemento do tipo 'a' 
    var link = permissao.querySelector('tr td:nth-child(2) a');
    var nr = link.text;
    link.text = [link.title, ' (', nr, ')'].join('');
    link.title = nr;
}

// Seleciona todas as linhas da tabela de permissões administradas
var rows = Array.from(document.body.querySelectorAll('tr.infraTrClara, tr.infraTrEscura'));

rows.forEach(processa)
