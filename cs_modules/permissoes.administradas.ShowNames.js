var info = "";
var names = document.getElementsByClassName("ancoraSigla");
for (var i = 0; i < names.length; i += 4) {
    info = names[i].text;  
    names[i].text = [names[i].title, ' (', info, ')'].join('');
    names[i].title = info
}