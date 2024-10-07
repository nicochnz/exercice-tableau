const people = [
  "JoHn",
  "ChrISTiana",
  "anThoNY",
  "MARia",
  "jaMeS",
  "MIChaEl",
  "jeNNIFeR",
];
function prenom(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
function prenomArray(array, retour) {
  for (let i = 0; i < array.length; i++) {
    array[i] = retour(array[i]);
  }
  return array;
}
const result = prenomArray(people, prenom);
console.log(result);
