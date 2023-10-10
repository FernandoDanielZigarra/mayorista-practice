import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from 'prop-types'

function MainLayout({children}) {
  return (
   <div className="flex flex-col h-screen w-full">
    <Header />
    {children}
    <Footer />
   </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout
