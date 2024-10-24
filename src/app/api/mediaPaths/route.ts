import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const basePath = 'https://cms.zrmanja-camping.hr/';

const mediaPaths = {
  heroVideo: {
    url: `${basePath}wp-content/uploads/2024/06/novi-hero.mp4`,
  },
  tureSekcijaVideo: {
    url: `${basePath}wp-content/uploads/2024/06/novi-ping-pong.mp4`,
  },
  pogledajVideoSekcija: {
    url: `${basePath}wp-content/uploads/2024/06/rafting-placeholder.mp4`,
  },
};

// API route koji vraća JSON s video putanjama
export async function GET(request: NextRequest) {
  const response = NextResponse.json(mediaPaths);

  // Postavljanje dugotrajnog keširanja (1 godina)
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable'); // Cache for 1 year

  return response;
}
