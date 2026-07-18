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
    <section className="min-h-screen bg-[#101820] px-5 pb-24 pt-32 text-[#f6f1e8] sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00b2a9]">Process</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#f6f1e8] sm:text-6xl">
              A portfolio should feel alive, but still explain how work gets done.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#f6f1e8]/10 bg-[#f6f1e8]/6 p-2">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="block w-full rounded-[1.5rem] p-6 text-left transition hover:bg-[#f6f1e8]/6"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f6f1e8]/55">{step.label}</p>
                      <h3 className="mt-2 text-2xl font-black text-[#f6f1e8]">{step.title}</h3>
                    </div>
                    <span
                      className={`h-3 w-16 rounded-full ${isActive ? 'bg-[#00b2a9] shadow-[0_0_0_6px_rgba(0,178,169,0.18)]' : 'bg-[#f6f1e8]/10'}`}
                    />
                  </div>

                  {isActive && (
                    <p className="animate-reveal mt-5 max-w-2xl text-lg leading-8 text-[#f6f1e8]/65">
                      {step.text}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Process;
