//loading the user from database
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Getting the user from database");
    callback({
      id: id,
      name: "Admin",
    });
  }, 1000);
}
//loading all the blogs posted on social media
function getBlogs(username, callback) {
    setTimeout(() => {
      console.log("calling RestAPI to laod the posts of user ");
      callback(['Post-1','Post-2','Post-3']);
    }, 1000);
  }
  // load the comments of the posts

  function getComments(post, callback) {
    setTimeout(() => {
      console.log("calling RestAPI to laod the comments "+ post);
      callback(['Comments for '+ post]);
    }, 1000);
  }
// print all the   (callback chain)
  getUser(101,(user)=>{
    getBlogs(user.name,(blogs)=>{
        getComments(blogs[0],(comments)=>{
            console.log(user ,blogs[0],comments);
        })
    })
  })