import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-[50dvh] pt-5 pb-10">
      <AccordionItem value="item-1">
        <AccordionTrigger>Ogret.io nedir?</AccordionTrigger>
        <AccordionContent>
          Ogret.io, Chat GPT-4&apos;ün gücünün yardımıyla müfredat derslerinin
          anlatımında yapay zekanın gücünü ortaya koyar.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Kullanımı kolay mı?</AccordionTrigger>
        <AccordionContent>
          Kolay uygulama arayüzü sayesinde dilediğiniz dersi öğrenmeye
          başlayabilirsiniz.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Ogret.io ücretsiz mi?</AccordionTrigger>
        <AccordionContent>
          Maalesef hayır. Fiyatlar sekmesinden uygulama ücretlerine göz
          atabilirsiniz.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
