// ここからJavaScriptを書いていきます
// まずは「表示する」「押すと何か起きる」などを学べるようにしていきます
console.log("自動販売機ページを読み込みました！");

const drinks = document.querySelectorAll(".drink");

// 簡単なforループで、飲み物が押されたときにメッセージを表示するようにします
for (let i = 0; i < drinks.length; i++) {
    drinks[i].addEventListener("click", function () {
        console.log(drinks[i].alt + " がクリックされました！");
    });
}

for (let i = 0; i < drinks.length; i++) {
    const drink = drinks[i];

    // ラッパーを作る
    const wrapper = document.createElement('div');
    wrapper.className = 'drink-item';

    // drink の前に wrapper を挿入してから drink を移動
    drink.parentNode.insertBefore(wrapper, drink);
    wrapper.appendChild(drink);

    // 価格表示
    const priceElement = document.createElement('div');
    priceElement.className = 'price';
    priceElement.textContent = drink.dataset.price;
    wrapper.appendChild(priceElement);

    // ボタンを作って wrapper に追加
    const button = document.createElement('button');
    button.textContent = '購入';
    button.className = 'drink-btn';
    wrapper.appendChild(button);
}
