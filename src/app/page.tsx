// components
import {Navbar} from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Clients/>
            <Skills/>
            <Projects/>
            <Resume/>
            {/*<Testimonial/>*/}
            {/*<PopularClients/>*/}
            {/*<ContactForm/>*/}
            {/*<Footer/>*/}
        </>
    );
}
