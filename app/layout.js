export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Magazine</title>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body
        style={{ display: 'flex', justifyContent: 'center', paddingTop: '2em' }}
      >
        {children}
      </body>
    </html>
  )
}
