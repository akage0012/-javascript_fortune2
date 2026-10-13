// JavaScript

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();

    console.log(randomNumber); // ランダムな数字をコンソールに表示する（確認用）

    // 既存のクラスを削除
    resultDisplay.className = '';
    document.body.className = '';

     // 画像要素を取得
    const resultImage = document.getElementById('resultImage');
    resultImage.style.display = 'none';
    resultImage.src = '';

    // 0.3 未満だったら
    if (randomNumber < 0.3) {
        resultDisplay.textContent = '大吉';
        document.body.classList.add('daikichi');
        resultImage.src = 'images/daikichi.jpeg';
        resultImage.alt = '大吉の画像';
        resultImage.style.display = 'block';

    // 0.8 未満だったら
    } else if (randomNumber < 0.8) {
        resultDisplay.textContent = '中吉';
        document.body.classList.add('chukichi');
        resultImage.src = "images/chukichi.jpeg";
        resultImage.alt = '中吉の画像';
        resultImage.style.display = 'block';
 
  

    // どちらでもない場合
    } else {
        resultDisplay.textContent = '小吉';
        document.body.classList.add('kichi');
     resultImage.src = "images/syoukichi.png";
        resultImage.alt = '小吉の画像';
        resultImage.style.display = 'block';
    }
    

});
