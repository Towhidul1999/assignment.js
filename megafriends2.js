var name = ["Md. Raton", "Abu Saleh Mahmud", "Kabir", "Ferdous Rahman", "Mominur Rahman"];

function megaFriend(name) {
  var stringSize = name[0];
  for (i = 0; i < name.length; i++) {
    if (name[i].length > stringSize.length) {
      stringSize = name[i];
    }
  }
  return stringSize;
}

console.log(megaFriend(name));