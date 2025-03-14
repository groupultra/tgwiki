const fs = require("fs");
const path = require("path");

// 读取文件内容
const filePath = path.join(__dirname, "answer.md"); // 确保文件名为 faq.txt
const content = fs.readFileSync(filePath, "utf-8");
console.log(content);
// 正则表达式匹配标题和内容
const regex = /###\s\[/g;
const matches = [...content.matchAll(regex)];
console.log(matches);
// // 处理匹配结果
// const result = matches.map((match) => {
//   const [_, key, q, a] = match;
//   return {
//     key,
//     title: q,
//     q,
//     a: a.trim().replace(/\n/g, "\\n"), // 处理换行符
//   };
// });

// // 保存为 JSON 文件
// const outputPath = path.join(__dirname, "faq.json");
// fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));

// console.log("JSON 文件已生成:", outputPath);
