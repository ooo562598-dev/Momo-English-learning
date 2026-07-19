/*
 * Momo English
 * All curriculum, sentence patterns, stories, and quizzes live in the data
 * collections at the top of this file. The rendering code below is reusable.
 */

const GLOSSARY = {
  subject: { title: "主语", en: "Subject", letter: "S", plain: "句子里的主角：是谁或什么。找到主语，就知道这句话在说谁。" },
  predicate: { title: "谓语", en: "Predicate", letter: "V", plain: "主角做了什么，或者处于什么状态。谓语的核心通常是动词。" },
  object: { title: "宾语", en: "Object", letter: "O", plain: "动作落到谁或什么身上。比如“我喜欢音乐”里的“音乐”。" },
  predicative: { title: "表语", en: "Predicative", letter: "P", plain: "放在系动词后，说明主语是什么或怎么样。比如“她很开心”里的“开心”。" },
  attributive: { title: "定语", en: "Attributive", letter: "Attr", plain: "修饰名词的部分，帮我们说清楚是哪一个人、哪一件物。" },
  adverbial: { title: "状语", en: "Adverbial", letter: "Adv", plain: "补充说明时间、原因、条件、地点或方式，让动作的背景更完整。" },
  clause: { title: "从句", en: "Clause", letter: "C", plain: "大句子里的小句子。它自己也有主语和谓语，但要依靠主句表达完整意思。" },
  mainClause: { title: "主句", en: "Main clause", letter: "M", plain: "整句话里承担主要意思的那一句。拿掉从句后，主句通常还能独立表达。" },
  conjunction: { title: "连接词", en: "Conjunction", letter: "Link", plain: "连接主句和从句的词，比如 that、when、because、if、who。" },
  linkingVerb: { title: "系动词", en: "Linking verb", letter: "LV", plain: "不表示具体动作，而是把主语和说明它的表语连起来，比如 be、look、feel、seem。" }
};

function pattern(label, structure, example, translation, note) {
  return { label: label, structure: structure, example: example, translation: translation, note: note };
}
function part(text, role, tone) {
  return { text: text, role: role, tone: tone || 1 };
}
function choice(question, options, answer, explanation) {
  return { type: "选择题", question: question, options: options, answer: answer, explanation: explanation };
}
function fill(question, answers, explanation) {
  return { type: "填空题", question: question, answers: answers, answer: answers[0], explanation: explanation };
}

const LESSONS = [
  {
    id: "sentence-basics", step: 1, title: "句子基础", en: "A complete sentence", color: "#7457dc", symbol: "S V",
    summary: "先看懂一句话最基本的骨架：谁，在做什么。",
    plain: "一句完整的话，至少要让人知道“谁”以及“发生了什么”。英语和搭积木很像：主语是主角，谓语是主角的动作或状态，其他成分再慢慢加上去。",
    goal: "学完这一站，你能从简单句里快速找出主语和谓语，不再被一长串单词吓到。",
    terms: ["subject", "predicate", "object"],
    formula: ["主语 S", "+", "谓语 V", "+", "其他信息"],
    patterns: [
      pattern("最短完整句", "主语 + 动词", "I smile.", "我微笑。", "I 是主角，smile 是动作。"),
      pattern("说一个状态", "主语 + be + 状态", "The room is quiet.", "房间很安静。", "is 把 room 和 quiet 连起来。"),
      pattern("动作带对象", "主语 + 动词 + 宾语", "We study English.", "我们学习英语。", "English 是 study 的对象。"),
      pattern("加时间信息", "主语 + 动词 + 时间", "My cat sleeps at noon.", "我的猫中午睡觉。", "at noon 补充动作发生的时间。")
    ],
    breakdowns: [
      { sentence: "Mia opens the window.", translation: "Mia 打开窗户。", parts: [part("Mia", "主语｜谁", 1), part("opens", "谓语｜做什么", 2), part("the window", "宾语｜打开什么", 3)] },
      { sentence: "The little dog runs every morning.", translation: "这只小狗每天早晨跑步。", parts: [part("The little dog", "主语｜谁", 1), part("runs", "谓语｜做什么", 2), part("every morning", "状语｜什么时候", 4)] }
    ],
    quiz: [
      choice("在 “Luna reads.” 中，主语是谁？", ["Luna", "reads", "没有主语", "整句话"], "Luna", "Luna 是这句话的主角，所以是主语。"),
      choice("在 “The baby sleeps.” 中，谓语是哪一个？", ["The baby", "sleeps", "baby", "The"], "sleeps", "sleeps 说明主角做了什么，是谓语。"),
      fill("填入一个合适的谓语：Birds ___ .（鸟儿飞。）", ["fly"], "Birds 是主语，fly 表示它们做的动作。")
    ]
  },
  {
    id: "svo", step: 2, title: "主谓宾", en: "Subject · Verb · Object", color: "#e88470", symbol: "SVO",
    summary: "主角做一个动作，动作又落到一个对象上。",
    plain: "主谓宾是最常见的动作句。先找主角，再找动作，最后问一句“动作对谁或什么做了？”答案通常就是宾语。",
    goal: "你会用“谁 + 做什么 + 对谁/什么”造出大量生活化句子。",
    terms: ["subject", "predicate", "object"],
    formula: ["主语 S", "+", "及物动词 V", "+", "宾语 O"],
    patterns: [
      pattern("表达喜欢", "I + like + 名词", "I like warm tea.", "我喜欢热茶。", "把喜欢的东西放在 like 后面。"),
      pattern("日常动作", "主语 + 动词 + 物品", "She opens the door.", "她打开门。", "door 是 opens 的宾语。"),
      pattern("一起做事", "We + 动词 + 名词", "We watch movies.", "我们看电影。", "movies 是动作的对象。"),
      pattern("照顾伙伴", "主语 + 动词 + 人或动物", "Tom walks his dog.", "Tom 遛他的狗。", "his dog 接受 walk 这个动作。")
    ],
    breakdowns: [
      { sentence: "I drink water after lunch.", translation: "我午饭后喝水。", parts: [part("I", "主语", 1), part("drink", "谓语", 2), part("water", "宾语", 3), part("after lunch", "状语", 4)] },
      { sentence: "Luna carries a small bag.", translation: "Luna 背着一个小包。", parts: [part("Luna", "主语", 1), part("carries", "谓语", 2), part("a small bag", "宾语", 3)] }
    ],
    quiz: [
      choice("“I love music.” 的宾语是什么？", ["I", "love", "music", "love music"], "music", "love 的对象是 music，所以 music 是宾语。"),
      choice("哪一句是标准的主谓宾结构？", ["Birds fly.", "She is happy.", "We eat noodles.", "It rains."], "We eat noodles.", "We 是主语，eat 是谓语，noodles 是宾语。"),
      fill("补全句子：He reads a ___ .", ["book", "story", "letter"], "这里需要一个能被 read 的事物，book、story 或 letter 都可以。")
    ]
  },
  {
    id: "svp", step: 3, title: "主系表", en: "Subject · Linking verb · Predicative", color: "#3f9c83", symbol: "SVP",
    summary: "不讲做了什么，而是说明主角是什么、怎么样。",
    plain: "主系表不是“动作落到对象上”，而是在介绍或描述主语。系动词像一座桥，把主语和后面的表语连起来。be 最常见，look、feel、smell、seem 也常用。",
    goal: "你能区分动作句和描述句，并用简单词说状态、身份和感受。",
    terms: ["subject", "linkingVerb", "predicative", "predicate"],
    formula: ["主语 S", "+", "系动词 LV", "+", "表语 P"],
    patterns: [
      pattern("说状态", "主语 + be + 形容词", "I am tired.", "我累了。", "tired 说明 I 怎么样。"),
      pattern("说感受", "主语 + feel + 形容词", "The blanket feels soft.", "这条毯子摸起来很软。", "soft 是表语。"),
      pattern("说外观", "主语 + look + 形容词", "You look happy.", "你看起来很开心。", "look 在这里不是“看”的动作。"),
      pattern("说身份", "主语 + be + 名词", "My sister is a nurse.", "我姐姐是一名护士。", "a nurse 说明身份。")
    ],
    breakdowns: [
      { sentence: "The soup smells good.", translation: "这汤闻起来很香。", parts: [part("The soup", "主语", 1), part("smells", "系动词", 2), part("good", "表语｜怎么样", 3)] },
      { sentence: "Our new neighbor is a teacher.", translation: "我们的新邻居是一名老师。", parts: [part("Our new neighbor", "主语", 1), part("is", "系动词", 2), part("a teacher", "表语｜是什么", 3)] }
    ],
    quiz: [
      choice("在 “The cake tastes sweet.” 中，表语是？", ["The cake", "tastes", "sweet", "cake"], "sweet", "sweet 说明蛋糕尝起来怎么样，是表语。"),
      choice("下面哪一个是系动词？", ["open", "feel", "carry", "watch"], "feel", "feel 表示“感觉起来”时连接主语和表语。"),
      fill("补全描述句：The sky is ___ .", ["blue", "clear", "dark"], "be 后面可以放形容词，说明天空怎么样。")
    ]
  },
  {
    id: "clause-intro", step: 4, title: "从句入门", en: "A small sentence inside", color: "#5b74bf", symbol: "M+C",
    summary: "一条大句子里，也可以住着一条有主语和谓语的小句子。",
    plain: "从句就是“大句子里的小句子”。它也有自己的主语和谓语，但通常要靠主句才能把意思说完整。主句负责主要信息，连接词负责把两句接起来。",
    goal: "你会用“找主句—圈连接词—看小句作用”的方法认识从句。",
    terms: ["clause", "mainClause", "conjunction", "subject", "predicate"],
    formula: ["主句 M", "+", "连接词 Link", "+", "从句 C"],
    patterns: [
      pattern("说知道什么", "主句 + that + 小句", "I know that you are busy.", "我知道你很忙。", "that 把 know 和后面的内容连起来。"),
      pattern("说什么时候", "When + 小句，主句", "When it rains, I stay home.", "下雨时，我待在家。", "when 带出时间背景。"),
      pattern("说为什么", "主句 + because + 小句", "She smiles because she is happy.", "她因为开心而微笑。", "because 带出原因。"),
      pattern("说什么条件", "If + 小句，主句", "If you are ready, we can go.", "如果你准备好了，我们就走。", "if 带出条件。")
    ],
    breakdowns: [
      { sentence: "I think that Momo is cute.", translation: "我觉得 Momo 很可爱。", parts: [part("I think", "主句", 1), part("that", "连接词", 2), part("Momo is cute", "从句｜有主语和谓语", 3)] },
      { sentence: "We eat inside when it is cold.", translation: "天气冷时，我们在室内吃饭。", parts: [part("We eat inside", "主句", 1), part("when", "连接词", 2), part("it is cold", "从句", 4)] }
    ],
    quiz: [
      choice("在 “I know that she is here.” 中，连接词是？", ["I", "know", "that", "she"], "that", "that 把主句 I know 和从句 she is here 连接起来。"),
      choice("哪一部分是从句？“We stay home because it rains.”", ["We stay home", "because", "it rains", "stay home"], "it rains", "it rains 有自己的主语 it 和谓语 rains，是从句。"),
      fill("填入连接词：___ you are ready, we can start.（如果）", ["if"], "表示条件时用 if。")
    ]
  },
  {
    id: "relative-clauses", step: 5, title: "定语从句", en: "Relative clauses", color: "#8c5fc1", symbol: "N+RC",
    summary: "给人或物加一条说明，让别人知道你说的是哪一个。",
    plain: "定语从句像贴在名词后面的说明标签。who 常修饰人，which 常修饰物，that 两者都可以。关系词在从句中做宾语时常能省略；做主语时不能省略。",
    goal: "你会判断 who、which、that 修饰谁，也能看懂关系词什么时候可以省略。",
    terms: ["attributive", "clause", "mainClause", "conjunction", "subject", "object"],
    formula: ["先行词 N", "+", "who / which / that", "+", "定语从句"],
    patterns: [
      pattern("说明一个人", "人 + who + 动词", "The girl who sings is Mia.", "唱歌的女孩是 Mia。", "who 指代 girl，并在从句中做主语，不能省略。"),
      pattern("说明一件物", "物 + which + 动词", "The cup which is blue is mine.", "蓝色的杯子是我的。", "which 做从句主语，不能省略。"),
      pattern("人或物都能用", "名词 + that + 小句", "I like the dog that follows me.", "我喜欢那只跟着我的狗。", "that 指代 dog，做主语，不能省略。"),
      pattern("做宾语可省略", "名词 + (that) + 主语 + 动词", "This is the cake I made.", "这是我做的蛋糕。", "原句的 that 做 made 的宾语，所以可以省略。")
    ],
    breakdowns: [
      { sentence: "The boy who helps me is kind.", translation: "帮助我的男孩很友善。", parts: [part("The boy", "先行词｜被说明的人", 1), part("who", "关系词｜做主语", 2), part("helps me", "定语从句", 3), part("is kind", "主句谓语部分", 4)] },
      { sentence: "The book that I bought is funny.", translation: "我买的那本书很有趣。", parts: [part("The book", "先行词｜被说明的物", 1), part("that", "关系词｜做宾语，可省", 2), part("I bought", "定语从句", 3), part("is funny", "主句谓语部分", 4)] }
    ],
    quiz: [
      choice("修饰人时，最常用哪个关系词？", ["which", "who", "when", "because"], "who", "who 专门用来指人。"),
      choice("哪句中的 that 可以省略？", ["The cat that sleeps is white.", "The book that I read is fun.", "The dog that runs is Momo.", "The girl that sings is Amy."], "The book that I read is fun.", "that 后面已有主语 I，所以 that 做 read 的宾语，可以省略。"),
      fill("填入关系词：The woman ___ lives next door is a doctor.", ["who", "that"], "先行词是人，who 或 that 都可以；关系词在从句中做主语，不能省略。")
    ]
  },
  {
    id: "noun-clauses", step: 6, title: "名词性从句", en: "Noun clauses", color: "#cf765f", symbol: "C=N",
    summary: "让一整条小句子，像名词一样充当主语、宾语或表语。",
    plain: "名词可以做主语、宾语和表语；名词性从句也能做同样的工作。把它当成一个装着完整信息的“大名词”，就容易理解了。",
    goal: "你能辨认作宾语、主语和表语的从句，并套用最常见的生活句型。",
    terms: ["clause", "subject", "object", "predicative", "conjunction", "mainClause"],
    formula: ["连接词", "+", "完整小句", "=", "名词的作用"],
    patterns: [
      pattern("表达想法", "I think + that 从句", "I think that this idea is good.", "我觉得这个主意很好。", "整个 that 从句是 think 的宾语。"),
      pattern("表达知道", "I know + 疑问词从句", "I know what you mean.", "我知道你的意思。", "what you mean 整体作宾语。"),
      pattern("小句作主语", "What + 小句 + 谓语", "What you said is helpful.", "你说的话很有帮助。", "What you said 整体是主语。"),
      pattern("小句作表语", "主语 + be + whether 从句", "The question is whether we can go.", "问题是我们能不能去。", "whether 从句说明 question 是什么。")
    ],
    breakdowns: [
      { sentence: "I believe that you can do it.", translation: "我相信你能做到。", parts: [part("I believe", "主句", 1), part("that", "连接词", 2), part("you can do it", "宾语从句｜相信的内容", 3)] },
      { sentence: "Where he lives is a secret.", translation: "他住在哪里是个秘密。", parts: [part("Where he lives", "主语从句", 1), part("is", "系动词", 2), part("a secret", "表语", 3)] }
    ],
    quiz: [
      choice("“I hope that you are well.” 中，that 从句作什么？", ["主语", "宾语", "定语", "状语"], "宾语", "它回答“hope 什么”，所以整个从句作宾语。"),
      choice("哪一句含有主语从句？", ["I know that he is busy.", "What she needs is rest.", "The boy who runs is Tom.", "I left because it was late."], "What she needs is rest.", "What she needs 整体站在主语的位置。"),
      fill("补全：I know ___ you mean.", ["what"], "what 在从句中表示“什么”，what you mean 整体作 know 的宾语。")
    ]
  },
  {
    id: "adverbial-clauses", step: 7, title: "状语从句", en: "Adverbial clauses", color: "#398b7e", symbol: "C=Adv",
    summary: "补充说明事情在什么时候、为什么、什么条件下发生。",
    plain: "状语从句是给动作加背景的小句子。when 说时间，because 说原因，if 说条件，although 说转折。它可以放主句前，也可以放主句后。",
    goal: "你会用四个高频连接词，把两条简单句自然地连在一起。",
    terms: ["adverbial", "clause", "mainClause", "conjunction"],
    formula: ["时间 / 原因 / 条件从句", "+", "主句"],
    patterns: [
      pattern("时间", "When + 小句，主句", "When I get home, I make tea.", "我到家时会泡茶。", "when 告诉我们什么时候发生。"),
      pattern("原因", "主句 + because + 小句", "I walk because the day is warm.", "因为天气暖和，我走路去。", "because 回答“为什么”。"),
      pattern("条件", "If + 小句，主句", "If you need help, call me.", "如果你需要帮助，就给我打电话。", "if 表示某件事发生的条件。"),
      pattern("让步", "Although + 小句，主句", "Although I am tired, I am happy.", "虽然我累，但我很开心。", "although 表示“虽然”。")
    ],
    breakdowns: [
      { sentence: "We will eat outside if it is sunny.", translation: "如果天气晴朗，我们会在外面吃饭。", parts: [part("We will eat outside", "主句", 1), part("if", "条件连接词", 2), part("it is sunny", "条件状语从句", 3)] },
      { sentence: "Because Momo was hungry, he made a sandwich.", translation: "因为 Momo 饿了，他做了一个三明治。", parts: [part("Because", "原因连接词", 2), part("Momo was hungry", "原因状语从句", 3), part("he made a sandwich", "主句", 1)] }
    ],
    quiz: [
      choice("表示原因的连接词是哪一个？", ["when", "because", "if", "although"], "because", "because 就是“因为”，带出原因。"),
      choice("“If it rains, we stay home.” 是哪种状语从句？", ["时间", "原因", "条件", "让步"], "条件", "if 表示“如果”，所以是条件状语从句。"),
      fill("填入连接词：___ I am busy, I still call my mom.（虽然）", ["although"], "although 表示“虽然”，带出让步状语从句。")
    ]
  },
  {
    id: "mixed-practice", step: 8, title: "综合练习", en: "Put everything together", color: "#3f354e", symbol: "MIX",
    summary: "不只看连接词，还要判断这条小句子在整句话里做什么。",
    plain: "判断从句类型时，先找连接词，再看从句在大句子里做什么：修饰名词的是定语从句；像名词一样占主语、宾语或表语位置的是名词性从句；补充时间、原因、条件等背景的是状语从句。",
    goal: "你会用同一套判断步骤，区分定语、名词性和状语从句。",
    terms: ["clause", "mainClause", "conjunction", "attributive", "adverbial", "object", "predicative"],
    formula: ["找主句", "→", "圈连接词", "→", "判断从句作用"],
    patterns: [
      pattern("定语从句", "名词 + who/which/that + 小句", "I know the girl who has a red bike.", "我认识那个有红色自行车的女孩。", "who 从句修饰 girl。"),
      pattern("名词性从句", "动词 + that/what + 小句", "I remember what you said.", "我记得你说的话。", "what 从句作 remember 的宾语。"),
      pattern("状语从句", "because/when/if + 小句", "We left when the shop closed.", "商店关门时我们离开了。", "when 从句补充离开的时间。"),
      pattern("两种从句一起用", "主句 + 宾语从句 + 定语从句", "I know that the cat that sleeps here is yours.", "我知道睡在这里的猫是你的。", "外层是宾语从句，里面还有定语从句。")
    ],
    breakdowns: [
      { sentence: "I like the song that you played because it is gentle.", translation: "我喜欢你播放的那首歌，因为它很温柔。", parts: [part("I like the song", "主句骨架", 1), part("that you played", "定语从句｜修饰 song", 2), part("because it is gentle", "原因状语从句", 3)] },
      { sentence: "What Momo wants is the cake which is on the table.", translation: "Momo 想要的是桌上的蛋糕。", parts: [part("What Momo wants", "主语从句", 1), part("is the cake", "主句系表部分", 2), part("which is on the table", "定语从句｜修饰 cake", 4)] }
    ],
    quiz: [
      choice("“The dog that follows me is Momo.” 含有什么从句？", ["定语从句", "名词性从句", "状语从句", "没有从句"], "定语从句", "that follows me 修饰 dog，所以是定语从句。"),
      choice("“I know that she is kind.” 中从句的作用是？", ["修饰 she", "作 know 的宾语", "说明时间", "说明原因"], "作 know 的宾语", "that she is kind 是“知道的内容”，所以是宾语从句。"),
      choice("“When the bell rings, we leave.” 是哪种从句？", ["定语从句", "主语从句", "时间状语从句", "表语从句"], "时间状语从句", "when 引出动作发生的时间背景。")
    ]
  }
];

const STORIES = [
  {
    id: "rainy-plan", title: "Momo 的雨天计划", level: "入门故事 · 6 句",
    intro: "一场雨，让 Momo 临时改变了下午的安排。",
    sentences: [
      { en: "When the rain starts, Momo looks out of the window.", zh: "下雨时，Momo 看向窗外。" },
      { en: "He sees a bird that is hiding under a tree.", zh: "他看到一只躲在树下的鸟。" },
      { en: "Momo knows that the bird is cold.", zh: "Momo 知道那只鸟很冷。" },
      { en: "Because the rain is heavy, he cannot go outside.", zh: "因为雨很大，他不能出去。" },
      { en: "He makes a small house which he puts near the door.", zh: "他做了一个小屋，并把它放在门边。" },
      { en: "Momo is happy when the bird walks into the house.", zh: "小鸟走进小屋时，Momo 很开心。" }
    ],
    quiz: [
      choice("“When the rain starts” 是哪种从句？", ["定语从句", "时间状语从句", "宾语从句", "主语从句"], "时间状语从句", "很棒！when 告诉我们 Momo 什么时候看窗外。"),
      choice("“that is hiding under a tree” 修饰谁？", ["Momo", "the rain", "a bird", "a tree"], "a bird", "对啦，它像标签一样说明是哪一只鸟，所以是定语从句。"),
      choice("“that the bird is cold” 在句中做什么？", ["作 knows 的宾语", "修饰 bird", "说明原因", "说明时间"], "作 knows 的宾语", "它是 Momo 知道的内容，属于名词性从句。"),
      choice("“Because the rain is heavy” 是哪种从句？", ["原因状语从句", "定语从句", "表语从句", "宾语从句"], "原因状语从句", "because 回答“为什么不能出去”。找到了原因，就找到了答案。")
    ]
  },
  {
    id: "birthday-secret", title: "Luna 的生日秘密", level: "进阶故事 · 7 句",
    intro: "Luna 想准备一份不被朋友发现的小惊喜。",
    sentences: [
      { en: "Luna wants to make a cake that looks like the moon.", zh: "Luna 想做一个看起来像月亮的蛋糕。" },
      { en: "She asks Momo whether he can help her.", zh: "她问 Momo 能不能帮她。" },
      { en: "Momo smiles because he loves surprises.", zh: "Momo 笑了，因为他喜欢惊喜。" },
      { en: "While their friend is sleeping, they work in the kitchen.", zh: "朋友睡觉时，他们在厨房忙碌。" },
      { en: "The cream which Momo mixes is very soft.", zh: "Momo 搅拌的奶油很柔软。" },
      { en: "What Luna writes on the cake is a secret.", zh: "Luna 在蛋糕上写的内容是个秘密。" },
      { en: "When the friend wakes up, everyone sings together.", zh: "朋友醒来时，大家一起唱歌。" }
    ],
    quiz: [
      choice("“that looks like the moon” 是哪种从句？", ["定语从句", "宾语从句", "原因状语从句", "主语从句"], "定语从句", "很棒，它修饰 cake，告诉我们是哪一种蛋糕。"),
      choice("“whether he can help her” 在句中作什么？", ["asks 的宾语", "修饰 Momo", "时间状语", "主语"], "asks 的宾语", "差一点也没关系。问的内容就是 whether 从句，所以它作宾语。"),
      choice("“What Luna writes on the cake” 是什么？", ["主语从句", "定语从句", "条件状语从句", "宾语从句"], "主语从句", "它整体站在 is 前面做主语。多看几次，这个位置会越来越熟。"),
      choice("故事中 because 引出的是什么从句？", ["时间状语从句", "原因状语从句", "定语从句", "表语从句"], "原因状语从句", "because 给出了 Momo 微笑的原因。判断准确！")
    ]
  }
];

const $ = function(selector, scope) { return (scope || document).querySelector(selector); };
const $$ = function(selector, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(selector)); };
const STORAGE = { progress: "momo-progress-v2", partner: "momo-partner-v2", theme: "momo-theme" };
let toastTimer = null;
let xpTimer = null;
let currentLessonId = LESSONS[0].id;
let currentStoryId = STORIES[0].id;
let speechQueue = [];
let speechActive = false;
const speechRegistry = {};
const quizRegistry = {};

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value && typeof value === "object" ? value : fallback;
  } catch (error) {
    return fallback;
  }
}
const progress = readStorage(STORAGE.progress, { completedLessons: [], rewardKeys: [] });
const partner = readStorage(STORAGE.partner, { type: null, xp: 0 });

function normalizeState() {
  if (!Array.isArray(progress.completedLessons)) progress.completedLessons = [];
  if (!Array.isArray(progress.rewardKeys)) progress.rewardKeys = [];
  if (!Number.isFinite(partner.xp)) partner.xp = 0;
  const legacy = readStorage("momo-completed", []);
  if (!progress.completedLessons.length && Array.isArray(legacy)) {
    if (legacy.indexOf("basics") >= 0) progress.completedLessons.push("sentence-basics");
    if (legacy.indexOf("relative") >= 0) progress.completedLessons.push("relative-clauses");
  }
  saveState();
}
function saveState() {
  localStorage.setItem(STORAGE.progress, JSON.stringify(progress));
  localStorage.setItem(STORAGE.partner, JSON.stringify(partner));
}
function lessonById(id) { return LESSONS.find(function(item) { return item.id === id; }) || LESSONS[0]; }
function storyById(id) { return STORIES.find(function(item) { return item.id === id; }) || STORIES[0]; }
function isLessonDone(id) { return progress.completedLessons.indexOf(id) >= 0; }
function levelInfo() {
  const perLevel = 80;
  return { level: Math.floor(partner.xp / perLevel) + 1, current: partner.xp % perLevel, needed: perLevel };
}
function petName() { return partner.type === "cat" ? "Luna" : partner.type === "dog" ? "Momo" : "未选择"; }
function encouraging(correct, index) {
  const good = ["很棒，判断得很清楚！", "答对啦，继续保持这个节奏。", "漂亮！这个语法点已经被你抓住了。"];
  const retry = ["差一点。没关系，看完解析就多一条线索。", "没关系，多看几次就熟了。", "这题有点绕，解析会帮你把它拆开。"];
  return (correct ? good : retry)[index % 3];
}
function showToast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { node.classList.remove("show"); }, 2800);
}
function showXp(amount, message) {
  const node = $("#xpPop");
  node.textContent = "+" + amount + " EXP · " + message;
  node.classList.add("show");
  clearTimeout(xpTimer);
  xpTimer = setTimeout(function() { node.classList.remove("show"); }, 2600);
}
function awardXp(amount, key, message) {
  if (progress.rewardKeys.indexOf(key) >= 0) return false;
  progress.rewardKeys.push(key);
  partner.xp += amount;
  saveState();
  renderPartner();
  showXp(amount, message);
  return true;
}

function renderMap() {
  const map = $("#learningMap");
  map.innerHTML = LESSONS.map(function(lesson) {
    const done = isLessonDone(lesson.id);
    return "<button class='map-node reveal " + (done ? "done" : "") + "' type='button' data-lesson='" + lesson.id + "' style='--node-color:" + lesson.color + "'>" +
      "<span class='map-pin'></span><span class='node-top'><span class='node-number'><i></i> STOP " + String(lesson.step).padStart(2, "0") + "</span>" +
      "<span class='node-status'>" + (done ? "已完成" : lesson.step === 1 ? "从这里开始" : "可学习") + "</span></span>" +
      "<span><h3>" + lesson.title + "</h3><p>" + lesson.summary + "</p></span>" +
      "<span class='node-action'><span>" + (done ? "再看一次" : "进入课程") + "</span><span>→</span></span></button>";
  }).join("");
}
function renderHome() {
  const done = progress.completedLessons.length;
  const percent = Math.round(done / LESSONS.length * 100);
  $("#homeCompletedCount").textContent = done;
  $("#homePatternCount").textContent = LESSONS.reduce(function(sum, item) { return sum + item.patterns.length; }, 0);
  $("#journeyProgress").style.width = percent + "%";
  $("#journeyPercent").textContent = percent + "%";
  $(".progress-track").setAttribute("aria-valuenow", percent);
  $("#journeyMessage").textContent = done === 0 ? "第一步：先看懂一个句子。" : done === LESSONS.length ? "全程走完！现在去故事里用一用。" : "下一站：" + LESSONS.find(function(item) { return !isLessonDone(item.id); }).title;
  $("#termPeek").innerHTML = ["subject", "predicate", "clause"].map(function(key) {
    const term = GLOSSARY[key];
    return "<div class='term-peek-item'><strong>" + term.title + "</strong><span>" + term.plain + "</span></div>";
  }).join("");
  renderMap();
  renderPartner();
  setupReveal();
}
function renderPartner() {
  const info = levelInfo();
  const chosen = Boolean(partner.type);
  $("#partnerChip").innerHTML = "<span class='partner-dot'>" + (chosen ? (partner.type === "cat" ? "CAT" : "DOG") : "+") + "</span><span>" + (chosen ? petName() + " · Lv." + info.level : "选择伙伴") + "</span>";
  const home = $("#partnerHomeCard");
  if (!home) return;
  if (!chosen) {
    home.innerHTML = "<div class='partner-card-copy'><p class='eyebrow'>STUDY BUDDY</p><h3>找个伙伴，陪你走完地图。</h3><p>小猫和小狗都不会催你，只会记录经验、等级和每一次小进步。</p><button class='button' type='button' data-open-partner>选择学习伙伴</button></div><span class='partner-stage'></span><span class='partner-big-face cat'><i class='big-ear left'></i><i class='big-ear right'></i></span>";
    return;
  }
  const percentage = Math.round(info.current / info.needed * 100);
  home.innerHTML = "<div class='partner-card-copy'><p class='eyebrow'>YOUR STUDY BUDDY</p><h3>" + petName() + " · Lv." + info.level + "</h3><p>" + (partner.type === "cat" ? "Luna 正在安静地陪你整理例句。" : "Momo 已经准备好陪你去下一站。") + "</p>" +
    "<div class='partner-level'><div class='partner-level-row'><span>成长经验</span><span>" + info.current + " / " + info.needed + " EXP</span></div><div class='xp-track'><span style='width:" + percentage + "%'></span></div></div>" +
    "<button class='button' type='button' data-open-partner>更换伙伴</button></div><span class='partner-stage'></span><span class='partner-big-face " + partner.type + "'><i class='big-ear left'></i><i class='big-ear right'></i></span>";
}
function renderGlossary() {
  $("#glossaryGrid").innerHTML = Object.keys(GLOSSARY).map(function(key) {
    const term = GLOSSARY[key];
    return "<article class='glossary-card reveal'><span class='term-letter'>" + term.letter + "</span><h2>" + term.title + "</h2><small>" + term.en + "</small><p>" + term.plain + "</p></article>";
  }).join("");
  setupReveal();
}
function registerSpeech(key, text) {
  speechRegistry[key] = text;
  return "<button class='speak-btn' type='button' data-speech-key='" + key + "' aria-label='朗读英文例句'>朗读</button>";
}
function renderTerms(keys) {
  return keys.map(function(key) {
    const term = GLOSSARY[key];
    return "<article class='term-card'><div class='term-card-top'><span><h3>" + term.title + "</h3><small>" + term.en + "</small></span><span class='term-letter'>" + term.letter + "</span></div><p>" + term.plain + "</p></article>";
  }).join("");
}
function renderFormula(parts) {
  return parts.map(function(item, index) {
    return index % 2 === 1 ? "<i>" + item + "</i>" : "<span>" + item + "</span>";
  }).join("");
}
function renderPatterns(lesson) {
  return lesson.patterns.map(function(item, index) {
    const key = "lesson-" + lesson.id + "-pattern-" + index;
    return "<article class='pattern-card'><span class='pattern-tag'>" + item.label + "</span><div class='pattern-structure'>" + item.structure + "</div><h3>" + item.example + "</h3><p>" + item.translation + "</p><small class='pattern-note'>" + item.note + "</small>" + registerSpeech(key, item.example) + "</article>";
  }).join("");
}
function renderBreakdowns(lesson) {
  return lesson.breakdowns.map(function(item, index) {
    const key = "lesson-" + lesson.id + "-breakdown-" + index;
    return "<article class='breakdown-card'><div class='breakdown-top'><span class='breakdown-index'>" + String(index + 1).padStart(2, "0") + "</span><p class='sentence-line'>" + item.sentence + "</p>" + registerSpeech(key, item.sentence) + "</div>" +
      "<p class='translation-line'>" + item.translation + "</p><div class='parts-line'>" + item.parts.map(function(piece) { return "<span class='part-chip tone-" + piece.tone + "'><b>" + piece.role + "</b>" + piece.text + "</span>"; }).join("") + "</div></article>";
  }).join("");
}
function renderQuiz(questions, context) {
  questions.forEach(function(question, index) { quizRegistry[context + "-" + index] = question; });
  return questions.map(function(question, index) {
    const key = context + "-" + index;
    let answerArea = "";
    if (question.type === "填空题") {
      answerArea = "<div class='fill-row'><input class='fill-input' type='text' autocomplete='off' placeholder='输入英文答案' aria-label='第 " + (index + 1) + " 题答案'><button class='fill-check' type='button' data-check-fill>检查</button></div>";
    } else {
      answerArea = "<div class='quiz-options'>" + question.options.map(function(option, optionIndex) {
        return "<button class='quiz-option' type='button' data-answer-value='" + option + "'><span class='option-letter'>" + String.fromCharCode(65 + optionIndex) + "</span><span>" + option + "</span></button>";
      }).join("") + "</div>";
    }
    return "<article class='quiz-card' data-quiz-key='" + key + "' data-context='" + context + "'><div class='quiz-meta'><span class='quiz-type'>" + question.type + "</span><span>QUESTION " + String(index + 1).padStart(2, "0") + "</span></div><h3 class='quiz-question'>" + question.question + "</h3>" + answerArea + "<div class='feedback' aria-live='polite'></div></article>";
  }).join("");
}
function renderLesson(id) {
  const lesson = lessonById(id);
  currentLessonId = lesson.id;
  Object.keys(quizRegistry).forEach(function(key) { delete quizRegistry[key]; });
  const context = "lesson-" + lesson.id;
  $("#lessonBreadcrumb").innerHTML = "学习地图 / <strong>" + lesson.title + "</strong>";
  $("#lessonContent").innerHTML =
    "<header class='lesson-hero' style='--lesson-color:" + lesson.color + "'><div class='section-shell lesson-hero-inner'><div><p class='eyebrow'>STOP " + String(lesson.step).padStart(2, "0") + " · " + lesson.en + "</p><h1>" + lesson.title + "</h1><p>" + lesson.summary + "</p></div><div class='lesson-symbol' aria-hidden='true'><strong>" + lesson.symbol + "</strong></div></div></header>" +
    "<div class='section-shell lesson-main'><section class='lesson-intro-grid reveal'><article class='plain-card'><span class='card-kicker'>先讲人话</span><h2>这个语法点是什么？</h2><p>" + lesson.plain + "</p></article><article class='goal-card'><span class='card-kicker'>这一站的目标</span><h2>学会之后</h2><p>" + lesson.goal + "</p></article></section>" +
    "<section class='lesson-block reveal'><div class='lesson-block-head'><div><span class='section-count'>01 · TERMS</span><h2>先认识会出现的词</h2></div><p>不用一次背完。先把术语和它的“人话意思”对应起来。</p></div><div class='terms-grid'>" + renderTerms(lesson.terms) + "</div></section>" +
    "<section class='lesson-block reveal'><div class='lesson-block-head'><div><span class='section-count'>02 · FORMULA</span><h2>结构公式</h2></div><p>公式不是为了死记，而是让你一眼看见句子的排列方式。</p></div><div class='formula-board'><div class='formula-copy'><h3>把句子装进格子</h3><p>从左到右读，先找主角，再看动作或从句的作用。</p></div><div class='formula-parts'>" + renderFormula(lesson.formula) + "</div></div></section>" +
    "<section class='lesson-block reveal'><div class='lesson-block-head'><div><span class='section-count'>03 · PATTERN LIBRARY</span><h2>常用句型库</h2></div><button class='section-play' type='button' data-play-lesson='" + lesson.id + "'>连续朗读 4 句</button></div><div class='pattern-grid'>" + renderPatterns(lesson) + "</div></section>" +
    "<section class='lesson-block reveal'><div class='lesson-block-head'><div><span class='section-count'>04 · BREAK IT DOWN</span><h2>例句拆解</h2></div><p>不同颜色代表不同工作。看位置，也看它在整句话里做什么。</p></div><div class='breakdown-list'>" + renderBreakdowns(lesson) + "</div></section>" +
    "<section class='lesson-block practice-wrap reveal'><div class='practice-intro'><div><span class='section-count'>05 · QUICK PRACTICE</span><h2>马上练一下</h2><p>答完立刻看解析。错一次不扣分，读懂解析才是重点。</p></div></div><div class='quiz-list'>" + renderQuiz(lesson.quiz, context) + "</div>" +
    "<div class='lesson-finish'><div><h3>" + (isLessonDone(lesson.id) ? "这一站已经点亮。" : "完成三题，就能点亮这一站。") + "</h3><p class='finish-status'>" + (isLessonDone(lesson.id) ? "随时可以回来复习，经验不会重复计算。" : "当前 0 / " + lesson.quiz.length + " 题") + "</p></div><button class='complete-lesson " + (isLessonDone(lesson.id) ? "done" : "") + "' type='button' data-complete-lesson='" + lesson.id + "' " + (isLessonDone(lesson.id) ? "" : "disabled") + ">" + (isLessonDone(lesson.id) ? "已完成" : "完成本课") + "</button></div></section></div>";
  setupReveal();
}
function renderStoryTabs() {
  $("#storyTabs").innerHTML = STORIES.map(function(story, index) {
    return "<button class='story-tab " + (story.id === currentStoryId ? "active" : "") + "' type='button' data-story-id='" + story.id + "'><span class='story-tab-number'>" + String(index + 1).padStart(2, "0") + "</span><span><strong>" + story.title + "</strong><small>" + story.level + "</small></span></button>";
  }).join("");
}
function renderStory(id) {
  const story = storyById(id);
  currentStoryId = story.id;
  Object.keys(quizRegistry).forEach(function(key) { delete quizRegistry[key]; });
  renderStoryTabs();
  const context = "story-" + story.id;
  const sentences = story.sentences.map(function(item, index) {
    const key = "story-" + story.id + "-sentence-" + index;
    return "<div class='story-sentence'><div><p>" + item.en + "</p><small>" + item.zh + "</small></div>" + registerSpeech(key, item.en) + "</div>";
  }).join("");
  $("#storyWorkspace").innerHTML = "<section class='story-card reveal'><header class='story-card-head'><div><p class='eyebrow'>" + story.level + "</p><h2>" + story.title + "</h2><p>" + story.intro + "</p></div><div class='story-actions'><button type='button' data-play-story='" + story.id + "'>连续朗读</button><button type='button' data-stop-speech>停止</button></div></header><div class='story-sentences'>" + sentences + "</div></section>" +
    "<section class='story-quiz reveal'><div class='story-quiz-head'><p class='eyebrow'>FIND THE CLAUSE</p><h2>故事侦探题</h2><p>判断句子里的小句子做了什么工作。全部答完可获得经验。</p></div><div class='quiz-list'>" + renderQuiz(story.quiz, context) + "</div><div class='story-summary' hidden><strong>故事练习完成！</strong><span>答案已经慢慢连成一张语法地图。</span></div></section>";
  setupReveal();
}
function normalizeAnswer(value) { return String(value || "").trim().toLowerCase().replace(/[.。！!]/g, ""); }
function evaluateQuiz(card, submitted) {
  if (!card || card.dataset.answered === "true") return;
  const question = quizRegistry[card.dataset.quizKey];
  if (!question) return;
  const accepted = question.answers || [question.answer];
  const correct = accepted.some(function(answer) { return normalizeAnswer(answer) === normalizeAnswer(submitted); });
  card.dataset.answered = "true";
  $$(".quiz-option", card).forEach(function(button) {
    button.disabled = true;
    if (normalizeAnswer(button.dataset.answerValue) === normalizeAnswer(question.answer)) button.classList.add("correct");
    if (!correct && normalizeAnswer(button.dataset.answerValue) === normalizeAnswer(submitted)) button.classList.add("wrong");
  });
  const input = $(".fill-input", card);
  if (input) { input.disabled = true; input.classList.add(correct ? "correct" : "wrong"); }
  const check = $(".fill-check", card); if (check) check.disabled = true;
  const feedback = $(".feedback", card);
  const index = Number(card.dataset.quizKey.split("-").pop()) || 0;
  feedback.className = "feedback show " + (correct ? "correct" : "wrong");
  feedback.innerHTML = "<strong>" + encouraging(correct, index) + "</strong><span>" + question.explanation + "</span>";
  checkQuizCompletion(card.dataset.context);
}
function checkQuizCompletion(context) {
  const cards = $$(".quiz-card[data-context='" + context + "']");
  const answered = cards.filter(function(card) { return card.dataset.answered === "true"; }).length;
  if (context.indexOf("lesson-") === 0) {
    const finish = $(".finish-status");
    if (finish) finish.textContent = "当前 " + answered + " / " + cards.length + " 题";
    if (answered === cards.length) {
      const id = context.slice(7);
      const button = $("[data-complete-lesson='" + id + "']");
      if (button) button.disabled = false;
      awardXp(10, "practice-" + id, "随堂练习完成");
      showToast("三题完成！现在可以点亮这一站。");
    }
  } else if (answered === cards.length) {
    const id = context.slice(6);
    const summary = $(".story-summary");
    if (summary) summary.hidden = false;
    awardXp(20, "story-" + id, "故事侦探完成");
  }
}
function completeLesson(id) {
  if (isLessonDone(id)) { showToast("这一站已经完成，可以继续复习。"); return; }
  progress.completedLessons.push(id);
  saveState();
  awardXp(25, "lesson-" + id, "课程站点点亮");
  renderHome();
  const button = $("[data-complete-lesson='" + id + "']");
  if (button) { button.classList.add("done"); button.textContent = "已完成"; }
  const status = $(".finish-status"); if (status) status.textContent = "做得好！回到地图看看刚点亮的路线。";
  showToast("课程完成！地图上又亮起一站。");
}
function choosePartner(type) {
  partner.type = type;
  saveState();
  renderPartner();
  closePartnerModal();
  showToast((type === "cat" ? "Luna" : "Momo") + " 已经成为你的学习伙伴。");
}
function openPartnerModal() { $("#partnerModal").hidden = false; document.body.style.overflow = "hidden"; }
function closePartnerModal() { $("#partnerModal").hidden = true; document.body.style.overflow = ""; }

function speechRate() { return Number($("#speechRate").value); }
function updateSpeechStatus(text, active) {
  $("#speechStatus").textContent = text;
  $(".sound-wave").classList.toggle("active", Boolean(active));
}
function speakText(text, key, onEnd) {
  if (!("speechSynthesis" in window)) { showToast("当前浏览器不支持语音朗读。"); return; }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = speechRate();
  utterance.pitch = 1.02;
  const button = key ? $("[data-speech-key='" + key + "']") : null;
  if (button) button.classList.add("playing");
  updateSpeechStatus(text, true);
  utterance.onend = function() {
    if (button) button.classList.remove("playing");
    if (onEnd) onEnd(); else updateSpeechStatus("朗读准备好", false);
  };
  utterance.onerror = function() { if (button) button.classList.remove("playing"); stopSpeech(); };
  window.speechSynthesis.speak(utterance);
}
function speakSingle(key) {
  stopSpeech();
  speechActive = true;
  speakText(speechRegistry[key], key, function() { speechActive = false; updateSpeechStatus("朗读准备好", false); });
}
function playSequence(items, label) {
  if (!("speechSynthesis" in window)) { showToast("当前浏览器不支持语音朗读。"); return; }
  stopSpeech();
  speechQueue = items.slice();
  speechActive = true;
  updateSpeechStatus(label, true);
  playNext();
}
function playNext() {
  if (!speechActive || !speechQueue.length) { speechActive = false; updateSpeechStatus("朗读准备好", false); return; }
  const next = speechQueue.shift();
  speakText(next.text, next.key, function() { setTimeout(playNext, 180); });
}
function stopSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  speechQueue = [];
  speechActive = false;
  $$(".speak-btn.playing").forEach(function(button) { button.classList.remove("playing"); });
  updateSpeechStatus("朗读准备好", false);
}
function playLesson(id) {
  const lesson = lessonById(id);
  playSequence(lesson.patterns.map(function(item, index) { return { text: item.example, key: "lesson-" + id + "-pattern-" + index }; }), lesson.title + " · 连续朗读");
}
function playStory(id) {
  const story = storyById(id);
  playSequence(story.sentences.map(function(item, index) { return { text: item.en, key: "story-" + id + "-sentence-" + index }; }), story.title + " · 连续朗读");
}

function showView(name) {
  $$(".view").forEach(function(view) {
    const active = view.dataset.view === name;
    view.hidden = !active;
    view.classList.toggle("is-active", active);
  });
  $$(".main-nav button").forEach(function(button) {
    button.classList.toggle("active", button.dataset.route === name || (name === "lesson" && button.dataset.route === "home"));
  });
  $(".main-nav").classList.remove("open");
  $(".menu-toggle").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function goTo(route, id) {
  const hash = route === "lesson" ? "lesson/" + id : route;
  if (location.hash.slice(1) === hash) handleRoute(); else location.hash = hash;
}
function handleRoute() {
  stopSpeech();
  const hash = location.hash.slice(1) || "home";
  if (hash.indexOf("lesson/") === 0) {
    const id = hash.split("/")[1];
    renderLesson(id);
    showView("lesson");
  } else if (hash === "stories") {
    renderStory(currentStoryId);
    showView("stories");
  } else if (hash === "glossary") {
    renderGlossary();
    showView("glossary");
  } else {
    renderHome();
    showView("home");
  }
}
function setupReveal() {
  const nodes = $$(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) { nodes.forEach(function(node) { node.classList.add("visible"); }); return; }
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    });
  }, { threshold: .1 });
  nodes.forEach(function(node) { observer.observe(node); });
}
function updateScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? window.scrollY / max * 100 : 0;
  $("#topProgressBar").style.width = percent + "%";
  $(".site-header").classList.toggle("scrolled", window.scrollY > 7);
}
function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  $(".theme-toggle span").textContent = dark ? "Sun" : "Moon";
  localStorage.setItem(STORAGE.theme, dark ? "dark" : "light");
}

function setupEvents() {
  document.addEventListener("click", function(event) {
    const route = event.target.closest("[data-route]");
    if (route) { goTo(route.dataset.route); return; }
    const lesson = event.target.closest("[data-lesson]");
    if (lesson) { goTo("lesson", lesson.dataset.lesson); return; }
    const speech = event.target.closest("[data-speech-key]");
    if (speech) { speakSingle(speech.dataset.speechKey); return; }
    const playLessonButton = event.target.closest("[data-play-lesson]");
    if (playLessonButton) { playLesson(playLessonButton.dataset.playLesson); return; }
    const playStoryButton = event.target.closest("[data-play-story]");
    if (playStoryButton) { playStory(playStoryButton.dataset.playStory); return; }
    if (event.target.closest("[data-stop-speech]")) { stopSpeech(); return; }
    const storyTab = event.target.closest("[data-story-id]");
    if (storyTab) { renderStory(storyTab.dataset.storyId); return; }
    const answer = event.target.closest("[data-answer-value]");
    if (answer) { evaluateQuiz(answer.closest(".quiz-card"), answer.dataset.answerValue); return; }
    const fillButton = event.target.closest("[data-check-fill]");
    if (fillButton) { const card = fillButton.closest(".quiz-card"); evaluateQuiz(card, $(".fill-input", card).value); return; }
    const complete = event.target.closest("[data-complete-lesson]");
    if (complete) { completeLesson(complete.dataset.completeLesson); return; }
    if (event.target.closest("[data-open-partner]") || event.target.closest("#partnerChip")) { openPartnerModal(); return; }
    const choose = event.target.closest("[data-choose-partner]");
    if (choose) { choosePartner(choose.dataset.choosePartner); return; }
    if (event.target.closest(".modal-close") || event.target === $("#partnerModal")) { closePartnerModal(); }
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && event.target.classList.contains("fill-input")) {
      const card = event.target.closest(".quiz-card");
      evaluateQuiz(card, event.target.value);
    }
    if (event.key === "Escape" && !$("#partnerModal").hidden) closePartnerModal();
  });
  $("#continueLearning").addEventListener("click", function() {
    const next = LESSONS.find(function(item) { return !isLessonDone(item.id); }) || LESSONS[0];
    goTo("lesson", next.id);
  });
  $("#stopSpeech").addEventListener("click", stopSpeech);
  $(".theme-toggle").addEventListener("click", function() { setTheme(!document.body.classList.contains("dark")); });
  $(".menu-toggle").addEventListener("click", function() {
    const open = $(".main-nav").classList.toggle("open");
    this.setAttribute("aria-expanded", String(open));
  });
  window.addEventListener("hashchange", handleRoute);
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("beforeunload", stopSpeech);
}
function init() {
  normalizeState();
  setTheme(localStorage.getItem(STORAGE.theme) === "dark");
  renderHome();
  renderGlossary();
  setupEvents();
  handleRoute();
  updateScrollProgress();
}
init();
