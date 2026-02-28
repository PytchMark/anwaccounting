import { Calculator, FileText, PieChart, Briefcase, Users, Landmark, Search, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: "Taxation Services",
    description: "GCT, Income Tax, TCC, and strategic tax planning to minimize your liability.",
    icon: Landmark,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Bookkeeping & Payroll",
    description: "Accurate records and timely payroll processing so your team stays happy.",
    icon: Calculator,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Business Registration",
    description: "Start your journey right with company and business name registration services.",
    icon: Briefcase,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Financial Analysis",
    description: "Cash flows, projections, and variance analysis to guide your decisions.",
    icon: BarChart3,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Audit & Compliance",
    description: "Tax representations, audits, and objections handled with professionalism.",
    icon: Search,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Strategic Advice",
    description: "Business plan preparation and marketing plans for sustainable growth.",
    icon: PieChart,
    color: "bg-rose-50 text-rose-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Business Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From startups to established enterprises, we provide the financial backbone your business needs to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
