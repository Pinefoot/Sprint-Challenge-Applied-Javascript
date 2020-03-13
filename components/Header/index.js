// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(title, date, tempurature) {
    //elements
    const container = document.createElement('div');
    const currentDate = document.createElement('span');
    const currrentTitle = document.createElement('h1');
    const currentTempurature = document.createElement('span');
    //claslists
    container.classList.add('header');
    currentDate.classList.add('date');
    currentTempurature.classList.add('temp');

    //appending
    container.append(currentDate);
    container.append(currrentTitle);
    container.append(currentTempurature);

    //setting the text content
    currentDate.textContent = 'Smarch 28, 2019';
    currrentTitle.textContent = 'Lambda Times';
    currentTempurature.textContent = '98°';

    
    
    //returning
    return container;
}

//const wholeThing = document.querySelector('.header-container');
const wholeThing = document.querySelector('.header-container');

  wholeThing.append(Header());
