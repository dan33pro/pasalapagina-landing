import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Pasa La Página</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
