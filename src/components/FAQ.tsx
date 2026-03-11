import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const QA = [
  {
    q: 'What services does Wonder Learning provide?',
    a: 'We offer preschool consulting, curriculum design, teacher training, and turnkey preschool setup services.',
  },
  {
    q: 'Do you provide custom curriculum?',
    a: 'Yes. We tailor our curriculum to age groups, school vision, and regional needs while aligning with early years best practices.',
  },
  {
    q: 'How can a preschool partner with Wonder Learning?',
    a: 'Use the Contact section to reach us. We will schedule a discovery call and share a tailored proposal.',
  },
  {
    q: 'Do you conduct teacher training workshops?',
    a: 'We run regular workshops and bespoke training sessions, on-site and virtual, across India.',
  },
  { q: 'Where are you based?', a: 'We are based in Pune and operate pan-India with hybrid/remote delivery.' },
  {
    q: 'How long does a preschool setup take?',
    a: 'Typical engagements range from 6 to 12 weeks depending on scope, facilities, and team readiness.',
  },
  { q: 'Can I buy products directly?', a: 'Use the Products section to explore items and add them to an inquiry. Our team will get back to you.' },
  {
    q: 'Do you offer demos?',
    a: 'Yes. We can demo products, curriculum modules, and platform features on request.',
  },
  { q: 'Is there post-implementation support?', a: 'We provide ongoing support, check-ins, and training refreshers as needed.' },
  { q: 'How do I apply for careers?', a: 'See the Careers section for current openings and apply via the Contact section.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-blue-50 via-white to-sky-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Clear answers to common questions about our services, products, and partnerships.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {QA.map((item, i) => (
            <motion.div key={i} className="mb-3 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpen((v) => (v === i ? null : i))}
              >
                <span className="font-medium text-gray-900">{item.q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} className="text-2xl leading-none text-sky-600">
                  ▾
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-5 text-gray-700"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
