import React, {useState} from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact'

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    return <Contact />
    // About Me, Portfolio, Contact, Resume
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    // const renderPage = () => {
    //   if (currentPage === 'About') {
    //     return <About />;
    //   }
    //   if (currentPage === 'Portfolio') {
    //     return <Portfolio />;
    //   }
    //   if (currentPage === 'Contact') {
    //     return <Contact />;
    //   }
    //   return <Resume />;
    // };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {/*renderPage()*/}
        <Footer />
      </div>
    );
  }