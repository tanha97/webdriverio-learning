let sentence = "A  black is a color color color "

console.log(sentence.indexOf("color" , 3 ))

let count = 0
for(let i=0;i<sentence.length; i++){
    let found_index = sentence.indexOf('color', i) // 2 , 19
    if(found_index != -1){
        i = found_index
        console.log('color')
        count++
    }
    else
    {
        break
    }
}

console.log(count)