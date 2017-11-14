var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Danyal'
  }
  setTimeout(() => {
    callback(user);
  }, 3000); //3s delay
};

getUser(31, (user) => {
  console.log(user);

});
