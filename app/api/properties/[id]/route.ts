import connDB from '@/config/db';
import Property from '@/models/Property';
import type { NextApiRequest } from 'next';

// GET /api/properties/:id
export const GET = async (request: NextApiRequest, { params: { id } }: { params: { id: string } }) => {
  try {
    await connDB();
    const property = await Property.findById(id);

    if (!property) {
      return new Response(JSON.stringify({ message: 'Property not found.' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Unexpected internal server error.', error: err }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
