export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = req.body;

    console.log('Message received:', { name, email, phone, subject, message });

    res.status(200).json({ message: '✅ Message received successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
