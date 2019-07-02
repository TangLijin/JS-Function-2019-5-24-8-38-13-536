function palindrome(message){
  // wirte your code here
  var flag = true;
  for (var i = 0, j = message.length-1; i < message.length/2 && j >= i; i++,j--) {
  	if(message[i] != message[j]){
  		flag = false;
  		break;
  	}
  }
  console.log(flag);
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
