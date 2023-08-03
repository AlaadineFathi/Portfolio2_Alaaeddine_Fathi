import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-2 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
      
        <a
          className="font-bold"
          href="https://github.com/AlaadineFathi/AlaadineFathi"          
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>{" "}
        {"  |  "}
        <a
          className="font-bold"
          href="https://www.linkedin.com/in/alaaeddine-fathi-57b40126a/"          
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>{" "}

      </p>
    </footer>
  );
}
export default Footer;