const express = require('express');
const app = express();
const PORT = 5000;

// 미들웨어 설정 (예: JSON 파싱)
app.use(express.json());

// 기본 라우트 설정
app.get('/', (req, res) => {
  res.send('Backend is running successfully!');
});

// 판매 관련 API 예시
app.get('/sales', (req, res) => {
  res.json({ message: 'Sales data endpoint' });
});

// 주문 관련 API 예시
app.get('/orders', (req, res) => {
  res.json({ message: 'Orders data endpoint' });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});