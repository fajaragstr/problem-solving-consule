// -> Release 1: convertItems <-

function convertItems(items) {
  let splitArr = [];
  for (let i = 0; i < items.length; i++) {
    str = items[i];
    if (str.includes("|")) {
      splitArr[i] = str.split("|");
    } else {
      splitArr[i] = str.toString().split();
    }
  }
  return splitArr;
}

// -> Release 2: filterItems<-
function filterItems(items) {
  //2.1 Narik data dari function convertItems, sign ke variabel items
  items = convertItems(items);
  console.log(items, "<<<<<<<<<<<<");

  let filterItemsArr = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].length < 3) {
      continue;
    }
    filterItemsArr.push(items[i]);
  }

  //2.3 Konversi Index-1 (harga) ke Integer
  for (let i in filterItemsArr) {
    filterItemsArr[i][1] = +filterItemsArr[i][1];
  }

  return filterItemsArr;
}

// -> Release 3: generateSpareParts <-
function generateSpareParts(items) {
  //3.1 Narik Data dari function filterItems
  items = filterItems(items);

  //3.2 Create Object dengan key name, price, category
  let sparepartsObj = items.map((val) => {
    return { name: val[0], price: val[1], category: val[2] };
  });

  return sparepartsObj;
}

// -> Release 4: itemsStatistics <-
function itemsStatistics(items) {
  items = filterItems(items); //4.1 Narik Data dari function filterItems

  let categoryData = [];

  //4.2 Nampung nilai index ke-2 (category) punya array yang sudah di filter
  for (let i = 0; i < items.length; i++) {
    categoryData[i] = items[i][2];
  }

  //4.3 Array nampung jenis dari category (['variantion', 'bodyParts', 'electricity'])
  let variant = categoryData.filter((val, index) => {
    return categoryData.indexOf(val) === index;
  });

  /*
    4.4 jenis category (variantion, bodyParts, electricity)
        dijadikan key untuk objek */
  let itemStatics = {};
  var sum = 0;
  for (let i = 0; i < variant.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (variant[i] == items[j][2]) {
        sum += 1;
      }
    }
    itemStatics[variant[i]] = sum;
    sum = 0;
  }

  return itemStatics;
}

// -> Release 5 <-
function generateItemsData(items) {
  //5.1 Buat objek dengan key spare_parts dan statistic
  let statisticFinal = {
    spare_parts: generateSpareParts(items), // 1. generateSpareParts(items)
    statistics: itemsStatistics(items), // 2. itemsStatistics(items)
  };

  return statisticFinal;
}

const items = [
  "Spakbor Gordon|150000|variation",
  "Head Lamp",
  "USD KX150|8500000|bodyParts",
  "Handle Expedition|275000|variation",
  "Karet Body",
  "Body set KTM|1899950|bodyParts",
  "Jok Gordon|250000|variation",
  "Behel Bodyset Gordon",
  "CDI BRT KLX|625000|electricity",
  "Cover jok KLX|185000|variation",
];

const items2 = [
  "KAYABA OS|177380|bodyParts",
  "KAYABA OC|205800|bodyParts",
  "Boba black",
  "Cover full tank|159000|variation",
  "Aki GS ASTRA MF|196000|electricity",
  "Fabio black",
  "Porte sling",
];

console.log("-----Release 1-------");
console.log(convertItems(items));
console.log(convertItems(items2));
console.log("-----Release 2-------");
console.log(filterItems(items));
console.log(filterItems(items2));
console.log("-----Release 3-------");
console.log(generateSpareParts(items));
console.log(generateSpareParts(items2));
console.log("-----Release 4-------");
console.log(itemsStatistics(items));
console.log(itemsStatistics(items2));
console.log("-----Release 5-------");
console.log(generateItemsData(items));
console.log(generateItemsData(items2));

module.exports = {
  convertItems,
  filterItems,
  generateSpareParts,
  itemsStatistics,
  generateItemsData,
};
