import { NextRequest, NextResponse } from 'next/server';

const handler = async (req: NextRequest) => {
  const searchParams = req.url.slice(req.url.indexOf('?') + 1);
  const url = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&sourcecrs=epsg:4326&output=json&orders=addr,admcode,roadaddr,admcode&${searchParams}`;
  console.log(url);
  const naverResponse = await fetch(url, {
    method: 'GET',
    headers: {
      'X-NCP-APIGW-API-KEY-ID': process.env.NAVER_MAPS_CLIENT_ID!,
      'X-NCP-APIGW-API-KEY': process.env.NAVER_MAPS_CLIENT_SECRET!,
    },
  });

  if (!naverResponse.ok) {
    throw new Error(`Naver API 요청 오류: ${naverResponse.statusText}`);
  }

  const data = await naverResponse.json(); // Naver API 응답 받기
  return NextResponse.json(data); // 클라이언트에 응답 보내기
};

export { handler as GET, handler as POST };
