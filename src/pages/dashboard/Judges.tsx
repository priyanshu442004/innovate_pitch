const Judges = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">AI Judges</h1>

      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
        <p className="text-slate-300">Choose from a variety of AI judges for your pitch practice.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

          <div className="bg-slate-700 p-4 rounded-lg">
            <h3 className="font-semibold">Barbara (Finance Expert)</h3>
            <p className="text-xs text-slate-400">Focus: Financial Clarity</p>
          </div>

          <div className="bg-slate-700 p-4 rounded-lg">
            <h3 className="font-semibold">Mark (Startup Mentor)</h3>
            <p className="text-xs text-slate-400">Focus: Problem Validation</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Judges;
