import { motion } from "framer-motion";

const Faq = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="w-10/12 -mb-10 -mt-10"
      >
        <h2 className="xs:text-base sm:text-base md:text-lg lg:text-4xl font-titleFont font-bold tracking-wide text-center uppercase pb-5">
          PERGUNTAS FREQUENTES{" "}
          <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
            (FAQ)
          </span>
          :
        </h2>
        <div className="px-10 xs:pb-5 sm:pb-5 md:pb-0 lg:pb-0">
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span className="font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  QUANDO TEREI ACESSO??
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  Após a confirmação do pagamento, você imediatamente recebe um
                  e-mail com acesso à plataforma! Para pagamentos em Boleto, a
                  confirmação pode levar até 72 horas.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span className="font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  QUANTO TEMPO LEVO PARA FAZER MEU DINHEIRO LUCRAR?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  O seu resultado depende do quanto você se dedica ao curso.
                  Temos relatos de alunos que, mesmo começando do absoluto zero,
                  já no primeiro mês conseguiram fazer lucro.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span className="font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  QUAIS AS FORMAS DE PAGAMENTO?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  Cartão de Crédito, Boleto, PIX e PayPal.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-4"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-4"
              >
                <span className="font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  SE EU PARCELAR, VAI USAR O LIMITE TOTAL DO MEU CARTÃO?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-4"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-4"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  Sim. Você precisa ter o valor total da compra disponível em
                  seu limite.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-5"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-5"
              >
                <span className="font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  POSSO USAR MAIS DE UM CARTÃO PARA PAGAMENTO?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-5"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-5"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  Sim, até 2 cartões.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-6">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-6"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-6"
              >
                <span className="font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  ACEITA CARTÃO DE DÉBITO?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-6"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-6"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  Não, mas é possível utilizar o PIX, e você terá acesso
                  imediato ao Método.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-7">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-7"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-7"
              >
                <span className="font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  NÃO RECEBI MEU ACESSO, O QUE DEVO FAZER?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-7"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-7"
            >
              <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-bodyFont text-textLight xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  O seu e-mail pode interpretar o link de acesso como spam.
                  Verifique em sua caixa de “spam” ou lixo eletrônico, ao
                  encontrar, diga ao seu e-mail “Não é spam”, ou mova a mensagem
                  para sua Caixa de Entrada ou Principal. Você também pode
                  pesquisar pelo nome “Método CVE” na área de pesquisas do seu
                  e-mail Ou entre em contato conosco através do telefone 41
                  7649-0843.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Faq;
