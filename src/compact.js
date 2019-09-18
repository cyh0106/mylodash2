let compact = function(list) {
      let result = []
    for(let i=0;i<list.length; i+=1)
    {
      if(list[i] == false)
      {
      }
      else result.push(list[i])
    }
    return result
  }
  
module.exports = compact