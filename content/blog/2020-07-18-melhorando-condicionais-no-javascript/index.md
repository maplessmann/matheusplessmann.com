---
title: Melhorando condicionais no JavaScript
date: '2020-07-18'
description: 'Quando estamos escrevendo código, seja em JavaScript ou em outra linguagem, é
muito comum nos depararmos com cenários onde precisamos criar condicionais desse
modo...'
---

Quando estamos escrevendo código, seja em JavaScript ou em outra linguagem, é
muito comum nos depararmos com cenários onde precisamos criar condicionais desse
modo:

```javascript
const getFood = (type) => {
  if (type === 'fruit') {
    return ['apple', 'banana', 'mango', 'orange']
  }

  if (type === 'vegetable') {
    return ['broccoli', 'carrot', 'potato', 'pumpkin']
  }

  if (type === 'dessert') {
    return ['cookie', 'donuts', 'cupcake', 'brownie']
  }
}

getFood('dessert') // ['cookie', 'donuts', 'cupcake', 'brownie'],
```

Uma outra forma de fazer essas condicionais, seria utilizando a declaração
`switch`.

```javascript
const getFood = (type) => {
  switch (type) {
    case 'fruit':
      return ['apple', 'banana', 'mango', 'orange']
    case 'vegetable':
      return ['broccoli', 'carrot', 'potato', 'pumpkin']
    case 'dessert':
      return ['cookie', 'donuts', 'cupcake', 'brownie']
  }
}

getFood('dessert') // ['cookie', 'donuts', 'cupcake', 'brownie']
```

A situação já melhora um pouco com o `switch`, pois você acaba escrevendo menos
código e fica mais fácil de ler. Porém, particularmente, ainda não acho a melhor
solução.

Com Object Literal o cenário poderia mudar. Podemos utilizar objetos para
guardar blocos de código que serão acessados de maneira condicional, de acordo
com uma determinada chave.

## Object Literal

No JavaScript, Object Literal é um bloco de código capaz de encapsular dados no
formato chave/valor. Se você programa em JavaScript, provavelmente já utilizou
objetos muitas vezes, é algo batante comum.

```javascript
const user = {
  name: 'Matheus Plessmann',
  website: 'matheusplessmann.com',
}
```

No JavaScript, existem duas formas de se acessar valores de propriedades de um
objeto. A primeira é através da notação `object.key` e a segunda forma é
acessando através de colchetes `object['key']`.

```javascript
const user = {
  name: 'Matheus Plessmann',
  website: 'matheusplessmann.com',
}

user.name // "Matheus Plessmann"
user['name'] // "Matheus Plessmann"
```

Da primeira forma, é necessário sabermos o nome da propriedade que queremos
acessar, no caso `'name'`. Da segunda forma, não precisamos saber qual o nome da
chave que vamos acessar, podemos apenas passar uma variável para acessar uma
propriedade do objeto, que aquele trexo de código não precisa saber qual.

```javascript
const property = 'name'

const user = {
  name: 'Matheus Plessmann',
  website: 'matheusplessmann.com',
}

user[property] // "Matheus Plessmann"
```

## Utilizando Object Literal para criar melhores condicionais

Dessa forma, podemos utilizar essa maneira de acessar objetos, para criar uma
estrutura chave / valor, onde as chaves são os tipos de comida que precisamos
acessar e os valores são os arrays das comidas. E acessar esse array com o tipo
da comida que está em uma variável, utilizando a notação `object[key]`.

```javascript
const food = {
  fruit: ['apple', 'banana', 'mango', 'orange'],
  vegetable: ['broccoli', 'carrot', 'potato', 'pumpkin'],
  dessert: ['cookie', 'donuts', 'cupcake', 'brownie'],
}

const getFood = (type) => food[type]

getFood('dessert') // ['cookie', 'donuts', 'cupcake', 'brownie']
```

Com isso o nosso código fica bem mais reduzido, legível e simples de entender.

E se você precisar adicionar mais uma coleção de comidas, basta adicionar ao
objeto e pronto. Não será preciso declarar um IF para cada condição! 😄 🎉
