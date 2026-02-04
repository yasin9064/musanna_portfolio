import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (field: string, value: string) => {
    let error = '';
    switch (field) {
      case 'name':
        if (value.length < 3) error = 'Name must be at least 3 characters';
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email address';
        break;
      case 'phone':
        if (!/^\d{10}$/.test(value)) error = 'Phone must be 10 digits';
        break;
      case 'service':
        if (!value) error = 'Please select a service';
        break;
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
        if (key === 'message') return; // Optional? Let's make it optional
        if (!formData[key as keyof typeof formData]) newErrors[key] = 'This field is required';
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <Section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Ready to start your application? Contact us today for a free consultation.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
              <div className="text-2xl">📞</div>
              <div>
                <h4 className="font-bold">Phone</h4>
                <a href="tel:+918637889243" className="text-gray-600 hover:text-primary transition-colors">+91 8637889243</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
              <div className="text-2xl">✉️</div>
              <div>
                <h4 className="font-bold">Email</h4>
                <a href="mailto:mdmusanna7@gmail.com" className="text-gray-600 hover:text-primary transition-colors">mdmusanna7@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
              <div className="text-2xl">📍</div>
              <div>
                <h4 className="font-bold">Address</h4>
                <p className="text-gray-600">Dhantola Bazar, Dhantola, Islampur, Uttar Dinajpur, West Bengal, 733202</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
             <h4 className="font-bold mb-4">Follow Us</h4>
             <div className="flex gap-4">
               {['WhatsApp', 'Facebook', 'Instagram', 'LinkedIn'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary hover:text-secondary transition-all transform hover:-translate-y-1">
                   {social[0]}
                 </a>
               ))}
             </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg relative overflow-hidden">
           {status === 'success' && (
             <div className="absolute inset-0 bg-white/90 backdrop-blur z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4">✓</div>
               <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
               <p className="text-gray-600">We will get back to you shortly.</p>
             </div>
           )}

           <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                 <input 
                   type="text" 
                   name="name" 
                   value={formData.name}
                   onChange={handleChange}
                   className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                   placeholder="John Doe"
                 />
                 {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                 <input 
                   type="tel" 
                   name="phone"
                   value={formData.phone}
                   onChange={handleChange}
                   className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                   placeholder="9876543210"
                 />
                 {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
               </div>
             </div>

             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
               <input 
                 type="email" 
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                 placeholder="john@example.com"
               />
               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
             </div>

             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
               <select 
                 name="service"
                 value={formData.service}
                 onChange={handleChange}
                 className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-200'} focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
               >
                 <option value="">Select a service</option>
                 <option value="passport">Passport Services</option>
                 <option value="pan">PAN Card</option>
                 <option value="birth">Birth Certificate</option>
                 <option value="flight">Flight Booking</option>
                 <option value="itr">ITR Filing</option>
                 <option value="gst">GST Registration</option>
                 <option value="other">Other</option>
               </select>
               {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
             </div>

             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
               <textarea 
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 rows={4}
                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                 placeholder="Any specific requirements..."
               ></textarea>
             </div>

             <Button 
               type="submit" 
               className="w-full" 
               disabled={status === 'submitting'}
             >
               {status === 'submitting' ? 'Sending...' : 'Send Message'}
             </Button>
           </form>
        </div>
      </div>
    </Section>
  );
};
