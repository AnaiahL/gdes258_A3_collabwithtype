// Again, I wasn't sure how to format another details-like page - this time for the item checkout page. 
//I'm using the main.js central structure again.
//I promise I tried lol

//Connection to contentful data
const client = contentful.createClient({
    space:'doyjwr20uabj',
    accessToken:'M-9rOA3cb7lmlO_wRutQiTpAIe65Gc9quB-J49ptaPE',
});

const contentTypeID = 'webTech4ZaraWebsiteRedesign';

// Calling cart hero section container
var cartheroDiv = document.getElementById('cartherodiv');


// Retrieving data from contentful
client.getEntries({ content_type: contentTypeID }).then(function (response) {
  response.items.forEach(function (entry) {
    console.log(entry.fields);

    //Cart hero section

    //Creating cart figure div, appending it to cart hero section
      var cartfigureDiv = document.createElement('figure')
      cartheroDiv.appendChild(cartfigureDiv);
      figureDiv.classList.add('heroimg');

    //Creating item image, appending it to figure div parent, and calling it from contentful
        var cartitemHero = document.createElement('img');
        cartfigureDiv.appendChild(cartitemHero);
        cartitemHero.src=entry.fields.itemImage.fields.file.url;

    //Creating item info div, appending it to cart hero div
     var itemInfo = document.createElement('div');
     cartheroDiv.appendChild(itemInfo);
     itemInfo.classList.add('iteminfo');

    //Creating alignment div and appending it to item info div
    var bottomAlign=document.createElement('div');
    itemInfo.appendChild(bottomAlign);
    bottomAlign.classList.add('bottomalign');

    //Creating item title/color, appending it to bottom align parent, and calling it from contentful
    var itemtitleandcolor=document.createElement('h2');
    bottomAlign.appendChild(itemtitleandcolor);
    itemtitleandcolor.innerHTML=entry.fields.itemTitle;

    //Creating product ID p, appending it to bottom align parent, and calling it from contentful
    var productID=document.createElement('p');
    bottomAlign.appendChild(productID);
    productID.innerHTML=entry.fields.productID; //revisit this

    //Creating item price, appending it to bottom align parent, and calling it from contentful
    var productprice = document.createElement('h2');
    bottomAlign.appendChild(productprice);
    productprice.innerHTML = entry.fields.itemPrice;

    //Creating size and color div and appending it to bottom align parent div 
    var sizeandcolor=document.createElement('div');
    bottomAlign.appendChild(sizeandcolor);
    sizeandcolor.classList.add('sizeandcolor');

    //Creating size tag, appending it to sizeandcolor parent div, and calling it from contentful 
    var size=document.createElement('p');
    sizeandcolor.appendChild(size);
    size.innerHTML=entry.fields.size // revisit and check with contentful

    //Creating item color square, appending it to sizeandcolor parent div, and calling it from contentful
    var productcolor=document.createElement('img');
    sizeandcolor.appendChild(productcolor);
    productcolor.src = entry.fields.colorOptions.fields.file.url;

    //Creating delete tag, appending it to bottom align parent, and calling it from contentful
    var deleteText=document.createElement('p');
    bottomAlign.appendChild(deleteText);
    deleteText.innerHTML=entry.fields.delete; //Revisit
    

  })
})