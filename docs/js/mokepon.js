
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('boton-reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataques-jugador')
const ataquesEnemigo = document.getElementById('ataques-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

const contenedorAtaques = document.getElementById('contenedorAtaques')


let mokepones =[] //Así se crea una variable de Arreglo 
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

//Clase
class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
//Objetos
let hipodoge = new Mokepon('Hipodoge', 'https://res.cloudinary.com/drwenzp1j/image/upload/v1736551133/mokepons_mokepon_hipodoge_attack_pxvrs2.png', 5)

let capipepo = new Mokepon('Capipepo', 'https://res.cloudinary.com/drwenzp1j/image/upload/v1736551133/mokepons_mokepon_capipepo_attack_vjszan.png', 5)

let ratigueya = new Mokepon('Ratigueya', 'https://res.cloudinary.com/drwenzp1j/image/upload/v1736551133/mokepons_mokepon_ratigueya_attack_sn4qzt.png', 5)

//Este push, le inyecta información
hipodoge.ataques.push(
    {nombre:'♒', id:'boton-agua'},
    {nombre:'♒', id:'boton-agua'},
    {nombre:'♒', id:'boton-agua'},
    {nombre:'🪴', id:'boton-tierra'},
    {nombre:'🔥', id:'boton-fuego'},
)

capipepo.ataques.push(
    {nombre:'🪴', id:'boton-tierra'},
    {nombre:'🪴', id:'boton-tierra'},
    {nombre:'🪴', id:'boton-tierra'},
    {nombre:'♒', id:'boton-agua'},
    {nombre:'🔥', id:'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'🔥', id:'boton-fuego'},
    {nombre:'♒', id:'boton-agua'},
    {nombre:'🪴', id:'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none' //Me oculta la seccion de seleccionar ataque 

    //por cada mokepon que existe en el arreglo de mokepones genérame esta estructura de html e inyéctala en html para poder sustituir lo que había allí de forma manual y poderlo hacer ya de manera automática
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
         <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>        
        `//con lo anterior inyectamos el valor de ciertas variables, el objeto y el valor de su propiedad(nombre, foto)
    contenedorTarjetas.innerHTML += opcionDeMokepones //Seleccionamos un contenedor que tenemos en html que es un div, y adentro del div estamos inyectando el valor de la estructura y este valor va a cambiar.

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
        
    })

    sectionReiniciar.style.display = 'none' //Me oculta el boton de reiniciar
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
  
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none' //Me oculta la seccion de seleccionar mascota   
    sectionSeleccionarAtaque.style.display = 'flex' //Me muestra la seccion de seleccionar ataque cuando se elija la mascota jugador
    
    //la propiedad checked es si algo fue seleccionado.
    if (inputHipodoge.checked){ 
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else{
        alert('Selecciona una mascota')
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
            
        }
    }   
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `//con lo anterior inyectamos el valor de ciertas variables
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {  
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'  
                boton.disabled = true              
            } else if (e.target.textContent === '♒') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'  
                boton.disabled = true      
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
                boton.disabled = true        
            }    
            ataqueAleatorioEnemigo()
        })
    })
    
}

    function seleccionarMascotaEnemigo(){
        let mascotaAleatorio = aleatorio(0,mokepones.length -1)
        spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
        ataquesMokeponEnemigo = mokepones[mascotaAleatorio].ataques
        secuenciaAtaque()
    }

    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)

        if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
            ataqueEnemigo.push('FUEGO')
        } else if(ataqueAleatorio == 3 || ataqueAleatorio == 4){
            ataqueEnemigo.push('AGUA')
        } else{
            ataqueEnemigo.push('TIERRA')
        }
        console.log(ataqueEnemigo)

        iniciarPelea()
    }

    function iniciarPelea(){
        if(ataqueJugador.length === 5) {
            combate()            
        } 
    }

    function indexAmbosOponentes(jugador,enemigo){
        indexAtaqueJugador = ataqueJugador[jugador]
        indexAtaqueEnemigo = ataqueEnemigo[enemigo]

    }

    function combate(){
        for (let index = 0; index < ataqueJugador.length; index++) {
            if(ataqueJugador[index] === ataqueEnemigo[index]){
                indexAmbosOponentes(index, index)
                crearMensaje("EMPATE")
            }else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA' || ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO' || ataqueJugador[index] ==='TIERRA' && ataqueEnemigo[index] === 'AGUA'){
                indexAmbosOponentes(index, index)
                crearMensaje("GANASTE")
                victoriasJugador++
                spanVidasJugador.innerHTML = victoriasJugador         
            } else {
                indexAmbosOponentes(index, index)
                crearMensaje("PERDISTE")     
                victoriasEnemigo++
                spanVidasEnemigo.innerHTML = victoriasEnemigo
            }  
        }         
            
        revisarVidas()
    }        
            
            

    function revisarVidas(){
        if(victoriasJugador === victoriasEnemigo){
            crearMensajeFinal("Esto fue un Empate")            
        }else if (victoriasJugador > victoriasEnemigo){
            crearMensajeFinal("Felicitaciones ganaste👌")
        }else{
            crearMensajeFinal("Lo siento perdiste 😒")
        }
    }
    
    function crearMensaje(resultado){       
        let nuevoAtaqueJugador = document.createElement('p')
        let nuevoAtaqueEnemigo = document.createElement('p')

        sectionMensajes.innerHTML = resultado
        nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
        nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
        // let parrafo = document.createElement('p')
        // parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador+', la mascota del enemigo atacó con ' + ataqueEnemigo + ' El resultado es: ' + resultado     
        ataquesJugador.appendChild(nuevoAtaqueJugador)
        ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
    }

    function crearMensajeFinal(resultadoFinal){
        
        sectionMensajes.innerHTML = resultadoFinal       
            
        sectionReiniciar.style.display = 'block' //Me muestra el boton de reiniciar    
    }

function reiniciarJuego(){
    location.reload()//me ayuda a reinciar el juego    
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load',iniciarJuego)