'use client';
import { useState, useEffect } from 'react';
import { database, push, ref } from '../../firebase/config';
import BgEffect from '../../components/BgEffect';

type Particle = {
  left: string;
  top: string;
  width: string;
  height: string;
  animation: string;
  animationDelay: string;
};

const MeetingForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    title: '',
    description: '',
    date: '',
    time: '',
    duration: '30',
    reminders: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 8 + 2}px`,
      height: `${Math.random() * 8 + 2}px`,
      animation: `float ${Math.random() * 15 + 10}s linear infinite`,
      animationDelay: `${Math.random() * 25}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const meetingData = {
        ...formData,
        createdAt: Date.now(),
      };

      const emailResponse = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'monirhasannishan811@gmail.com',
          to: 'mhnishan711@gmail.com',
          subject: `Meeting Scheduled: ${formData.title}`,
          message: `
            <h2>Meeting Scheduled</h2>
            <p>email:${formData.clientEmail}</p>
            <ul>
              <li><strong>Title:</strong> ${formData.title}</li>
              <li><strong>Date:</strong> ${formData.date}</li>
              <li><strong>Time:</strong> ${formData.time}</li>
              <li><strong>Duration:</strong> ${formData.duration} minutes</li>
            </ul>
            <p>${formData.reminders ? 'Reminders will be sent before the meeting.' : ''}</p>
          `,
        }),
      });

      const emailResult = await emailResponse.json();

      if (!emailResponse.ok) {
        throw new Error(emailResult.message || 'Failed to send confirmation email');
      }

      const meetingsRef = ref(database, 'meetings');
      await push(meetingsRef, meetingData);

      setSubmitSuccess(true);
      setFormData({
        clientName: '',
        clientEmail: '',
        title: '',
        description: '',
        date: '',
        time: '',
        duration: '30',
        reminders: true,
      });

      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err: any) {
      console.error('❌ Submission error:', err.message);
      setError(err.message || 'Failed to schedule meeting');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative h-[51.4]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-black from-15% via-primary/70 via-50% to-black to-85%">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_70%)] animate-[pulse_15s_infinite]" />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="relative z-10 w-full h-full max-w-2xl" />
        </div>

        {/* Floating particles - now hydration-safe */}
        {particles.map((particle, i) => (
          <div
            key={`bg-particle-${i}`}
            className="absolute rounded-full bg-blue-500/20"
            style={particle}
          />
        ))}
      </div>

      {/* Form Content */}
      <div className="relative mt-20 w-full h-full flex items-center justify-center p-4">
        <div className="bg-background p-6 rounded-lg border border-primary shadow-sm max-w-2xl w-full relative z-10">
          <h2 className="text-2xl font-bold text-slate-200 mb-6">Schedule a Meeting</h2>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg">
              <p className="text-green-300">Meeting scheduled and email sent!</p>
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg">
              <p className="text-red-300">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="clientName"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="clientEmail"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="clientEmail"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                Reason *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">
                  Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-300 mb-1">
                  Duration *
                </label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                </select>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="reminders"
                name="reminders"
                checked={formData.reminders}
                onChange={handleChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-700 rounded"
              />
              <label htmlFor="reminders" className="ml-2 block text-sm text-gray-300">
                Send email reminders
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary hover:bg-primary-dark text-white font-medium py-4 px-4 rounded-md transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Meeting'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MeetingForm;
