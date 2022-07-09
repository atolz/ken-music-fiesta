// pages/_document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" /> */}

        {/* Prevent Layout Shifting due/Layout Janking to FOUT and FOIT **:rel="preload" display=optional */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=optional" rel="preload" as="font" /> */}

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}

        {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,800&display=swap" type="font/woff2" as="font" rel="preload" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,800&display=swap" rel="stylesheet" />

        {/* Next downloads the font at build time */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,800&display=optional" rel="stylesheet" /> */}

        <link rel="preload" href="/bg-home-min.png" as="image"></link>
        <link rel="preload" href="/flare.jpg" as="image"></link>
        <link rel="prefetch" href="/3d-hand-card-2.svg"></link>
        <link rel="prefetch" href="/seerbit-2.png"></link>
        <link rel="prefetch" href="/3d-hand-card.png"></link>
        <link rel="prefetch" href="/3d-trophy.svg"></link>
        <link rel="prefetch" href="/3d-ticket.svg"></link>
        <link rel="prefetch" href="/3d-ticket-1.png"></link>
        <link rel="prefetch" href="/3d-tickets-used.svg"></link>
        <link rel="prefetch" href="/success.svg"></link>
        <link rel="icon" href="/new_logo_ico.png" sizes="0x16" type="image/png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
