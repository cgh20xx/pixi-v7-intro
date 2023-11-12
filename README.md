# PixiJS V7 學習筆記

## 本專案學習方式
跟著 [commits](https://github.com/cgh20xx/pixi-v7-intro/commits/main) 第一筆紀錄開始，一步一步學習。
- ([a81ac27](https://github.com/cgh20xx/pixi-v7-intro/commit/a81ac27ebf309693a9f854458f4de7228771970d)) feat: 移動 container 所有 children 會一起移動，並取得 global position。 
- ([e999d8c](https://github.com/cgh20xx/pixi-v7-intro/commit/e999d8ca4d6802f11c3ffe8dd85cdea6c2125d1e)) feat: 新增一個 Container 容器，故名思義就是可以裝東西用的。 
- ([df17542](https://github.com/cgh20xx/pixi-v7-intro/commit/df1754226a8486e3ccab9608c42f97eab807383b)) feat: 重新安排畫面 左上放一隻 cat 和 blog 沒有額外設定，等一下要講 container 
- ([37ebf7c](https://github.com/cgh20xx/pixi-v7-intro/commit/37ebf7c4bc1a298a0b6cb271516d7a0490ef6d98)) fix: 補上 gsap cdn 
- ([6f7038f](https://github.com/cgh20xx/pixi-v7-intro/commit/6f7038f8a0c06714003c93c0f69b4f7e359bf08a)) feat: 太單調了！來使用 gsap 實現補間動畫 
- ([2e1c8ed](https://github.com/cgh20xx/pixi-v7-intro/commit/2e1c8ed687efbe2bdda4960f914edf243f534cbc)) feat: hitArea 可直接設定 app.screen 因為就是 PIXI.Rectangle 
- ([f232e77](https://github.com/cgh20xx/pixi-v7-intro/commit/f232e7772828652970492931306d08bad59d9af4)) feat: 新增 README 
- ([6d2bec4](https://github.com/cgh20xx/pixi-v7-intro/commit/6d2bec48e1559bfe2e34a2487e2a4b3bf4003176)) feat: 舞台偵聽事件的方法，需設置 hitArea，新增點擊舞台改變 cat 位置。 
- ([7f82d15](https://github.com/cgh20xx/pixi-v7-intro/commit/7f82d153b273a9368a76c1587e1d2d65175aed53)) feat:  新增滑鼠指標圖示，且點擊更換紋理 
- ([eaf023b](https://github.com/cgh20xx/pixi-v7-intro/commit/eaf023b9e557ab2d2a8921371112b13421c963da)) feat: 新增 interactive 互動事件 
- ([dca446f](https://github.com/cgh20xx/pixi-v7-intro/commit/dca446fb7150b2ceb27f5e6fe4ccd4e34637a4d0)) feat: 現在不同螢幕更新率的裝置，轉起來的速度也都一樣了！ 
- ([eb08479](https://github.com/cgh20xx/pixi-v7-intro/commit/eb08479116b349c1c5e0b149f103f6a25f3166f4)) feat: 看起來不同裝置螢幕更新率問題好像解決了 
- ([7d91d47](https://github.com/cgh20xx/pixi-v7-intro/commit/7d91d475e10cb5f5230693c72d340440213053a1)) feat: 使用 app.ticker 讓畫面動起來！ 
- ([dc87916](https://github.com/cgh20xx/pixi-v7-intro/commit/dc87916f471de374c766ee00025b1b73021e3a87)) fix: 修改 app.view 為 app.screen 
- ([3e8db82](https://github.com/cgh20xx/pixi-v7-intro/commit/3e8db82932ce0e016fcda42cead97efb0cf8e901)) feat: 改變 Sprite.rotation 的旋轉角度 (使用的是弧度不是角度) 
- ([530bc96](https://github.com/cgh20xx/pixi-v7-intro/commit/530bc968d47b3dfedfdf1565139ab54d00a0a5c7)) feat: 改變 Sprite 錨點位置和縮放比例 
- ([d706c61](https://github.com/cgh20xx/pixi-v7-intro/commit/d706c6115d26893d07bf52e6e255c2ce95f37761)) feat: 改變 Sprite x y 座標的三種方式 
- ([0078cd6](https://github.com/cgh20xx/pixi-v7-intro/commit/0078cd6a51e195752347bda7c11b79d84f78e54c)) feat: 新增資源載入進度，並新增多個 Sprite 到舞台中 
- ([72b507e](https://github.com/cgh20xx/pixi-v7-intro/commit/72b507e9861baef20ebe72fa8f19a20bbcea3ff2)) feat: 推薦！載入多張圖片的方式 
- ([c4af67e](https://github.com/cgh20xx/pixi-v7-intro/commit/c4af67e33b81bbbbdaccc28ca8e00765de109821)) feat: 使用 Texture.from 和 new Sprite 的方式新增一個精靈 
- ([656da2f](https://github.com/cgh20xx/pixi-v7-intro/commit/656da2f565ac5ea581940a45929d96c877635f3f)) feat: 新橧一個精靈到舞台中 
- ([a17b64c](https://github.com/cgh20xx/pixi-v7-intro/commit/a17b64c9c4fcecc23f1ba2bfd40e938f9fd17cd3)) feat: 新增 Pixi 應用和舞台 
- ([6129582](https://github.com/cgh20xx/pixi-v7-intro/commit/6129582efd0aad26eb5fd8ca4f68e3106225ec2e)) feat: 新增 pixi.js lib 

## 產生上方 commits 列表語法： 
```
$ git log --format="- ([%h](https://github.com/cgh20xx/pixi-v7-intro/commit/%H)) %s "
```

## 官方 v7 Migration Guide
https://github.com/pixijs/pixijs/wiki/v7-Migration-Guide
