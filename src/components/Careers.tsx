import { motion } from 'motion/react';

export default function Careers() {
  const openings = [
    {
      title: 'Teacher',
      location: 'Multiple Locations',
      type: 'Full-time',
      summary:
        'Deliver engaging and interactive lessons to young learners, fostering a positive and inclusive learning environment.',
    },
    {
      title: 'Supervisor',
      location: 'Multiple Locations',
      type: 'Full-time',
      summary:
        'Oversee classroom operations, mentor teaching staff, and ensure high-quality educational standards are maintained.',
    },
    {
      title: 'Content Writer',
      location: 'Multiple Locations',
      type: 'Full-time',
      summary:
        'Develop and create educational content, lesson plans, and learning materials for early childhood education.',
    },
    {
      title: 'Coordinator',
      location: 'Multiple Locations',
      type: 'Full-time',
      summary:
        'Manage administrative tasks, coordinate between different departments, and ensure smooth operations.',
    },
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-b from-sky-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Careers
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join Wonder Learning and help us build delightful learning experiences for children across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {openings.map((job, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{job.location} • {job.type}</p>
              <p className="text-gray-700 mb-4">{job.summary}</p>
              <motion.a
                href="#contact"
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply via Contact
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
