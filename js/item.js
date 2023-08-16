// I wasn't sure how to format a second details page, one that would apply when the user
//selects a certain item (i.e, yellow sweater), so I'm using the same format as the main js.
//I know this is probably incorrect but at least I can demonstrate my use of javascript formatting?

//Connection to contentful data
const client = contentful.createClient({
    space:'doyjwr20uabj',
    accessToken:'M-9rOA3cb7lmlO_wRutQiTpAIe65Gc9quB-J49ptaPE',
});

const contentTypeID = 'webTech4ZaraWebsiteRedesign';

// Calling itemhero section container
var itemheroDiv = document.getElementById('itemheroDiv');
// Calling price and color options container
var pricecolorDiv=document.getElementById('priceandcoloroptionscontainer');

// Retrieving data from contentful
client.getEntries({ content_type: contentTypeID }).then(function (response) {
  response.items.forEach(function (entry) {
    console.log(entry.fields);

    //HERO SECTION

    //Creating figure div, appending it to hero section
        var figureDiv = document.createElement('figure')
        itemheroDiv.appendChild(figureDiv);
        figureDiv.classList.add('heroimg');

    //Creating item image, appending it to figure div parent, and calling it from contentful
        var itemHero = document.createElement('img');
        figureDiv.appendChild(itemHero);
        itemHero.src = entry.fields.itemImage.fields.file.url;

    //Calling item Color title, calling it from contentful, and appending it to figure div parent
        var itemcolorTitle=document.createElement('h2');
        figureDiv.appendChild(itemcolorTitle);
        itemcolorTitle.innerHTML = entry.fields.itemTitle;
        itemcolorTitle.classList.add('oversettext');
    
    //Creating overlaying icons Div, appending it to figure div parent
        var overlayingicons=document.createElement('div');
        figureDiv.appendChild(overlayingicons);
        overlayingicons.classList.add('overlayingicons');

    //Creating heart icon, appending it to overlaying icons parent div, and calling it from contentful
        var heartpng = document.createElement('img');
        overlayingicons.appendChild(heartpng);
        heartpng.src = entry.fields.heartIcon.fields.file.url;
    
    //Creating a tag for add to bag/+ icon and appending it to overlaying icons parent
        var cartlink = document.createElement('a');
        cartlink.href='cart.html';
        overlayingicons.appendChild(cartlink);

    //Creating +/add to bag icon, appending it to a tag, and calling it from contentful
        var bagicon = document.createElement('img');
        cartlink.appendChild(bagicon);
        bagicon.src = entry.fields.plusIcon.fields.file.url;
    
    //PRICE AND COLOR OPTIONS
    
    //Creating priceandcolors div and appending it to priceandcoloroptionscontainer
        var priceandcolors = document.createElement('div');
        pricecolorDiv.appendChild(priceandcolors);
        priceandcolors.classList('priceandcolors');

    // Creating price tag, appending it to priceandcolors div, and calling it from contentful
        var priceofitem = document.createElement('h1');
        priceandcolors.appendChild(priceofitem);
        priceofitem.innerHTML = entry.fields.itemPrice;
    
    //Creating paragraph item description tag, appending it to priceandcolors parent div, and calling it from contentful
        var itemdescriptionParagraph=document.createElement('p');
        priceandcolors.appendChild(itemdescriptionParagraph);
        itemdescriptionParagraph.innerHTML = entry.fields.itemDescription;
  })
})