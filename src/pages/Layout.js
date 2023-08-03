// le master page pour eviter l appel du header et le footer dans chaque component

import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}
