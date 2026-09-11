import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DepartmentSection from "@/components/DepartmentSection";
import ProductShowcase from "@/components/ProductShowcase";
import BrandsSection from "@/components/BrandsSection";
import Footer from "@/components/Footer";
import PhotoHelpdesk from "@/components/PhotoHelpdesk";
import StoreLocator from "@/components/StoreLocator";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import WhyChooseUs from "@/components/WhyChoooseUs";
import FollowTheTrend from "@/components/FollowtheTrend";

export default function Home() {
  return (
   <>
      <Topbar />
      <Navbar />
      <Hero />
      <DepartmentSection />
      <BrandsSection />
      <ProductShowcase />
      <WhyChooseUs />
      <StoreLocator />
      <PhotoHelpdesk />
      <Testimonials />
      <TrustBadges />
      <FollowTheTrend/>
      <Footer />
    
   </>
  );
}