import Footer from "@modules/layout/templates/footer"
import AnnoucementBar from "@modules/header/component/AnnoucementBar";
import Nav from "@modules/layout/templates/nav"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <AnnoucementBar/>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
