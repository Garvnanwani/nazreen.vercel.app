import About from './About'
import Navbar from './Navbar'
import Skills from './Skill'
import Projects from './Project'
import Contact from './Contact'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      
    </div>
  )
}
