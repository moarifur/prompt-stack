import "./globals.css";
import QueryProvider from "../providers/QueryProvider";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
            {children}
        </QueryProvider>
      </body>
    </html>
  );
}

export default RootLayout