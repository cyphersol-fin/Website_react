import { Badge } from "./Badge";

const ResellerSection = () => {
  const features = [
    {
      title: "Partner with CypherSOL to Transform Fintech Solutions",
      points: [
        "Are you looking to expand your business and tap into the rapidly growing fintech market? CypherSOL is inviting partners and entrepreneurs to join our Reseller Program – an exciting opportunity to represent cutting-edge financial technology products designed specifically for chartered accountants, MSME’s, DSAs, and financial advisors.",
        "With CypherSOL, you gain access to innovative solutions like the Bank Statement Analyzer and Tally Upload Utility that simplify financial reporting, streamline workflows, and enhance loan eligibility analysis for clients. As a reseller, you can bring these powerful tools to your network, offering unique value while building a profitable business.",
      ],
      image: "assets/images/transform-fintech-solution.jpeg",
    },
    {
      title: "Who Should Join the CypherSOL Reseller Program?",
      points: [
        "The CypherSOL Reseller Program is ideal for:",
        "If you have a network of clients in finance, accounting, or loan processing, or MSME’s CypherSOL’s products can complement your offerings, enabling you to deliver real value while generating revenue.",
      ],
      image: "assets/images/network.webp",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="container-padding">
        <div className="text-center mb-16">
          <Badge>Reseller Features</Badge>
          <h2 className="heading-lg mt-6">Supercharge Your Workflows</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Unlock your team's true potential with our state-of-the-art SaaS
            platform.
          </p>
        </div>

        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col md:flex-row gap-12 items-center mb-20 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-400">
                {feature.title}
              </h3>

              <ul className="space-y-4">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResellerSection;
