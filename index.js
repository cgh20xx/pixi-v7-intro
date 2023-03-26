// 新增 Pixi 應用和舞台
// PIXI.Application 文件：http://pixijs.download/release/docs/PIXI.Application.html
// 注意：transparent 已棄用，改為 backgroundAlpha
let app = new PIXI.Application({
  hello: true,
  width: 256, // default: 800
  height: 256, // default: 600
  antialias: true, // default: false
  background: 0x6699ff, // default: 0x000000
  // transparent: false, // default: false
  backgroundAlpha: 1,
  resolution: 1, // default: 1
});

console.log(app);

// app.view 會產生一個 canvas，你可以放到任何地方。
document.body.appendChild(app.view);
