// ここからJavaScriptを書いていきます
// まずは「表示する」「押すと何か起きる」などを学べるようにしていきます
console.log("自動販売機ページを読み込みました！");

const drinks = document.querySelectorAll(".drink");

// 簡単なforループで、飲み物が押されたときにメッセージを表示するようにします
for (let i = 0; i < drinks.length; i++) {
    drinks[i].addEventListener("click", function() {
        console.log(drinks[i].alt + " がクリックされました！");
    });
}
