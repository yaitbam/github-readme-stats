export default function handler(req, res) {
  res.json({ pat: process.env.PAT_1 ? "found" : "not found" });
}
