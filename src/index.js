module.exports = function check(str, bracketsConfig) {
  let config =Object.fromEntries(bracketsConfig);
  let stack = [];
    for (i = 0; i < str.length; i++){
      let element = str[i];
      let topStack = stack[stack.length-1];
      if (topStack !== undefined && config[topStack] === element){
        stack.pop();
      } else if (element in config){
        stack.push(element);
      } else if(stack.length === 0){
        return false;
      }
    }
  
    if (stack.length === 0){
      return  true;
    } else {
       return false;
    }
}

