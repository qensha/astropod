---
const SRC = "https://archive.org/embed/15-800.-7z?playlist=1";
---

<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>经典粤语老歌 800 首</title>
    <style>
      :root { --maxw: 1100px; }
      html,body { margin:0; padding:0; background:#fafafa; color:#111; }
      body {
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans",
          "PingFang SC","Hiragino Sans GB","Microsoft YaHei", sans-serif;
        line-height:1.55; padding:16px;
        font-size: clamp(15px, 3.8vw, 18px);
      }
      h1 { margin: 0 0 12px; text-align:center; font-size: clamp(20px, 5.5vw, 28px); }
      .wrap { max-width: var(--maxw); margin:0 auto; }
      iframe {
        display:block; width:100%;
        height: clamp(640px, 100vh - 140px, 980px); /* 够高才能显示曲目列表 */
        border:0; overflow:auto;
      }
      .hint { text-align:center; color:#666; margin-top:8px; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <h1>经典粤语老歌 800 首</h1>
      <iframe src={SRC} allowfullscreen></iframe>
      <div class="hint">可上下滚动查看完整曲目列表</div>
    </div>
  </body>
</html>

