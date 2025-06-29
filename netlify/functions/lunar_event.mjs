import { stream } from '@netlify/functions';

export default stream(async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
    body: new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode('Hello, '));
        controller.enqueue(new TextEncoder().encode('Streaming World!'));
        controller.close();
      },
    }),
  };
});

export const config = {
  path: "/vi_lunar_calendar"
};
