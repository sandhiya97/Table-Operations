
function shrink() {

document.getElementById('mytable').style.width = '70%';
document.getElementById('mytable').style.height = '100%';

let div1=document.createElement('div');
div1.setAttribute('class','div1');


let head1=document.createElement('h3')
head1.innerHTML='State';
div1.appendChild(head1);


    
var checkbox = document.createElement('input'); 
checkbox.type = "checkbox"; 
checkbox.value = 'New York'; 
var label = document.createElement('label'); 
label.appendChild(document.createTextNode('New York')); 
div1.appendChild(checkbox);
div1.appendChild(label);
document.body.appendChild(div1);


var linebreak = document.createElement("br");
div1.appendChild(linebreak);
document.body.appendChild(div1);

var checkbox = document.createElement('input'); 
checkbox.type = "checkbox"; 
checkbox.value = 'New Jersey'; 
var label = document.createElement('label'); 
label.appendChild(document.createTextNode('New Jersey')); 
div1.appendChild(checkbox);
div1.appendChild(label);
document.body.appendChild(div1);


var linebreak = document.createElement("br");
div1.appendChild(linebreak);
document.body.appendChild(div1);



var checkbox = document.createElement('input'); 
checkbox.type = "checkbox"; 
checkbox.value = 'Connecticut'; 
var label = document.createElement('label'); 
label.appendChild(document.createTextNode('Connecticut')); 
div1.appendChild(checkbox);
div1.appendChild(label);
document.body.appendChild(div1);


var linebreak = document.createElement("br");
div1.appendChild(linebreak);
document.body.appendChild(div1);


var checkbox = document.createElement('input'); 
checkbox.type = "checkbox"; 
checkbox.value = 'Tennessee'; 
var label = document.createElement('label'); 
label.appendChild(document.createTextNode('Tennessee')); 
div1.appendChild(checkbox);
div1.appendChild(label);

}

