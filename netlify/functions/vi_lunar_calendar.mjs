export default async (req, context) => {
    console.log(req, context);
    
    const authHeaders = req.headers.get('Authorization');
    if (!authHeaders || authHeaders.split(' ')[0] !== 'Basic') {
        return new Response('401 Unauthorized', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Restricted Area"'
            }
        });
    }
    
    const encoder = new TextEncoder();
    const formatter = new Intl.DateTimeFormat("en", { timeStyle: "medium" });
    const body = new ReadableStream({
        start(controller) {
            controller.enqueue(encoder.encode("<html><body><ol>"));
            let i = 0;
            const timer = setInterval(() => {
                controller.enqueue(encoder.encode(`<li>Hello at ${formatter.format(new Date())}</li>\n\n`));
                if (i++ >= 5) {
                    controller.enqueue(encoder.encode("</ol></body></html>"));
                    controller.close();
                    clearInterval(timer);
                }
            }, 100);
        }
    });
    
    return new Response(body, {
        status: 200,
        headers: {
            'Content-Type': 'text/html'
        }
    });
};

export const config = {
    path: "/vi_lunar_calendar"
}