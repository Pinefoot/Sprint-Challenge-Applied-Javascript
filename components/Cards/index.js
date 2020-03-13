// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function getTheArticles(array){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response =>{
        // let articleDoc = document.querySelector('.cards-container');
        let articleArray = Object.keys(response.data.articles);
        articleArray.forEach(items =>{
            let newArray = Articles(items);
                totalArticles.append(newArray);
            })
        })

  
}
//getTheArticles('https://lambda-times-backend.herokuapp.com/articles');
getTheArticles();


    // axios.get('https://lambda-times-backend.herokuapp.com/articles')//articles
    // .then (response =>{
    //     //console.log(response);
    //     let articleArray = Object.keys(response.data.articles);
    //     //console.log(articleArray);
    //     //let allArticles = newArray;

    //     totalArticles.append(articleArray);
    //     console.log('articleArray');
    // })//closes
    // .catch(error =>{
    //     console.log('Something is wrong!', error);
    
//     })//closescatch
// })//closesforeach


// }//closes getArticles
//getTheArticles();
//here is my issue. don't know how to run the axios.get through the function for each

// conver objects to array
//Object.keys.data.articles;


//creator function
function Articles(data){
    //elements
    const container = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imageContain = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('span');
    //classes
    container.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imageContain.classList.add('img-container');
    //appending
    container.append(headLine);
    container.append(author);
    author.append(imageContain);
    imageContain.append(image);
    author.append(name);

    //textcontent
    headLine.textContent = data.headline;
    image.src = data.authorPhoto;
    author.textContent = `By: ${data.authorName}`;








    return container;
}

const totalArticles = document.querySelector('.cards-container');
    
  totalArticles.append(Articles());

