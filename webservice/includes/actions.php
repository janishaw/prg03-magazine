<?php
/**
 * @return array
 */
function getSports(): array
{
    return [
        [
            "id" => 1,
            "name" => "	Kuroko no Basket",
            "genre" => "Sports",
            "image" => "pictures/kuroko_no_basket.jpg",
        ],
        [
            "id" => 2,
            "name" => "	Haikyuu",
            "genre" => "Sports",
            "image" => "pictures/haikyuu.jpg"
        ],
        [
            "id" => 3,
            "name" => "Boukyaku Battery",
            "genre" => "Sports",
            "image" => "pictures/battery.jpg"
        ],
        [
            "id" => 4,
            "name" => "Inazuma Eleven ",
            "genre" => "Sports",
            "image" => "pictures/inazuma_eleven.jpg"
        ],
        [
            "id" => 5,
            "name" => "Blue Lock ",
            "genre" => "Sports",
            "image" => "pictures/blue_lock.jpg"
        ],
        [
            "id" => 6,
            "name" => "Free",
            "genre" => "Sports ",
            "image" => "pictures/free.jpg"
        ],
        [
            "id" => 7,
            "name" => "Keppeki Danshi! Aoyama-kun",
            "genre" => "Comedy, Sports",
            "image" => "pictures/aoyama_clean_freak.jpg"
        ],
        [
            "id" => 8,
            "name" => "Diamond no Ace",
            "genre" => "School, Team Sports",
            "image" => "pictures/diamond_no_ace.jpg"
        ],
        [
            "id" => 9,
            "name" => "Hoshiai no Sora",
            "genre" => " Drama, Sports",
            "image" => "pictures/Hoshiai_no_Sora.jpg"
        ],
        [
            "id" => 10,
            "name" => "Tennis no Oujisama",
            "genre" => "Sports",
            "image" => "pictures/prince_of_tennis.jpg"
        ]

    ];
}

/**
 * @param $id
 * @return array|false
 */
function getSportDetails($id): array|false
{
    $tags = [
        1 => [
            "synopsis" => "They were known as the 'Generation of Miracles'. All five members had their own skills and were strong individual. Most people forget that there is a 'Phantom Sixth Man' in the shadows that you won't even notice the presence off. As they all decided to go their own way so they can compete against each-other, Kuroko who lacks presence and is almost always forgotten wants to show that he can be strong in his own way too. with his new duo Kagami, they aim to win the upcoming Interhigh championship and compete with kuroko's old classmates  ",
            "tags" => ['School, Team Sports']
        ],
        2 => [
            "synopsis" => "Ever since Shouyou Hinata saw the 'Little Giant' he wanted to be just like him. When Hinata joins the old school of the little giant Karasuno Highschool he feels like he's getting closer to his dream of becoming a professional volleybal player.  Until he learns that Tobio Kageyama a volleybal setter prodigy who defeated Hinata's old team now becomes his teammate. To make his dream come true Hinata needs to make amends with Kageyama.",
            "tags" => ['School, Team Sports']
        ],
        3 => [
            "synopsis" => "Haruka Kiyomine and Kei Kaname were the most promising pitcher-catcher duo in middle school baseball crushing the dreams of many players who hoped to one day make it to the big leagues. Tarou Yamada is one of the former players, after stepping away from the sport, he enrolls at Kotesashi High School, an ordinary public school without a baseball team. Only to find the formidable duo there. That's when he learned that Kaname has lost his memories and Kiyome is trying to get Kaname to play baseball again. As he meets other promising players who gave up they formed a baseball team and think it might be possible to achieve their dream and win the national championship.",
            "tags" => [' School, Team Sports']
        ],
        4 => [
            "synopsis" => "Captain of the football team Inazuma Eleven, Mamoru Endou tries his best to get the club back in shape. ",
            "tags" => ['Super Power, Team Sports']
        ],
        5 => [
            "synopsis" => "Isagi Yoichi is one of three hundred under 18 strikers selected for a project named Blue Lock. In this project he has to compete with all the participants until he's the last man standing, earning him the title of number 1 striker of japan and a spot as the striker in the national japanese team ",
            "tags" => [' Team Sports']
        ],
        6 => [
            "synopsis" => "Haruka Nanase loves water and swimming, when he and his three friends reunites he realized rin doesn't care at all and wants to prove he can swim better than haruka. After the reunion haruka decided to form a swim club and hope to take part in the upcoming tournament. The four form a strong bond as they trained hard, determined to rise to the top and finally resolve the rivalry between Haruka and Rin.",
            "tags" => ['School']
        ],
        7 =>[
            "synopsis" => "Aoyama is respected and idolized by everyone for his looks and athletic skills. Despite him playing footbal, he's a clean freak. Even as a clean freak Aoyama will show that there are things he's willing to get dirty for. ",
            "tags" => ['Gag Humor, School, Team Sports']
        ],
        8 => [
            "synopsis" => "frustrated by defeat, Eijun Sawamura lost his final baseball match of middle school. When he got invited to Tokyo's prestigious Seidou High School Eijun realized he needed to keep up with all the skilled players, that's when he decided he will become the team's ace as long as Satoru Furuya doesn't beat him first",
            "tags" => [' School, Team Sports']
        ],
        9 => [
            "synopsis" => "After being out preformed by the girls soft tennis club, the boys club disbanded. Touma Shinjou is looking to recruit players, but he fails. A new transfer student named Maki Katsuragi instantly captured Touma's attention, Eventually maki joins and quickly outshines his team. As the boys' soft tennis club members explore their strengths, they face personal struggles and confront the challenges that come with growing up in middle school.",
            "tags" => [' School, Sport']
        ],
        10 => [
            "synopsis" => " Ryouma Echizen is a tennis prodigy that by the request from his father has returned to Japan from America. His new tennis club was reluctant to accept him but after seeing his skills they were ready for the National Tournament",
            "tags" => ['Sport']
        ]
    ];

    return $tags[$id] ?? false;
}
