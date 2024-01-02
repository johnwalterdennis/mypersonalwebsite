
async function myFunction() {
    window.location.href = "settings.html";
  }
async function toPosts(){
  window.location.href = "posts.html";
}

// let textToType = "1235467" 
// async function typeText(text, speed){//async to allow for other methods below on the stack to run if this one hitches
//   document.getElementById("typed-text").textContent = "";
//   for(let i = 0; i < text.length; i++){
//       setTimeout(() => {document.getElementById("typed-text").textContent +=text.charAt(i)}, speed*i)//why *i? this is so that setTimeout in each iteration happens in succession, i=1 takes(1 second) i =2 (2 seconds)
//     //setTimeout thread is not synchronous with the interation loop
//     //there are textToType.length many setTimeout threads they are not in sequence
//     }
// }
// typeText(textToType, 1000);

  



