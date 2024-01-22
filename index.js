/* 1 */
const p = document.createElement("p");
p.innerText = "Go to the moon";

const bucketList = document.querySelector('.list');
bucketList.appendChild(p);

/* 2 */
const p2 = document.createElement("p");
p2.innerText = "Swim with dolphins";
bucketList.insertAdjacentElement("beforeend", p2);
// bucketList.insertAdjacentElement("afterbegin", p2);
// bucketList.insertAdjacentElement("beforebegin", p2);
// bucketList.insertAdjacentElement("afterend", p2);

/* 3 */
console.log(bucketList.innerHTML);

/* 4 */
const html = "<p>Bareback horse riding</p>";

/* 5 */
// bucketList.innerHTML = html;

/* 6 */
bucketList.insertAdjacentHTML("afterbegin", html);

/* 7 */
const arr = [
    "Build my own house",
    "See the grand canyon",
    "See the great five"
];

arr.forEach(function (item, index) {
    const p = `<p>${item}</p>`;
    bucketList.insertAdjacentHTML("beforeend", p);
});

/* 8 */
console.log(bucketList.children.length);

/* 9 */
const owner = document.querySelector(".owner");
owner.innerText = "Görans";

/* 10 */
const firstItem = bucketList.querySelector('p');

const newItem = document.createElement("p");
newItem.innerText = "Sailing around the world";

bucketList.replaceChild(newItem, firstItem);

/* 11 */
const newestItem = document.createElement('p');
newestItem.innerText = "See elephants in Thailand";

// Get index of a 'p' in the middle
const index = Math.floor(bucketList.children.length / 2);
// console.log(index);

const oldItem = bucketList.children[index];
// console.log(oldItem);
bucketList.replaceChild(newestItem, oldItem);

/* 12 */
const removeItem = bucketList.lastElementChild;
bucketList.removeChild(removeItem);
