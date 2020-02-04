// EXAMPLE json da cambiare //
const petsData = [
    {
        "Num": 1,
        "Name": "HK AS01",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that some debatable actions made by Blizzard reduced his credibility among Hong Kong protests supporters.",
        "Template": "Galaxy Brain",
        "Photo": "https://i.ibb.co/W2hJhfC/HK-AS01.jpg"
    },
    {
        "Num": 2,
        "Name": "HK AS02",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Independent Police Complaints Council",
        "Collateral_target": "-",
        "Description": "Denouces the fact that IPCC has not been able to handle the huge number of complaints about police assaults.",
        "Template": "None",
        "Photo": "https://i.ibb.co/3CG1yLG/HK-AS02.jpg"
    },
    {
        "Num": 3,
        "Name": "HK AS03",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounces the inconsistent behavoiur of Hong Kong Police.",
        "Template": "Metronome Very Fast",
        "Photo": "https://i.ibb.co/cNSyWJt/HK-AS03.jpg"
    },
    {
        "Num": 4,
        "Name": "HK AS04",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that Chinese Communist Party pretends that there are no protests in Hong Kong.",
        "Template": "There is No War in Ba Sing Se",
        "Photo": "https://i.ibb.co/k6Lzjqq/HK-AS04.png"
    },
    {
        "Num": 5,
        "Name": "HK AS05",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "Hong Kong Police/Carrie Lam",
        "Description": "Claims that CCP, Hong Kong Police and Carrie Lam have joined to \"kill\" Hong Kong protesters.",
        "Template": "Swords United",
        "Photo": "https://i.ibb.co/Xtc1Rjt/HK-AS05.png"
    },
    {
        "Num": 6,
        "Name": "HK AS06",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Blizzard, after siding with CCP, got punished by Reddit community that transformed an Overwatch character in a Pro Hong Kong symbol.",
        "Template": "Joker Gets Hit by a Car/You Dumb Bitch/Will Smith With a Camera",
        "Photo": "https://i.ibb.co/1dtmm2k/HK-AS06.jpg"
    },
    {
        "Num": 7,
        "Name": "HK AS07",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Blizzard, after siding with CCP, got punished by Reddit community that transformed an Overwatch character in a Pro Hong Kong symbol.",
        "Template": "Get Nae Nae'd",
        "Photo": "https://i.ibb.co/0nwDbRh/HK-AS07.jpg"
    },
    {
        "Num": 8,
        "Name": "HK AS08",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that the weaponization of Mei as Pro-Hong Kong symbol is depicted as a modern solution.",
        "Template": "Pro-Hong Kong Mei/Modern Problems Require Modern Solutions",
        "Photo": "https://i.ibb.co/5hPvGsr/HK-AS08.jpg"
    },
    {
        "Num": 9,
        "Name": "HK AS09",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that, after Blitzchung's controversy, users all around the world decided to boycott Blizzard's videogames.",
        "Template": "None",
        "Photo": "https://i.ibb.co/fxZPCqd/HK-AS09.jpg"
    },
    {
        "Num": 10,
        "Name": "HK AS10",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "USA",
        "Collateral_target": "-",
        "Description": "Claims that americans trigger only for something about basket and videogames happens.",
        "Template": "Sleeping Shaq",
        "Photo": "https://i.ibb.co/FmpWZVd/HK-AS10.jpg"
    },
    {
        "Num": 11,
        "Name": "HK AS11",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Generic internet user",
        "Collateral_target": "-",
        "Description": "Claims that the generic internet users triggering for Blizzcon Shirt Raid but not for Storm Area 51.",
        "Template": "Sleeping Shaq",
        "Photo": "https://i.ibb.co/NWY1J9h/HK-AS11.jpg"
    },
    {
        "Num": 12,
        "Name": "HK AS12",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Denounces the fact that CCP owns chinese mass media.",
        "Template": "Roll Safe",
        "Photo": "https://i.ibb.co/5RT4TFH/HK-AS12.jpg"
    },
    {
        "Num": 13,
        "Name": "HK AS13",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Denounces the inconsistent behaviour of Blizzard.",
        "Template": "South Park China Ban",
        "Photo": "https://i.ibb.co/1T74K98/HK-AS13.jpg"
    },
    {
        "Num": 14,
        "Name": "HK AS14",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Denounces the behaviour of Blizzard in relation to Hong Kong protest against freedom of speech.",
        "Template": "Heavy Triggered",
        "Photo": "https://i.ibb.co/xYY3kcm/HK-AS14.png"
    },
    {
        "Num": 15,
        "Name": "HK AS15",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Makes a comparison between legitimately and illegitimately claimed territory by China.",
        "Template": "None",
        "Photo": "https://i.ibb.co/ys882Y5/HK-AS15.png"
    },
    {
        "Num": 16,
        "Name": "HK AS16",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that Chinese Communist Party pretends that there are no protests in Hong Kong.",
        "Template": "There is No War in Ba Sing Se",
        "Photo": "https://i.ibb.co/3scQxsw/HK-AS16.jpg"
    },
    {
        "Num": 17,
        "Name": "HK AS17",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Denounces the Blizzard different approach to Chinese and Hong Kong players.",
        "Template": "Access Denied",
        "Photo": "https://i.ibb.co/B3JPYS6/HK-AS17.jpg"
    },
    {
        "Num": 18,
        "Name": "HK AS18",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Denounces the fact that CCP pays USA to control the mass media in order to limit the circulation of information about Hong Kong protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/C0Vj9Kd/HK-AS18.png"
    },
    {
        "Num": 19,
        "Name": "HK AS19",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Denounces the fact that CCP does not take into consideration the 5 demands made by protesters.",
        "Template": "Area 51 Naruto Runner",
        "Photo": "https://i.ibb.co/cQKm2Kf/HK-AS19.jpg"
    },
    {
        "Num": 20,
        "Name": "HK AS20",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "List some facts that explain low participation in public protest rally.",
        "Template": "None",
        "Photo": "https://i.ibb.co/fHHPxcy/HK-AS21.jpg"
    },
    {
        "Num": 21,
        "Name": "HK AS21",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Denounces the inconsistent behaviour of Blizzard.",
        "Template": "Pouring Gas on Fire",
        "Photo": "https://i.ibb.co/QQzvXQY/HK-AS22.jpg"
    },
    {
        "Num": 22,
        "Name": "HK AS22",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "NBA",
        "Collateral_target": "Blizzard",
        "Description": "Denounces the inconsistent behaviour of Blizzard and NBA in relation to Trump and Hong Kong protest.",
        "Template": "Wojack Feels Guy",
        "Photo": "https://i.ibb.co/0nrdTCD/HK-AS23.png"
    },
    {
        "Num": 23,
        "Name": "HK AS23",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "Hong Kong Police",
        "Description": "Denounces the violent behaviour of Hong Kong Police.",
        "Template": "None",
        "Photo": "https://i.ibb.co/NFv7m5P/HK-AS24.jpg"
    },
    {
        "Num": 24,
        "Name": "HK AS24",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that the chinese people are submissed to their government.",
        "Template": "None",
        "Photo": "https://i.ibb.co/FH0D6V1/HK-AS25.jpg"
    },
    {
        "Num": 25,
        "Name": "HK AS25",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Claims that the blizzard's behavior has been counterproductive for the Chinese government plan.",
        "Template": "Gru's Plan",
        "Photo": "https://i.ibb.co/5R6NBr6/HK-AS26.jpg"
    },
    {
        "Num": 26,
        "Name": "HK AS26",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Claims the different perception of Xi Jinping around the world's mass media.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/r3r8cZq/HK-AS27.jpg"
    },
    {
        "Num": 27,
        "Name": "HK AS27",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Denounces the mass media censorship made by CCP.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/jTdc1z4/HK-AS28.jpg"
    },
    {
        "Num": 28,
        "Name": "HK AS28",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims the disinstallion of Blizzard games to help Hong Kong protestors.",
        "Template": "SrGrafo",
        "Photo": "https://i.ibb.co/NF2SXkT/HK-AS29.jpg"
    },
    {
        "Num": 29,
        "Name": "HK AS29",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Describes Xin Jinping as a dictator who rejects the principles of democracy.",
        "Template": "Guys With Hair Like This Have a 125% Chance of Stealing Your Girl",
        "Photo": "https://i.ibb.co/jDM0jxm/HK-AS30.jpg"
    },
    {
        "Num": 30,
        "Name": "HK AS30",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese rappers",
        "Collateral_target": "-",
        "Description": "Claims that Chinese rappers are sold to the CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/27wJkFJ/HK-AS31.jpg"
    },
    {
        "Num": 31,
        "Name": "HK AS31",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Denounces the inconsistent behaviour of CCP.",
        "Template": "I used the Stones to destroy the Stones",
        "Photo": "https://i.ibb.co/VQvkr2p/HK-AS32.jpg"
    },
    {
        "Num": 32,
        "Name": "HK AS32",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Protesters",
        "Collateral_target": "-",
        "Description": "Claims the different behaviour of chinese protesters due to different geographical position.",
        "Template": "None",
        "Photo": "https://i.ibb.co/xHKFgrp/HK-AS33.jpg"
    },
    {
        "Num": 33,
        "Name": "HK AS33",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Claims the negative consequences of Hong Kong Police actions.",
        "Template": "Pouring Gas on Fire",
        "Photo": "https://i.ibb.co/xsH3r0b/HK-AS34.jpg"
    },
    {
        "Num": 34,
        "Name": "HK AS34",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "ABC",
        "Collateral_target": "-",
        "Description": "Denounces an ABC's incorrect news.",
        "Template": "None",
        "Photo": "https://i.ibb.co/NsCbQQs/HK-AS35.png"
    },
    {
        "Num": 35,
        "Name": "HK AS35",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounces the violent behaviour of Hong Kong Police.",
        "Template": "Let's See Who This Really Is",
        "Photo": "https://i.ibb.co/ct0bh9W/HK-AS36.jpg"
    },
    {
        "Num": 36,
        "Name": "HK AS36",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Denounces the information lack about the facts of Tiananmen Square.",
        "Template": "Granny can't Lie",
        "Photo": "https://i.ibb.co/HNHKbCP/HK-AS37.jpg"
    },
    {
        "Num": 37,
        "Name": "HK AS37",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounces the violent behaviour of Hong Kong Police.",
        "Template": "Surprised Pikachu",
        "Photo": "https://i.ibb.co/WWTt89y/HK-AS38.png"
    },
    {
        "Num": 38,
        "Name": "HK AS38",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Denounces the mass media censorship made by CCP.",
        "Template": "All Three Are Going to Lie to You",
        "Photo": "https://i.ibb.co/KLYvv7C/HK-AS39.jpg"
    },
    {
        "Num": 39,
        "Name": "HK AS39",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Denounces the inconsistent and violent behaviour of CCP.",
        "Template": "Wojack Feels Guy",
        "Photo": "https://i.ibb.co/bJvrygN/HK-AS40.jpg"
    },
    {
        "Num": 40,
        "Name": "HK AS40",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims the CCP government as a bad thing.",
        "Template": "None",
        "Photo": "https://i.ibb.co/42bH6Kf/HK-AS41.jpg"
    },
    {
        "Num": 41,
        "Name": "HK AS41",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that basic human rights are not considered by CCP.",
        "Template": "We Don't Do That Here",
        "Photo": "https://i.ibb.co/WfcqyCj/HK-AS42.jpg"
    },
    {
        "Num": 42,
        "Name": "HK AS42",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Britain",
        "Collateral_target": "-",
        "Description": "Claims the different perception of Britain around the world's mass media.",
        "Template": "Demon Slayer Nezuko",
        "Photo": "https://i.ibb.co/tZwfCZY/HK-AS43.jpg"
    },
    {
        "Num": 43,
        "Name": "HK AS43",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Hongkongers",
        "Collateral_target": "-",
        "Description": "Positively defines the Hong Kong protesters (Called \"Hongkongers\" by Reddit community).",
        "Template": "Nobody is Born Cool",
        "Photo": "https://i.ibb.co/G7TZhtB/HK-AS44.jpg"
    },
    {
        "Num": 44,
        "Name": "HK AS44",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Negatively defines China's government.",
        "Template": "China is Asshole!!!",
        "Photo": "https://i.ibb.co/dK5PxMW/HK-AS45.png"
    },
    {
        "Num": 45,
        "Name": "HK AS45",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Hong Kong",
        "Collateral_target": "-",
        "Description": "Claims the bad reputation of the city of Hong Kong as a consequence of the refusal of rebranding.",
        "Template": "Skyrim Skill Tree",
        "Photo": "https://i.ibb.co/fGqjSnp/HK-AS46.jpg"
    },
    {
        "Num": 46,
        "Name": "HK AS46",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounces the fact that HK Police is disguised as protesters.",
        "Template": "Spider-Man Pointing at Spider-Man",
        "Photo": "https://i.ibb.co/VjXkWhy/HK-AS47.jpg"
    },
    {
        "Num": 47,
        "Name": "HK AS47",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Denounces the inconsistent and ridiculous behaviour of Blizzard.",
        "Template": "Putting on Clown Makeup",
        "Photo": "https://i.ibb.co/ScRnjx6/HK-AS48.jpg"
    },
    {
        "Num": 48,
        "Name": "HK AS48",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Denounces Blizzard's behaviour after Blitzchung's ban controversy.",
        "Template": "Mission Passed Respect+",
        "Photo": "https://i.ibb.co/DgR1Nf0/HK-AS49.jpg"
    },
    {
        "Num": 49,
        "Name": "HK AS49",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Denounces the behaviour of Blizzard in relation to Hong Kong protest against freedom of speech.",
        "Template": "None",
        "Photo": "https://i.ibb.co/0VR2Lr2/HK-AS50.jpg"
    },
    {
        "Num": 50,
        "Name": "HK AS50",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Blizzard should be punished by Reddit community.",
        "Template": "None",
        "Photo": "https://i.ibb.co/NLkdTnd/HK-AS51.png"
    },
    {
        "Num": 51,
        "Name": "HK AS51",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounces the false declarations made by HK Police about the protesters behaviour.",
        "Template": "Indiana Jones Swap Idol",
        "Photo": "https://i.ibb.co/4PR4FKP/HK-AS52.png"
    },
    {
        "Num": 52,
        "Name": "HK AS52",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims the fall of the CCP as a positive situation.",
        "Template": "None",
        "Photo": "https://i.ibb.co/KXcPVC3/HK-AS53.jpg"
    },
    {
        "Num": 53,
        "Name": "HK AS53",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Claims in a hyperbolic way that the HK Police violates the rights of protesters.",
        "Template": "None",
        "Photo": "https://i.ibb.co/sH0cDL9/HK-AS54.jpg"
    },
    {
        "Num": 54,
        "Name": "HK AS54",
        "Propaganda": "Assertion",
        "Link": "1_assertion.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that Chinese Communist Party pretends that there are no protests in Hong Kong.",
        "Template": "There Is No Queen of England",
        "Photo": "https://i.ibb.co/xmWvjWj/HK-AS55.jpg"
    },
    {
        "Num": 55,
        "Name": "HK BW01",
        "Propaganda": "Bandwagon",
        "Link": "2_bandwagon.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "Taiwan/Tibet/Macau",
        "Description": "Push Taiwan, Tibet and Macau inhabitants to unite agaist China.",
        "Template": "None",
        "Photo": "https://i.ibb.co/K0gSTnC/HK-BW01.png"
    },
    {
        "Num": 56,
        "Name": "HK BW02",
        "Propaganda": "Bandwagon",
        "Link": "2_bandwagon.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "The weaponization of Earth as Pro-Hong Kong symbol to push CCP to ban it from China (ironic).",
        "Template": "None",
        "Photo": "https://i.ibb.co/HhKY7tf/HK-BW02.jpg"
    },
    {
        "Num": 57,
        "Name": "HK BW03",
        "Propaganda": "Bandwagon",
        "Link": "2_bandwagon.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "The weaponization of oxygen as Pro-Hong Kong symbol to push CCP to ban it from China (ironic).",
        "Template": "None",
        "Photo": "https://i.ibb.co/qdYsf13/HK-BW03.jpg"
    },
    {
        "Num": 58,
        "Name": "HK BW04",
        "Propaganda": "Bandwagon",
        "Link": "2_bandwagon.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Make it look like that anyone hates the Hong Kong Police.",
        "Template": "Preaching to the Mob",
        "Photo": "https://i.ibb.co/ftmLzXG/HK-BW04.jpg"
    },
    {
        "Num": 59,
        "Name": "HK BW05",
        "Propaganda": "Bandwagon",
        "Link": "2_bandwagon.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Push gamers to uninstall Battle.net in order to boycott Blizzard's products.",
        "Template": "Finding Neverland",
        "Photo": "https://i.ibb.co/K9GKz4S/HK-BW05.png"
    },
    {
        "Num": 60,
        "Name": "HK BW06",
        "Propaganda": "Bandwagon",
        "Link": "2_bandwagon.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "Tencent/Blizzard",
        "Description": "Push gamers to follow the example of Blitzchung and side against Tencent and Blizzard.",
        "Template": "Bend the Knee",
        "Photo": "https://i.ibb.co/2hXHtxd/HK-BW06.png"
    },
    {
        "Num": 61,
        "Name": "HK BW07",
        "Propaganda": "Bandwagon",
        "Link": "2_bandwagon.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Make it look like that Liberals and Conservatives are siding with Hong Kong protesters.",
        "Template": "Epic Handshake",
        "Photo": "https://i.ibb.co/C0h96nN/HK-BW07.jpg"
    },
    {
        "Num": 62,
        "Name": "HK BW08",
        "Propaganda": "Bandwagon",
        "Link": "2_bandwagon.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Make it look like that everyone is against Chinese Communist Party.",
        "Template": "Tucson 6-years-old birthday party",
        "Photo": "https://i.ibb.co/zVq86Lr/HK-BW08.jpg"
    },
    {
        "Num": 63,
        "Name": "HK BW09",
        "Propaganda": "Bandwagon",
        "Link": "2_bandwagon.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Push the Reddit community to side with Hong Kong protesters.",
        "Template": "I'll never forgive the chinese",
        "Photo": "https://i.ibb.co/cxZPsHW/HK-BW09.png"
    },
    {
        "Num": 64,
        "Name": "HK BW10",
        "Propaganda": "Bandwagon",
        "Link": "2_bandwagon.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "The weaponization of soybeans as Pro-Hong Kong symbol to push CCP to ban it from China (ironic).",
        "Template": "None",
        "Photo": "https://i.ibb.co/cXf3PHL/HK-BW10.png"
    },
    {
        "Num": 65,
        "Name": "HK CS01",
        "Propaganda": "Card Stacking",
        "Link": "3_cardStacking.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Epic Games, Xbox and RedBull had a alleged better behaviour than Blizzard.",
        "Template": "You Guys Always Act Like You're Better Than Me",
        "Photo": "https://i.ibb.co/VSskdhH/HK-CS01.jpg"
    },
    {
        "Num": 66,
        "Name": "HK CS02",
        "Propaganda": "Card Stacking",
        "Link": "3_cardStacking.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Make a comparison between British and Chinese rule of Hong Kong, defining the first as superior.",
        "Template": "None",
        "Photo": "https://i.ibb.co/8D37LL3/HK-CS02.jpg"
    },
    {
        "Num": 67,
        "Name": "HK CS03",
        "Propaganda": "Card Stacking",
        "Link": "3_cardStacking.html",
        "Target": "Apple",
        "Collateral_target": "-",
        "Description": "Make a comparison between Apple in 1984 and Apple now, in relation with their declaration about Hong Kong.",
        "Template": "None",
        "Photo": "https://i.ibb.co/mymSm4s/HK-CS03.png"
    },
    {
        "Num": 68,
        "Name": "HK CS04",
        "Propaganda": "Card Stacking",
        "Link": "3_cardStacking.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Make a comparison between China in the past and now, by alluding to the Pooh/Xi Jinping association.",
        "Template": "None",
        "Photo": "https://i.ibb.co/71b2x6b/HK-CS04.png"
    },
    {
        "Num": 69,
        "Name": "HK CS05",
        "Propaganda": "Card Stacking",
        "Link": "3_cardStacking.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounces the violent behaviour of Hong Kong Police.",
        "Template": "American Chopper",
        "Photo": "https://i.ibb.co/WGn7N2C/HK-CS05.jpg"
    },
    {
        "Num": 70,
        "Name": "HK CS06",
        "Propaganda": "Card Stacking",
        "Link": "3_cardStacking.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that Hong Kong should declare indipendence for China.",
        "Template": "American Chopper",
        "Photo": "https://i.ibb.co/Z8TxfTf/HK-CS06.jpg"
    },
    {
        "Num": 71,
        "Name": "HK CS07",
        "Propaganda": "Card Stacking",
        "Link": "3_cardStacking.html",
        "Target": "Pro-China Protesters",
        "Collateral_target": "-",
        "Description": "Claims that Pro-China protesters in free countries are hypocrites.",
        "Template": "None",
        "Photo": "https://i.ibb.co/jhxnh36/HK-CS07.jpg"
    },
    {
        "Num": 72,
        "Name": "HK DF01",
        "Propaganda": "Desires and Fears",
        "Link": "12_desiresAndFears.html",
        "Target": "Riot Games",
        "Collateral_target": "-",
        "Description": "Claims that Riot Games will be the next to be negatively influenced by HK-China tensions.",
        "Template": "Death Knocking on Doors",
        "Photo": "https://i.ibb.co/txfmWQt/HK-DF01.jpg"
    },
    {
        "Num": 73,
        "Name": "HK FD01",
        "Propaganda": "False Dilemma",
        "Link": "5_falseDilemma.html",
        "Target": "Carrie Lam",
        "Collateral_target": "Hong Kong Police",
        "Description": "Claims that HK police and Carrie Lam should are guilty in the same way.",
        "Template": "None",
        "Photo": "https://i.ibb.co/DgLF0hm/HK-FD01.jpg"
    },
    {
        "Num": 74,
        "Name": "HK FD02",
        "Propaganda": "False Dilemma",
        "Link": "5_falseDilemma.html",
        "Target": "Lebron James",
        "Collateral_target": "-",
        "Description": "Denounce the inconsistent behaviour of Lebron James, claiming that he get paid by China.",
        "Template": "Drakeposting",
        "Photo": "https://i.ibb.co/hVVPjcp/HK-FD02.png"
    },
    {
        "Num": 75,
        "Name": "HK FD03",
        "Propaganda": "False Dilemma",
        "Link": "5_falseDilemma.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Blizzard get paid by the CCP.",
        "Template": "Tracer",
        "Photo": "https://i.ibb.co/27jx74v/HK-FD03.jpg"
    },
    {
        "Num": 76,
        "Name": "HK FD04",
        "Propaganda": "False Dilemma",
        "Link": "5_falseDilemma.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "Hong Kong Police",
        "Description": "Denounce the contradictory declaration made by CCP about HK Police.",
        "Template": "Two Buttons/Wojack Feels Guy",
        "Photo": "https://i.ibb.co/8KcCGXy/HK-FD04.jpg"
    },
    {
        "Num": 77,
        "Name": "HK FD05",
        "Propaganda": "False Dilemma",
        "Link": "5_falseDilemma.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Push gamers to uninstall Overwatch in order to boycott Blizzard.",
        "Template": "Reject Modernity, Embrace Tradition",
        "Photo": "https://i.ibb.co/7SfShgP/HK-FD06.jpg"
    },
    {
        "Num": 78,
        "Name": "HK FD06",
        "Propaganda": "False Dilemma",
        "Link": "5_falseDilemma.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claim that the only sane way to resolve HK crisis is to give in to Hongkongers.",
        "Template": "Two Buttons",
        "Photo": "https://i.ibb.co/SxYV7kz/HK-FD07.jpg"
    },
    {
        "Num": 79,
        "Name": "HK FD07",
        "Propaganda": "False Dilemma",
        "Link": "5_falseDilemma.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Blizzard get paid by the CCP.",
        "Template": "Distracted Boyfriend",
        "Photo": "https://i.ibb.co/3dyGXS6/HK-FD08.jpg"
    },
    {
        "Num": 80,
        "Name": "HK FD08",
        "Propaganda": "False Dilemma",
        "Link": "5_falseDilemma.html",
        "Target": "Carrie Lam",
        "Collateral_target": "-",
        "Description": "Claims that Carrie Lam wants peeople to use dedicated chinese social network.",
        "Template": "Drakeposting",
        "Photo": "https://i.ibb.co/yVtyS5W/HK-FD09.jpg"
    },
    {
        "Num": 81,
        "Name": "HK FD09",
        "Propaganda": "False Dilemma",
        "Link": "5_falseDilemma.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounce the contradictory declaration made by HK Police.",
        "Template": "Drakeposting",
        "Photo": "https://i.ibb.co/m48ct7s/HK-FD10.png"
    },
    {
        "Num": 82,
        "Name": "HK GG01",
        "Propaganda": "Glittering Generalities",
        "Link": "4_glitteringGeneralities.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Describe Hong Kong protesters as \"pride of China\".",
        "Template": "None",
        "Photo": "https://i.ibb.co/J7b1GwQ/HK-GG01.jpg"
    },
    {
        "Num": 83,
        "Name": "HK GG02",
        "Propaganda": "Glittering Generalities",
        "Link": "4_glitteringGeneralities.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Describe Hong Kong protesters as heroes.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/WP60jG3/HK-GG02.jpg"
    },
    {
        "Num": 84,
        "Name": "HK NC01",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Make a comparison between Half Life 2 (videogame) and Hong Kong security.",
        "Template": "Dr. Hax",
        "Photo": "https://i.ibb.co/PYTPKMn/HK-NC01.png"
    },
    {
        "Num": 85,
        "Name": "HK NC02",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Lebron James",
        "Collateral_target": "-",
        "Description": "Portrait Lebron James as a chinese affiliated coward because of his comments about Hong Kong protest.",
        "Template": "Lebron James",
        "Photo": "https://i.ibb.co/ZXhpTnW/HK-NC02.jpg"
    },
    {
        "Num": 86,
        "Name": "HK NC03",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Blizzard gets paid to side against protesters.",
        "Template": "Mr. Krab",
        "Photo": "https://i.ibb.co/LdmJNPq/HK-NC03.png"
    },
    {
        "Num": 87,
        "Name": "HK NC04",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Describes the Chinese Communist Party as something diabolical.",
        "Template": "I Fear No Man",
        "Photo": "https://i.ibb.co/jZQJvhN/HK-NC04.jpg"
    },
    {
        "Num": 88,
        "Name": "HK NC05",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Potraits Xi Jinping as someone who use censorship to control information, using the title of Lebron James's movie as caption.",
        "Template": "This is Now A Spiderman Thread",
        "Photo": "https://i.ibb.co/StYWQwG/HK-NC05.jpg"
    },
    {
        "Num": 89,
        "Name": "HK NC06",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that China government is a dictatorship.",
        "Template": "Thomas Had Never Seen Such Bullshit Before",
        "Photo": "https://i.ibb.co/QK7c7Hp/HK-NC06.png"
    },
    {
        "Num": 90,
        "Name": "HK NC07",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "Blizzard",
        "Description": "Claims CCP and Blizzard negative behaviour comparing them to defecation.",
        "Template": "Yes Chad Nordic Gamer",
        "Photo": "https://i.ibb.co/ChSgWDJ/HK-NC07.jpg"
    },
    {
        "Num": 91,
        "Name": "HK NC08",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Singaporean Students",
        "Collateral_target": "-",
        "Description": "Portrait Singaporean students to perverts.",
        "Template": "None",
        "Photo": "https://i.ibb.co/HtW7Y0b/HK-NC08.jpg"
    },
    {
        "Num": 92,
        "Name": "HK NC09",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Portrait Chinese politicians as someone who uses the police to protect himselves from the people.",
        "Template": "None",
        "Photo": "https://i.ibb.co/HN7TmbN/HK-NC09.png"
    },
    {
        "Num": 93,
        "Name": "HK NC10",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Potraits Xi Jinping as someone who use censorship to control information, using the title of Lebron James movie as caption.",
        "Template": "None",
        "Photo": "https://i.ibb.co/7vqshcB/HK-NC10.jpg"
    },
    {
        "Num": 94,
        "Name": "HK NC11",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Ridicule Xi Jinping by comparing him to Winnie the Pooh.",
        "Template": "Carl!",
        "Photo": "https://i.ibb.co/d4kzJ97/HK-NC11.jpg"
    },
    {
        "Num": 95,
        "Name": "HK NC12",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Lebron James",
        "Collateral_target": "-",
        "Description": "Describe Lebron James as a Chinese Communist Party spokesman.",
        "Template": "Wikipedia",
        "Photo": "https://i.ibb.co/BtYYX0V/HK-NC12.jpg"
    },
    {
        "Num": 96,
        "Name": "HK NC13",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Portrait Blizzard as a bloody Winnie the Pooh that ignores human rights, in reference to Xi Jinping.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/jH7SwN8/HK-NC13.png"
    },
    {
        "Num": 97,
        "Name": "HK NC14",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Portrait Xi Jinping as a violent Winnie the Pooh.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/rb4NxqL/HK-NC14.jpg"
    },
    {
        "Num": 98,
        "Name": "HK NC15",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Blizzard gets paid by CCP.",
        "Template": "Woman Yelling at Cat",
        "Photo": "https://i.ibb.co/vZPn4D7/HK-NC15.png"
    },
    {
        "Num": 99,
        "Name": "HK NC16",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Epic Games",
        "Collateral_target": "-",
        "Description": "Describe Epic Games in a negative way comparing it to Satan.",
        "Template": "Thanks Satan",
        "Photo": "https://i.ibb.co/x5vgvLB/HK-NC16.jpg"
    },
    {
        "Num": 100,
        "Name": "HK NC17",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Compare Xi Jinping to someone who practices BDSM (Bondage, Domination, Sadism and Masochism).",
        "Template": "None",
        "Photo": "https://i.ibb.co/hLRpqfG/HK-NC17.jpg"
    },
    {
        "Num": 101,
        "Name": "HK NC18",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Pro-China Protesters",
        "Collateral_target": "-",
        "Description": "Describe Pro-China protesters like someone who can't think individually (NPC = In a videogame, a Non Playable Character.",
        "Template": "Wojack Feels Guy",
        "Photo": "https://i.ibb.co/V34x8P7/HK-NC18.png"
    },
    {
        "Num": 102,
        "Name": "HK NC19",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounce the contradictory declaration made by HK Police.",
        "Template": "General Shepherd's Betrayal",
        "Photo": "https://i.ibb.co/bg32rKx/HK-NC19.png"
    },
    {
        "Num": 103,
        "Name": "HK NC20",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounce Hong Kong Police's human values.",
        "Template": "None",
        "Photo": "https://i.ibb.co/SNqzpBv/HK-NC20.jpg"
    },
    {
        "Num": 104,
        "Name": "HK NC21",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Carrie Lam",
        "Collateral_target": "-",
        "Description": "Claims that Carrie Lam controls Chinese communication, against freedom of speech.",
        "Template": "None",
        "Photo": "https://i.ibb.co/TbNpkph/HK-NC21.jpg"
    },
    {
        "Num": 105,
        "Name": "HK NC22",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounce the contradictory declaration made by HK Police.",
        "Template": "None",
        "Photo": "https://i.ibb.co/gd9GtXC/HK-NC22.jpg"
    },
    {
        "Num": 106,
        "Name": "HK NC23",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "Hong Kong Police",
        "Description": "Claims that HK police and Chinese Communist Party are against freedom.",
        "Template": "SrGrafo",
        "Photo": "https://i.ibb.co/djJDmBc/HK-NC23.jpg"
    },
    {
        "Num": 107,
        "Name": "HK NC24",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounce the contradictory declaration made by HK Police.",
        "Template": "None",
        "Photo": "https://i.ibb.co/34N15q6/HK-NC24.png"
    },
    {
        "Num": 108,
        "Name": "HK NC25",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Carrie Lam",
        "Collateral_target": "-",
        "Description": "Claims that Carrie Lam is against peaceful mediations with Hongkongers.",
        "Template": "None",
        "Photo": "https://i.ibb.co/S6Gb80x/HK-NC25.jpg"
    },
    {
        "Num": 109,
        "Name": "HK NC26",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Lebron James",
        "Collateral_target": "-",
        "Description": "Describe Lebron James as a clown affiliate to Chinese Communist Party.",
        "Template": "Lebron James",
        "Photo": "https://i.ibb.co/98PKs72/HK-NC26.png"
    },
    {
        "Num": 110,
        "Name": "HK NC27",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Blizzard gets paid by CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/23H1WCj/HK-NC27.png"
    },
    {
        "Num": 111,
        "Name": "HK NC28",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Carrie Lam",
        "Collateral_target": "-",
        "Description": "Claims that Carrie Lam as someone who is indifferent to what is done to the demonstrators.",
        "Template": "None",
        "Photo": "https://i.ibb.co/yQwLN5x/HK-NC28.png"
    },
    {
        "Num": 112,
        "Name": "HK NC29",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Denounce the contradictory declaration made by HK Police.",
        "Template": "None",
        "Photo": "https://i.ibb.co/ByzQQcv/HK-NC29.png"
    },
    {
        "Num": 113,
        "Name": "HK NC30",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Describe the Hong Kong policeman as a bad job.",
        "Template": "None",
        "Photo": "https://i.ibb.co/gvjf7q8/HK-NC30.jpg"
    },
    {
        "Num": 114,
        "Name": "HK NC31",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Lebron James",
        "Collateral_target": "-",
        "Description": "Describe Lebron James as a Chinese Communist Party affiliated.",
        "Template": "Lebron James",
        "Photo": "https://i.ibb.co/3TCMNS7/HK-NC31.jpg"
    },
    {
        "Num": 115,
        "Name": "HK NC32",
        "Propaganda": "Name Calling",
        "Link": "7_nameCalling.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Describe Xi Jinping as a tyrant.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/2MTTVyS/HK-NC32.jpg"
    },
    {
        "Num": 116,
        "Name": "HK PE01",
        "Propaganda": "Pinpointing the Enemy",
        "Link": "8_pinpointingTheEnemy.html",
        "Target": "Lebron James",
        "Collateral_target": "-",
        "Description": "Describe Lebron James as the one who fight against HK protesters.",
        "Template": "Lebron James",
        "Photo": "https://i.ibb.co/Df2zWpr/HK-PE01.jpg"
    },
    {
        "Num": 117,
        "Name": "HK PE02",
        "Propaganda": "Pinpointing the Enemy",
        "Link": "8_pinpointingTheEnemy.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Blizzard disclosed the problem by banning Blitzchung.",
        "Template": "Now All of China Knows You're Here",
        "Photo": "https://i.ibb.co/QNn0Pht/HK-PE02.png"
    },
    {
        "Num": 118,
        "Name": "HK PE03",
        "Propaganda": "Pinpointing the Enemy",
        "Link": "8_pinpointingTheEnemy.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that CCP is damaging himself, blaming the United States as a scapegoating.",
        "Template": "Baton Roue",
        "Photo": "https://i.ibb.co/vcxvFPr/HK-PE03.png"
    },
    {
        "Num": 119,
        "Name": "HK TR01",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Governments",
        "Collateral_target": "-",
        "Description": "Claim that governments of the world have been negatively surprised by the Hong Kong protest, spread in particular by some Reddit communities.",
        "Template": "Toothless Presents Himself",
        "Photo": "https://i.ibb.co/Pm7nZhz/HK-TR01.jpg"
    },
    {
        "Num": 120,
        "Name": "HK TR02",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Lebron James",
        "Collateral_target": "-",
        "Description": "Associate Lebron James to Mao Zedung.",
        "Template": "None",
        "Photo": "https://i.ibb.co/MCc21V4/HK-TR02.jpg"
    },
    {
        "Num": 121,
        "Name": "HK TR03",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "!SPOILER ALERT! Associate HK Government to Thanos and Hongkongers to Iron Man saving the world in Avengers EndGame.",
        "Template": "None",
        "Photo": "https://i.ibb.co/Dbc6s8j/HK-TR03.png"
    },
    {
        "Num": 122,
        "Name": "HK TR04",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "NBA",
        "Collateral_target": "-",
        "Description": "Associate NBA to CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/mHSsn8q/HK-TR04.jpg"
    },
    {
        "Num": 123,
        "Name": "HK TR05",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Associate Hong Kong Police with dinosaurus from the movie Jurassic World, described as brutal animals by the caption.",
        "Template": "None",
        "Photo": "https://i.ibb.co/D96MkK4/HK-TR05.jpg"
    },
    {
        "Num": 124,
        "Name": "HK TR06",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping with Winston, a character from Blizzard's videogame Overwatch.",
        "Template": "None",
        "Photo": "https://i.ibb.co/jD0ds8m/HK-TR06.jpg"
    },
    {
        "Num": 125,
        "Name": "HK TR07",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Associate Blizzard to CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/GVqsbQd/HK-TR07.jpg"
    },
    {
        "Num": 126,
        "Name": "HK TR08",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/GxCy7qv/HK-TR08.png"
    },
    {
        "Num": 127,
        "Name": "HK TR09",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison/Winnie the Pooh Reading",
        "Photo": "https://i.ibb.co/Rv1QnHS/HK-TR09.jpg"
    },
    {
        "Num": 128,
        "Name": "HK TR10",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/GQMz3jn/HK-TR10.jpg"
    },
    {
        "Num": 129,
        "Name": "HK TR11",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh, mixed with Pepe the Frog.",
        "Template": "Winnie the Pooh Comparison/Smudge Frog",
        "Photo": "https://i.ibb.co/fkxL6bc/HK-TR11.jpg"
    },
    {
        "Num": 130,
        "Name": "HK TR12",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/pfBSCBx/HK-TR12.jpg"
    },
    {
        "Num": 131,
        "Name": "HK TR13",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "NBA",
        "Collateral_target": "-",
        "Description": "Associate NBA to CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/8N8Tsqv/HK-TR13.jpg"
    },
    {
        "Num": 132,
        "Name": "HK TR14",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "Blizzard",
        "Description": "Claiming that Blizzard and CCP made a mistake by banning Blitzchung without considering the consequences.",
        "Template": "I Have No Idea!",
        "Photo": "https://i.ibb.co/vxwsxQJ/HK-TR14.jpg"
    },
    {
        "Num": 133,
        "Name": "HK TR15",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping with the figure of the Big Brother.",
        "Template": "None",
        "Photo": "https://i.ibb.co/0sYT2sn/HK-TR15.jpg"
    },
    {
        "Num": 134,
        "Name": "HK TR16",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Hong Kong Police",
        "Collateral_target": "-",
        "Description": "Associate HK Police to primitive apes.",
        "Template": "Apes Togheter Strong",
        "Photo": "https://i.ibb.co/Jc6NYVY/HK-TR16.jpg"
    },
    {
        "Num": 135,
        "Name": "HK TR17",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "Hong Kong Police",
        "Description": "Associate Jack Torrance from Kubrick's Shining to CCP in the famous scene of the door.",
        "Template": "Here's Johnny",
        "Photo": "https://i.ibb.co/4dSxvXJ/HK-TR17.jpg"
    },
    {
        "Num": 136,
        "Name": "HK TR18",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate the clown IT from the Stephen King's novel to Xi Jinping, claiming that he's a dictator.",
        "Template": "Pennywise The Clown",
        "Photo": "https://i.ibb.co/y6nd6v9/HK-TR18.jpg"
    },
    {
        "Num": 137,
        "Name": "HK TR19",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "Blizzard/Tencent/Chinese Communist Party",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/7CGgtgc/HK-TR19.png"
    },
    {
        "Num": 138,
        "Name": "HK TR20",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/smmYpPD/HK-TR20.jpg"
    },
    {
        "Num": 139,
        "Name": "HK TR21",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him and to Heinrich Himmler to give a negative connotation.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/ZTrzgQK/HK-TR21.jpg"
    },
    {
        "Num": 140,
        "Name": "HK TR22",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/g73P36D/HK-TR22.jpg"
    },
    {
        "Num": 141,
        "Name": "HK TR23",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/TRPpMHK/HK-TR23.jpg"
    },
    {
        "Num": 142,
        "Name": "HK TR24",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "Blizzard/Activision",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/qxmKQ41/HK-TR24.jpg"
    },
    {
        "Num": 143,
        "Name": "HK TR25",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Associate Hong Kong with a candle wich can't be turned off by CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/7pJc6t1/HK-TR25.jpg"
    },
    {
        "Num": 144,
        "Name": "HK TR26",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Associate a weak cat with the city of Hong Kong during the protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/4N0crGC/HK-TR26.jpg"
    },
    {
        "Num": 145,
        "Name": "HK TR27",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Associate CCP to someone who's defined a conspiracy theorist.",
        "Template": "Pepe Silvia",
        "Photo": "https://i.ibb.co/kc70Frn/HK-TR27.jpg"
    },
    {
        "Num": 146,
        "Name": "HK TR28",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Describe the CCP like a crying baby as Hongkongers claim democracy.",
        "Template": "None",
        "Photo": "https://i.ibb.co/T4VYq4z/HK-TR28.jpg"
    },
    {
        "Num": 147,
        "Name": "HK TR29",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/CQrCBY2/HK-TR29.png"
    },
    {
        "Num": 148,
        "Name": "HK TR30",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "NBA",
        "Collateral_target": "-",
        "Description": "Associate basket balls to the tanks in Tiananmen Square in 1989.",
        "Template": "None",
        "Photo": "https://i.ibb.co/b1mbqTb/HK-TR30.jpg"
    },
    {
        "Num": 149,
        "Name": "HK TR31",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Describe Blizzard as a company for which money matters more than human values.",
        "Template": "Scrooge McDuck Money Pool",
        "Photo": "https://i.ibb.co/m5vn3ZZ/HK-TR31.jpg"
    },
    {
        "Num": 150,
        "Name": "HK TR32",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Associate some protest scenes from the movie Joker to the HK protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/StrPsVv/HK-TR32.jpg"
    },
    {
        "Num": 151,
        "Name": "HK TR33",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him making him sing a parodistic version of the Pooh's song.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/x6GsrkG/HK-TR33.png"
    },
    {
        "Num": 152,
        "Name": "HK TR34",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "NBA",
        "Collateral_target": "-",
        "Description": "Associate NBA to CCP.",
        "Template": "None",
        "Photo": "https://i.ibb.co/dKCdXPK/HK-TR34.jpg"
    },
    {
        "Num": 153,
        "Name": "HK TR35",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to a creepy version of Winnie the Pooh.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/ftqXShQ/HK-TR35.jpg"
    },
    {
        "Num": 154,
        "Name": "HK TR36",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "USA",
        "Collateral_target": "-",
        "Description": "Claim that Hong Kong should learn from American colonies how to get the indipendence.",
        "Template": "Learning to be Spider-Man",
        "Photo": "https://i.ibb.co/vwgRY0g/HK-TR36.png"
    },
    {
        "Num": 155,
        "Name": "HK TR37",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to Winnie the Pooh to ridicule him.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/PGmy0s4/HK-TR37.png"
    },
    {
        "Num": 156,
        "Name": "HK TR38",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Associate Blizzard's Heartstone logo to a edited sentence made during the Diablo Immortal reveal at BlizzCon.",
        "Template": "Diablo Immortal",
        "Photo": "https://i.ibb.co/JR6DBvp/HK-TR38.png"
    },
    {
        "Num": 157,
        "Name": "HK TR39",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Lebron James",
        "Collateral_target": "-",
        "Description": "Associate Lebron James to Mao Zedung.",
        "Template": "None",
        "Photo": "https://i.ibb.co/PCTx7ZR/HK-TR39.jpg"
    },
    {
        "Num": 158,
        "Name": "HK TR40",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Associate CCP to Nazis.",
        "Template": "None",
        "Photo": "https://i.ibb.co/pZ641Lc/HK-TR40.png"
    },
    {
        "Num": 159,
        "Name": "HK TR41",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping with Roadhog, a character from Blizzard's videogame Overwatch.",
        "Template": "None",
        "Photo": "https://i.ibb.co/7b0N9cM/HK-TR41.png"
    },
    {
        "Num": 160,
        "Name": "HK TR42",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping with Wrecking Ball, a character from Blizzard's videogame Overwatch.",
        "Template": "None",
        "Photo": "https://i.ibb.co/xSHLyJz/HK-TR42.png"
    },
    {
        "Num": 161,
        "Name": "HK TR43",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate Xi Jinping to a Blizzard's Hearthstone card version of Winnie the Pooh.",
        "Template": "None",
        "Photo": "https://i.ibb.co/KKzXXL4/HK-TR43.png"
    },
    {
        "Num": 162,
        "Name": "HK TR44",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Associate the Hong Kong protest to the the protest made by androids in the videogame Detroit: Become Human.",
        "Template": "They're The Same Picture",
        "Photo": "https://i.ibb.co/XYsj5yK/HK-TR44.png"
    },
    {
        "Num": 163,
        "Name": "HK TR45",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that HK protests are obstacles between CCP and world dominance.",
        "Template": "None",
        "Photo": "https://i.ibb.co/Y3tSgRL/HK-TR45.jpg"
    },
    {
        "Num": 164,
        "Name": "HK TR46",
        "Propaganda": "Transfer",
        "Link": "11_transfer.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Associate the skeleton of a dead man with the generic Hong Kong protester.",
        "Template": "None",
        "Photo": "https://i.ibb.co/brzYRsf/HK-TR46.jpg"
    },
    {
        "Num": 165,
        "Name": "HK TS01",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Xi Jinping",
        "Collateral_target": "-",
        "Description": "Claims that politicians are corrupted by using a Robin Williams aphorism.",
        "Template": "None",
        "Photo": "https://i.ibb.co/r0pCjv8/HK-TS01.jpg"
    },
    {
        "Num": 166,
        "Name": "HK TS02",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/fxkSw5f/HK-TS02.png"
    },
    {
        "Num": 167,
        "Name": "HK TS03",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch in 1989 Tiananmen square protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/Hd8P9nS/HK-TS03.jpg"
    },
    {
        "Num": 168,
        "Name": "HK TS04",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Use a historic photo of Mao Zedong claiming, untruthfully, that he supports the HK protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/hBwzCpQ/HK-TS04.jpg"
    },
    {
        "Num": 169,
        "Name": "HK TS05",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a cosplay of a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/WBvp9Hc/HK-TS05.jpg"
    },
    {
        "Num": 170,
        "Name": "HK TS06",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/X5gfJ9w/HK-TS06.png"
    },
    {
        "Num": 171,
        "Name": "HK TS07",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/2kGHKhL/HK-TS07.jpg"
    },
    {
        "Num": 172,
        "Name": "HK TS08",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/NCmw9hj/HK-TS08.jpg"
    },
    {
        "Num": 173,
        "Name": "HK TS09",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/9wfgyVZ/HK-TS09.jpg"
    },
    {
        "Num": 174,
        "Name": "HK TS10",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/dmm4bv8/HK-TS10.jpg"
    },
    {
        "Num": 175,
        "Name": "HK TS11",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/5v2c96G/HK-TS11.jpg"
    },
    {
        "Num": 176,
        "Name": "HK TS12",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch in 1989 Tiananmen square protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/ftCx11P/HK-TS12.png"
    },
    {
        "Num": 177,
        "Name": "HK TS13",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch in 1989 Tiananmen square protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/VtXJ9Md/HK-TS13.jpg"
    },
    {
        "Num": 178,
        "Name": "HK TS14",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/4KGZFDK/HK-TS14.png"
    },
    {
        "Num": 179,
        "Name": "HK TS15",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/rpHs1XK/HK-TS15.jpg"
    },
    {
        "Num": 180,
        "Name": "HK TS16",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/ZWMCFzd/HK-TS16.jpg"
    },
    {
        "Num": 181,
        "Name": "HK TS17",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/0cnsB8v/HK-TS17.jpg"
    },
    {
        "Num": 182,
        "Name": "HK TS18",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/hH2Sn6J/HK-TS18.png"
    },
    {
        "Num": 183,
        "Name": "HK TS19",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Tracer from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/2v6VCfh/HK-TS19.jpg"
    },
    {
        "Num": 184,
        "Name": "HK TS20",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/XzMB3cX/HK-TS20.png"
    },
    {
        "Num": 185,
        "Name": "HK TS21",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Zenyatta from Overwatch, as a testimonial for Tibet indipendence.",
        "Template": "None",
        "Photo": "https://i.ibb.co/VCrnX0s/HK-TS21.jpg"
    },
    {
        "Num": 186,
        "Name": "HK TS22",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Genji from Overwatch, as a testimonial for HK protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/5hVYtDN/HK-TS22.jpg"
    },
    {
        "Num": 187,
        "Name": "HK TS23",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "Blizzard/Lebron James/Xi Jinping",
        "Description": "Use Mei, Lebron James and Winnie the Pooh making them side with HK protesters.",
        "Template": "None",
        "Photo": "https://i.ibb.co/wNz11qx/HK-TS23.jpg"
    },
    {
        "Num": 188,
        "Name": "HK TS24",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Attemp to change Wikipedia's Mei page, io order to declare her a official testimonial of the HK protest.",
        "Template": "Wikipedia",
        "Photo": "https://i.ibb.co/pb6Nxch/HK-TS24.png"
    },
    {
        "Num": 189,
        "Name": "HK TS25",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/88kzGJb/HK-TS25.jpg"
    },
    {
        "Num": 190,
        "Name": "HK TS26",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use a Blizzard character, Mei from Overwatch, as a testimonial for HK protest.",
        "Template": "Pro-Hong Kong Mei",
        "Photo": "https://i.ibb.co/L9RYMJF/HK-TS26.png"
    },
    {
        "Num": 191,
        "Name": "HK TS27",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Use a sentence said in the videogame Fallout 4 by Liberty Prime, an American war robot.",
        "Template": "None",
        "Photo": "https://i.ibb.co/84kbp9F/HK-TS27.jpg"
    },
    {
        "Num": 192,
        "Name": "HK TS28",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "Chinese Communist Party",
        "Description": "Use Blizzard's characters from Overwatch as testimonial for the HK protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/ZLxhnPC/HK-TS28.jpg"
    },
    {
        "Num": 193,
        "Name": "HK TS29",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Use a sentence said in the videogame Fallout 4 by Liberty Prime, an American war robot.",
        "Template": "None",
        "Photo": "https://i.ibb.co/B6m7PR3/HK-TS29.png"
    },
    {
        "Num": 194,
        "Name": "HK TS30",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Use a sentence said in the videogame Fallout 4 by Liberty Prime, an American war robot.",
        "Template": "None",
        "Photo": "https://i.ibb.co/x7WPv4T/HK-TS30.png"
    },
    {
        "Num": 195,
        "Name": "HK TS31",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Use a Marvel character, Captain America, as a testimonial for HK protest, after his sign on the Hong Kong Democracy Legislation.",
        "Template": "None",
        "Photo": "https://i.ibb.co/kgK9g3v/HK-TS31.jpg"
    },
    {
        "Num": 196,
        "Name": "HK TS32",
        "Propaganda": "Testimonial",
        "Link": "10_testimonial.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Use Blizzard's characters as testimonials for the HK protest.",
        "Template": "None",
        "Photo": "https://i.ibb.co/KwyYyh3/HK-TS32.jpg"
    },
    {
        "Num": 197,
        "Name": "HK TW01",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "6_theLesserOfTwoEvil.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that, even if Electronic Arts is generally considered a bad software house, Blizzard is described as worse.",
        "Template": "SrGrafo",
        "Photo": "https://i.ibb.co/VSg9b9Y/HK-TW01.jpg"
    },
    {
        "Num": 198,
        "Name": "HK TW02",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "6_theLesserOfTwoEvil.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that suppressing those who are skeptical of the results of the protest is better than not protesting.",
        "Template": "SrGrafo",
        "Photo": "https://i.ibb.co/MSJ8vrG/HK-TW02.jpg"
    },
    {
        "Num": 199,
        "Name": "HK TW03",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "6_theLesserOfTwoEvil.html",
        "Target": "NBA",
        "Collateral_target": "-",
        "Description": "Claims that NBA players consider China dictatorship better than Trump government.",
        "Template": "None",
        "Photo": "https://i.ibb.co/5jrcX0R/HK-TW03.jpg"
    },
    {
        "Num": 200,
        "Name": "HK TW04",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "6_theLesserOfTwoEvil.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that having HIV is better than to allow the government to gather its organs.",
        "Template": "Winnie the Pooh Comparison",
        "Photo": "https://i.ibb.co/TWqpx3h/HK-TW04.png"
    },
    {
        "Num": 201,
        "Name": "HK TW05",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "6_theLesserOfTwoEvil.html",
        "Target": "Chinese Communist Party",
        "Collateral_target": "-",
        "Description": "Claims that killing a man is better that wear a mask to avoid facial recognition.",
        "Template": "I Killed a Man",
        "Photo": "https://i.ibb.co/0XySzBK/HK-TW05.jpg"
    },
    {
        "Num": 202,
        "Name": "HK TW06",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "6_theLesserOfTwoEvil.html",
        "Target": "Pro-China Protesters",
        "Collateral_target": "-",
        "Description": "Claims that protesting for Hong Kong is better than using a VPN to access Youtube from China.",
        "Template": "Woman Yelling at Cat",
        "Photo": "https://i.ibb.co/hMMh26w/HK-TW06.jpg"
    },
    {
        "Num": 203,
        "Name": "HK TW07",
        "Propaganda": "The Lesser of Two Evils",
        "Link": "6_theLesserOfTwoEvil.html",
        "Target": "Blizzard",
        "Collateral_target": "-",
        "Description": "Claims that Epic Games behaviour is more acceptable than Blizzard's.",
        "Template": "None",
        "Photo": "https://i.ibb.co/XV5nR4N/HK-TW07.png"
    }
]


//////////////////////////////////
/////////HOVER ABOUT/////////

$('#ant').mousemove(function(e){
    $('.immaginihover').find('#formica').addClass('visible');
    $('.immaginihover').find('#formica').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#formica').removeClass('visible');
});


$('#parasite').mousemove(function(e){
    $('.immaginihover').find('#virus').addClass('visible');
    $('.immaginihover').find('#virus').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#virus').removeClass('visible');
});



$('#NewHampshire').mousemove(function(e){
    $('.immaginihover').find('#img-NewHampshire').addClass('visible');
    $('.immaginihover').find('#img-NewHampshire').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-NewHampshire').removeClass('visible');
});


$('#cheezburger').mousemove(function(e){
    $('.immaginihover').find('#img-cheezburger').addClass('visible');
    $('.immaginihover').find('#img-cheezburger').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-cheezburger').removeClass('visible');
});

$('#xijinping').mousemove(function(e){
    $('.immaginihover').find('#img-xijinping').addClass('visible');
    $('.immaginihover').find('#img-xijinping').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-xijinping').removeClass('visible');
});

$('#iran').mousemove(function(e){
    $('.immaginihover').find('#img-iran').addClass('visible');
    $('.immaginihover').find('#img-iran').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-iran').removeClass('visible');
});

$('#brexit').mousemove(function(e){
    $('.immaginihover').find('#img-brexit').addClass('visible');
    $('.immaginihover').find('#img-brexit').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-brexit').removeClass('visible');
});

$('#hkprotest').mousemove(function(e){
    $('.immaginihover').find('#img-hkprotest').addClass('visible');
    $('.immaginihover').find('#img-hkprotest').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-hkprotest').removeClass('visible');
});



$('#memetic').mousemove(function(e){
    $('.immaginihover').find('#img-memetic').addClass('visible');
    $('.immaginihover').find('#img-memetic').css({
        left:e.pageX, top:e.pageY,
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-memetic').removeClass('visible');
});   






//////////////////////////////////
/////////PROTOCOL/////////


$(document).ready(function() {
    console.log("Yaw, niggaz lookin amma console");
});  


$("#L1").click(function(){
    $("#Memes").toggleClass("filter");
    $("#L1").toggleClass("on");
});


$("#L2").click(function(){
    $("#xls").toggleClass("filter");
    $("#L2").toggleClass("on");
});

$("#L3").click(function(){
    $("#Target").toggleClass("filter");
    $("#L3").toggleClass("on");
});

$("#L4").click(function(){
    $("#Template").toggleClass("filter");
    $("#L4").toggleClass("on");
});

$("#L5").click(function(){
    $("#Technique").toggleClass("filter");
    $("#L5").toggleClass("on");
});

$("#L6").click(function(){
    $("#Reddit").toggleClass("filter");
    $("#L6").toggleClass("on");
});





//////////////////////////////////
/////////HOVER ABOUT/////////

$('#ant').mousemove(function(e){
    $('.immaginihover').find('#formica').addClass('visible');
    $('.immaginihover').find('#formica').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#formica').removeClass('visible');
});


$('#NewHampshire').mousemove(function(e){
    $('.immaginihover').find('#img-NewHampshire').addClass('visible');
    $('.immaginihover').find('#img-NewHampshire').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-NewHampshire').removeClass('visible');
});


$('#cheezburger').mousemove(function(e){
    $('.immaginihover').find('#img-cheezburger').addClass('visible');
    $('.immaginihover').find('#img-cheezburger').css({
        left:e.pageX, top:e.pageY
    });  
}).mouseleave(function(){
    $('.immaginihover').find('#img-cheezburger').removeClass('visible');
});









//back to
var backHome = $('pre[id^="backHome-"]').hide(),
    b = 0;
(function cycle() {
    backHome.eq(b).show(0)
        .delay(150)
        .hide(0, cycle);

    b = ++b % backHome.length;

})();



var backHK = $('pre[id^="backHK-"]').hide(),
    d = 0;
(function cycle() {
    backHK.eq(d).show(0)
        .delay(150)
        .hide(0, cycle);

    d = ++d % backHK.length;

})();


var backAbout = $('pre[id^="backAbout-"]').hide(),
    e = 0;
(function cycle() {
    backAbout.eq(e).show(0)
        .delay(150)
        .hide(0, cycle);

    e = ++e % backAbout.length;

})();

var backAss = $('pre[id^="backAss-"]').hide(),
    g = 0;
(function cycle() {
    backAss.eq(g).show(0)
        .delay(150)
        .hide(0, cycle);

    g = ++g % backAss.length;

})();


// artwork hk
var HK = $('pre[id^="HK-"]').hide(),
    c = 0;

(function cycle() {
    HK.eq(c).show(0)
        .delay(70)
        .hide(0, cycle);

    c = ++c % HK.length;

})();

//ANIMAZIONE CORNICE ASCII

var asciiSX = $('pre[id^="asciiSX"]').show(),
    a = 0;
var asciiDX = $('pre[id^="asciiDX"]').show(),
    a = 0;

(function cycle() { 

    asciiSX.eq(a).show(0)
        .delay(100)
        .hide(0, cycle);

    a = ++a % asciiSX.length;
})();

(function cycle() { 

    asciiDX.eq(a).show(0)
        .delay(100)
        .hide(0, cycle);

    a = ++a % asciiDX.length;
})();


////ANIMAZIONE ARTWORK PAGINA HK////
var HKmobile = $('pre[id^="HKmobile-"]').hide(),
    q = 0;

(function cycle() {
    HKmobile.eq(q).show(0)
        .delay(70)
        .hide(0, cycle);

    q = ++q % HKmobile.length;

})();



/*
document.querySelectorAll('.ascii').forEach(function(item){
    item.onmouseover = function () {
        var thisascii = this.id
        rigascii = String(document.getElementById(thisascii).dataset.id);
console.log(rigascii);
  //      var newArray = petsData.filter(function (el) {
      //      return el.propaganda === selProp;
    }   });

*/

/////////*ASCII FILTERZ*///////

var FILTERS = $('pre[id^="asciifilters-"]').hide(),
    k = 0;

(function cycle() {
    FILTERS.eq(k).show(0)
        .delay(180)
        .hide(0, cycle);

    k = ++k % FILTERS.length;

})();

/////////*ASCII CREDITS*///////

var CREDITS = $('pre[id^="asciicredits-"]').hide(),
    l = 0;

(function cycle() {
    CREDITS.eq(l).show(0)
        .delay(500)
        .hide(0, cycle);

    l = ++l % CREDITS.length;

})();

/////////*ASCII ABOUT FRECCE*///////

var arrowdownA = $('pre[id^="arrowdownA-"]').hide(),
    j = 0;
(function cycle() {
    arrowdownA.eq(j).show(0)
        .delay(100)
        .hide(0, cycle);

    j = ++j % arrowdownA.length;

})();


var arrowdownB = $('pre[id^="arrowdownB-"]').hide(),
    y = 0;
(function cycle() {
    arrowdownB.eq(y).show(0)
        .delay(100)
        .hide(0, cycle);

    y = ++y % arrowdownB.length;

})();

var arrowdownC = $('pre[id^="arrowdownC-"]').hide(),
    m = 0;
(function cycle() {
    arrowdownC.eq(m).show(0)
        .delay(100)
        .hide(0, cycle);

    m = ++m % arrowdownC.length;

})();

//////////////////ASCI CORNICE HOME //////////////////

var borderSX = $('pre[id^="borderSX-"]').hide(),
    o = 0;
(function cycle() {
    borderSX.eq(o).show(0)
        .delay(150)
        .hide(0, cycle);

    o = ++o % borderSX.length;

})();

var borderDX = $('pre[id^="borderDX-"]').hide(),
    z = 0;
(function cycle() {
    borderDX.eq(z).show(0)
        .delay(150)
        .hide(0, cycle);

    z = ++z % borderDX.length;

})();





///////////////////
// GRID TEMPLATE //
function memeTemplate(pet) {
    return `
<div class="animal" name="${pet.Num}">
<img class="pet-name" src="${pet.Photo}" data-name="${pet.Name}" id="${pet.Num}" data-image="${pet.Photo}" onclick="funzione()" data-target="${pet.Target}" data-propaganda="${pet.Propaganda}" data-spiegazione="${pet.Description}" data-link="${pet.Link}" data-template="${pet.Template}" data-collateral="${pet.Collateral_target}">
<p>${pet.Name}</p>
</div>
`
}



document.getElementById("app").innerHTML = `
${petsData.map(memeTemplate).join('')}
`



//////////////
// FILTERZ //
var selProp = "lucone";
var selTarg = "pamela";
var filtro1 = false;
var filtro2 = false;
var check1 = false;
var check2 = false;

////PROPAGANDA modifica valdosa
document.querySelectorAll('.filter__Tec').forEach(function(item){
    item.onclick = function (){
        var thisFilter = this.id;
        var radio = this;
        console.log("Click on props");
        selProp = String(document.getElementById(thisFilter).dataset.name);

        if (check1 == true && filtro2==true){   
            console.log("prop - disattivato targ - attivo");
            radio.checked= false;
            check1=false;
            filtro1=false;
            console.log("filtro1 cambiato in false");
            var newArray = petsData.filter(function (el) {
                return el.Target === selTarg})
            document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }
        else if (check1 == true && filtro2==false){
            console.log("prop - disattivato targ - spento");
            filtro1=false;
            console.log("filtro1 cambiato in false");
            radio.checked= false;
            check1=false;
            document.getElementById("app").innerHTML = `
${petsData.map(memeTemplate).join('')}
`     
        }
        else if (check1 == false && filtro2==true){
            filtro1=true;
            console.log("filtro1 cambiato in true");
            console.log("prop - attivato targ - attivo");
            radio.checked= true;
            check1=true;
            var newArray = petsData.filter(function (el) {
                return (el.Propaganda === selProp && el.Target === selTarg);
            });
            document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }



        else if (check1 == false && filtro2==false)
        {      
            console.log("prop - attivato targ - spento");    
            filtro1=true;
            console.log("filtro1 cambiato in true");
            radio.checked= true;
            check1=true;
            var newArray = petsData.filter(function (el) {
                return el.Propaganda === selProp
            })
            document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }
        console.log(filtro1);
        console.log(filtro2)
    }
    ;});


document.querySelectorAll('.filter__Tar').forEach(function(item){
    item.onclick = function (){
        var thisFilter = this.id;
        var radio = this;
        console.log("Click on target");
        console.log(radio.name);

        selTarg = String(document.getElementById(thisFilter).dataset.name);
        console.log(selProp);
        console.log(selTarg);

        if (check2 == true && filtro1==true){  
            console.log("prop - attivo targ - disattivato");
            radio.checked= false;
            filtro2=false;
            check2=false;
            var newArray = petsData.filter(function (el) {
                return el.Propaganda === selProp})
            document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }
        else if (check2 == true && filtro1==false){
            console.log("prop - spento targ - disattivato");
            radio.checked= false;
            filtro2=false;
            check2 =false
            document.getElementById("app").innerHTML = `
${petsData.map(memeTemplate).join('')}
`     
        }
        else if (check2 == false && filtro1==true){
            console.log("prop - attivo targ - attivato");

            radio.checked= true;
            filtro2=true;
            check2 = true
            var newArray = petsData.filter(function (el) {
                return (el.Propaganda === selProp && el.Target === selTarg);
            });
            document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }

        else if (check2 == false && filtro1==false)
        {           console.log("prop - spento targ - attivato"); 
         filtro2=true;
         radio.checked= true;
         check2 =true;
         var newArray = petsData.filter(function (el) {
             return el.Target === selTarg
         })
         document.getElementById("app").innerHTML = `
${newArray.map(memeTemplate).join('')}
` }       
    }  
});


////// MODALS ////////
//pronz

var i = document.getElementsByName("${pet.num}");

// Modal open and fill //
//var nome = document.getElementsByClassName("pet-name")[prova].getAttribute("data-name");

// Get the modal //
var modal = document.getElementById("myModal");

// Get the button that opens the modal //
var btn = document.getElementsByClassName("animal");


// Get the <span> element that closes the modal //
var span = document.getElementsByClassName("spegni")[0];


var prova;
var ribolla;
function theFunction(gigi)
{prova = gigi.target.id ;
 ribolla = String(prova);
 nome = document.getElementById(ribolla).getAttribute("data-name");
 immagine = document.getElementById(ribolla).getAttribute("data-image");
 propaganda = document.getElementById(ribolla).getAttribute("data-propaganda");
 target = document.getElementById(ribolla).getAttribute("data-target");
 spiegazione = document.getElementById(ribolla).getAttribute("data-spiegazione");
 template = document.getElementById(ribolla).getAttribute("data-template");
 collateral = document.getElementById(ribolla).getAttribute("data-collateral");
 collegamentos = document.getElementById(ribolla).getAttribute("data-link");
 document.getElementById("titolo").innerHTML = nome;
 document.getElementById("target").innerHTML = target;
 document.getElementById("spiegazione").innerHTML = spiegazione;
 document.getElementById("template").innerHTML = template;
 document.getElementById("collateral").innerHTML = collateral;
 console.log(gigi)
 console.log(gigi.target.id -1)


 var img = document.createElement("img");
 img.src = immagine;
 img.setAttribute('class', 'normale');
 var src = document.getElementById("immagine");
 src.appendChild(img);

 var paolino = document.createElement("a")
 paolino.href= collegamentos;
 paolino.textContent = propaganda;
 var spanProp= document.getElementById("propaganda");
 spanProp.appendChild(paolino);

}

function funzione() {
    modal.style.display = "block";
    theFunction(event);

    console.log(event)
}


// When the user clicks on the button, open the modal //
btn.onclick = function() {
    modal.style.display = "block";
    // console.log(nome);
}


// When the user clicks on <span> (x), close the modal //
span.onclick = function() {
    modal.style.display = "none";
    //codice per ripulire il modal dall'immagine
    var imgRemover = document.getElementById("immagine")
    imgRemover.removeChild(imgRemover.childNodes[0]);

    var aRemover = document.getElementById("propaganda")
    aRemover.removeChild(aRemover.childNodes[0]);
    //FINE codice per ripulire il modal dall'immagine

}

// When the user clicks anywhere outside of the modal, close it //

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        var imgRemover = document.getElementById("immagine")
        imgRemover.removeChild(imgRemover.childNodes[0]);

        var aRemover = document.getElementById("propaganda")
        aRemover.removeChild(aRemover.childNodes[0]);
    }});


//---------------------//
// Draggable //
$(function() {
    $("#myModal").draggable();
});


///////////////////////////////////
////////MOUSE OVER SU HK///////////

function movimento(e) {
    var sinistra = e.pageX;
    var destra = e.pageY;
    document.getElementById("demo").style.top = destra + 10 + "px";
    document.getElementById("demo").style.left = sinistra + 10 + "px";
    document.getElementById("demo").style.display = "block";
} 

function sparisci() {
    document.getElementById("demo").style.display = "none";
} 


////////////////SIDEBAR///////////////
function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


////////////////MARQUEE///////////////
$('#maindiv').width($('#div1').width());
$('#maindiv2').width($('#div2').width());


/*
function fillMarqueeHK () {
    document.getElementById("marqueeBox").innerHTML = 'HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST HONG KONG ANTI ELAB PROTEST';
    document.getElementById("marqueeBox").style.color="red";

    var elementHK = document.getElementById("stickGatto");
}


function fillMarqueeBR () {
    document.getElementById("marqueeBox").innerHTML = 'BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT BREXIT';
    document.getElementById("marqueeBox").style.color="fuchsia";

    var elementBR = document.getElementById("stickBrex");
} 


function fillMarqueeWW3 () {
    document.getElementById("marqueeBox").innerHTML = 'WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III WORLD WAR III';
    document.getElementById("marqueeBox").style.color="blue";

    var elementWW3 = document.getElementById("stickWar");
}


function emptyMarquee () {
    document.getElementById("marqueeBox").innerHTML = 'PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE PICK AN ISSUE';
    document.getElementById("marqueeBox").style.color="black";

}

*/


//////////////////////////////////
/////////MODAL ABOUT/////////

$(function() {
    $("#modal-reddit").draggable();
});

$(function() {
    $("#modal-kym").draggable();
});


//////////////////////////////////
/////////BUTTON SHOW FILTERZ/////////
function showFilterz() {
  var x = document.getElementById("gruppofiltro");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



