      let drop = function (list, n) {
          const result = []
          for(let i=n;i<list.length; i+=1)
          {
            result.push(list[i])
          }
          return result
        }
      
        module.exports = drop
