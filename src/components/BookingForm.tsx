import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Send, Calendar, User, Mail, MessageSquare, Camera, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  sessionType: z.string().min(1, 'Please select a session type'),
  date: z.string().min(1, 'Please select a preferred date'),
  message: z.string().min(10, 'Please tell us a bit more about your vision'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    console.log('Booking Request:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="book" className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-red-600 uppercase tracking-[0.2em] text-xs font-medium mb-2 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Session</h2>
            <p className="text-zinc-400 font-light mb-8 leading-relaxed">
              Ready to capture something beautiful? Fill out the form below and I'll get back to you within 24 hours to discuss your vision and availability.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5">
                  <Camera className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Custom Vision</h4>
                  <p className="text-zinc-500 text-sm">Every session is uniquely tailored to your style.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5">
                  <Calendar className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-serif text-lg">Flexible Scheduling</h4>
                  <p className="text-zinc-500 text-sm">Weekend and evening slots available.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/30 backdrop-blur-xl p-10 md:p-14 border border-white/5 rounded-[2rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold flex items-center gap-2">
                    <User className="w-3 h-3" /> Full Name
                  </label>
                  <input
                    {...register('name')}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition-all duration-300 text-sm"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] uppercase tracking-wider font-bold">{errors.name.message}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Email Address
                  </label>
                  <input
                    {...register('email')}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition-all duration-300 text-sm"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] uppercase tracking-wider font-bold">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold flex items-center gap-2">
                    <Camera className="w-3 h-3" /> Session Type
                  </label>
                  <div className="relative">
                    <select
                      {...register('sessionType')}
                      className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition-all duration-300 text-sm appearance-none"
                    >
                      <option value="">Select a type</option>
                      <option value="wedding">Wedding</option>
                      <option value="portrait">Portrait</option>
                      <option value="fashion">Fashion</option>
                      <option value="event">Event</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                  {errors.sessionType && <p className="text-red-500 text-[10px] uppercase tracking-wider font-bold">{errors.sessionType.message}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    {...register('date')}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition-all duration-300 text-sm color-scheme-dark"
                  />
                  {errors.date && <p className="text-red-500 text-[10px] uppercase tracking-wider font-bold">{errors.date.message}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold flex items-center gap-2">
                  <MessageSquare className="w-3 h-3" /> Your Vision
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-red-600 outline-none transition-all duration-300 text-sm resize-none"
                  placeholder="Tell me about your dream photoshoot..."
                />
                {errors.message && <p className="text-red-500 text-[10px] uppercase tracking-wider font-bold">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-red-600 text-white font-bold uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-white hover:text-black transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-red-600/20 group"
              >
                {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Modal isOpen={isSubmitted} onClose={() => setIsSubmitted(false)}>
        <div className="text-center py-6">
          <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-red-600" />
          </div>
          <h3 className="text-3xl font-serif mb-4">Request Sent!</h3>
          <p className="text-zinc-400 font-light leading-relaxed mb-8">
            Thank you for reaching out to Vick Photography. Your booking request has been received, and I'll be in touch within 24 hours to discuss the details.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full py-4 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
}
