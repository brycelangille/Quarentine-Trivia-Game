**Quarantine_Trivia_Time_Game**

**Game Description:** During these trying times everyone needs a distraction  from the reality of our world's current situation. This trivia game is full of random facts and topics for you to choice from. Fun for all age ranges. Enjoy!

**API:**
1. https://opentdb.com/api_config.php
2. https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple (cartoon characters)
3. https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple (movie)
4. https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple (music)
5. https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple (tvshow)


**Wireframes**
1. https://imgur.com/gallery/YMM7caf

2. https://imgur.com/gallery/DG47CXr

3. https://imgur.com/T7bmeTb

**MVP**
1. Structed material in organized and challenging way
2. Recieve data multiple endpoints. Display data as an ingaging trivia game
3. Add CSS to make it fun/engaging
4. Ability to be interactive with audience

**PostMVP**
1. Add highscore
2. Create a score board
3. Additional CSS to make players want to engage (animation)
4. Make app both Landscape and portiot mode for mobile
5. Create a secound player ability

**Project Schedule**
Meeting with Mick: Monday, May 11th, 

|  Day | Deliverable | Status
|---|---| ---|
|May 8| Project Prompt | complete
|May 9-10| Wireframes / Priority Matrix / Timeframes | complete
|May 11| Core Application Structure (HTML, CSS, etc.) | Incomplete
|May 12| Javascript/API coding | Incomplete
|May 13| Debugging and completing coding from May11-12th  | Incomplete
|May 14| MVP/Post MVP checklist completion | Incomplete
|May 15| Present to the Class| Incomplete

**Priority Matrix**
https://imgur.com/gallery/fKZcKI6

**Timeframes**

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| :---: | :---: |  :---: | :---: | :---: |
| HTML/CSS | H | 2hrs| hrs | hrs|
| Javascript/API| H | 4hrs| hrs  | hrs |
| Debugging | H | 3hrs| hrs | hrs |
| MVP/Post MVP | H | 4hrs| hrs | hrs|
| Total | M | 13hrs|  hrs |  hrs |

**##API Snippet**
Movie API: https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple
```
{
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What was Marilyn Monroe`s character&#039;s first name in the film &quot;Some Like It Hot&quot;?",
            "correct_answer": "Sugar",
            "incorrect_answers": [
                "Honey",
                "Caramel",
                "Candy"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In which 1955 film does Frank Sinatra play Nathan Detroit?",
            "correct_answer": "Guys and Dolls",
            "incorrect_answers": [
                "Anchors Aweigh",
                "From Here to Eternity",
                "High Society"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is the name of the robot in the 1951 science fiction film classic &#039;The Day the Earth Stood Still&#039;?",
            "correct_answer": "Gort",
            "incorrect_answers": [
                "Robby",
                "Colossus",
                "Box"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who directed the 1973 film &quot;American Graffiti&quot;?",
            "correct_answer": "George Lucas",
            "incorrect_answers": [
                "Ron Howard",
                "Francis Ford Coppola",
                "Steven Spielberg"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "This movie contains the quote, &quot;What we&#039;ve got here is a failure to communicate.&quot;",
            "correct_answer": "Cool Hand Luke",
            "incorrect_answers": [
                "Bonnie and Clyde",
                "The Graduate",
                "In the Heat of the Night"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In what year was the first Transformers movie released?",
            "correct_answer": "1986",
            "incorrect_answers": [
                "2007",
                "1984",
                "2009"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What does TIE stand for in reference to the TIE Fighter in &quot;Star Wars&quot;?",
            "correct_answer": "Twin Ion Engine",
            "incorrect_answers": [
                "Twin Iron Engine",
                "Twin Intercepter Engine",
                "Twin Inception Engine"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is the name of the first &quot;Star Wars&quot; film by release order?",
            "correct_answer": "A New Hope",
            "incorrect_answers": [
                "The Phantom Menace",
                "The Force Awakens",
                "Revenge of the Sith"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which movie sequel had improved box office results compared to its original film?",
            "correct_answer": "Toy Story 2",
            "incorrect_answers": [
                "Sin City: A Dame to Kill For",
                "Speed 2: Cruise Control",
                "Son of the Mask"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who played Baron Victor Frankestein in the 1957 Hammer horror film &quot;The Curse of Frankenstein&quot;?",
            "correct_answer": "Peter Cushing",
            "incorrect_answers": [
                "Boris Karloff",
                "Vincent Price",
                "Lon Chaney Jr."
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the 2010 Nightmare on Elm Street reboot, who played Freddy Kruger?",
            "correct_answer": "Jackie Earle Haley",
            "incorrect_answers": [
                "Tyler Mane",
                "Derek Mears",
                "Gunnar Hansen"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which one of these films are shot entirely in one-take?",
            "correct_answer": "Russian Ark",
            "incorrect_answers": [
                "Good Will Hunting",
                "Birdman",
                "Schindler&#039;s List"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who played Sgt. Gordon Elias in &#039;Platoon&#039; (1986)?",
            "correct_answer": "Willem Dafoe",
            "incorrect_answers": [
                "Charlie Sheen",
                "Matt Damon",
                "Johnny Depp"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What was the name of the protagonist in the movie Commando (1985)?",
            "correct_answer": "John Matrix",
            "incorrect_answers": [
                "Ben Richards",
                "Douglas Quaid",
                "Harry Tasker"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who was the director of &quot;Scott Pilgrim vs. the World (2010)&quot;?",
            "correct_answer": "Edgar Wright",
            "incorrect_answers": [
                "Phil Lord",
                "Chris Miller",
                "Seth Rogan"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which former Star Trek actor directed Three Men and a Baby (1987)?",
            "correct_answer": "Leonard Nimoy",
            "incorrect_answers": [
                "William Shatner",
                "George Takei",
                "James Doohan"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In Mulan (1998), who is the leader of the Huns?",
            "correct_answer": "Shan Yu",
            "incorrect_answers": [
                "Chien-Po",
                "Li Shang",
                "Fa Zhou"
            ]
        },
```
Music API: https://opentdb.com/api.php?amount=20&category=12&difficulty=medium&type=multiple
```
{
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who had a 1973 hit with the song &#039;Hocus Pocus&#039;?",
            "correct_answer": "Focus",
            "incorrect_answers": [
                "Pilot",
                "Rush",
                "AC/DC"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who had a US and UK number 1 hit in 1962 with the instrumental, &#039;Telstar&#039;?",
            "correct_answer": "The Tornados",
            "incorrect_answers": [
                "The Ventures",
                "The Spotnicks",
                "The Tremeloes"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who is the Pink Floyd song &quot;Shine On You Crazy Diamond&quot; written about?",
            "correct_answer": "Syd Barrett",
            "incorrect_answers": [
                "John Lennon",
                "David Gilmour",
                "Floyd"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which Beatle led the way across the zebra crossing on the Abbey Road album cover?",
            "correct_answer": "John",
            "incorrect_answers": [
                "Paul",
                "George",
                "Ringo"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Irish musician Hozier released a music track in 2013 titled, &quot;Take Me to ______&quot;",
            "correct_answer": "Church",
            "incorrect_answers": [
                "Mosque",
                "Synagogue",
                "Temple"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which song is not by TheFatRat?",
            "correct_answer": "Ascent",
            "incorrect_answers": [
                "Monody",
                "Windfall",
                "Infinite Power!"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In 2015, David Hasselhof released a single called...",
            "correct_answer": "True Survivor",
            "incorrect_answers": [
                "True Fighter",
                "Real Kung-Fury",
                "Real Warrior"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "When did The Beatles release the LP &quot;Please Please Me&quot;?",
            "correct_answer": "1963",
            "incorrect_answers": [
                "1970",
                "1960",
                "1969"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What year was Red Hot Chill Pepper&#039;s album &quot;Californication&quot; released?",
            "correct_answer": "1999",
            "incorrect_answers": [
                "1997",
                "2000",
                "1992"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these bands is the oldest?",
            "correct_answer": "Pink Floyd",
            "incorrect_answers": [
                "AC/DC",
                "Metallica",
                "Red Hot Chili Peppers"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Cryoshell, known for &quot;Creeping in My Soul&quot; did the advertising music for what Lego Theme?",
            "correct_answer": "Bionicle",
            "incorrect_answers": [
                "Hero Factory",
                "Ben 10 Alien Force",
                "Star Wars"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who is the lead singer of Bastille?",
            "correct_answer": "Dan Smith",
            "incorrect_answers": [
                "Will Farquarson",
                "Kyle Simmons",
                "Chris Wood"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following bands is Tom DeLonge not a part of?",
            "correct_answer": "+44",
            "incorrect_answers": [
                "Box Car Racer",
                "Blink-182",
                "Angels &amp; Airwaves"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "How many copies have Metallica album &quot;Metallica&quot; (A.K.A The Black Album) sold worldwide (in Millions of Copies)?",
            "correct_answer": "20.5",
            "incorrect_answers": [
                "19.5",
                "22.5",
                "25.5"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is rapper Drake&#039;s real name?",
            "correct_answer": "Aubrey Graham",
            "incorrect_answers": [
                "Shaun Carter",
                "Dwayne Carter",
                "Andre Young"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these bands was a featuring artist in Compton rapper Kendrick Lamar&#039;s 2017 album, &quot;DAMN.&quot;?",
            "correct_answer": "U2",
            "incorrect_answers": [
                "Radiohead",
                "Coldplay",
                "Bon Jovi"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "When was the 3rd album &quot;Notes from the Underground&quot; of the band &quot;Hollywood Undead&quot; released?",
            "correct_answer": "2013",
            "incorrect_answers": [
                "2011",
                "2014",
                "2009"
            ]
        },
```
TV API: https://opentdb.com/api.php?amount=20&category=14&difficulty=medium&type=multiple
```
{
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What year did the television company BBC officially launch the channel BBC One?",
            "correct_answer": "1936",
            "incorrect_answers": [
                "1948",
                "1932",
                "1955"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which track by &quot;Massive Attack&quot; is used for the theme of &quot;House&quot;? ",
            "correct_answer": "Teardrop",
            "incorrect_answers": [
                "Protection",
                "Angel",
                "Black Milk"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who sang the theme song for the TV show &#039;Rawhide&#039;?",
            "correct_answer": "Frankie Laine",
            "incorrect_answers": [
                "Guy Mitchell",
                " Tennessee Ernie Ford",
                "Slim Whitman"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following Autobot names in Michael Bay&#039;s movies was NOT a name for a Transformer in the original 1980&#039;s cartoon?",
            "correct_answer": "Mudflap",
            "incorrect_answers": [
                "Skids",
                "Sideswipe",
                "Ratchet"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is the setting of the show &quot;Parks and Recreation&quot;?",
            "correct_answer": "Pawnee, Indiana",
            "incorrect_answers": [
                "Eagleton, Indiana",
                "Pasadena, California",
                "London, England"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which character does voice actress Tara Strong NOT voice?",
            "correct_answer": "Bubbles (2016)",
            "incorrect_answers": [
                "Twilight Sparkle",
                "Timmy Turner",
                "Harley Quinn"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the episode of SpongeBob SquarePants, &quot;Survival of the Idiots&quot;, Spongebob called Patrick which nickname?",
            "correct_answer": "Pinhead",
            "incorrect_answers": [
                "Starfish",
                "Larry",
                "Dirty Dan"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Dee from &quot;It&#039;s Always Sunny in Philadelphia&quot; has dated all of the following guys EXCEPT",
            "correct_answer": "Matthew &quot;Rickety Cricket&quot; Mara",
            "incorrect_answers": [
                "Colin the Thief",
                "Ben the Soldier",
                "Kevin Gallagher aka Lil&#039; Kevin"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the Netflix show, Stranger Things, what song would Will sing to himself as he was missing?",
            "correct_answer": "Should I Stay or Should I Go?",
            "incorrect_answers": [
                "Love Will Tear Us Apart",
                "This Charming Man",
                "Africa"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In &quot;The Big Bang Theory&quot;, what is Howard Wolowitz&#039;s nickname in World of Warcraft?",
            "correct_answer": "Wolowizard",
            "incorrect_answers": [
                "Sheldor",
                "Rajesh",
                "Priya"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who was the winner of the 2016 WWE Royal Rumble?",
            "correct_answer": "Triple H",
            "incorrect_answers": [
                "Roman Reigns",
                "AJ Styles",
                "Dean Ambrose"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is Meg&#039;s full name in &quot;Family Guy&quot;?",
            "correct_answer": "Megatron Griffin",
            "incorrect_answers": [
                "Who-Cares Griffin",
                "Neil Griffin",
                "Megan Griffin"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What was Nickelodeon&#039;s original name?",
            "correct_answer": "Pinwheel",
            "incorrect_answers": [
                "MTVKids",
                "KidsTV",
                "Splat!"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In &quot;Star Trek&quot;, what is the Klingon death ritual?",
            "correct_answer": "Look into sky and yell loudly in mourning.",
            "incorrect_answers": [
                "Kiss the jagged forehead before burial.",
                "Shoot into space in a torpedo casing.",
                "Split the deceased&#039;s earnings between bloodkin."
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Alan Reed is known for providing the voice of which character?",
            "correct_answer": "Fred Flintstone",
            "incorrect_answers": [
                "Bugs Bunny",
                "Fangface",
                "G.I. Joe"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who was Firestorm&#039;s rival during the original run of UK Robot Wars?",
            "correct_answer": "Panic Attack",
            "incorrect_answers": [
                "Razer",
                "Chaos 2",
                "Hypno Disc"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The first half-hour CGI cartoon, ReBoot, aired on which year?",
            "correct_answer": "1994",
            "incorrect_answers": [
                "1993",
                "1998",
                "1999"
            ]
        },
```

**Change Log**