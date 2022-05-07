let word = "salve"
let variableLength = word.length

let empty = ""

function inverseWord(wordToInverte, invertedWord) {
    for(let i = variableLength - 1; i >= 0 ; i--) {
        invertedWord += wordToInverte[i] 
    }
    return invertedWord
}

let invertedResult = inverseWord(word, empty)
console.log(`The inverted form of the word "${word}" is "${invertedResult}".`)

function countNumberVowels(wordToCount) {
    let count = 0
    for(let i = 0; i < variableLength; i++) {
      if (wordToCount[i] == 'a' || wordToCount[i] == 'e' || wordToCount[i] == 'i' || wordToCount[i] == 'o' || wordToCount[i] == 'u'){
        count++
      } else if (wordToCount[i] == 'A' || wordToCount[i] == 'E' || wordToCount[i] == 'I' || wordToCount[i] == 'O' || wordToCount[i] == 'U') {
        count++
      }
    }
    return count 
}

let countVowels = countNumberVowels(word)

console.log(`The word "${word}" has ${countVowels} vowels.`)

function makeReport(word) {
    if (typeof word != "string") {
        console.log("oh carai")
        return undefined
    }
    const report = {
        word: `${word}`,
        invertedWord: inverseWord(word, empty),
        numberOfVowels: countNumberVowels(word)
    }
    return report
}

console.log(makeReport(word))