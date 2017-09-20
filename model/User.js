var User = function(name, age, job) {
  var user = {};
  user.name = name;
  user.age = age;
  user.job = job;
  user.error = new Array();

  if (name == null) {
    user.error.push("Name não pode ser nulo")
  }
  if (age == null) {
    user.error.push("Age não pode ser nulo")
  }
  if (job == null) {
    user.error.push("Job não pode ser nulo")
  }
  if (age < 18) {
    user.error.push("Usuário deve possuir mais de 18 anos");
  }
  return user;
}
module.exports = User;
