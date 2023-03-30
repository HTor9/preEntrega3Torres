let base_preguntas = readText("basePreguntas.json")
let interprete_bp = JSON.parse(base_preguntas)
let pregunta
let btn_corespondiente = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]
let arr
let btn

escogerPreguntaAleatoria()

function escogerPreguntaAleatoria() {
    escogerPregunta(Math.ceil(Math.random()*3))
}

function escogerPregunta(n){
    pregunta= interprete_bp[n]
    select_id("categoria").innerHTML = pregunta.categoria
    select_id("pregunta").innerHTML = pregunta.pregunta
    select_id("image").setAttribute("src",pregunta.image)
    style("image").objectFit = pregunta.objectFit;
    desordenarRespuestas(pregunta)
}   
let btns=[
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
]

function desordenarRespuestas(pregunta){
    arr= [
        pregunta.respuesta, 
        pregunta.incor1, 
        pregunta.incor2, 
        pregunta.incor3]
    arr.sort(()=>Math.random()-0.5)
    select_id("btn1").innerHTML = arr[0]
    select_id("btn2").innerHTML = arr[1]
    select_id("btn3").innerHTML = arr[2]
    select_id("btn4").innerHTML = arr[3]
}

function oprimir_btn(i){
    if(arr[i]== pregunta.respuesta){
        btn_corespondiente[i].style.background = "green"
    }else{
        btn_corespondiente[i].style.background = "red"
    }
    setTimeout(()=>{
        reiniciar
    }, 3000)
}

function reiniciar(){
    for( btn of btn_corespondiente){
        btn.style.background = "white"
    }    
    escogerPreguntaAleatoria()
}

function select_id(id){
    return document.getElementById(id)
}

function style(id){
    return select_id(id).style
}
function readText(ruta_local) {
    let texto = null;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if(xmlhttp.status == 200){
        texto = xmlhttp.responseText;
    }
    return texto;
}