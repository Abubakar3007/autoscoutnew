import Heading from "@/components/ui/Heading";

export default function ChooseUs() {
  const chooseCardData = [
    {
      title: "Market-driven pricing",
      image: "/icons/choose-icon-1.svg",
      description:
        "Maximize your car's value. Our market-driven pricing helps you set the right price for your vehicle, attracting serious buyers and optimizing your selling potential.",
    },
    {
      title: "Trustworthiness",
      image: "/icons/choose-icon-2.svg",
      description:
        "We prioritize honesty and integrity in all our transactions, earning the trust of countless satisfied customers.",
    },
    {
      title: "Wide range of vehicles",
      image: "/icons/choose-icon-3.svg",
      description:
        "Choose from a diverse range of quality vehicles that suit your preferences.",
    },
    {
      title: "Verified sellers",
      image: "/icons/choose-icon-4.svg",
      description:
        "Trust our platform with verified sellers for a secure car-buying experience.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Decorative background image using after pseudo-element */}
      <div className="md:after:content-[url('/images/choose-banner.png')] md:after:absolute md:after:-right-[350px] md:after:-top-[165px] relative">
        <div className="wrapper">
          <Heading
            as="h2"
            className="text-2xl leading-9 sm:text-[28px] mb-10"
          >
            Why choose us?
          </Heading>

          <div className="relative z-10 grid w-full gap-4 text-center sm:grid-cols-2 sm:gap-6 sm:text-left md:max-w-[724px]">
            {chooseCardData.map((data, index) => (
              <div
                key={index}
                className="box rounded-md bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={data.image}
                  className="mb-4 mx-auto sm:mx-0"
                  alt={data.title}
                />
                <h3 className="text-xl font-semibold leading-8">
                  {data.title}
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
