const RecordedSessions = () => {
  const AI_JUDGES = {
    barbara: { name: "Barbara L.", role: "Finance Analyst", color: "text-purple-300", avatar: "🧮" },
    mark: { name: "Mark S.", role: "Startup Mentor", color: "text-cyan-300", avatar: "💡" },
    nina: { name: "Nina", role: "Pitch Coach", color: "text-pink-300", avatar: "🎤" },
    robert: { name: "Robert", role: "Market Expert", color: "text-green-300", avatar: "📈" },
    olivia: { name: "Olivia", role: "Product Strategist", color: "text-yellow-300", avatar: "🧠" }
  };

  const sessions = [
    {
      id: "s1",
      title: "Investor Deep Dive – Full Pitch",
      thumbnail: "https://images.unsplash.com/photo-1590608897129-79da98d159d4?auto=format&fit=crop&w=600&q=60",
      duration: "4m 12s",
      date: "Jan 14, 2025",
      judge: AI_JUDGES.barbara,
      score: 8.3
    },
    {
      id: "s2",
      title: "1-Minute Elevator Pitch",
      thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=60",
      duration: "1m 02s",
      date: "Jan 11, 2025",
      judge: AI_JUDGES.mark,
      score: 7.8
    },
    {
      id: "s3",
      title: "Problem–Solution Breakdown",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=60",
      duration: "2m 18s",
      date: "Jan 8, 2025",
      judge: AI_JUDGES.nina,
      score: 6.9
    },
    {
      id: "s4",
      title: "Team & Vision Pitch",
      thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=600&q=60",
      duration: "1m 44s",
      date: "Jan 2, 2025",
      judge: AI_JUDGES.robert,
      score: 7.5
    }
  ];

  return (
    <div>
      {/* Section Header */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-3 h-0.5 bg-cyan-500"></div>
        <h2 className="text-sm font-semibold uppercase text-slate-300">
          Recorded Sessions
        </h2>
      </div>

      <h1 className="text-2xl font-bold mb-6">Your Video Practice Sessions</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {sessions.map((s) => (
          <div
            key={s.id}
            className="bg-white/10 backdrop-blur-md border border-slate-700 rounded-2xl overflow-hidden
                       hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 
                       transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative h-44 w-full">
              <img
                src={s.thumbnail}
                alt={s.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

              {/* Duration Tag */}
              <span className="absolute bottom-2 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
                {s.duration}
              </span>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0
                              hover:opacity-100 transition">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 4l12 6-12 6V4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-white">{s.title}</h3>

              {/* Metadata: Judge + Score */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{s.judge.avatar}</span>
                  <span className={`text-xs ${s.judge.color}`}>{s.judge.name}</span>
                </div>

                <span className="text-emerald-300 font-semibold text-sm">
                  {s.score}/10
                </span>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-slate-400 mt-4">
                <span>{s.date}</span>

                <button className="bg-slate-700 hover:bg-slate-600 text-white py-1.5 px-4 rounded-md 
                                   transition-all text-sm shadow-sm hover:shadow-cyan-500/20">
                  Watch
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default RecordedSessions;
