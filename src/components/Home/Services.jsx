import { CiDeliveryTruck } from "react-icons/ci";
import { GiBackForth } from "react-icons/gi";
import { RxTimer } from "react-icons/rx";

export default function Services() {
  const ourServices = [
    {
      icon: <CiDeliveryTruck className="text-6xl" />,
      title: "Fast Delivery",
      desc: "We deliver your products quickly and safely right to your doorstep.",
      bg: "from-green-200 to-green-300"
    },
    {
      icon: <RxTimer className="text-6xl" />,
      title: "24/7 Support",
      desc: "Our support team is available 24/7 to assist you with any questions.",
      bg: "from-blue-200 to-blue-300"
    },
    {
      icon: <GiBackForth className="text-6xl" />,
      title: "Return Policy",
      desc: "Easy and smooth return policy to ensure worry-free shopping.",
      bg: "from-yellow-200 to-yellow-300"
    }
  ];

  return (
    <div className="bg-white py-16 px-6">
      <h2 className="text-center text-3xl font-bold mb-10">Our Services</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ourServices.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${service.bg} px-6 py-8 rounded-xl flex flex-col items-center gap-4 text-center shadow-md hover:shadow-xl hover:-translate-y-2 duration-300 h-full`}
          >
            {service.icon}
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
