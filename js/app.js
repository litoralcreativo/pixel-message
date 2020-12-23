let messages = [];
let messageBetty = document.getElementById("bettyString");
let row = document.getElementById("row");
let messageContainer = document.getElementById("contest");
let user;

messages[0] = "Quien anda ahi?";
messages[1] = " hace tanto que no se de vos! como andas mamita?";
messages[2] = "Y si.. yo tmbien las extraño mucho, pero siempre las estoy cuidando desde aca.. Que es lo que extrañas?";
messages[3] = "Que andas necesitando mi china?";
messages[4] = "Y si! estas toda consumida mamita. Si estuviese ahi te haría un arroz con leche o un sanguche de jamon y queso";
messages[5] = "Si te hablase ahora te daría miedo!! como a tu hermanito cuando estuvo haciendo este regalo, se pego un re susto!!";
messages[6] = "Todas las noches te abrazo para que duermas bien! te abrazo hasta el infinito ";
messages[7] = "Podes contarme lo que quieras mamita, decime que anda pasando..";
messages[8] = "Tu secreto esta guardado en mi corazon, sabes que podes contarme lo que quieras cuando quieras 💜";

let counter = 0;
let _back = 0;

function setMessage(index) {
  switch (index) {
    case 0:
      messageBetty.innerHTML = messages[0];
      var div = document.createElement('div');
      div.id = 'messBack';
      var butt1 = document.createElement('button');
      var butt2 = document.createElement('button');
      butt1.innerHTML = "Lari";
      butt2.innerHTML = "Meli";
      butt1.addEventListener("click", function () {user = "Larisita"});
      butt2.addEventListener("click", function () {user = "Melanita"});
      butt1.addEventListener("click", function () {setMessage(1);});
      butt2.addEventListener("click", function () {setMessage(1);});
      butt1.addEventListener("click", clear);
      butt2.addEventListener("click", clear);
      div.appendChild(butt1);
      div.appendChild(butt2);
      messageContainer.appendChild(div);
      break;
    case 1:
      // hola user
      _back = 0;
      messageBetty.innerHTML = "Hola " + user + messages[1];
      var div = document.createElement('div');
      div.id = 'messBack';
      var butt1 = document.createElement('button');
      var butt2 = document.createElement('button');
      butt1.innerHTML = "Te extraño mucho!!";
      butt2.innerHTML = "Te ando necesitando!!";
      butt1.addEventListener("click", function () {setMessage(2);});
      butt2.addEventListener("click", function () {setMessage(3);});
      butt1.addEventListener("click", clear);
      butt2.addEventListener("click", clear);
      div.appendChild(butt1);
      div.appendChild(butt2);

      var buttBack = document.createElement('button');
      buttBack.innerHTML = "vovler";
      buttBack.className += "backBtn";
      buttBack.addEventListener("click", function () {setMessage(_back);});
      buttBack.addEventListener("click", clear);
      div.appendChild(buttBack);

      messageContainer.appendChild(div);
      break;
    case 2:
      // que extrañas?
      _back = 1;
      messageBetty.innerHTML = messages[2];
      var div = document.createElement('div');
      div.id = 'messBack';
      var butt1 = document.createElement('button');
      var butt2 = document.createElement('button');
      var butt3 = document.createElement('button');
      butt1.innerHTML = "Extraño tus comidas";
      butt2.innerHTML = "Extraño tu voz";
      butt3.innerHTML = "Extraño tus abrazos";
      butt1.addEventListener("click", function () {setMessage(4);});
      butt2.addEventListener("click", function () {setMessage(5);});
      butt3.addEventListener("click", function () {setMessage(6);});
      butt1.addEventListener("click", clear);
      butt2.addEventListener("click", clear);
      butt3.addEventListener("click", clear);
      div.appendChild(butt1);
      div.appendChild(butt2);
      div.appendChild(butt3);

      var buttBack = document.createElement('button');
      buttBack.innerHTML = "vovler";
      buttBack.className += "backBtn";
      buttBack.addEventListener("click", function () {setMessage(_back);});
      buttBack.addEventListener("click", clear);
      div.appendChild(buttBack);

      messageContainer.appendChild(div);
      break;
    case 3:
      _back = 1;
      // que andas necesitando?
      messageBetty.innerHTML = messages[3];
      var div = document.createElement('div');
      div.id = 'messBack';
      var butt1 = document.createElement('button');
      var butt2 = document.createElement('button');
      var butt3 = document.createElement('button');
      butt1.innerHTML = "Necesito contarte secretos";
      butt2.innerHTML = "Necesito tus abrazos";
      butt3.innerHTML = "Necesito escucharte un ratito";
      butt1.addEventListener("click", function () {setMessage(7);});
      butt2.addEventListener("click", function () {setMessage(8);});
      butt3.addEventListener("click", function () {setMessage(9);});
      butt1.addEventListener("click", clear);
      butt2.addEventListener("click", clear);
      butt3.addEventListener("click", clear);
      div.appendChild(butt1);
      div.appendChild(butt2);
      div.appendChild(butt3);

      // back btn
      var buttBack = document.createElement('button');
      buttBack.innerHTML = "vovler";
      buttBack.className += "backBtn";
      buttBack.addEventListener("click", function () {setMessage(_back);});
      buttBack.addEventListener("click", clear);
      div.appendChild(buttBack);

      messageContainer.appendChild(div);
      break;
    case 4:
      _back = 2;
      // extraño comidas
      messageBetty.innerHTML = messages[4];
      var div = document.createElement('div');
      div.id = 'messBack';
      var butt2 = document.createElement('button');
      butt2.innerHTML = "volver";
      butt2.className += "backBtn";
      butt2.addEventListener("click", function () {setMessage(_back);});
      butt2.addEventListener("click", clear);
      div.appendChild(butt2);
      messageContainer.appendChild(div);
      break;
    case 5:
      _back = 2;
      // extraño voz
      messageBetty.innerHTML = messages[5];
      var div = document.createElement('div');
      div.id = 'messBack';
      var butt1 = document.createElement('button');
      butt1.innerHTML = "volver";
      butt1.className += "backBtn";
      butt1.addEventListener("click", function () {setMessage(_back);});
      butt1.addEventListener("click", clear);
      div.appendChild(butt1);
      messageContainer.appendChild(div);
      break;
    case 6:
      _back = 2;
      // extraño abrazos
      messageBetty.innerHTML = messages[6] + user + "!";
      var div = document.createElement('div');
      div.id = 'messBack';
      var butt1 = document.createElement('button');
      butt1.innerHTML = "volver";
      butt1.className += "backBtn";
      butt1.addEventListener("click", function () {setMessage(_back);});
      butt1.addEventListener("click", clear);
      div.appendChild(butt1);
      messageContainer.appendChild(div);
      break;
    case 7:
      _back = 3;
      // necesito contarte secretos
      messageBetty.innerHTML = messages[7];
      var div = document.createElement('div');
      div.id = 'messBack';
      var textarea = document.createElement('textarea');
      var butt1 = document.createElement('button');
      butt1.innerHTML = "Contar";
      butt1.addEventListener("click", function () {setMessage(10);});
      textarea.placeholder = "decime algun secreto";
      butt1.addEventListener("click", clear);
      div.appendChild(textarea);
      div.appendChild(butt1);

      // back btn
      var buttBack = document.createElement('button');
      buttBack.innerHTML = "vovler";
      buttBack.className += "backBtn";
      buttBack.addEventListener("click", function () {setMessage(_back);});
      buttBack.addEventListener("click", clear);
      div.appendChild(buttBack);

      messageContainer.appendChild(div);
      break;
    case 8:
      _back = 3;
      // necesito tus abrazos
      messageBetty.innerHTML = messages[6] + user + "!";
      var div = document.createElement('div');
      div.id = 'messBack';
      var butt1 = document.createElement('button');
      butt1.innerHTML = "volver";
      butt1.className += "backBtn";
      butt1.addEventListener("click", function () {setMessage(_back);});
      butt1.addEventListener("click", clear);
      div.appendChild(butt1);
      messageContainer.appendChild(div);
      break;
    case 9:
      _back = 3;
      // necesito escucharte un ratito
      messageBetty.innerHTML = messages[5];
      var div = document.createElement('div');
      div.id = 'messBack';
      var butt1 = document.createElement('button');
      butt1.innerHTML = "volver";
      butt1.className += "backBtn";
      butt1.addEventListener("click", function () {setMessage(_back);});
      butt1.addEventListener("click", clear);
      div.appendChild(butt1);
      messageContainer.appendChild(div);
      break;
    case 10:
      _back = 7;
      createImg(window.width/2, window.height/2, 0);
      // necesito escucharte un ratito
      messageBetty.innerHTML = messages[8];
      var div = document.createElement('div');
      div.id = 'messBack';
      var butt1 = document.createElement('button');
      butt1.innerHTML = "volver";
      butt1.className += "backBtn";
      butt1.addEventListener("click", function () {setMessage(_back);});
      butt1.addEventListener("click", clear);
      div.appendChild(butt1);
      messageContainer.appendChild(div);
      break;
    default:
      break;
  }
}

function goOn() {
  counter++
  setMessage(counter);
}
function clear() {
  let messback = document.getElementById("messBack");
  messback.remove();
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

setMessage(counter);

// ***********************************************************
// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');

document.body.onclick = function (e) {
  if (e.ctrlKey)
    createImg(e.clientX, e.clientY, 0);
  else if (e.altKey)
    createImg(e.clientX, e.clientY, 1);
}

function createImg(x, y, img) {
  let image = document.createElement('img');
  image.className = 'giffID';
  image.setAttribute("style", "position: absolute; left: "+(x-50)+"px; top: "+(y-50)+"px; width: 100px;");
  if (img == 0){
    image.setAttribute("src", "img/butterfly.gif");
  } else if (img == 1){
    image.setAttribute("src", "img/stars.gif");
  }
  row.appendChild(image);
  console.log(x);
  console.log(y);
  setTimeout();
}

function setTimeout() {

  $('.giffID').fadeOut(2000, function() { $(this).remove()});
}
