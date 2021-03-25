Given:
1.An array of sports sports, which consists of [Sports Icon, Sports Name];
2.An array of Olympic winners in each sport winners, which consists of [Sport Name, Medal Won, Country];
3.Array of rings from the Olympic emblem olympic, which consists of [Olympic Ring Icon];
4.Array of medals medals, which consists of [Medal Icon, Medal Name];
5.Array of countries and continents continents, which consists of [Country name, Content name];

const sports = [
['1F93A', 'fencing'],
['26F8', 'figure skating'],
['26F7', 'skier'],
['1F3C2', 'snowboarder'],
['1F3CC', 'golfing'],
['1F6A3', 'rowing boat'],
['1F3CA', 'swimming'],
['1F938', 'gymnastics'],
['1F93E', 'handball']
];

const winners = [
['fencing', 'gold', 'fr'],
['fencing', 'silver', 'it'],
['fencing', 'bronze', 'us'],


['figure skating', 'gold', 'ca'],
['figure skating', 'silver', 'ru'],
['figure skating', 'bronze', 'us'],


['skier', 'gold', 'no'],
['skier', 'silver', 'ru'],
['skier', 'bronze', 'fr'],


['snowboarder', 'gold', 'us'],
['snowboarder', 'silver', 'jp'],
['snowboarder', 'bronze', 'au'],


['golfing', 'gold', 'gb'],
['golfing', 'silver', 'se'],
['golfing', 'bronze', 'us'],


['rowing boat', 'gold', 'us'],
['rowing boat', 'silver', 'gb'],
['rowing boat', 'bronze', 'ro'],


['swimming', 'gold', 'us'],
['swimming', 'silver', 'gb'],
['swimming', 'bronze', 'au'],


['gymnastics', 'gold', 'ru'],
['gymnastics', 'silver', 'ru'],
['gymnastics', 'bronze', 'ua'],


['handball', 'gold', 'dk'],
['handball', 'silver', 'fr'],
['handball', 'bronze', 'de'],
];

const olympic = ['1F535', '26AB', '1F534', '1F7E1', '1F7E2'];

const medals = [
['1F947', 'gold'],
['1F948', 'silver'],
['1F949', 'bronze'],
];

const continents = [
['fr', 'Europe'],
['it', 'Europe'],
['us', 'The Americas'],
['ca', 'The Americas'],
['ru', 'Europe'],
['no', 'Europe'],
['jp', 'Asia'],
['au', 'Oceania'],
['gb', 'Europe'],
['se', 'Europe'],
['ro', 'Europe'],
['ua', 'Europe'],
['dk', 'Europe'],
['de', 'Europe']
];

It is necessary to display a table of Olympic winners according to the sport and continent of the team. 