import Container from "@/components/container";
import { motion } from "framer-motion";
import { delayedFade } from "@/helpers/transitions";

export default function Footer() {
  const handleClick = (e, url) => {
    e.preventDefault();
    const targetId = url.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const footerSections = [
    {
      title: "Studio",
      links: [
        { label: "About", url: "#about" },
        { label: "Philosophy", url: "#philosophy" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Approach", url: "#process" },
        { label: "Capabilities", url: "#services" },
      ],
    },
    {
      title: "Connect",
      links: [{ label: "Contact", url: "#contact" }],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <Container extraClasses="pt-16 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Colonne gauche - Slogan */}
          <motion.div
            className="md:col-span-4"
            variants={delayedFade}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <h3 className="text-xl md:text-2xl font-neueLight tracking-wide text-black leading-relaxed max-w-xs font-semibold">
              Creative studio for brands building the future.
            </h3>
          </motion.div>

          {/* Colonnes de navigation */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={delayedFade}
                initial="initial"
                animate="enter"
                exit="exit"
                transition={{ delay: 0.1 * sectionIndex }}
              >
                <h4 className="text-base font-neueRegular text-black mb-2">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        onClick={(e) => handleClick(e, link.url)}
                        className="relative group text-sm font-neueLight text-gray hover:text-black transition-colors duration-300 cursor-pointer inline-block"
                      >
                        {link.label}
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer bottom - Copyright */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-16 pt-2 space-y-4 sm:space-y-0"
          variants={delayedFade}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <p className="text-sm font-neueLight text-black">© 350Lab Studio</p>
          <p className="text-sm font-neueLight text-black">
            Copyright © 2025 350Lab
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
