import { NextRequest, NextResponse } from 'next/server';

export default async function handler(request: NextRequest) {
  const data = {
    pokemon: {
      name: '꼬부기',
    },
  };
  return NextResponse.json({ data });
}

export { handler as POST };
