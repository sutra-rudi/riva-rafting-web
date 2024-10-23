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
};

export async function GET(request: NextRequest) {
  return NextResponse.json(mediaPaths);
}
