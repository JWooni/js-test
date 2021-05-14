// 산술 연산자 (arithmetic operator)
// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5)

// 할당 연산자 (assignment operator)
//let a = 2
//a = a + 1
//a += 1
//a *= 1

//console.log(a)

// 비교 연산자 (comparison operator)
// const a = 13
// const b = 13

//console.log(a === b)

// function isEqual(x, y){
//   return x === y
// }

// console.log(isEqual(1, 1))
// console.log(isEqual(2, '2'))

// console.log(a != b)

// console.log(a > b)
// console.log(a <= b)

// 논리 연산자 (logical operator)
// const a = 1 === 1
// const b = 'AB' === 'ABC'
// const c = false

// console.log(a)
// console.log(b)
// console.log(c)

// console.log('&&',a && b && c) // 모두 trued여야 true
// console.log('||',a || b || c) // 하나라도 true면 true
// console.log('!:',!b) // 부정

// 삼항 연산자 (ternary operator)
// const a = 1 < 2

// if (a){
//   console.log('참')
// } else {
//   console.log('거짓')
// }

// console.log(a ? '참' : '거짓')

// import random from './getRandom'

// 조건문 (If statement)
// const a = random()

// switch
// switch(a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 4:
//     console.log('a is 4')
//     break
//   default:
//     console.log('rest.....')
// }

// if
// if (a === 0) {
//   console.log('a is 0')
// } else if(a === 2) {
//   console.log('a is 2')
// } else if (a === 4){
//   console.log('a is 4')
// } else {
//   console.log('rest.....')
// }

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건)

// const ulEl = document.querySelector('ul')

// for(let i = 0; i < 10; i++){
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if((i + 1) % 2 === 0){
//     li.addEventListener('click', function(){
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }

// 변수 유효범위 (Variable Scope)
// var, let, const

// function scope(){
//   const a = 123
//   if(true){
//     console.log(a)
//   }
// }
// scope()

// 형 변환 (Type conversion)

// Truthy (참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

// if(false){
//   console.log(123)
// }


// 화살표 함수
// () => vs function () {}

// const double = function (x){
//   return x * 2
// }

// console.log('double: ', double(7))

// const doubleArrow = x => x * 2
// console.log('doubleArrow', doubleArrow(7))


// // 매개변수가 없는 경우
// const arg = () => console.log('매개변수 없음')
// arg() // 매개변수 없음

// // 매개변수가 하나인 경우
// const argOne = x => x;
// console.log(argOne('매개변수 하나')) // 매개변수 하나

// // 매개변수가 여려개인 경우
// const argMany = (a, b) => a + b // 간단하게 한줄로 표현할 땐 "{}" 없이 값이 반환됩니다.
// console.log(argMany(1, 2)) // 3

// const argManyA = (a, b) => { return a + b }; 
// console.log(argManyA(1, 2)) // 3

// const argManyB = (a, b) => { a + b }; // "{}"를 사용했는데 return이 없을 때 
// console.log(argManyB(1, 2)) // undefined

// const argManyLines = (a, b) => { // 여러줄 썼을 때
// 	const c = 3;
// 	return a + b + c;
// }
// console.log(argManyLines(1, 2, 3)) // 6

/*
"{}"를 사용하면 값을 반환할 때 return을 사용해야합니다.
"{}"를 사용하지 않으면 undefied를 반환합니다.
"{}"을 사용할 때는 여러줄을 썼을 때 사용합니다.
*/

// 객체를 반환할 때
// const objReturn = () => ( { a: 1, b: 2, c: 3 } )
// console.log(objReturn()) // { a: 1, b: 2, c: 3 }


// 즉시 실행 함수
// IIFE, Immediately-Invoked Function Expression

// const a = 7
// function double(){
//   console.log(a * 2)
// }
// double();

// (function (){
//   console.log(a * 2)
// })();

// (function (){
//   console.log(a * 2)
// }());


// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// const a = 7

// double()

// function double(){
//   console.log(a * 2)
// }


// 타이머 함수
// SetTimeout(함수, 시간) : 일정 시간 후 함수 실행
// SetInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// const timer = setTimeout(() => {
//   console.log('JWooni')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearTimeout()
// })

// const timer = setInterval(() => {
//   console.log('JWooni')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearInterval(timer)
// })


// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
// function timeout(callback){
//   setTimeout(() => {
//     console.log('JWooni')
//     callback()
//   }, 3000)
// }

// timeout(() => {
//   console.log('Done!')
// })

// const jwooni = {
//   firstName: 'Jwooni',
//   lastName: 'Kim',
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`
//   } 
// }
// console.log(jwooni.getFullName())

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`
//   } 
// }
// console.log(amy.getFullName())

// const neo = {
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function(){
//     return `${this.firstName} ${this.lastName}`
//   } 
// }
// console.log(neo.getFullName())

// function User(first, last){
//   this.firstName = first
//   this.lastName = last
// }

// User.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// const jwooni = new User('Jwooni', 'Kim')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(jwooni.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())

// this
// 일반(Nomal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// const jwooni = {
//   name : 'JWooni',
//   nomal: function(){
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// jwooni.nomal()
// jwooni.arrow()

// const amy = {
//   name: 'Amy',
//   nomal: jwooni.nomal,
//   arrow: jwooni.arrow
// }
// amy.nomal()
// amy.arrow()

// function User(name) {
//   this.name = name
// }

// User.prototype.nomal = function () {
//   console.log(this.name)
// }

// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const jwooni = new User('JWooni')
// jwooni.nomal()
// jwooni.arrow()

// const jwooni = {
//   name: 'JWooni',
//   nomal() {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// jwooni.nomal()
// jwooni.arrow()


// ES6 Classes

// 예전 방식
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// 요즘 방식의 생성자 함수 사용법
// class User {
//   constructor(first, last){
//    this.firstName = first
//    this.lastName = last    
//   }
//   getFullName(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const jwooni = new User('Jwooni', 'Kim')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(jwooni.getFullName())
// console.log(amy.getFullName())
// console.log(neo.getFullName())


// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }

// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor(name, wheel){
//     super(name, wheel)
//   }
// }

// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
//   constructor(name, wheel, license){
//     super(name, wheel)
//     this.license = license
//   }
// }

// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', 4, false)
// console.log(myCar)
// console.log(daughtersCar)

/////////////////////////////////////////////////////////////

// const result = 'Hello world!'.indexOf()
// console.log(result)

// const str = 'Hello world!'
// const strA = 'jwooni@gmai.com'
// const strB = '         Hello world  '
// console.log(str.indexOf('world'))
// console.log(str.slice(0, 3))
// console.log(str.replace('world', 'JWooni'))
// console.log(strA.match(/.+(?=@)/)[0])
// console.log(strB.trim())


///////////////////////////////////////////////////////////////

// const pi = 3.14155634556
// console.log(pi)

// const str = pi.toFixed(2)
// console.log(str)
// console.log(typeof str)

// const integer = parseInt(str)
// const float = parseFloat(str)

// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)


/////////////////////////////////////////////////////////////////

// console.log('abs: ',Math.abs(-12))
// console.log('min: ',Math.min(2, 8))
// console.log('max: ',Math.max(2, 8))
// console.log('ceil: ',Math.ceil(3.14))
// console.log('floor: ',Math.floor(3.14))
// console.log('round: ',Math.round(3.14))
// console.log('random: ',Math.random())


/////////////////////////////////////////////////////////////////


// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

//console.log(numbers[1])
//console.log(fruits[2])

// .length
// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1, 2].length)
// console.log([].length)


// .concat()
// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)


// .forEach()
// fruits.forEach(function(fruit, i){
//   console.log(fruit, i)
// })


// .map()
// const a =fruits.forEach((fruit, index) => {
//   console.log(`${fruit}-${index}`)
// })
// console.log(a)

// const b = fruits.map((fruit, index) => ({
//   id: index,
//   name: fruit
// }))
// console.log(b)


// .filter()
// const a = numbers.map(number => number < 3)
// console.log(a)

// const b = numbers.filter(number => number < 3)
// console.log(b)

// .find() .findIndex()
// const a = fruits.find(fruit => /^B/.test(fruit)) 
// console.log(a)

// const b = fruits.findIndex(fruit => /^B/.test(fruit)) 
// console.log(b)

// .includes()
// const a = numbers.includes(3)
// console.log(a)

// const b = fruits.includes('JWooni')
// console.log(b)


// .push() .unshift()
// 원본 수정됨 주의!
// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)


// .reverse()
// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)


// .splice()
// 원본 수정됨 주의!
// numbers.splice(2, 1)
// console.log(numbers)



// const userAge = {
//   name: 'JWooni',
//   age: 85
// }

// const userEmail = {
//   name: 'JWooni',
//   email: 'abcd@gmail.com'
// }

// const target = Object.assign(userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// const a = {k: 123}
// const b = {k: 123}
// console.log(a === b)


// const user = {
//   name: 'JWooni',
//   age: 85,
//   email: 'abcd@gmail.com'
// }

// const keys = Object.keys(user)
// console.log(keys)
// console.log(user['email'])

// const values = keys.map(key => user[key])
// console.log(values)


// 구조 분해 할당
// 비구조화 할당
// const user = {
//   name: 'JWooni',
//   age: 85,
//   email: 'abcd@gmail.com'
// }

// const {
//   name,
//   age,
//   email,
//   address = 'korea'
// } = user

// console.log(`사용자의 이름은 ${name}입니다.`)
// console.log(`${name}의 나이는 ${age}세입니다.`)
// console.log(`${name}의 이메일 주소는 ${user.email}입니다.`)
// console.log(address)

// const fruit = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruit
// console.log(a, b, c, d)


// 전개 연산자 (Spread)
// const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
// console.log(fruits)
// console.log(...fruits)

// const toOject = (a, b, ...c) => ({a, b, c})
// console.log(toOject(...fruits))


// 데이터 불변성(Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function
// -------------------------------------------------------------
// |1.:       |2.:      |3.:      |4.:
// -------------------------------------------------------------

// 원시 데이터
// let a = 1
// let b = 4
// console.log(a, b, a === b)
// b = a
// console.log(a, b, a === b)
// a = 7
// console.log(a, b, a === b)
// let c = 1
// console.log(b, c, b === c)

// 참조형 데이터
// let a = {k:1}
// let b = {k:1}
// console.log(a, b, a === b)
// a.k = 7
// b = a
// console.log(a, b, a === b)
// a.k = 2
// console.log(a, b, a === b)
// let c = b
// console.log(a, b, c, a === c)
// a.k = 9
// console.log(a, b, c, a === c)

import _ from 'lodash'
// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
const user = {
  name: 'JWooni',
  age: 85,
  emails: ['abcd@gmail.com']
}

//  const copyUser = user
//  console.log(copyUser === user)

//  user.age = 22
//  console.log('user', user)
//  console.log('coypUser', copyUser)

console.log('---------------')
console.log('---------------')

const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('coypUser', copyUser)

user.emails.push('adfasd@gdfd.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)

