import { superPreview } from "@/public/assets";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 mt-10">
      <div className="w-10/12 my-10">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-auto md:w-2/4">
            <Image
              className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src={superPreview}
              alt="Pasta dental Glister demostración"
            />
          </div>
          <div className="mx-auto md:w-2/4">
            <h2 className="font-titleFont xs:text-base xs:text-center sm:text-base xs:pt-40 md:pt-0 md:text-lg lg:text-5xl font-semibold uppercase text-textDark">
              Análisis de los{" "}
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
                ingredientes
              </span>
            </h2>
            <p className="lg:text-2xl xs:text-sm sm:text-lg xs:text-center font-bodyFont tracking-wide py-6">
              Eu sou Enrico Ganchiel, Investidor no ramo de aplicações há mais
              de uma década. Já prestei consultoria para dezenas de arrematantes
              nas mais variadas questões de criptomoedas, leilões, e
              planejamento patrimonial. O meu propósito é desmistificar e
              democratizar o conhecimento sobre o mercado de criptomoedas, para
              que mais pessoas possam ganhar dinheiro e aproveitar as diversas
              oportunidades desse mercado. Atualmente, além de investir na
              Binance, sou fundador da Escola do cripto+ e através do meu
              método, já ensinei mais de 3.000 alunos a, mesmo sem experiência,
              começar nesse mercado e comprarem suas primeiras moedas por meio
              de aplicações.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/5 border border-t border-gray-700"></div>
    </section>
  );
};

export default AboutMe;
