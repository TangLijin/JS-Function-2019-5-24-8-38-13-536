function alphabetSort(message){
  // wirte your code here
  	var s = "";
 	var ab = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
 	'q','r','s','t','u','v','w','x','y','z']
  	for (var i = 0; i < ab.length; i++) {
  		for (var j = 0; j < message.length; j++) {
  			if(ab[i] == message[j]){
  				s += message[j]
  			}
  		}
  		if(s.length == message.length)
  			break;
  	}

  	console.log(s)
}
	alphabetSort('hello'); // should return 'ehllo'
