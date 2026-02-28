import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2, Calculator, Briefcase, FileText, User } from 'lucide-react';
import { cn } from '@/src/utils/cn';

type FormData = {
  service: string;
  businessType: string;
  revenue: string;
  name: string;
  email: string;
};

const steps = [
  { id: 'service', title: 'What service do you need?', icon: Calculator },
  { id: 'business', title: 'Your business type?', icon: Briefcase },
  { id: 'contact', title: 'How can we reach you?', icon: User },
];

const services = [
  "Tax Planning & Filing",
  "Bookkeeping & Accounting",
  "Business Registration",
  "Payroll Services",
  "Financial Projections",
  "Other Business Advice"
];

const businessTypes = [
  "Individual / Freelancer",
  "Small Business (1-10 employees)",
  "Medium Enterprise (11-50 employees)",
  "Corporation",
  "Non-Profit"
];

export default function LeadMachine() {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedService = watch('service');
  const selectedBusinessType = watch('businessType');

  const onSubmit = (data: FormData) => {
    console.log('Lead Captured:', data);
    setIsSubmitted(true);
    
    // Construct WhatsApp message
    const message = `Hi ANW Accounting! My name is ${data.name}. I'm a ${data.businessType} looking for ${data.service}. You can reach me at ${data.email}.`;
    const whatsappNumber = "18761234567"; // Placeholder
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Redirect after a short delay to show success
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <section id="get-started" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get a Tailored Quote</h2>
          <p className="text-slate-600">Answer 3 quick questions to qualify for our premium services.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Progress Bar */}
              <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
                {steps.map((step, idx) => (
                  <div key={step.id} className="relative z-10 flex flex-col items-center">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300",
                      idx <= currentStep ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"
                    )}>
                      {idx < currentStep ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-5 h-5" />}
                    </div>
                    <span className={cn(
                      "text-xs font-medium mt-2 hidden md:block",
                      idx <= currentStep ? "text-indigo-600" : "text-slate-400"
                    )}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold mb-6">What service are you interested in?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services.map(service => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setValue('service', service);
                            nextStep();
                          }}
                          className={cn(
                            "p-4 rounded-xl border-2 text-left transition-all hover:border-indigo-600 hover:bg-indigo-50",
                            selectedService === service ? "border-indigo-600 bg-indigo-50" : "border-slate-100"
                          )}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold mb-6">Tell us about your business</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {businessTypes.map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setValue('businessType', type);
                            nextStep();
                          }}
                          className={cn(
                            "p-4 rounded-xl border-2 text-left transition-all hover:border-indigo-600 hover:bg-indigo-50",
                            selectedBusinessType === type ? "border-indigo-600 bg-indigo-50" : "border-slate-100"
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    <button 
                      type="button" 
                      onClick={prevStep}
                      className="text-slate-400 text-sm hover:text-slate-600"
                    >
                      ← Back
                    </button>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold mb-4">Final Step: Your Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input
                          {...register('name', { required: true })}
                          className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input
                          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                          className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button 
                        type="button" 
                        onClick={prevStep}
                        className="flex-1 p-4 rounded-xl border border-slate-200 font-semibold hover:bg-slate-50"
                      >
                        Back
                      </button>
                      <button 
                        type="submit"
                        className="flex-1 bg-indigo-600 text-white p-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                      >
                        Get Started <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Information Captured!</h3>
              <p className="text-slate-600 mb-8">Redirecting you to WhatsApp to start your consultation...</p>
              <div className="animate-pulse text-indigo-600 font-medium">Please wait...</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
