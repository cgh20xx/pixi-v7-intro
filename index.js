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

  // 讓我們把 Sprite 移到畫面中央並回復正常大小再繼續。
  cat.x = app.screen.width / 2;
  cat.y = app.screen.height / 2;

  // 改變 Sprite 錨點位置 (移到圖片長和寬的一半)
  cat.anchor.set(0.5);

  // 改變 Sprite 縮放比例
  cat.scale.set(1);
  // 注意：若直接改變 width height 會連動 scale 也被改變！

  // 改變 Sprite.rotation 的旋轉角度 (使用的是弧度不是角度)
  cat.rotation = Math.PI; // 旋轉 180 度 (一圈是 2 pi)

  // 沒那麼糟！PIXI 有提供角度轉弧度的常數 http://pixijs.download/release/docs/PIXI.html#RAD_TO_DEG
  // cat.rotation = 180 * PIXI.DEG_TO_RAD;

  app.stage.addChild(cat);

  // 使用 app.ticker 讓畫面動起來！
  // app.ticker.maxFPS = 60; // 不建議這麼做
  app.ticker.add((delta) => {
    cat.rotation += 0.01 * delta; // 現在不同螢幕更新率的裝置，轉起來的速度也都一樣了！
  });

  // 新增 interactive 互動事件
  // cat.interactive = true; // 但 interactive 在 v7.2 已棄用

  //  eventMode: http://pixijs.download/release/docs/PIXI.DisplayObject.html#eventMode
  // cat.eventMode = 'static'; // 同 interactive = true;
  // cat.eventMode = 'auto'; // 同 interactive = false;

  // 新增滑鼠指標圖示
  // cat.cursor = 'pointer';

  // cat.on('click', (event) => {
  //   console.log('hello');
  //   // 更新紋理
  //   cat.texture = texture.blob;
  // });

  // 舞台偵聽事件的方法，需設置 hitArea
  app.stage.eventMode = 'static';
  app.stage.hitArea = app.screen; // app.screen 就是 PIXI.Rectangle
  // 推薦！pointertap 相容滑鼠及觸摸事件
  app.stage.on('pointertap', (event) => {
    console.log('stage', event.global);
    cat.position.set(event.global.x, event.global.y);
  });
});
