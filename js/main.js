'use strict';

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    switch(target.textContent){
      case "nami":
        document.getElementById("onepiece").src="images/nami.png";
        break;
      case "luffy":
        document.getElementById("onepiece").src="images/luffy.png";
        break;
      case "brook":
        document.getElementById("onepiece").src="images/brook.png";
        break;
      case "buggy":
        document.getElementById("onepiece").src="images/buggy.png";
        break;
      case "chopper":
        document.getElementById("onepiece").src="images/chopper.png";
        break;
      case "enel":
        document.getElementById("onepiece").src="images/enel.png";
        break;
      case "crocodile":
        document.getElementById("onepiece").src="images/crocodile.png";
        break;
      case "doflamingo":
        document.getElementById("onepiece").src="images/doflamingo.png";
        break;
      case "franky":
        document.getElementById("onepiece").src="images/franky.png";
        break;
      case "jinbe":
        document.getElementById("onepiece").src="images/jinbe.png";
        break;
      case "kurohige":
        document.getElementById("onepiece").src="images/kurohige.png";
        break;
      case "linlin & kaido":
        document.getElementById("onepiece").src="images/linlin_kaido.png";
        break;
      case "lucci":
        document.getElementById("onepiece").src="images/lucci.png";
        break;
      case "moria":
        document.getElementById("onepiece").src="images/moria.png";
        break;
      case "robin":
        document.getElementById("onepiece").src="images/robin.png";
        break;
      case "sanji":
        document.getElementById("onepiece").src="images/sanji.png";
        break;
      case "usopp or sogeking":
        document.getElementById("onepiece").src="images/usopp_sogeking.png";
        break;
      case "zoro":
        document.getElementById("onepiece").src="images/zoro.png";
        break;
        
      default:
        console.log("ワンピース！！");
    }
    loc = 0;
  }

  const words = [
    "nami",
    "luffy",
    "brook",
    "buggy",
    "chopper",
    "crocodile",
    "doflamingo",
    "enel",
    "franky",
    "jinbe",
    "kurohige",
    "linlin & kaido",
    "lucci",
    "moria",
    "robin",
    "sanji",
    "usopp or sogeking",
    "zoro",
  ];

  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');

  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }

    isPlaying = true;
    document.getElementById("boss").style.display = "none";
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }

    loc++;

    // 1: _ed
    // 2: __d
    // 3: ___
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        return;
      }

      setWord();
    }
  });
}