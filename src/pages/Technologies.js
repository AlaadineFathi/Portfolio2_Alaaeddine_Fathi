import React from "react";
import { techStackDetails } from "./Details";
import Image from "next/image";
function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    figma,
    Csharp,
    Sql,
    MySql,
    SqlServer,
    Vstudio,

  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        Pile Technologique
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
        Technologies avec lesquelles j'ai travaillé récemment
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">

        <Image src={js} title="JavaScript" alt="" />
        <Image src={html} title="html" alt="" />
        <Image src={css} title="CSS" alt="" />
        <Image src={react} title="React" alt="" />
        <Image src={redux} title="Redux" alt="" />
        <Image src={tailwind} title="Tailwind CSS" alt="" />
        <Image src={bootstrap} title="Bootstrap" alt="" />
        <Image src={sass} title="SASS" alt="" />
        <Image src={Sql} title="Sql" alt="" />
        <Image src={MySql} title="MySql" alt="" />
        <Image src={Csharp} title="Csharp" alt="" />
        


      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
        Outils
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <Image src={vscode} title="Visual Studio Code" alt="" />
        <Image src={git} title="Git" alt="Git" />
        <Image src={github} title="Github" alt="Github" />
        <Image src={figma} title="Figma" alt="Figma" />
        <Image src={npm} title="NPM" alt="NPM" />
        <Image src={SqlServer} title="SqlServer" alt="Sql Server" />
        <Image src={Vstudio} title="Visual studio" alt="Visual Studio" />

      </section>
    </main>
  );
}

export default Technologies;
