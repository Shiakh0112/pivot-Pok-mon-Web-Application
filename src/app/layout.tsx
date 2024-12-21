import { PokemonProvider } from "../context/PokemonContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <PokemonProvider>{children}</PokemonProvider>
      </body>
    </html>
  );
}
