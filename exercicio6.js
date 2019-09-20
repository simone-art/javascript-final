for (let s=0; s<=10; s++) {
    console.log (s)
}

for (let s=0; s<=10; s=s+2) {
    console.log (s)
}

for (let s=10; s>=0; s=s-2) {
    console.log (s)
}

for (let suma i=0; i<=100; i++) {
    suma= i+suma
}

EXERCICIO 1.
let suma= 0
for (let i=0; i<=100; i++) {
    console.log ("suma cuando entro al for", suma)
    console.log ("i->",i)
    suma=suma+i
    console.log ("suma actualizada", suma)
}

EXERCICIO 2.


EXERCICIO 3.

let suma= 1
let mult= 1
for (let i=1; i<=50; i++) {
    console.log ("muestra valor de mult", mult)
    console.log ("muestra valor de suma", suma)
    console.log ("i->",i)
    suma=suma+(i* (i+i))
    console.log ("suma actualizada", suma)
}

let suma= 1
let mult= 1
for (let i=1; i<=50; i++) {
    console.log ("muestra valor de mult", mult)
    console.log ("muestra valor de suma", suma)
    console.log ("i->",i)
    suma=suma+(i* (i+1))
    console.log ("suma actualizada", suma)
}


Escreva um loop para calcular a seguinte soma:
// 1 * 1 + 2 * 2 + 3 * 3 + ... + 249 * 250

let suma=0

for (i=1; i<=250; i++) {
    console.log (suma)
    console.log (i)
suma= suma+(i*(i+1))
}

let suma=0

for (let x=1, y=2; x<=249 && y<=250; x++, y++)
suma= 


Escreva um loop que
// vai calcular 10! (10 fatorial), o
// que significa 10 * 9 * 8 * 7 ... * 1.

Escreva um loop que "lance uma moeda" a cada 
// nova iteração. Considere 1 = cara,
// 0 = coroa. Rode esse loop 1000 vezes e
// mostre o numero de vezes caras e o numero
// de coroas no console.

let cara = 0
let coroa = 0

for (let i=1; i<=1000; i++) {
    let moeda = Math.floor (Math.random ()*2)
    //0 é cara /1 é coroa
    if (moeda==0) {
    cara = cara + 1 // cara++
} else {
    coroa = coroa + 1 // coroa++
}
    console.log (i)
}

console.log ("cara", cara, "coroa", coroa)

function caraOuCoroa () {
    let cara = 0
    let coroa = 0

    for (let i=1; i<=1000; i++) {
        let moeda = Math.floor (Math.random ()*2)
        //0 é cara /1 é coroa
        if (moeda==0) {
        cara = cara + 1 // cara++
    } else {
        coroa = coroa + 1 // coroa++
    }
    }
        console.log (i)
}
    console.log ("cara", cara, "coroa", coroa)

======================================================================

let meta = 0

while (meta<=1000) {
let passos = parseInt (prompt ("Informe quantos passos vc deu"))
meta = meta + passos
    console.log ("Voce já andou", meta, passos)
}


let meta = 0

while (meta<=1000) {
let passos = parseInt (prompt ("Informe quantos passos vc deu"))
meta = meta + passos
    console.log ("Voce já andou", meta, "passos!")
    meta>=1000? console.log ("uhullllll") : console.log ("continue a andar")
}

Dada a lista de convidados abaixo escreva um
loop que percorra a lista e mostre se o nome da
pessoa convidada foi encontrado. Caso tenha sido encontrado,
 mostre a mensagem 'Seja bemvindo, <convidado>!'
listaConvidados = ['Alice','João','Maria Rita', 'Sueli','Carlos']  


let nomeListaConvidados = [""] 
let comparaNome = nomeUsuario>nomeListaConvidado



let nomeUsuario = prompt ("por favor seu nome:")
if nome = listaConvidados 
console.log ("Seja bemvindo, <convidado!>") {
    else console.log ("A pessoa é penetra")
} 


let nomeUsuario = prompt ("por favor seu nome:")
if nome = listaConvidados 
console.log ("Seja bemvindo, <convidado!>") {
    else console.log ("A pessoa é penetra")
} 

RESPUESTA 
let nomeListaConvidados = ["alice", "Joao", "Maria Rita", "Sueli", "Carlos"]
let nomeUsuario = prompt ("por favor seu nome:")
for (let i=0;) i<listaConvidados.length; i++) {
    if (nome==listaConvidados [i]) {
        console.log (`Seja bemvindo, ${nome}!`)
        break
    }
}

let listaConvidados = ["alice", "Joao", "Maria Rita", "Sueli", "Carlos"]
let nome = prompt ("por favor seu nome:")
let encontrado = false

for (let i=0; i<listaConvidados.length; i++) {
    if (nome == listaConvidados [i]) {
        encontrado = true
        break
    }
}    

encontrado ? console.log (`Seja bemvindo, ${nome}`) : console.log ("Vaza penetra")
