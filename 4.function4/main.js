function countWords(message){
  // wirte your code here
  var num = 0;
  if(message.length != 0){
  	num = 1;
  	for (var i = 0; i < message.length; i++) {
  		if(message[i] == " ")
  			num++;
  	}
  }
  console.log(num);
}
countWords('Good morning, I love JavaScript.'); // should return 5
