import accidentDeath from '@/utils/accidentdeath';
import { NextRequest, NextResponse } from 'next/server';
import randomCoordinates from '@/dummy/weighted_seoul_coordinates.json';

const handler = (request: NextRequest) => {
  const data = randomCoordinates.coordinate;
  return NextResponse.json({ data });
};

export { handler as GET, handler as POST };
