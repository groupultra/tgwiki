import MarkdownIt from "markdown-it";

function extractAnswerWithMarkdownIt(markdown, questionId) {
  const md = new MarkdownIt();
  const tokens = md.parse(markdown, {});

  let found = false;
  let answer = [];

  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i].type === "heading_open" &&
      tokens[i + 1]?.content.includes(`#${questionId})Q:`)
    ) {
      found = true;
      i += 2; // 跳过标题
      continue;
    }
    if (found) {
      if (tokens[i].type === "heading_open") break; // 遇到下一个问题，停止
      if (tokens[i].type === "paragraph_open")
        answer.push(tokens[i + 1].content);
    }
  }

  return answer.join("\n").trim();
}

console.log(
  extractAnswerWithMarkdownIt(
    markdownText,
    "q-what-is-telegram-what-do-i-do-here"
  )
);
