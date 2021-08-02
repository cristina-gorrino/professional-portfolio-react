import React, {useState} from 'react';
import Header from './components/Header';
import Portfolio from './components/pages/Portfolio';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume'

export default function MainContainer() {
    // Defautl starting page will be About Me section
    const [currentPage, setCurrentPage] = useState('About');

    // About Me, Portfolio, Contact, Resume
    //This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        <Footer />
      </div>
    );
  }