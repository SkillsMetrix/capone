//loading the user from database
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting the user from database");
      resolve({
        id: id,
        name: "Admin",
      });
    }, 1000);
  });
}
//loading all the blogs posted on social media
function getBlogs(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calling RestAPI to laod the posts of user ");
      resolve(["Post-1", "Post-2", "Post-3"]);
    }, 1000);
  });
}
// load the comments of the posts

function getComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calling RestAPI to laod the comments " + post);
      resolve(["Comments for " + post]);
    }, 1000);
  });
}
// print all the   (callback chain)

getUser(101)
.then(user => getBlogs(user.name))

.then(blogs =>getComments(blogs[0]))
.then(comments => console.log(comments))
.catch(err => console.log('Error '+ err.message))
