import { NextRequest, NextResponse } from 'next/server';

const handler = (request: NextRequest) => {
  const data = {
    pokemon: {
      name: '꼬부기',
    },
  };
  return NextResponse.json({ data });
};

export { handler as GET, handler as POST };
