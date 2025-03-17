import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { fetch } from "./fetch";
const __dirname = dirname(fileURLToPath(import.meta.url));

export async function readMk(lng: string, key: string): Promise<string> {
  const mkDirPath = path.join(__dirname, "../markdownFiles", lng, key + ".md");
  const sourceDirPath = path.join(
    __dirname,
    "../markdownFiles",
    "source",
    key + ".md"
  );
  // 检测文件是否存在
  if (fs.existsSync(mkDirPath)) {
    const mkContent = fs.readFileSync(path.resolve(mkDirPath), "utf-8");
    return mkContent;
  } else if (fs.existsSync(sourceDirPath)) {
    try {
      const mkContent = fs.readFileSync(path.resolve(sourceDirPath), "utf-8");
      // 根据这个内容调用翻译接口 创建对应语言的markdown文件
      let prompt = [
        {
          type: "text",
          text: `
          ${mkContent}
          上面是一个markdown文件的内容，请你将其翻译为${lng}语言，要保持原有的markdown格式比如链接图片，不要添加任何多余的内容。返回一个字符串给我`,
        },
      ];
      const content = await fetch(prompt);
      let newContent = content.choices[0]?.message?.content;
      if (newContent.startsWith("```markdown")) {
        newContent = newContent.replace("```markdown", "");
      }
      if (newContent.endsWith("```")) {
        newContent = newContent.replace(/\`\`\`$/, "");
      }
      // 去掉markdwon前面的空格和最后的空格
      newContent = newContent.replace(/^\s+|\s+$/g, "");
      console.log(newContent);
      fs.writeFileSync(path.resolve(mkDirPath), newContent);
      return newContent;
    } catch (error) {
      return "not found";
    }
  } else {
    return "not found";
  }
}
