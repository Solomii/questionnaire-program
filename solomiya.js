function submit() {
  var fname = document.getElementById("fname").value;
  var age = document.getElementById("age").value;
  var job = document.getElementById("job").value;
  var author = document.getElementById("author").value;
  var color = document.getElementById("color").value;
  var votePermission;
  if (age < 18) {
    votePermission = " не ";
  } else {
    votePermission = " вже ";
  }
  var text =
    "Привіт " +
    fname +
    ", я бачу вам " +
    age +
    ", як я бачу вам" +
    votePermission +
    "дозволено голосувати. Ви працюєте " +
    job +
    ". Я теж люблю цей " +
    color +
    " колір. " +
    author +
    " теж один з моїх улюблених авторів.";

  document.getElementById("text").innerHTML = text;
}
