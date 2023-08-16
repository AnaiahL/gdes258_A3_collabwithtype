// (Ideally) getting the data ID from the URL
var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

//Connection to contentful
const client = contentful.createClient({
    space:'doyjwr20uabj',
    accessToken:'M-9rOA3cb7lmlO_wRutQiTpAIe65Gc9quB-J49ptaPE',
});

const contentTypeID = 'webTech4ZaraWebsiteRedesign';

// Retrieving data for a specific article from contentful
client.getEntry(id).then(function (entry) {

  // Calling categories container
  var itemsDiv = document.getElementById('itemscontainer');

      //Creating Each Clothing Item link tag, and linking each tag to an individual item description page
      var clothingItem=document.createElement('a');
      itemsDiv.appendChild(clothingItem);
      clothingItem.href='itemdescription.html';
      clothingItem.classList.add('itemlinks');

      //Creating item div
      var itemBlock = document.createElement('div');
      clothingItem.appendChild(itemBlock);
      itemBlock.classList.add('itemgridlayout');

      //Creating Item photo and heart icon div
      var itemPhotoLayout = document.createElement('div');
      itemBlock.appendChild(itemPhotoLayout);
      itemPhotoLayout.classList.add('itemphoto');

      //Creating Item photo, calling it from contentful and appending it to item Photo layout parent
      var itemPNG = document.createElement('img');
      itemPNG.src = entry.fields.itemImage.fields.file.url;
      itemPhotoLayout.appendChild(itemPNG);
      itemPNG.classList.add('itempng');

      //Creating Heart icon, appending it to item Photo layout parent, and calling it from contentful
      var heartIcon = document.createElement('img');
      heartIcon.src = entry.fields.heartIcon.fields.file.url;
      itemPhotoLayout.appendChild(heartIcon);
      heartIcon.classList.add('hearticon');

      //Creating Item Details div, and appending it to the itemBlock parent
      var itemDetails = document.createElement('div');
      itemBlock.appendChild(itemDetails);
      itemDetails.classList.add('itemdetails');
    
      //Creating item title p, appending it to parent, and calling it from contentful
      var itemTitle = document.createElement ('p');
      itemTitle.innerHTML = entry.fields.itemTitle;
      itemDetails.appendChild(itemTitle);

      //Creating color options div, and attaching it to itemDetails parent
      var colorOptions = document.createElement ('div');
      itemDetails.appendChild(colorOptions);
      colorOptions.classList.add('coloroptions');

      //Creating color image, calling it from contentful and attaching it to colorOptions parent
      var colorImage = document.createElement('img');
      colorImage.src = entry.fields.colorOptions.fields.file.url;
      colorOptions.appendChild(colorImage);

      //creating color addition text, calling it from contentful and attaching it to colorOptions parent
      var colorAdd=document.createElement('p');
      colorAdd.innerHTML = entry.fields.coloroptionstext;
      colorOptions.appendChild(colorAdd);

      //creating plus icon, calling it from Contentful and attaching it to item details parent
      var plusIcon=document.createElement('img');
      plusIcon.src = entry.fields.plusIcon.fields.file.url;
      itemDetails.appendChild(plusIcon);

      //creating price heading and attaching it to item grid layout parent
      var price = document.createElement('h2');
      price.innerHTML = entry.fields.itemPrice;
      itemBlock.appendChild(price);
})

//Again, while unsuccessful at linking contentful using javascript, I attempted to construct a details page
//as best I could, so you can see I have some understanding of javascript structure. Everything is also hard coded 
// so there is something for you to look at.