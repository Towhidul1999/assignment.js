var name = [
    'kabir bin',
    'ratul rahman',
    'md. arafat ali akbor'
  ];
  
  var lgth = 0;
  var longest;
  
  for (var i = 0; i < name.length; i++) {
    if (name[i].length > lgth) {
      var lgth = name[i].length;
      longest = name[i];
    }
  }
  
  console.log(longest);