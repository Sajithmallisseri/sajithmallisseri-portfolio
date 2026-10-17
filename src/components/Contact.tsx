import React, { useState } from 'react';
import { Mail, Globe, Send, Copy, Check, ExternalLink, HelpCircle } from 'lucide-react';
import { ContactFormData } from '../types/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [hasCopied, setHasCopied] = useState(false);
  const [submissionPrepared, setSubmissionPrepared] = useState(false);
  const [validationError, setValidationError] = useState('');

  const recipientEmail = 'sajithmallisseri@gmail.com';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please provide your name, a valid email address, and project details.');
      return;
    }

    // Prepare direct mailto URI
    const subjectLine = encodeURIComponent(
      formData.subject.trim() || `Project Inquiry from ${formData.name.trim()}`
    );
    const bodyContent = encodeURIComponent(
      `Hello Sajith,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nSubject: ${formData.subject.trim() || 'General Inquiry'}\n\nProject Details / Message:\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}`
    );

    const mailtoUrl = `mailto:${recipientEmail}?subject=${subjectLine}&body=${bodyContent}`;

    // Mark as prepared for user review & trigger email client
    setSubmissionPrepared(true);
    window.location.href = mailtoUrl;
  };

  const handleCopyMessage = () => {
    const textToCopy = `To: ${recipientEmail}\nSubject: ${formData.subject || 'Portfolio Inquiry'}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-[#091424] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context and Verified Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#159E91]">
                <span>Direct Contact</span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white [text-wrap:balance]">
                Let’s talk about your next web project or software tool.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you need a full web application built from scratch, a GST invoice billing software, or technical maintenance for existing systems, reach out directly.
              </p>
            </div>

            {/* Clearly Labelled Verified Contact Info (Strictly genuine) */}
            <div className="pt-2 space-y-4">
              {/* Email */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Direct Email
                  </span>
                  <div>
                    <a
                      href={`mailto:${recipientEmail}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors break-all"
                    >
                      {recipientEmail}
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Direct inbox response typically within 24 hours.
                  </p>
                </div>
              </div>

              {/* Official Domain */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Official Portfolio Domain
                  </span>
                  <div>
                    <a
                      href="https://sajithmallisseri.com"
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      sajithmallisseri.com
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Personal web portfolio and project repository.
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl border border-teal-200/80 dark:border-teal-900/60 bg-teal-50/50 dark:bg-teal-950/20 text-xs text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-teal-700 dark:text-teal-300">Freelance Status: </span>
              Currently accepting independent development projects, custom software commissions, and maintenance contracts.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-[#0c1a2e] p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-black dark:text-white">
                Send a Project Inquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Submissions open your email client pre-addressed to <span className="font-mono text-slate-700 dark:text-slate-300 font-semibold">{recipientEmail}</span>. No fake background server promises.
              </p>
            </div>

            {validationError && (
              <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 font-medium">
                {validationError}
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Anand Menon"
                    required
                    className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. client@example.com"
                    required
                    className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject / Service Needed
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. GST Invoicing Software / Business Website Development"
                  className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Project Details / Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirements, preferred timeline, or questions..."
                  required
                  className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs leading-relaxed focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg shadow-xs transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Open Email Client and Send</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  disabled={!formData.message.trim()}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
                >
                  {hasCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Honest behavior explanation banner */}
            {submissionPrepared && (
              <div className="p-4 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 text-xs text-slate-700 dark:text-slate-300 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-teal-800 dark:text-teal-300">
                  <Check className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>Email Launched in Client</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Your default email app was triggered with this message pre-filled to <strong className="text-slate-800 dark:text-slate-200">{recipientEmail}</strong>. If your email application didn't open automatically, you can click "Copy Message" above and paste it directly into your webmail.
                </p>
                <div>
                  <a
                    href={`mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject || 'Project Inquiry')}`}
                    className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-300 font-semibold underline text-xs"
                  >
                    <span>Click here to launch email again</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
