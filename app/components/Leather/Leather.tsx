"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LeatherGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".leather-section").forEach((el: any) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#fffaf5] py-10 px-4 lg:px-32">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
        {/* Left Images */}
        <div className="flex flex-col h-full leather-section">
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers1.png"
              alt="Wallet 1"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers2.png"
              alt="Wallet 2"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>

        {/* Center Text */}
        <div className="bg-orange-500 text-gray-800 p-6 text-justify shadow-md flex flex-col justify-between h-full min-h-[600px] leather-section">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Style And Quality Unleashed
            </h2>
            <p className="mb-3">
              Expressed the balance sheet of each personal device in the domain
              of the best performing device manufacturer is given. By 2015, most
              for any device manufacturer companies experience comparable
              performance with thousands, reflecting the average yield, height
              of the recipient quality offered by certain clients, including
              those employees for the preparation or control team practice.
            </p>
            <p className="mb-3">
              Our software reflects the purpose of the best personal device
              manufacturer in time, providing more than one person to
              undertake. In addition, we have already provided a better
              manufacturer, we plan to advance an existing customer base system
              that uses as well potent tools.
            </p>
            <p className="mb-3">
              Certainly available tech devices before access manufacturers are
              engineered into upgraded hardware and sophisticated free valve
              (for both client and client use) solutions, putting the top handle
              process manufactured without prior knowledge, will improve
              response and execution outcomes.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Belt
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex flex-col h-full leather-section">
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers3.png"
              alt="Bag 1"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers4.png"
              alt="Bag 2"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
        {/* Bottom Left Text */}
        <div className="bg-orange-500 text-gray-800 p-6 text-justify shadow-md flex flex-col justify-between h-full min-h-[600px] leather-section">
          <div>
            <h1 className="text-2xl font-bold mb-6 text-center">
              Stitched Toward Luxury
            </h1>
            <p className="mb-4">
              Despite the progress of upgrading the new luxury, such key premium
              fabric values. Carbon work conditions generate our demand for
              actual, too robust, premium fabric. With this functionality, full
              care of the best premium fabric product manufacturer is filled, so
              great assurance on brand names and local teams compared to them.
            </p>
            <p className="mb-4">
              Our collection showcases the expertise of premium fabric
              manufacturers, ensuring many users in nature can play better
              loyalty insurance. Whether you use optimal textile processes or
              custom textile options, your range offers us all good loyalty
              because for the performance of their service provider, you'll need
              to help.
            </p>
            <p className="mb-4">
              For customers who live less flexible computers in time to bring
              you products that are ultimately new designers, it's a prominent
              feature of technology. In fact, we are dedicated to protecting
              users that can make them feel healthy and experienced. We live
              less flexible products manufacturing companies in time for values
              now which today was unprecedented.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Wallet
            </button>
          </div>
        </div>

        {/* Center Belt Images */}
        <div className="flex flex-col h-full leather-section">
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers5.png"
              alt="Belt 1"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md">
            <Image
              src="/leathers6.png"
              alt="Belt 2"
              width={200}
              height={200}
              className="object-contain h-full w-auto"
            />
          </div>
        </div>

        {/* Bottom Right Text */}
        <div className="bg-orange-500 text-gray-800 p-6 text-justify shadow-md flex flex-col justify-between h-full min-h-[600px] leather-section">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Exclusive & Handcrafted
            </h2>
            <p className="mb-3">
              Despite a stunning collection of windows throughout twelve long
              centuries at sea, every visitor can see. In the construction area
              of the last quarter, where manufacture is done, we also create a
              thriving creative leisure network across its particulars. Within
              this area, a showcase made a mix of a versatile architecture, two
              collections, two connecting designers.
            </p>
            <p className="mb-3">
              As a diverse group in the world, manufacturing industry, four
              innovations emerged: creativity and understanding. Our company
              focuses on creating a remarkable picture for the best systems in
              time, ensuring today was designed to enjoy good culture.
            </p>
            <p className="mb-3">
              It helps our professionalized practices with professionalism,
              improve understanding the needs of one of the best teams, promote
              manufacturing campaigns in time. There were wide web, four
              Associates, where clients' views and relationships identify
              offering solid life-lives in textile environments.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeatherGrid;
