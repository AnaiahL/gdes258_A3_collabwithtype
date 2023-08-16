//Connection to contentful data
const client = contentful.createClient({
    space:'doyjwr20uabj',
    accessToken:'M-9rOA3cb7lmlO_wRutQiTpAIe65Gc9quB-J49ptaPE',
});

const contentTypeID = 'webTech4ZaraWebsiteRedesign';

// Calling categories container
var containerDiv = document.getElementById('categoriescontainer');

// Retrieving data from contentful
client.getEntries({ content_type: contentTypeID }).then(function (response) {
  response.items.forEach(function (entry) {
    console.log(entry.fields);

    //Creating each category Item and linking the details page to each category
    var categoryItem = document.createElement('a');
    containerDiv.appendChild(categoryItem);
    //Ideally, this would link each category to its own individual details page using Contentful Id's
    categoryItem.href='sweaters.html?id=' + entry.sys.id;
    categoryItem.classList.add('links');

    //Creating category item Div
    var categoryBlock = document.createElement ('div');
    categoryItem.appendChild(categoryBlock);
    categoryBlock.classList.add('categoryitem');

    //Creating category item img, and (ideally) calling it from contentful
    var image = document.createElement ('img');
    image.src = entry.fields.categoryImage.fields.file.url;
    categoryBlock.appendChild(image);

    //Creating category item heading and (ideally) calling it from contentful)
    var heading = document.createElement('h2');
    categoryBlock.appendChild(heading);
    heading.innerHTML = entry.fields.categoryTitle;
  })
})

//While I was unsuccessful at actually linking my content from contentful using javascript, 
//I hope my code at least demonstrates I have some understanding of how the javascript structure 
//works and how this javascript relates to CSS styling using classes.
