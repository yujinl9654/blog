import { sendEamil } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

// 서버에서 실행!!!
// API Route에서 사용하는 Request는 노드에서 사용하는 Request와 동일 = readable string
export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValid(body)) {
    return new Response(JSON.stringify({ message: '유효하지 않는 포맷' }), {
      status: 400,
    });
  }

  //  노드 메일러를 이용하여 메일 전송
  return sendEamil(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: '메일을 성공적으로 보냈음' }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.log(error);
      return new Response(JSON.stringify({ mesasge: '메일 전송에 실패함' }), {
        status: 500,
      });
    });
}
