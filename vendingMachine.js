let userMoney = 0;
const coin = 100;

const moneyEl = document.getElementById("moneyDisplay");
const insertBtn = document.getElementById("insertButton");
const returnBtn = document.getElementById("returnButton");
const messageEl = document.getElementById("message");
const returnBox = document.querySelector(".returnBox");

function updateDisplay() {
    if (moneyEl) moneyEl.textContent = "¥" + userMoney;
}

function showMessage(msg) {
    if (!messageEl) return;
    messageEl.textContent = msg;
    setTimeout(() => {
        messageEl.textContent = "";
    }, 2000);
}

if (insertBtn) {
    insertBtn.addEventListener("click", () => {
        userMoney += coin;
        updateDisplay();
        showMessage(`${coin}円を入れました。`);
    });
}

if (returnBtn) {
    returnBtn.addEventListener("click", () => {
        if (userMoney > 0) {
            showMessage(`${userMoney}円を返却しました。`);
            userMoney = 0;
            updateDisplay();
        } else {
            showMessage("お金が入っていません。");
        }
    });
}

updateDisplay();

(function renderDrinkList2() {
    const container = document.querySelector('.drink-list2');
    if (!container) return;

    const drinksRow2 = [
        { name: 'コーラ', price: 120, img: 'img/cola.svg' },
        { name: 'コーラ', price: 120, img: 'img/cola.svg' },
        { name: 'コーラ', price: 120, img: 'img/cola.svg' },
        { name: 'コーラ', price: 120, img: 'img/cola.svg' },
        { name: 'コーラ', price: 120, img: 'img/cola.svg' }
    ];

    // TODOオブジェクト２行目以降ループ処理

    container.innerHTML = '';

    drinksRow2.forEach((drink, index) => {
        const item = document.createElement('div');
        item.className = 'drinkItem';

        const drinkBox = document.createElement('div');
        drinkBox.className = 'drink';
        const img = document.createElement('img');
        img.src = drink.img;
        img.alt = drink.name;
        img.width = 60;
        drinkBox.appendChild(img);
        item.appendChild(drinkBox);

        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = `¥${drink.price}`;
        item.appendChild(price);

        const btn = document.createElement('button');
        btn.className = 'drinkButton';
        const icon = document.createElement('img');
        icon.src = 'img/normal.png';
        icon.alt = '購入ボタン';
        icon.width = 30;
        btn.appendChild(icon);

        btn.addEventListener('click', () => {
            if (typeof userMoney !== 'number') userMoney = Number(userMoney) || 0;
            if (userMoney >= drink.price) {
                userMoney -= drink.price;
                updateDisplay();
                showMessage(`${drink.name} を購入しました。`);
                if (returnBox) {
                    returnBox.innerHTML = '';
                    const thumbnail = img.cloneNode(true);
                    thumbnail.className = 'returnBox-img';
                    thumbnail.width = 60;
                    returnBox.appendChild(thumbnail);
                }
            } else {
                showMessage(`あと¥${drink.price - userMoney}が必要です。`);
            }
        });

        item.appendChild(btn);
        container.appendChild(item);

    });
})();