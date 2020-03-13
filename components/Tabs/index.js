// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then (response =>{
        //console.log(response);
        let allTabs = Tabs(response.data);
        allTopics.append(allTabs);
        // console.log('allTabs');
    })
    .catch(error =>{
        console.log('Something is wrong!', error);
    })


//tab component function
function Tabs(data){
    //element
    const navContainer = document.createElement('div');
    //classes
    navContainer.classList.add('tab');
    //text content
    navContainer.textContent = `${data.topics}`;
    //appends
    
    //return it
    return navContainer;
}
const allTopics = document.querySelector('.topics');
    
  allTopics.append(Tabs());