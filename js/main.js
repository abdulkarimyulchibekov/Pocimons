var elSelect = document.querySelector('.js-select');
const set = new Set();
for (mb of data) {
  for (i = 0; i < 6; i ++) {
    set.add(mb.weaknesses[i]);  
  }
  set.delete(undefined);
}
console.log(set);

for (element of set) {
  const elOption = document.createElement("option");
  elOption.textContent = element;
  elOption.value = element;
  elSelect.appendChild(elOption);
}

var elList = document.querySelector('.js-list');

function domgaChiqarator(array, node) {
  for (byte of array) {
    var elLi = document.createElement('li');
  
    var elP = document.createElement('p');
    var elImg = document.createElement('img');
    var elEgg = document.createElement('p');
    var elName = document.createElement('h1');
    var elHeight = document.createElement('p');
    var elWeight = document.createElement('p');
    var elSpawn = document.createElement('p');
    var elSpawnChance = document.createElement('p');
    var elChance = byte.spawn_chance;
    var elCandy = document.createElement('p');
    var elCandyCount = document.createElement('p');
  
    elEgg.textContent = `tuxumi: ${byte.egg}`;
    elImg.src = byte.img;
    elName.textContent = `ismi: ${byte.name}`;
    elP.textContent = `tartib raqami: ${byte.num}`;
    elHeight.textContent = `Bo'yi: ${byte.height}`;
    elWeight.textContent = `Og'irligi: ${byte.weight}`;
    elSpawn.textContent = `Tug'ulish vaqti: ${byte.spawn_time}`;
    elSpawnChance.textContent = `Tug'ulish imkoniyati: ${elChance}`;
    elCandy.textContent = `Shirinligi: ${byte.candy}`;
    elCandyCount.textContent = `Shirinlik soni: ${byte.candy_count}`;
  
    elLi.appendChild(elImg);
    elLi.appendChild(elP);
    elLi.appendChild(elName);
    elLi.appendChild(elEgg);
    elLi.appendChild(elHeight);
    elLi.appendChild(elWeight);
    elLi.appendChild(elSpawn);
    elLi.appendChild(elSpawnChance);
    elLi.appendChild(elCandy);
    elLi.appendChild(elCandyCount);
    node.appendChild(elLi);
  }
}

domgaChiqarator(data, elList)

let result = [];

elSelect.addEventListener('change', function () {
	let selVal = elSelect.value;
	result = [];
	elList.innerHTML = '';
	data.forEach((poc) => {
		if (poc.type.includes(selVal)) {
			result.push(poc);
		}
	});
	domgaChiqarator(result, elList)
});

