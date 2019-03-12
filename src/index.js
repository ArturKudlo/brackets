module.exports = function check(str, bracketsConfig) {
  if(str.length%2 != 0)return false;
  if(str.length == 0)return false;      
  var all = [];
  for(var i = 0; i < str.length; i++){
    for(var k = 0; k < bracketsConfig.length; k++){
      var extreme = all[all.length-1];   
      if(str[i]==bracketsConfig[k][1] && all.length != 0 && extreme == bracketsConfig[k][0]){
        all.pop(); 
      }
      else if (str[i] == bracketsConfig[k][0]){
        all.push(str[i]);
      }
    }
  } 
  return all.length === 0;
};
