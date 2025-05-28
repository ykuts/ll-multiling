import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Label Ladder';
    const subtitle = searchParams.get('subtitle') || 'Data Annotation & Processing Services';

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #00305D 0%, #0086A3 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter, sans-serif',
            color: 'white',
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 'bold',
              textAlign: 'center',
              maxWidth: '80%',
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 30,
                textAlign: 'center',
                maxWidth: '70%',
                opacity: 0.9,
                lineHeight: 1.3,
              }}
            >
              {subtitle}
            </div>
          )}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              right: 40,
              fontSize: 24,
              opacity: 0.8,
            }}
          >
            labelladder.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}