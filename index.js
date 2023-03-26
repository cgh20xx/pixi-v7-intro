// 新增 Pixi 應用和舞台
// PIXI.Application 文件：http://pixijs.download/release/docs/PIXI.Application.html
// 注意：transparent 已棄用，改為 backgroundAlpha
const app = new PIXI.Application({
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

// 新橧一個精靈到舞台中
// let cat = PIXI.Sprite.from('images/cat.png');
// app.stage.addChild(cat);

// PIXI.Sprite.from 是 Pixi 提供簡易建立精靈的工廠方法，會自動建立了一個 texture 紋裡到 cache 中，檢查如下：
// console.log(PIXI.utils.TextureCache);

// 使用 PIXI.Texture.from 和 new PIXI.Sprite 的方式新增一個精靈
// const texture = PIXI.Texture.from('images/cat.png');
// let cat2 = new PIXI.Sprite(texture);
// cat2.x = 100; // 改變精靈的 x 座標
// app.stage.addChild(cat2);

// 使用 PIXI.Assets.add 新增預載的多張圖片 http://pixijs.download/release/docs/PIXI.Assets.html#add
PIXI.Assets.add('cat', 'images/cat.png');
PIXI.Assets.add('blob', 'images/blob.png');
PIXI.Assets.add('door', 'images/door.png');

function onProgress(progress) {
  console.log(`已載入 ${progress * 100}%`);
}

// 使用 PIXI.Assets.load 載入指定圖片並返回 Promise http://pixijs.download/release/docs/PIXI.Assets.html#load
const texturesPromise = PIXI.Assets.load(['cat', 'blob', 'door'], onProgress);
texturesPromise.then((texture) => {
  console.log('所有圖片載入完成');
  // console.log(texture);
  // console.log(
  //   'texture.cat === PIXI.utils.TextureCache.cat ?',
  //   texture.cat === PIXI.utils.TextureCache.cat
  // );
  const cat = new PIXI.Sprite(texture.cat);
  // 改變 Sprite x y 座標的三種方式
  cat.x = 0;
  cat.y = 0;
  // 為精靈同時改變相同 x y 座標
  cat.position.set(50);
  // 為精靈同時改變不同 x y 座標
  cat.position.set(50, 100);

  app.stage.addChild(cat);
});
