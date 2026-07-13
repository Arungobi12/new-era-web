import { useState } from 'react';

const steps = [
  {
    title: 'Discover',
    label: '01',
    text: 'Map the user, outcome, data, constraints, and the fastest useful version of the product.',
  },
  {
    title: 'Design',
    label: '02',
    text: 'Shape the interface around hierarchy, movement, accessibility, and clear conversion paths.',
  },
  {
    title: 'Develop',
    label: '03',
    text: 'Build responsive React components, wire the logic, connect APIs, and keep the code maintainable.',
  },
  {
    title: 'Deploy',
    label: '04',
    text: 'Optimize performance, verify the flow, prepare handoff notes, and ship a polished release.',
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#08090d] px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2dd4bf]">Process</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
              A portfolio should feel alive, but still explain how work gets done.
            </h2>
          </div>

          <div className="border border-white/10">
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveStep(index)}
                className="block w-full border-b border-white/10 p-6 text-left last:border-b-0"
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-white/35">{step.label}</p>
                    <h3 className="mt-2 text-2xl font-black text-white">{step.title}</h3>
                  </div>
                  <span className={`h-3 w-16 ${activeStep === index ? 'bg-[#2dd4bf]' : 'bg-white/10'}`} />
                </div>
                {activeStep === index && (
                  <p className="animate-reveal mt-5 max-w-2xl text-lg leading-8 text-white/65">
                    {step.text}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
