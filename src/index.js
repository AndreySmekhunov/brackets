module.exports = function check(str, bracketsConfig) {
  let i = 1;
  let count = 0;
  while (i < str.length) {
      count = 0;  
      for (let j = 0; j < bracketsConfig.length; j++) {
          if (str[i-1] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
          str = str.slice(0,i-1) + str.slice(i+1);
          count += 1;
          }  
      }
      if (count === 0) i += 1
        else i = 0;
      if (str.length === 1) return false;
  
      }
      if (str.length === 0) return true 
      else return false;
  }
