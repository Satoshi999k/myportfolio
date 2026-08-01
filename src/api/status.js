export default function handler(request, response) {
  response.status(200).json({
    status: 'ok',
    message: 'Portfolio backend is ready',
    timestamp: new Date().toISOString()
  });
}
