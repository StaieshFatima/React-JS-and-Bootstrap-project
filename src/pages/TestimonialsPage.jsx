import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function TestimonialsPage() {
  return (
    <>
      <div className="strip">
        <Navbar variant="dark" />
      </div>
      <Testimonials />
      <Footer />
    </>
  );
}

export default TestimonialsPage;