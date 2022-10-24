let choices = [];

// 3-star choices
choices[3] = [
	"Dull Blade",
];

// 4-star choices
choices[4] = [
	"Amber",
	"Barbara",
	"Beidou",
	"Bennett",
	"Chongyun",
	"Collei",
	"Diona",
	"Dori",
	"Fischl",
	"Gorou",
	"Kaeya",
	"Kujou Sara",
	"Kuki Shinobu",
	"Lisa",
	"Ningguang",
	"Noelle",
	"Razor",
	"Rosaria",
	"Sayu",
	"Shikanoin Heizou",
	"Sucrose",
	"Thoma",
	"Xiangling",
	"Xingqiu",
	"Xinyan",
	"Yanfei",
	"Yun Jin",
];

// 5-star choices
choices[5] = [
	"Albedo",
	"Aloy",
	"Arataki Itto",
	"Cyno",
	"Diluc",
	"Eula",
	"Ganyu",
	"Hu_Tao",
	"Jean",
	"Kaedehara Kazuha",
	"Kamisato Ayaka",
	"Kamisato Ayato",
	"Keqing",
	"Klee",
	"Mona",
	"Nilou",
	"Qiqi",
	"Raiden Shogun",
	"Sangonomiya Kokomi",
	"Shenhe",
	"Tartaglia",
	"Tighnari",
	"Lumine",
	"Aether",
	"Venti",
	"Xiao",
	"Yae Miko",
	"Yelan", 
	"Yoimiya",
	"Zhongli",
];

function elementDictionary(character) {
	let characters = {
		"Albedo": "Geo",
		"Aloy": "Cryo",
		"Amber": "Pyro",
		"Arataki Itto": "Geo",
		"Barbara": "Hydro",
		"Beidou": "Electro",
		"Bennett": "Pyro",
		"Chongyun": "Cryo",
		"Diluc": "Pyro",
		"Diona": "Cryo",
		"Eula": "Cryo",
		"Fischl": "Electro",
		"Ganyu": "Cryo",
		"Gorou": "Geo",
		"Hu Tao": "Pyro",
		"Jean": "Anemo",
		"Kaedehara Kazuha": "Anemo",
		"Kaeya": "Cryo",
		"Kamisato Ayaka": "Cryo",
		"Kamisato Ayato": "Hydro",
		"Keqing": "Electro",
		"Klee": "Pyro",
		"Kujou Sara": "Electro",
		"Kuki Shinobu": "Electro",
		"Lisa": "Electro",
		"Mona": "Hydro",
		"Ningguang": "Geo",
		"Noelle": "Geo",
		"Qiqi": "Cryo",
		"Raiden Shogun": "Electro",
		"Razor": "Electro",
		"Rosaria": "Cryo",
		"Sangonomiya Kokomi": "Hydro",
		"Sayu": "Anemo",
		"Shenhe": "Cryo",
		"Shikanoin Heizou": "Anemo",
		"Sucrose": "Anemo",
		"Tartaglia": "Hydro",
		"Thoma": "Pyro",
		"Lumine": "Anemo",
		"Aether": "Geo",
		"Venti": "Anemo",
		"Xiangling": "Pyro",
		"Xiao": "Anemo",
		"Xingqiu": "Hydro",
		"Xinyan": "Pyro",
		"Yae Miko": "Electro",
		"Yanfei": "Pyro",
		"Yelan": "Hydro",
		"Yoimiya": "Pyro",
		"Yun Jin": "Geo",
		"Zhongli": "Geo",
		"Dull Blade": "LUL",
	};

	return characters[character];
}


function getDullBlades() {
	let choices = [
		"Mjolnir",
		"qtip",
		"toothbrush",
		"chainsaw",
		"electricfan",
		"wreckedcar"
	];
	let choice = Math.floor(Math.random() * (choices.length));
	return choices[choice];
}