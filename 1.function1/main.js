function reverseString(message){
  // wirte your code here
  var s = '';
  for (var i = message.length - 1; i >= 0; i--) {
  	s += message[i];
  }
  console.log(s);
}
reverseString('hello'); // should return 'olleh'
