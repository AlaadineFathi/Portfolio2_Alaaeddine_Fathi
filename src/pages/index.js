// page Home : lacceuil


"use client"
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
//import ScrollTrigger from "gsap/ScrollTrigger";
import { personalDetails, workDetails, eduDetails } from "./Details";
import Image from "next/image";
import Work from "../Components/Work";

//gsap.registerPlugin(ScrollTrigger);

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const eduRef = useRef();
  
  useEffect(() => {

  }, []);

  return (
    <main className="container mx-auto max-width">












      
      <section className="md:flex justify-between items-center">
        <div>
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Salut,👋<br></br>Je m'appelle<br></br>
          </h1>
          <h1
            ref={h12}
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            style={{ color: "#49d3e9" }}
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {tagline}
          </h2>
        </div>
        <div className="mt-5 md:mt-0">
          <Image
            ref={myimageref}
            className="w-1/2 md:ml-auto rounded-full"
            src={img}
            alt="Alaaedine"
          />
        </div>
      </section>

      <section className="About mt-10" ref={aboutRef}>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold">
        À propos de moi
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section>

      <section className="mt-10" ref={workRef}>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold">
        Expérience professionnelle
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              duration={Duration}
            />
          ))
        )}
      </section>
      
      <section className="mt-10" ref={eduRef}>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-4xl xl:leading-tight font-bold">
        Éducation
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
        
      </section>
      
    </main>
  );
}

export default Home;
