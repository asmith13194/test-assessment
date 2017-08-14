let vowelCount = (str) => {
  let vowels = ['a','e','i','o','u'];
  let count = 0;
  if (typeof(str)!=='string'){
    return 'invalid'
  }
  str = str.split('')
  str.map(ele=>{
    vowels.map(el=>{
      if(ele===el){
        count += 1
      }
    })
  })
  if(count===0){
    return 'No Vowels!'
  }
  return count
}

module.exports = vowelCount
