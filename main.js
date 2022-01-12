
const maindiv = document.querySelector('.main');
const chColRed = document.querySelector('.choiceColRed');
const chColGreen = document.querySelector('.choiceColGreen');
const chColViolet = document.querySelector('.choiceColViolet');
const sizeplain = 6000;
let mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
  console.log(mouseDown);
}
document.body.onmouseup = function() {
  --mouseDown;
  console.log(mouseDown);
}
for(let j=0;j<sizeplain;j++){
    const a = document.createElement('button');

    a.classList.add('but');

    maindiv.append(a);
}

const allbut = document.querySelectorAll('.but');
// allbut.forEach(item=>{
//     item.addEventListener('click',()=>{
//         if(item.classList.contains('bluebut') && mouseDown===1){
//             item.classList.remove('bluebut');
//         }else{
//             if(mouseDown==1){item.classList.add('bluebut')}
//         }
//     })
// });



chColRed.addEventListener('click',()=>{
    allbutf(allbut,'redbut');
})

chColGreen.addEventListener('click',()=>{
    allbutf(allbut,'greenbut');
})

chColViolet.addEventListener('click',()=>{
    allbutf(allbut,'violetbut');
})

function allbutf(x,y){
    x.forEach(item=>{
        item.addEventListener('mouseover',()=>{
            // if(item.classList.contains(y) && mouseDown==1){
            //     // item.classList.remove(y);
            // }else{
                
            // }
            if(item.classList.item(1) && mouseDown==1){
                item.classList.remove(item.classList.item(1));
            }
            if(mouseDown==1){item.classList.add(y)};
        })
    });
}

function showinfo(){
    alert('1. Выберите цвет. 2. Зажмите левую кнопку мыши и ведите по холсту');
}

function clearAll(allbutf){
    allbut.forEach((x)=>{
        if(x.classList.item(1)!=='but'){
            x.classList.remove(x.classList.item(1));
        }
    })
}

function lastic(x=allbut,y){
    x.forEach(item=>{
        item.addEventListener('mouseover',()=>{
            // if(item.classList.contains(y) && mouseDown==1){
            //     // item.classList.remove(y);
            // }else{
                
            // }
            if(item.classList.item(1) && mouseDown==1){
                item.classList.remove(item.classList.item(1));
            }
        })
    });
}

let solidLayer = false;
function solidlayer(){
    if (!solidLayer){
        allbut.forEach(item=>{
            item.style = "border: none";
            solidLayer = true;
        })
    }else{
        allbut.forEach(item=>{
            item.style = "border: 1px solid white";
            solidLayer = false;
        })
    }
}