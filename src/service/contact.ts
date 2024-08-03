import { EmailData } from './email';

// 클라이언트측에서 실행!!!
export async function sendContactEmail(email: EmailData) {
  // API route에 이메일 전송을 위한 요청을 보냄 (fetch)
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '메일 전송에 실패하였습니다.');
  }
  return data;
}
