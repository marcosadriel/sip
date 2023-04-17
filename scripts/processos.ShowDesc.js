function processa (item){
    var info = "";
    var desc = item.getAttribute('onmouseover');
    desc = desc.split("infraTooltipMostrar('")[1];
    desc = desc.split("',")[0];
    info = item.text;
    if (desc.replace(/\s/g, "").length > 0){
        item.innerText = [desc, ' (', info, ')'].join('');
    }
}

var processos = Array.from(document.body.getElementsByClassName("processoVisualizado"));
processos.forEach(processa);
