var addNote=(title, body)=>{
  console.log('adding note ',title,body);
};
var listAll=()=>{
  console.log('Listing all notes');
}
var getNote=(title)=>{
  console.log('Getting ', title);
}
var removeNote=(title)=>{
  console.log('Removing ',title);
}
module.exports={
  addNote,
  listAll,
  getNote,
  removeNote
};
