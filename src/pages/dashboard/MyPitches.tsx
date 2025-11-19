const MyPitches = () => {
  const pitches = [
  {
    id: "p1",
    title: "EcoBloom Seed Pitch",
    description: "60-second elevator pitch explaining the core problem and solution.",
    updated: "Jan 12, 2025",
    score: 7.8,
    judge: "Mark S. (AI)",
    duration: "1 min",
    status: "Completed"
  },
  {
    id: "p2",
    title: "Investor Deep Dive",
    description: "Full investor pitch covering market, financials, and business model.",
    updated: "Jan 8, 2025",
    score: 8.3,
    judge: "Barbara L. (AI)",
    duration: "4 min",
    status: "Completed"
  },
  {
    id: "p3",
    title: "Problem-Solution Pitch",
    description: "Focused pitch demonstrating the problem and proposed tech solution.",
    updated: "Jan 5, 2025",
    score: 6.9,
    judge: "Mark S. (AI)",
    duration: "2 min",
    status: "Completed"
  },
  {
    id: "p4",
    title: "Team Introduction Pitch",
    description: "Explains the team's background, expertise, and roles.",
    updated: "Dec 29, 2024",
    score: 7.1,
    judge: "Nina (AI)",
    duration: "1.5 min",
    status: "Completed"
  },
  {
    id: "p5",
    title: "Market Strategy Pitch",
    description: "Covers target segments, go-to-market plan, and customer acquisition.",
    updated: "Dec 22, 2024",
    score: 8.0,
    judge: "Robert (AI)",
    duration: "3 min",
    status: "Completed"
  }
];
 

  return (
    <div>
      {/* Page Heading */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-3 h-0.5 bg-cyan-500"></div>
        <h2 className="text-sm font-semibold uppercase text-slate-300">
          My Pitches
        </h2>
      </div>

      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Pitch Collection</h1>

        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center space-x-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
          <span>New Pitch</span>
        </button>
      </div>

      {/* Pitches Container */}
      {pitches.length === 0 ? (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-slate-700">
          <h2 className="text-xl font-semibold mb-2">No Pitches Yet</h2>
          <p className="text-slate-300 mb-4">
            Start practicing by creating your first pitch.
          </p>

          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
            Create Pitch
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pitches.map((pitch: any) => (
            <div
  key={pitch.id}
  className="bg-white/10 backdrop-blur-md border border-slate-700 p-5 rounded-xl 
             hover:bg-white/20 transition-all duration-300 
             hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
>
  {/* Title */}
  <h3 className="font-semibold text-lg text-white mb-1 tracking-wide">
    {pitch.title}
  </h3>

  {/* Description */}
  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
    {pitch.description}
  </p>

  {/* Stats Row */}
  <div className="grid grid-cols-3 gap-3 text-xs mb-4">

    {/* Score */}
    <div className="flex items-center space-x-2 bg-slate-800/50 px-2 py-1 rounded-md">
      <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      </svg>
      <span className="text-emerald-300 font-medium">{pitch.score}/10</span>
    </div>

    {/* Duration */}
    <div className="flex items-center space-x-2 bg-slate-800/50 px-2 py-1 rounded-md">
      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8H9V6a1 1 0 112 0v4z" />
      </svg>
      <span className="text-cyan-300">{pitch.duration}</span>
    </div>

    {/* Judge */}
    <div className="flex items-center space-x-2 bg-slate-800/50 px-2 py-1 rounded-md">
      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm6 7a6 6 0 00-12 0h12z"/>
      </svg>
      <span className="text-purple-300 truncate">{pitch.judge}</span>
    </div>
  </div>

  {/* Footer */}
  <div className="flex items-center justify-between mt-2">
    {/* Status */}
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium tracking-wide
        ${
          pitch.status === "Completed"
            ? "bg-emerald-900/40 text-emerald-300 border border-emerald-700/50"
            : "bg-yellow-900/30 text-yellow-300 border border-yellow-700/50"
        }`}
    >
      {pitch.status}
    </span>

    {/* View Button */}
    <button className="bg-slate-700 hover:bg-slate-600 text-white text-sm py-1.5 px-4 rounded-md 
                       transition-all font-medium shadow-sm hover:shadow-cyan-500/20">
      View
    </button>
  </div>

  {/* Last Updated */}
  <div className="mt-3 text-[11px] text-slate-400 tracking-wide">
    Last updated: {pitch.updated}
  </div>
</div>

          ))}
        </div>
      )}
    </div>
  );
};

export default MyPitches;
