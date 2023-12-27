import FAQ from "@/components/component/FAQ";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 ">
        <div className="flex justify-center mt-20 text-8xl font-bold w-full  bg-gradient-to-b from-indigo-600  text-transparent bg-clip-text">
          Ogret.io ile <br /> öğrenmeye <br /> hazır mısın?
        </div>
        <Image
          alt="landing page image "
          src={"/landing.svg"}
          width={800}
          height={1000}
          className="mt-20 border-b border-t border-indigo-300 rounded-md"
        />
        <Image
          alt="chat gpt logo"
          src={"/chatgpt-logo.svg"}
          width={40}
          height={40}
        />
        <h1 className="font-light">GPT-4 ile güçlendirildi</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-20 flex flex-row items-center space-x-20 w-[75dvh]">
            <Image
              alt="yapay zeka"
              src={"/yapay-zeka.jpg"}
              width={450}
              height={400}
              className="rounded-md border-l border-indigo-300 p-1"
            />
            <div className="flex flex-col">
              <div className=" pl-10 space-y-10 ">
                <h1 className="flex w-[60px] text-5xl justify-center font-semibold border-l border-r border-indigo-300 p-1">
                  AI
                </h1>
                <h2 className="text-2xl font-light border-b border-t border-indigo-300 p-1 ">
                  Yapay, ama ne yapay?
                </h2>
              </div>
            </div>
          </div>
          <div className=" mt-10 flex flex-row items-center space-x-20 w-[75dvh]">
            <div className="flex flex-col">
              <div className="flex flex-col pl-10 space-y-10 ">
                <h1 className="text-5xl flex justify-center w-[250px] font-semibold border-l border-r border-indigo-300">
                  Ulaşılabilir
                </h1>
                <h1 className="text-2xl font-light  border-b border-t border-indigo-300 p-1">
                  Tüm içerikler bir tık yakınında...
                </h1>
              </div>
            </div>
            <Image
              alt="yapay zeka"
              src={"/robot-ve-insan.jpg"}
              width={450}
              height={400}
              className="rounded-md  border-r border-indigo-300 p-1"
            />
          </div>
        </div>
        <ContactForm />
        <h1 className="text-5xl flex items-center justify-center">SSS</h1>
        <FAQ />
      </div>
    </>
  );
}
