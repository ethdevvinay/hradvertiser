import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How fast can you deliver my printing order?",
      answer: "Our standard delivery time is 24-48 hours for most printing services. For urgent orders, we offer same-day delivery within Rohtak city. Large format printing and bulk orders may take 2-3 days depending on the complexity and quantity."
    },
    {
      question: "Can I customize my design or do you provide design services?",
      answer: "Yes! We offer both options. You can bring your own design files (PDF, AI, PSD formats preferred), or our experienced design team can create custom designs for you. Design consultation is free, and we'll work with you until you're completely satisfied with the final design."
    },
    {
      question: "What materials and paper types do you print on?",
      answer: "We print on a wide variety of materials including different paper weights (80gsm to 350gsm), glossy and matte finishes, vinyl, canvas, fabric, metal sheets, acrylic, and specialty papers. We can recommend the best material based on your specific requirements and budget."
    },
    {
      question: "Do you offer bulk discounts for large orders?",
      answer: "Absolutely! We provide attractive bulk discounts for large quantity orders. The more you print, the more you save. Contact us with your requirements for a customized quote. We also offer special rates for corporate clients and repeat customers."
    },
    {
      question: "What file formats do you accept for printing?",
      answer: "We accept various file formats including PDF (preferred), AI, PSD, JPG, PNG, and TIFF. For best results, please provide high-resolution files (300 DPI minimum). Our team can also help optimize your files if needed."
    },
    {
      question: "Do you provide pickup and delivery services?",
      answer: "Yes, we offer both pickup and delivery services within Rohtak and nearby areas. Delivery charges may apply based on location and order value. For orders above ₹2000, we provide free delivery within Rohtak city limits."
    },
    {
      question: "Can I see a sample before placing a large order?",
      answer: "Certainly! We encourage customers to request samples, especially for large orders. We can provide digital proofs via email and physical samples for material and color verification. This ensures you're completely satisfied before we proceed with the full order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI payments, bank transfers, and all major credit/debit cards. For corporate clients, we also offer credit terms with proper documentation. Advance payment may be required for large orders or new customers."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-700">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers! Here are the most common questions our customers ask.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border-0 shadow-md"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-blue-50 rounded-lg transition-colors">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button 
            onClick={() => {
              const message = "Hi! I have some questions about your printing services. Can you help me?";
              const whatsappUrl = `https://wa.me/919896615867?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Ask Your Question
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;