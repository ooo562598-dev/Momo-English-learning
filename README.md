# Momo English

一个温柔、可爱但不过度幼稚的英语语法学习网站。项目使用原生 HTML、CSS 和 JavaScript 编写，无需安装依赖或构建，适合直接部署到 GitHub Pages。

## 功能

- 从句子基础到综合练习的学习地图
- 主谓宾、主系表、从句入门、定语从句、名词性从句和状语从句课程
- 生活化句型、中文翻译、例句拆解与即时练习
- `that`、`which`、`who` 的详细用法和省略规则
- 英文朗读、语速调节和连续播放
- 单选、判断、填空题即时反馈与解析
- 五到八句的小故事从句练习
- 可选择小猫或小狗作为学习伙伴
- 使用 `localStorage` 保存进度、经验值、等级、伙伴与主题
- 深色模式、平滑滚动、动画与响应式布局

## 目录结构

```text
Momo-English/
├─ index.html                    # GitHub Pages 入口
├─ README.md                     # 项目与维护说明
├─ .nojekyll                     # 禁用 Jekyll 处理
├─ .gitignore
├─ assets/
│  ├─ css/
│  │  └─ styles.css              # 全部视觉样式与响应式规则
│  └─ js/
│     └─ app.js                  # 课程数据、故事题库和交互逻辑
└─ .github/
   └─ workflows/
      └─ deploy-pages.yml        # 推送 main 后自动部署 Pages
```

`.agents/`、`.codex/` 和 `work/` 是本地开发辅助目录，已经被 `.gitignore` 排除，不需要上传。

## 本地运行

直接双击 `index.html` 可以查看基础页面。推荐从项目根目录启动静态服务器：

```bash
python -m http.server 8000
```

然后在浏览器访问 `http://localhost:8000/`。

项目没有 npm 依赖，也不需要执行构建命令。

## 上传到 GitHub

1. 在 GitHub 新建一个空仓库，例如 `Momo-English`。
2. 把本项目根目录中的 `index.html`、`assets`、`.github`、`README.md`、`.nojekyll` 和 `.gitignore` 上传到仓库根目录。
3. 确认默认分支名为 `main`。
4. 打开仓库的 **Settings → Pages**。
5. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
6. 打开仓库的 **Actions** 页面，等待 `Deploy Momo English to GitHub Pages` 运行完成。

如果不想使用 Actions，也可以删除 `.github/workflows/deploy-pages.yml`，然后在 Pages 中选择 **Deploy from a branch → main → /(root)**。

## 添加新课程

课程内容集中在 `assets/js/app.js` 顶部的 `LESSONS` 数组。复制一个已有课程对象并修改：

- `id`：唯一英文标识，不要和其他课程重复
- `step`：学习地图中的顺序
- `title` / `en`：中英文标题
- `summary` / `plain` / `goal`：简介、讲人话解释和学习目标
- `terms`：本课引用的术语键名
- `formula`：结构公式
- `patterns`：句型库
- `breakdowns`：例句拆解
- `quiz`：本课练习

页面会根据数组自动生成学习地图和课程详情，不需要另外编写 HTML。

## 添加新句型

在目标课程的 `patterns` 数组中加入：

```javascript
pattern(
  "句型名称",
  "结构公式",
  "I read before bed.",
  "我睡前读书。",
  "一句简单提示。"
)
```

例句朗读按钮会由页面自动生成。

## 添加新故事和题库

故事集中在 `assets/js/app.js` 顶部的 `STORIES` 数组。复制现有故事对象，保持唯一 `id`，然后修改标题、简介、句子和问题。每个故事建议写五到八句，并自然混合定语从句、名词性从句和状语从句。

新增内容后请重点检查：

- 英文例句是否自然、适合初学者
- 中文翻译是否简洁
- 正确答案是否与选项完全一致
- 解析是否说明了连接词和从句在句中的作用

## 数据保存说明

学习进度存放在浏览器 `localStorage` 中，不会上传到服务器。更换浏览器、使用无痕模式或清除站点数据后，进度会重新开始。

## 浏览器支持

建议使用最新版 Chrome、Edge、Firefox 或 Safari。英文朗读依赖浏览器的 Web Speech API，可用声音会因操作系统和浏览器而不同。
