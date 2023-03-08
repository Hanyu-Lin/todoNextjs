import ToasterProvider from "./components/ToasterProvider";
import "./globals.css";
import Nav from "./Nav";

export const metadata = {
  title: "Todos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-4 md:mx-48 lg:mx-96">
        <Nav />
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
