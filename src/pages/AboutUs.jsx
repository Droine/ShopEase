import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-full">
      <div className="px-4 md:px-20 py-10 text-[#000] bg-white">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">Home / About</p>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="text-gray-700">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast rate. Exclusive offers a diverse assortment in
              categories ranging from consumer.
            </p>
          </div>
          <div>
            <img
              src={
                "https://images.pexels.com/photos/31631127/pexels-photo-31631127/free-photo-of-graceful-woman-in-desert-wearing-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="About"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center">
          <div className="border p-6 rounded">
            <div className="text-2xl font-bold mb-2">10.5k</div>
            <p className="text-gray-600">Sellers active on our site</p>
          </div>
          <div className="border p-6 rounded bg-red-500 text-white">
            <div className="text-2xl font-bold mb-2">33k</div>
            <p>Monthly Product Sale</p>
          </div>
          <div className="border p-6 rounded">
            <div className="text-2xl font-bold mb-2">45.5k</div>
            <p className="text-gray-600">Customers active on our site</p>
          </div>
          <div className="border p-6 rounded">
            <div className="text-2xl font-bold mb-2">25k</div>
            <p className="text-gray-600">Annual gross sale on our site</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Tom Cruise",
                title: "Founder & Chairman",
                img: "https://i.imgur.com/1N5xu1S.png",
              },
              {
                name: "Emma Watson",
                title: "Managing Director",
                img: "https://i.imgur.com/ktE8Qh3.png",
              },
              {
                name: "Will Smith",
                title: "Product Designer",
                img: "https://i.imgur.com/4vydVkF.png",
              },
            ].map((person, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={person.img}
                  alt={person.name}
                  className="mx-auto mb-4 rounded-md object-cover h-60 w-60"
                />
                <h4 className="font-semibold text-lg">{person.name}</h4>
                <p className="text-sm text-gray-500">{person.title}</p>
                <div className="flex justify-center mt-2 space-x-4 text-gray-500">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
