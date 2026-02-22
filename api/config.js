// Vercel Serverless：从环境变量读取 API Key 并返回 JSON，供书签整理扩展使用。
// 在 Vercel 项目设置中配置环境变量：BAIDU_KEY、ALI_KEY、DEEPSEEK_KEY（以及可选 DASHSCOPE_KEY、DASHSCOPE_API_KEY）

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  const payload = {
    BAIDU_KEY: process.env.BAIDU_KEY || "",
    ALI_KEY: process.env.ALI_KEY || "",
    DEEPSEEK_KEY: process.env.DEEPSEEK_KEY || "",
    DASHSCOPE_KEY: process.env.DASHSCOPE_KEY || "",
    DASHSCOPE_API_KEY: process.env.DASHSCOPE_API_KEY || ""
  };
  res.status(200).json(payload);
};
