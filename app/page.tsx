/** @format */
import Main from "@/components/main";
import Navbar from "../components/navbar";
import Carousel from "@/components/Carousel";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Services from "@/components/Services";
import About from "@/components/About";
import ClientReviews from "@/components/ClientReviews";

export default function Home() {
  return (
    <div
      className="w-screen h-screen "
      data-cursor-type="18"
      data-cursor-color="white"
      data-cursor-text-color="white"
      data-cursor-text="MICHAEL — UBEK — MICHAEL"
      data-cursor-text-image="Yep! 25 chars are allowed"
      data-cursor-size="1px"
    >
      <div className="absolute z-10 top-0 left-0 w-full">
        <Navbar />
        <Main />
        <Carousel />
        <Services />
        <About />
        <Projects />
        <ClientReviews />
        <Contact />
        <hr className="border-gray-600"/>
        <p className="text-xs py-3 text-center px-3">
          {" "}
          Credits to{" "}
          <a href="https://preview.themeforest.net/item/mikon-angular-personal-portfolio-template/full_screen_preview/47436527">
            Envato Market
          </a>
          , <a href="https://www.adeolaadeoti.site/">Adeola Adeoti</a> and{" "}
          <a href="https://codeefly.net/wp/zyan/">Codeefly</a> for the
          inspiration
        </p>
      </div>
    </div>
  );
}
