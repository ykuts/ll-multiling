import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="Label Ladder - Data Annotation & Processing Services" />
        
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Label Ladder - Namibia's premier data processing and labeling service. We empower businesses with high-quality data preparation for AI and machine learning." />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Label Ladder - Labelling data. Powering intelligence." />
    <meta property="og:description" content="Data processing services in Namibia offering data entry, validation, cleaning, migration, and preparation." />
    <meta property="og:image" content="https://labelladder.com/assets/logo-blue-black.png" />
    <meta property="og:url" content="https://labelladder.com" />
    <meta property="og:type" content="website" />
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    <link rel="canonical" href="https://labelladder.com/" />
    <title>Label Ladder - Labelling data. Powering intelligence.</title>

        {/* Google Fonts - Montserrat as an alternative to Code Pro */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}