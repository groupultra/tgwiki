import axios from "axios";
function _delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function fetch(content: any) {
  const apiConfigs = [
    {
      url: "https://29qg.com/v1/chat/completions",
      apiKey: "sk-rjViQasjh9byXLFcD775Bd0bD1Aa4d31Aa90F96b7dBe3899",
    },
    {
      url: "https://api.openai.com/v1/chat/completions",
      apiKey:
        "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", // OpenAI 官方 API Key
    },
  ];
  const headersTemplate = {
    "Content-Type": "application/json",
  };
  const maxRetries = 5;
  const retryDelay = 2000;
  let attempt = 0;
  let retry403Count = 0;
  let currentApiIndex = 0;
  // 设置请求数据
  const data = {
    model: "gpt-4o-mini", // 可以根据需要修改模型名称
    messages: [
      {
        role: "user",
        content,
      },
    ],
    max_tokens: 1000,
  };

  const timeout = 600000;
  while (attempt < maxRetries) {
    try {
      const { url, apiKey } = apiConfigs[currentApiIndex];
      console.log(`尝试请求 API: ${url} (第 ${attempt + 1} 次尝试)`);
      const headers = {
        ...headersTemplate,
        Authorization: `Bearer ${apiKey}`,
      };
      const response = await axios.post(url, data, { headers, timeout });
      return response.data; // 返回请求响应数据
    } catch (error: any) {
      const status = error?.response?.status;
      console.log(
        `请求失败 (第 ${attempt + 1} 次)，错误: ${
          error.message
        }, 状态码: ${status}`
      );
      if (status === 403) {
        retry403Count += 1;
        console.log(`403 次数: ${retry403Count}`);

        // 如果 403 次数达到 3 次，切换到 OpenAI 官方 API + 对应 API Key
        if (retry403Count >= 3 && currentApiIndex === 0) {
          currentApiIndex = 1; // 切换 API
          retry403Count = 0; // 重置 403 计数
        }
      }

      attempt += 1;

      if (attempt >= maxRetries) {
        throw new Error("请求失败，达到最大重试次数");
      }

      await _delay(retryDelay); // 等待 2 秒后重试
    }
  }
}
