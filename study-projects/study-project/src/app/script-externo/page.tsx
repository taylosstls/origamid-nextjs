import Script from 'next/script';

export default async function ScriptPage() {
  // afterInteractive -> Depois do carregamento do site
  // beforeInteractive -> Antes do carregamento do site
  return (
    <main>
      <h1>Script Externo</h1>


      
      <Script id='script-teste'>
        {`console.log('Hello World kkkk')`}
      </Script>

      <Script
        id="idade-legal"
        strategy="beforeInteractive"
        src="https://api.origamid.online/scripts/idade-legal.min.js"
      />

      <Script
        id="google-tag-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX"
      ></Script>

      <Script id="google-tag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXX');
        `}
      </Script>

    </main>
  )
}