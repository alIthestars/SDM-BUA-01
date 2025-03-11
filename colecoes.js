let numeros = [10, 20, 30, 40, 50]
console.log(numeros[2])

let frutas = ["Maçã", "Banana", "Laranja"]
console.log(frutas)

frutas.forEach((frutas, index) =>{
    console.log(`${index}: ${frutas}`);
});

//adicionando objetos

//adiciona no fim
frutas.push("Uva")
console.log(frutas)

//adiciona no inicio
frutas.unshift("Melão")
console.log(frutas)

//tira o ultimo
frutas.pop();
console.log(frutas)

//tira o primeiro
frutas.shift();
console.log(frutas)

//tira especificos (2 - posição, 1- quantos)
frutas.splice(2,1)
console.log(frutas)

let mapa = new Map()
mapa.set("nome", "Oscar")
mapa.set("numero", 81)
mapa.set("", true, "McLaren")

//acessando valores
console.log(mapa.get("nome"))
console.log(mapa.get("numero"))