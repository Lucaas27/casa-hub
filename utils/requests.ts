export const fetchData = async (endpoint: string) => {
  try {
    // Handle the case where NEXT_PUBLIC_API_DOMAIN is not set
    if (!process.env.NEXT_PUBLIC_API_DOMAIN) {
      return [];
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}${endpoint}`, {
      cache: 'no-cache',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
