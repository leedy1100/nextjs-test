import { NextRequest, NextResponse } from 'next/server';

const handler = async (req: NextRequest) => {
  const searchParams = req.url.slice(req.url.indexOf('?') + 1);
  const url = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&sourcecrs=epsg:4326&output=json&orders=roadaddr&${searchParams}`;

  const naverResponse = await fetch(url, {
    method: 'GET',
    headers: {
      'X-NCP-APIGW-API-KEY-ID': process.env.NAVER_MAPS_CLIENT_ID!,
      'X-NCP-APIGW-API-KEY': process.env.NAVER_MAPS_CLIENT_SECRET!,
    },
  });

  const data = await naverResponse.json();
  return NextResponse.json(data);
};

export { handler as GET, handler as POST };
