module.exports = function check(str, bracketsConfig) {
  var all = [];
  str = str.split('');
  if (str.length % 2 !== 0) return false;
  str.forEach(function(char) {
  if (char == '(' ) all.push(char);
  if (char == ')' && all[all.length-1] == '(') all.pop();
  if (char == '[' ) all.push(char);
  if (char == ']' && all[all.length-1] == '[') all.pop();
  if (char == '{' ) all.push(char);
  if (char == '}' && all[all.length-1] == '{') all.pop();
  });
  return all.length === 0;
  };
