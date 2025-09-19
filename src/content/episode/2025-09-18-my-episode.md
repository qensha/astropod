<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>经典粤语老歌 800 首</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 1rem;
      background: #fafafa;
      color: #222;
    }
    h1 {
      font-size: 1.6rem;
      text-align: center;
      margin-bottom: 1rem;
    }
    .player-wrap {
      max-width: 100%;
      margin: 0 auto;
    }
    iframe {
      width: 100%;
      height: 850px; /* 高度可调 */
      border: none;
    }
    /* 让手机屏幕上的文字更大 */
    @media (max-width: 600px) {
      body { font-size: 1.2rem; }
      h1 { font-size: 1.4rem; }
      iframe { height: 700px; }
    }
  </style>
</head>
<body>
  <h1>经典粤语老歌 800 首</h1>
  <div class="player-wrap">
    <!-- 带完整曲目列表的 archive.org 播放器 -->
    <iframe 
      src="https://archive.org/embed/15-800.-7z?playlist=1"
      allowfullscreen
    ></iframe>
  </div>
</body>
</html>
