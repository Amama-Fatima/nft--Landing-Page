import Router from "../../routes/Router"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </>
  )
}

export default Layout