let map = new Map()

map.set("nome","Oscar Piastri")
map.set("numero", 81)
map.set("grandprix", 2)

console.log(map.get("nome"))
console.log(map.has("numero"))

console.log(map.size)

map.forEach((valor, chave)=>{
    console.log(`${chave}: ${valor}`)
})

//remover todos os elementos
map.clear()
console.log(map.size)