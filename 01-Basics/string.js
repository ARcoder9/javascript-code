const name = "Ayush"
const repoCount = 50

// console.log(name + repoCount + " value"); // do not use this method to concatenate string

// use backtick

console.log(`Hello my name is ${name} and my repo is ${repoCount}`)  // modern way to write to concatenate the string

const Name = new String ("Ayush")

console.log(Name[0])
console.log(Name.length)
console.log(Name.toUpperCase())
console.log(Name.charAt(3))
console.log(Name.indexOf('u'))

const newString = Name.substring(0,4)  // 4th index value will not be included in the substring
console.log(newString)

const anotherString = Name.slice(-5,5)  // it can take negative value also 
console.log(anotherString)

const newStringOne = "     Ayush     "
console.log(newStringOne)
console.log(newStringOne.trim())

const Url = "https://ayush@github.com/ayush%20github"

console.log(Url.replace('%20','-'))
console.log(Url.includes('ayush'))

const str1 = "ayush-ranjan-fc"

console.log(str1.split('-'))
