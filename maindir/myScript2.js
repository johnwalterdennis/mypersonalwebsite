async function fetchBlogPosts() {
    const response = await fetch('http://localhost:3000/api/posts');
    const blogPosts = await response.json();
    renderBlogPosts(blogPosts);
}


function renderBlogPosts(){
    //blogcontainer assigned to the html element by reference 
    const blogContainer = document.getElementById('blog-container');
    
    //clearing container
    blogContainer.innerHTML = '';

    //for each loop looping through each post element in the blogPosts hashMap
    blogPosts.forEach(post=> {
        //i guess this is creating a div(container) and adds a class named 'post' into the container
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        
        // creating the title and getting the titke from the post 
        const titleElement = document.createElement('h2');
        titleElement.textContent = posts.title;

        //same shit creating the text and getting the text from the post in blogPosts
        const textElement = document.createElement('p');
        textElement.textContent = posts.context;

        //this puts the title postDiv container we just made
        postDiv.appendChild(titleElement);
        //this puts the text in there too
        postDiv.appendChild(textElement);

        //this puts the postDiv container inside the blogContainer that is an html element in our page
        blogContainer.appendChild(postDiv);
});
}
//calling the fucntion to do all this
fetchBlogPosts();