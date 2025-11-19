const Score = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Score</h1>

      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
        <p className="text-slate-300">
          Track how your pitch score improves over time.
        </p>

        <div className="mt-6 text-center">
          <h2 className="text-4xl font-bold text-cyan-400">7.8 / 10</h2>
          <p className="text-slate-400 mt-2">Latest Score</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
