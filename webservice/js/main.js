window.addEventListener('load', init);

//Global variables

const details = {
    1: {
        name: 'Kuroko No Basket',
        image: 'pictures/kuroko_no_basket.jpg',
        synopsis: 'The "Generation of Miracles" had five exceptional players, but few remember the elusive "Phantom Sixth Man," Kuroko. Often overlooked, he teams up with Kagami to prove his strength and take on his former teammates in the Interhigh Championship.',
        tags: ['School', ' Team Sports'],
        genre: 'sport',

    },

    2: {
        name: 'Haikyuu',
        image: 'pictures/haikyuu.jpg',
        synopsis: 'Ever since Shouyou Hinata saw the `Little Giant` he wanted to be just like him. When Hinata joins the old school of the little giant Karasuno Highschool he feels like he\'s getting closer to his dream of becoming a professional volleybal player.  Until he learns that Tobio Kageyama a volleybal setter prodigy who defeated Hinata`s old team now becomes his teammate. To make his dream come true Hinata needs to make amends with Kageyama.',
        tags: ['School', 'Team Sports'],
        genre: 'sport',
    },

    3: {
        name: 'Boukyaku Battery',
        image: 'pictures/battery.jpg',
        synopsis: 'Haruka Kiyomine and Kei Kaname were a dominant pitcher-catcher duo in middle school baseball, shattering many players dreams. After quitting the sport, Tarou Yamada enrolls at Kotesashi High, only to find the duo there—except Kaname has lost his memories. As Kiyome tries to bring him back to baseball, they form a new team with other former players, hoping to chase their championship dreams again.',
        tags: [' School', ' Team Sports'],
        genre: 'sport',
    },

    4: {
        name: 'Inazuma Eleven',
        image: 'pictures/inazuma_eleven.jpg',
        synopsis: "Captain of the football team Inazuma Eleven, Mamoru Endou tries his best to get the club back in shape. ",
        tags: ['Super Power, Team Sports'],
        genre: 'sport',
    },

    5: {
        name: 'Blue Lock',
        image: 'pictures/blue_lock.jpg',
        synopsis: 'Isagi Yoichi is one of three hundred under 18 strikers selected for a project named Blue Lock. In this project he has to compete with all the participants until hes the last man standing, earning him the title of number 1 striker of japan and a spot as the striker in the national japanese team',
        tags: [' Team Sports'],
        genre: 'sport',
    },

    6: {
        name: 'Free',
        image: 'pictures/free.jpg',
        synopsis: 'Haruka Nanase loves water and swimming, when he and his three friends reunites he realized rin doesnt care at all and wants to prove he can swim better than haruka. After the reunion haruka decided to form a swim club and hope to take part in the upcoming tournament. The four form a strong bond as they trained hard, determined to rise to the top and finally resolve the rivalry between Haruka and Rin.',
        tags: ['School'],
        genre: 'sport',
    },

    7: {
        name: 'Keppeki Danshi',
        image: 'pictures/aoyama_clean_freak.jpg',
        synopsis: 'Aoyama is respected and idolized by everyone for his looks and athletic skills. Despite him playing footbal, hes a clean freak. Even as a clean freak Aoyama will show that there are things hes willing to get dirty for',
        tags: ['Gag Humor, School, Team Sports'],
        genre: 'sport',
    },

    8: {
        name: 'Diamond no Ace',
        image: 'pictures/diamond_no_ace.jpg',
        synopsis: 'frustrated by defeat, Eijun Sawamura lost his final baseball match of middle school. When he got invited to Tokyos prestigious Seidou High School Eijun realized he needed to keep up with all the skilled players, thats when he decided he will become the teams ace as long as Satoru Furuya doesnt beat him first',
        tags: [' School, Team Sports'],
        genre: 'sport',
    },

    9: {
        name: 'Hoshiai no Sora',
        image: 'pictures/Hoshiai_no_Sora.jpg',
        synopsis: 'After being out preformed by the girls soft tennis club, the boys club disbanded. Touma Shinjou is looking to recruit players, but he fails. A new transfer student named Maki Katsuragi instantly captured Toumas attention, Eventually maki joins and quickly outshines his team. As the boys soft tennis club members explore their strengths, they face personal struggles and confront the challenges that come with growing up in middle school.',
        tags: [' School, Sport'],
        genre: 'sport',
    },

    10: {
        name: 'Tennis no Oujisama',
        image: 'pictures/prince_of_tennis.jpg',
        synopsis: 'Ryouma Echizen is a tennis prodigy that by the request from his father has returned to Japan from America. His new tennis club was reluctant to accept him but after seeing his skills they were ready for the National Tournament',
        tags: ['Sport'],
        genre: 'sport',

    }
};

let lastTarget;
let animeList;
let button;
let favoriteAnimes = [];
let animeCard;
let selectedAnime;

function init() {
    animeList = document.getElementById("anime-list");

    createAnimeList();
    animeList.addEventListener('click', detailClickHandler);
    animeList.addEventListener('click', favoriteClickHandler);
    animeList.addEventListener('click', deleteClickHandler);

    getFavoriteAnimeFromLocalStorage();

}

function createAnimeList(){

    for (let id in details){


        // create a div for cards
         animeCard = document.createElement('div')
        animeCard.classList.add('anime-card');
        animeCard.dataset.name = details[id].name;

            // get title
        let H2 = document.createElement('H2')
        H2.innerText = details[id].name;
        animeCard.appendChild(H2);

        // get image
        let img = document.createElement('img')
        img.src =  details[id].image;
        img.alt = details[id].name;
        animeCard.appendChild(img);



        // get favorite button
        let favoriteButton = document.createElement('button')
        favoriteButton.classList.add( 'button');
        favoriteButton.id = 'favBtn';
        favoriteButton.dataset.id = id;
        favoriteButton.innerText = 'Add to Favorites';
        animeCard.appendChild(favoriteButton);


        //  get detail button
        let detailButton = document.createElement('button')
        detailButton.classList.add( 'button');
        detailButton.id = 'detailBtn';
        detailButton.dataset.id = id;
        detailButton.innerText = 'Detail';
        animeCard.appendChild(detailButton);

        // get delete from favorite button
        let unFavoriteButton = document.createElement('button')
        unFavoriteButton.classList.add( 'button');
        unFavoriteButton.id = 'deleteBtn';
        unFavoriteButton.dataset.id = id;
        unFavoriteButton.innerText = 'Remove from favorites';
        animeCard.appendChild( unFavoriteButton);



        // append div to the list

        animeList.appendChild(animeCard);
    }

}



function detailClickHandler(e) {
    const target = e.target.dataset.id;
    const clickedItem = e.target;

    if(clickedItem.nodeName !== 'BUTTON'){
        return;
    }

    if(clickedItem.id === 'detailBtn'){
        showDetails(target);
        lastTarget =  showDetails(target);
    }

}



function showDetails(target) {

        let selectedAnime = details[target];

            const detailTitle = document.getElementById("title");
            detailTitle.innerText = selectedAnime.name;

            const detailSynopsis = document.getElementById("synopsis");
            detailSynopsis.innerText = selectedAnime.synopsis;

            const detailTags = document.getElementById("tags");
            detailTags.innerText = selectedAnime.tags;

            const detailGenre = document.getElementById("genre");
            detailGenre.innerText = selectedAnime.genre;

}

function favoriteClickHandler(e){

    const target = e.target.dataset.id;
    const clickedItem = e.target;

    if(clickedItem.nodeName !== 'BUTTON'){
        return;
    }

    if(clickedItem.id === 'favBtn'){
        addFavoriteToLocalStorage(target);
        clickedItem.parentElement.classList.toggle('favoriteAnime');

    }



}

function getFavoriteAnimeFromLocalStorage(){
    const favoriteAnimeString =  localStorage.getItem('favoriteAnimes');

    if (favoriteAnimeString !== null ){

        favoriteAnimes = JSON.parse(favoriteAnimeString);
        for(let favoriteAnime of favoriteAnimes){
            selectedAnime  = favoriteAnime;

        }


    }


}

function addFavoriteToLocalStorage(target){
    favoriteAnimes.push(details[target]);
    localStorage.setItem('favoriteAnimes', JSON.stringify(favoriteAnimes));

}

function deleteClickHandler(e){
    const target = e.target.dataset.id;
    const clickedItem = e.target;

    if(clickedItem.nodeName !== 'BUTTON'){
        return;
    }

    if(clickedItem.id === 'deleteBtn'){
        removeFavoriteFromLocalStorage(clickedItem.innerText);
       clickedItem.parentElement.classList.remove('favoriteAnime');

    }


}

function removeFavoriteFromLocalStorage(target){
    // favoriteAnimes.push(details[target]);

    const itemIndex = favoriteAnimes.indexOf(target);
    if(itemIndex !== null){
        favoriteAnimes.splice(itemIndex,  1);
        localStorage.setItem('favoriteAnimes', JSON.stringify(favoriteAnimes))
    }

}




