import Image from "next/image";
import React from "react";

function Project({ title, image, description, techstack, previewLink }) {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <Image src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
        <p className="text-content pt-4 font-light">{description}</p>
        <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
          Technologies : <span className="font-light">{techstack}</span>
        </h3>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
          

            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="underline pl font-light dark:text-white"
            >
              Aperçu
            </a>
          
          </div>
        </div>
      </div>
    </article>
    
  );
}

export default Project;
