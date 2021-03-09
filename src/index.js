module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrt;
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      if(str[i] == bracketsConfig[j][0]) {
        if(str[i] == bracketsConfig[j][1] && stack[stack.length - 1] === str[i]){
          stack.pop();
          continue;
        }
          stack.push(str[i]);
          continue;    
      } 
      if(str[i] == bracketsConfig[j][1]) {
        openBrt = stack.pop();
        if(openBrt !== bracketsConfig[j][0]) {
          return false;
        }   
      }
    }   
  }
  if(stack.length !== 0) {
    return false;
  }
  return true;
}
