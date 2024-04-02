import "../styles/globals.css";
import 'tailwindcss/tailwind.css'
import { AuthProvider } from "../data/context/authcontext";
import { AppProvider } from "../data/context/AppContext";

function MyApp({ Component, pageProps }: { Component: React.ElementType; pageProps: any }) {
  return (
    <AppProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </AppProvider>
  );
}

export default MyApp;