import { put } from '@vercel/blob';

export default async function handler(request, response) {
  // Only accept POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { filename } = request.body;

  try {
    // Generate a secure, signed upload URL
    const { url } = await put(filename, 'placeholder', {
      access: 'public',
    });

    response.status(200).json({ url });
  } catch (error) {
    console.error('Upload error:', error);
    response.status(500).json({ error: error.message });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4.5mb',
    },
  },
};