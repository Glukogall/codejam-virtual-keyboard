

let keysRuBig = [['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
['Tab','Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
['RightShift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'LeftShift'],
['RightCtrl', 'RightAlt', 'Space', 'LeftAlt', 'LeftCtrl'], ['Up', 'Right', 'Down', 'Left']]

let keysRuSmall = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
['Tab','й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
['RightShift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'LeftShift'],
['RightCtrl', 'RightAlt', 'Space', 'LeftAlt', 'LeftCtrl'], ['Up', 'Right', 'Down', 'Left']]

let keysEnBig = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
['Tab','Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
['RightShift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'LeftShift'],
['RightCtrl', 'RightAlt', 'Space', 'LeftAlt', 'LeftCtrl'], ['Up', 'Right', 'Down', 'Left']]

let keysEnSmall = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace'],
['Tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
['RightShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'LeftShift'],
['RightCtrl', 'RightAlt', 'Space', 'LeftAlt', 'LeftCtrl'], ['Up', 'Right', 'Down', 'Left']]

let keysLanguage = keysRuSmall;
if (localStorage.getItem('languege')=='En'){keysLanguage = keysEnSmall}
else {keysLanguage = keysRuSmall}
console.log(keysLanguage);


function setTextArea(){
  let textArea = document.createElement('textArea');
  textArea.className = 'display';
  textArea.id = 'setEventKey'
  
  document.body.append(textArea);
}
function setGeneralWrapper(){
  let generalWrapper = document.createElement('div');
  generalWrapper.className = 'generalWrapper';
  generalWrapper.id = 'generalWrapper';
  document.body.append(generalWrapper);
}

function setWrappers(){
  for (let i=0; i<6; i++){
    let general = document.getElementById('generalWrapper');
    let wrapper = document.createElement('div');
    wrapper.id = 'wrapper'+i;
    wrapper.className = 'wrapper';
    general.append(wrapper);
  }
}



function setKey(keys){
  for (let i = 0; i<6; i++){
    for (let j = 0; j<keys[i].length; j++){
        let wrapperRow = document.getElementById('wrapper'+i);
        let button = document.createElement('div');
        button.innerText = keys[i][j];
        switch(keys[i][j]){
          case '<--':
            button.className = 'backspace';
            break;
          case 'Tab':
            button.className = 'tab';
            break;
          case 'Del':
            button.className = 'Del';
            break;
          case 'CapsLock':
            button.className = 'CapsLock';
            break;
          case 'Enter':
            button.className = 'Enter';
            break;
          case 'RightShift':
            button.className = 'RightShift';
            button.id = 'RightShift';
            break;
          case 'LeftShift':
            button.className = 'LeftShift';
            button.id = 'LeftShift';
            break;
          case 'RightCtrl':
            button.className = 'RightCtrl';
            break;
          case 'RightAlt':
            button.className = 'RightAlt';
            button.id = 'RightAlt';
            break
          case 'Space':
            button.className = 'Space';
            break;
          case 'LeftAlt':
            button.className = 'LeftAlt';
            button.id = 'LeftAlt';
            break;
          case 'LeftCtrl':
            button.className = 'LeftCtrl';
            break;
          default:
            button.className = 'key';
            break;
        }
        wrapperRow.append(button);
        button.addEventListener('mousedown', (keys)=>{
          let textAreaIn = document.getElementById('setEventKey');
          
          keys.target.style.backgroundColor = 'darkgreen'
        console.log(textAreaIn.innerHTML)
        let letter = ''
        switch (keys.target.innerHTML){
          case 'Space':
          letter = ' ';
          break;
          case 'LeftShift':
          case 'RightShift':
          case 'LeftAlt':
          case 'RightAlt':
          case 'LeftCtrl':
          case 'RightCtrl':
          letter = ''
          break;
          case 'Enter':
          letter = '\n'
          break;
          default: letter = keys.target.innerHTML;
          break;
                 }
                 console.log(textAreaIn.textContent)
        if (letter == 'BackSpace'){
          let end = textAreaIn.textContent.length;
          console.log(end)
          textAreaIn.textContent = textAreaIn.textContent.slice(0, end-1);
          console.log(textAreaIn.textContent)
        }
        else if(letter == 'Del'){
          textAreaIn.textContent = textAreaIn.textContent.slice(1);;
        }
        else{textAreaIn.textContent = textAreaIn.textContent + letter;}
         
         console.log(textAreaIn.innerHTML)
        });
        button.addEventListener('mouseup', (keys)=>{keys.target.style.backgroundColor = 'olive'});
    }
  }
}

function setEventMouse(){
  console.log('mouse')
}
function setEventKey(){
  
  let generalWrapper = document.getElementById('setEventKey');
  
  generalWrapper.addEventListener('keydown', (generalWrapper)=>{
    event.preventDefault()
    let keyButton = generalWrapper.key;
    
    let keysButtons = document.getElementsByTagName('div');
    console.log('generalWrapper.key '+generalWrapper.keyCode)
    let rightShiftOnClick = false;
    if (keyButton == 'Shift'){
      rightShiftOnClick = true;
      if(localStorage.getItem('languege')=='En'){
        let d = document.getElementsByClassName('wrapper')
      console.log(d)
      console.log (d.length)
      for(let i = 5; i>=0; i--){
       d[i].remove();
        console.log(d[i])
      }
      console.log(d)
      setWrappers();
        setKey(keysEnBig);
      }
      else{
        let d = document.getElementsByClassName('wrapper')
      console.log(d)
      console.log (d.length)
      for(let i = 5; i>=0; i--){
       d[i].remove();
        console.log(d[i])
      }
      console.log(d)
      setWrappers();
        setKey(keysRuBig);}
        console.log(rightShiftOnClick);
        if (generalWrapper.keyCode=='16'){
          console.log('16')
        }
      }
    for (let i = 0; i<keysButtons.length; i++){
/*      let letter = '';
      switch (generalWrapper.keyCode){
        case 192:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 48:
        case 189:
        case 187:
        case 81:
        case 87:
        case 69:
        case 82:
        case 84:
        case 89:
        case 85:
        case 73:
        case 79:
        case 80:
        case 219:
        case 221:
        case 220:
        case 65:
        case 83:
        case 68:
        case 70:
        case 71:
        case 72:
        case 74:
        case 75:
        case 76:
        case 186:
        case 222:
        case 90:
        case 88:
        case 67:
        case 86:
        case 66:
        case 78:
        case 77:
        case 188:
        case 190:
        case 191:
          letter = keysButtons[i].textContent
          console.log(keysButtons)
        break;
        case 13:
          letter = ' ';
          break;
      }*/
      switch (keyButton){
        case 'Space':
        letter = ' ';
        break;
        case 'LeftShift':
        case 'RightShift':
        case 'LeftAlt':
        case 'RightAlt':
        case 'LeftCtrl':
        case 'RightCtrl':
        letter = ''
        break;
        case 'Enter':
        letter = '\n'
        break;
        default: letter = keysButtons[i].innerHTML;
        break;
               }
      if(keyButton == keysButtons[i].innerHTML&&keyButton!='Enter'){
        keysButtons[i].style.backgroundColor = '#001100';
        console.log('KeyCode ' + generalWrapper.keyCode)
        let textArea = document.getElementById('setEventKey');
        textArea.textContent = textArea.textContent+letter;
      }
      /*if(generalWrapper.keyCode==32){
        keysButtons[i].style.backgroundColor = '#001100';
        console.log('KeyCode ' + generalWrapper.keyCode)
        let textArea = document.getElementById('setEventKey');
        keysButtons[i].style.color = '#001100';
        return textArea.textContent = textArea.textContent+letter;
      }*/
      if(generalWrapper.keyCode == 8){
        let textArea = document.getElementById('setEventKey');
        let end = document.getElementById('setEventKey').textContent.length;
          console.log('end '+end)
          keysButtons[i].style.backgroundColor = '#001100';
        return textArea.textContent = textArea.textContent.slice(0, end-1);
      }
      else if(generalWrapper.keyCode == 46){
        let textArea = document.getElementById('setEventKey');
        keysButtons[i].style.backgroundColor = '#001100';
        return textArea.textContent = textArea.textContent.slice(1);
      }
      else if(generalWrapper.keyCode == 32){
        let textArea = document.getElementById('setEventKey');
        keysButtons[i].style.backgroundColor = '#001100';
        return textArea.textContent = textArea.textContent+' ';
      }
      else if(generalWrapper.keyCode == 9){
        let textArea = document.getElementById('setEventKey');
        keysButtons[i].style.backgroundColor = '#001100';
        return textArea.textContent = textArea.textContent
      }
      /*else {
        let textArea = document.getElementById('setEventKey');
        return textArea.textContent = textArea.textContent+letter;
      }*/
    }
    if (keyButton == 'Alt'){
      if (rightShiftOnClick = true){
        console.log('click')
        if(keysLanguage == keysRuSmall){
          keysLanguage = keysEnSmall;
          localStorage.setItem('languege', 'En')
        }
        else{keysLanguage = keysRuSmall;

          localStorage.setItem('languege', 'Ru')
        }
        
        console.log(keysLanguage);
      }
      let d = document.getElementsByClassName('wrapper')
      console.log(d)
      console.log (d.length)
      for(let i = 5; i>=0; i--){
       d[i].remove();
        console.log(d[i])
      }
      console.log(d)
      setWrappers();
      return setKey(keysLanguage);
    }
    console.log(rightShiftOnClick);
    });
}

function delEventKey(){
  let generalWrapper = document.getElementById('setEventKey');
  generalWrapper.addEventListener('keyup', (generalWrapper)=>{
    let keyButton = generalWrapper.key;
    let keysButtons = document.getElementsByTagName('div');
    for (let i = 0; i<keysButtons.length; i++){
      if(keyButton == keysButtons[i].innerHTML){
        keysButtons[i].style.backgroundColor = 'olive'
      }
    }
    if (keyButton == 'Shift'){
      if(localStorage.getItem('languege')=='En'){
        let d = document.getElementsByClassName('wrapper')
      console.log(d)
      console.log (d.length)
      for(let i = 5; i>=0; i--){
       d[i].remove();
        console.log(d[i])
      }
      console.log(d)
      setWrappers();
        setKey(keysEnSmall);
      }
      else{
        let d = document.getElementsByClassName('wrapper')
      console.log(d)
      console.log (d.length)
      for(let i = 5; i>=0; i--){
       d[i].remove();
        console.log(d[i])
      }
      console.log(d)
      setWrappers();
        setKey(keysRuSmall);}}
    });
}

//setLanguage(keysLanguage);
setTextArea();
setGeneralWrapper();
setWrappers();
setKey(keysLanguage);
setEventKey();
delEventKey()

