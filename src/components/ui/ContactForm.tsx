import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Prepare form data for Web3Forms
      const formData = new FormData();
      formData.append('access_key', 'f094912b-668a-4847-993a-71e24251bbe1');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone || 'Not provided');
      formData.append('service', data.service);
      formData.append('message', data.message);
      formData.append('from_name', data.name);
      formData.append('subject', `New Contact Form Submission from ${data.name}`);

      // Submit to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or email binoy.dcruz@gmail.com directly.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-600 mb-4">
          Thank you for reaching out. I'll get back to you within 24-48 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-green-700 underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field for spam protection - hidden from users */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
      />

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <p className="text-red-700 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-silver'
            } focus:ring-2 focus:ring-gold focus:border-transparent transition-colors`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-silver'
            } focus:ring-2 focus:ring-gold focus:border-transparent transition-colors`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-3 rounded-lg border border-silver focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
            Interested In *
          </label>
          <select
            id="service"
            {...register('service', { required: 'Please select a service' })}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.service ? 'border-red-500' : 'border-silver'
            } focus:ring-2 focus:ring-gold focus:border-transparent transition-colors`}
          >
            <option value="">Select a service</option>
            <option value="wealth-management">Wealth Management</option>
            <option value="financial-planning">Financial Planning</option>
            <option value="investment-advisory">Investment Advisory</option>
            <option value="happiness-training">Psychology of Happiness</option>
            <option value="enlightenment-coaching">Enlightenment Coaching</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
          Your Message *
        </label>
        <textarea
          id="message"
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 20, message: 'Message must be at least 20 characters' },
          })}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message ? 'border-red-500' : 'border-silver'
          } focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none`}
          placeholder="Tell me about your goals and how I can help..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full md:w-auto px-8 py-4 bg-gradient-gold text-navy font-medium rounded-lg hover:shadow-gold focus:ring-4 focus:ring-gold/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
