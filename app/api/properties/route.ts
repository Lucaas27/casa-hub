import connDB from '@/config/db';
import Property from '@/models/Property';

// GET /api/properties
export const GET = async () => {
  try {
    await connDB();
    const properties = await Property.find({}).sort({ createdAt: -1 });
    return new Response(JSON.stringify(properties), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Something went wrong!', error: err }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
