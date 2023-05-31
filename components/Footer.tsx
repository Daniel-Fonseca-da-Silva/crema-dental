const Footer = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 transition-300 shadow-2xl bg-footerColor">
      <div className="w-10/12 -mb-10 -mt-10">
        <div className="flex flex-col items-center">
          <p className="xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-3xl font-bodyFont tracking-wide uppercase text-center">
            COPYRIGHT 2023 -{" "}
            <a
              href="https://dafon.dev/pt/main/"
              className="text-textSpecialLinkColor hover:text-btnColor2"
            >
              @Dafon
            </a>{" "}
            - TODOS OS DIREITOS RESERVADOS
          </p>
          <p className="xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-3xl md:text-basefont-bodyFont tracking-wide uppercase text-center">
            <a
              href=""
              className="text-textSpecialLinkColor hover:text-btnColor2"
            >
              Termos de uso
            </a>{" "}
            |{" "}
            <a
              href=""
              className="text-textSpecialLinkColor hover:text-btnColor2"
            >
              Política de Privacidade
            </a>{" "}
            |{" "}
            <a
              href="mailto:enricoganchiel@gmail.dev"
              className="text-textSpecialLinkColor hover:text-btnColor2"
            >
              contato
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
