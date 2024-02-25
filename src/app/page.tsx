"use client";

import FAQ from "@/components/FAQ";
import Skeleton from "@/components/Skeleton";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { LampDemo } from "@/components/ui/lamp";
import { fetchFromSupabase } from "@/lib/fetch-profile";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="flex flex-col items-center gap-5">
          <LampDemo />

          <CardContainer className="inter-var">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                alt="landing page image "
                src={"/landing.svg"}
                width={800}
                height={1000}
                className="mt-10 md:mt-20 scale-75 md:scale-100 border-b-2 border-t-2 border-primary rounded-md"
              />
            </CardItem>
          </CardContainer>

          <Image
            alt="chat gpt logo"
            src={"/chatgpt-logo.svg"}
            width={40}
            height={40}
            className="mt-10"
          />
          <h1 className="font-light">GPT-4 ile güçlendirildi</h1>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="mt-20 flex flex-col md:flex-row gap-5 items-center md:space-x-20 w-[75dvh]">
              {/* <Image
              alt="yapay zeka"
              src={"/yapay-zeka-2.jpg"}
              width={450}
              height={400}
              className="rounded-md border-l-2 border-primary p-1"
            /> */}
              <CardContainer className="inter-var">
                <CardBody>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      alt="yapay zeka"
                      src={"/yapay-zeka-2.jpg"}
                      width={450}
                      height={400}
                      className="rounded-md border-l-2 border-primary p-1"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
              <div className="flex flex-col">
                <div className="space-y-10 flex items-center flex-col md:flex-none">
                  <h1 className="flex w-[60px] text-5xl justify-center font-semibold border-l-2 border-r-2 border-primary p-1">
                    AI
                  </h1>
                  <h2 className="flex justify-center items-center text-2xl font-light border-b-2 border-t-2 border-primary p-1 ">
                    Yapay, ama ne yapay?
                  </h2>
                </div>
              </div>
            </div>
            <div className=" mt-10 flex flex-col md:flex-row gap-5  items-center md:space-x-20 w-[75dvh]">
              <div className="flex flex-col">
                <div className="flex items-center flex-col md:flex-none space-y-10 ">
                  <h1 className="text-5xl flex  justify-center w-[250px] font-semibold border-l-2 border-r-2 border-primary">
                    Ulaşılabilir
                  </h1>
                  <h1 className="text-2xl font-light  border-b-2 border-t-2 border-primary p-1">
                    Tüm içerikler bir tık yakınında...
                  </h1>
                </div>
              </div>

              <CardContainer className="inter-var">
                <CardBody>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      alt="yapay zeka"
                      src={"/robot-ve-insan-2.jpg"}
                      width={450}
                      height={400}
                      className="rounded-md  border-r-2 border-primary p-1"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
          {/* <ContactForm /> */}
          <FAQ />
        </div>
      )}
    </div>
  );
}
