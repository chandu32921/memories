const slider = document.getElementById('imageSlider');

// Array of new image details
const imageDetails = [
  {
    filename: 'img1.jpg',
    title: 'Medical park',
    description: 'Madhu idk why but aa roju bunk kotti vellam kadha medical park ki , i think that talk made me feel special that day , andhuke eppatiki marchipolenu ee memory ni .appude kaadhu , manam oka 3,4 times bunk kotti ikkadake vacham , gurthundha , okasaari motham movie cheppasav , edho movie ikkada koorcho petti naaku,..endhuko ee place lo kasepu untey , eppudu matladaleka poina neetho matlada galanu ee place lo ..its good kadha ..i like it , ekkadiki velna vellaka poina ala koorchuni , smaal talks chaalu oka memory create cheytaaniki.,,',
  },
  {
    filename: 'img2.jpg',
    title: 'Adventure spot',
    description: 'Madhu idhi manam eppudu casual ga velle place a aina sare vellina prathi saari edho theleeni feel madhu, everytime its new to me...aaroju adventure matram bale nachindhi , adhi assalu marchiponu , water velnapdu choosi step veytam ...bale undhi kadha . manam aa pedha raya meedhaki velli koorchotum, pedha raaya meedha kaadhu , abhi birthday ki koorchunnam , water vachi thadipesi velpoyedhi , inka chaala , ee location a oka memory kadha....monna nv ,nenu, pragna vellinapdu weather baa undhi kadha , bike ride , something special in this place , no..maybe something special in you .... '
  },
  {
    filename: 'img3.jpg',
    title: 'Certificates day',
    description: 'Certificates ki vellina day ...manam mugguram bike meedha tenneti park ki vellam , ..akkada raaya choosavaaa ..dhaani meedhe koorchunnam , appudu ekkuva water unnai le , ee pic lo la ledhu ,..aa roju police aapithe , memu brothers anesav nv 😒...spent a good time that day ..'
  },
  {
    filename: 'img4.jpg',
    title: 'Fest',
    description: 'Ee fest asalu good memory aa, bad memory aa kooda theleedhu , first day nannu vadhilesaaru 😕, kaani second day baaga thirigam kadha .. papam naduchuni kastapadi konda ekkesaru , velli thinesi dhigipoyam....ee photo lo unna place ke vellale assalu ..third day aithe , naakemo kaani meeku memory a le , call chesthe , ashish vachadu, abhi car ekkesindhi , central dhaggara unnam raa annaru , bike theesesariki vadhu anesaru ,.. gurthundipothadhi le meeku 😄..'
  },
  {
    filename: 'img5.jpg',
    title: 'Your tour',
    description: 'Ee day madhu , one of my favourite memory , aaroju asalu rav anukunna, nenu uniform kooda vesesi class ki velpodham anukunna, kaani vachav motham mee school , pakka school , dharga ,..anni choopinchav it made me think i was special to you as u sharing your school time details .. .'
  },
  {
    filename: 'img6.jpg',
    title: 'Again this',
    description: 'inka chaala memories unnai madhu kaani idhe endhuku repeat chesthna antey , one of my fav idhi assalu marchipolenu , thammudu unnau ani cheppi school lo ki veltam , ..anni thirigesaka , beach lo koorchotam ,..ila inka chala memories create cheskovali madhu manam.'
  }
];

// Function to dynamically create li elements with images and details
function createSliderItems() {
  imageDetails.forEach((detail, index) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.style.backgroundImage = `url('${detail.filename}')`;

    const content = document.createElement('div');
    content.classList.add('content');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = detail.title;

    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = detail.description;

    content.appendChild(title);
    content.appendChild(description);
    li.appendChild(content);

    slider.appendChild(li);
  });
}

// Call the function to create slider items
createSliderItems();

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click', activate, false);
