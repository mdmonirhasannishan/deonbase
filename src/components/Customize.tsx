// components/CustomizableSolution.tsx
const CustomizableSolution = () => {
  const features = [
    {
      title: 'UI Customization',
      description: 'Tailor themes, layouts, and components to match your brand.',
    },
    {
      title: 'Access Control',
      description: 'Set precise user permissions and security levels.',
    },
    {
      title: 'State Management',
      description: 'Adapt system behavior to your workflows.',
    },
    {
      title: 'Workflow Automation',
      description: 'Create custom processes for your team.',
    },
    {
      title: 'Reporting',
      description: 'Build dashboards with your key metrics.',
    },
    {
      title: 'Integrations',
      description: 'Connect seamlessly with other tools.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-200 mb-4">
            Built For <span className="text-primary">Your Needs</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Customize every aspect to work your way - we adapt to you.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg border-l-4 border-dark shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-3">
                <CheckIcon className="h-6 w-6 text-dark mr-2" />
                <h3 className="text-lg font-semibold text-dark">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-background p-8 rounded-lg border border-primary text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">Scale your solution anytime</h3>
            <p className="text-gray-300 mx-auto mb-6">
              Add features as you grow and remove what you don't need - complete flexibility.
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg border border-primary text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">Need something custom?</h3>
            <p className="text-gray-300 mx-auto">
              We'll build tailored solutions for your unique challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable check icon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default CustomizableSolution;
