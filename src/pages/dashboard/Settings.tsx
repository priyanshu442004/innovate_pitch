import { useState } from "react";

const Settings = () => {
  // Dummy user info
  const email = "user@example.com";

  // Dummy startup list
  const [startups, setStartups] = useState([
    {
      id: "st1",
      name: "EcoBloom Sustainable Tech",
      tagline: "Innovating for a greener planet",
      industry: "CleanTech",
      website: "https://ecobloom.com",
      about: "EcoBloom develops AI-powered solutions for sustainable agriculture."
    },
    {
      id: "st2",
      name: "PitchForge AI",
      tagline: "AI that sharpens your storytelling",
      industry: "AI / SaaS",
      website: "https://pitchforge.ai",
      about: "PitchForge helps founders refine their pitch delivery using AI guidance."
    }
  ]);

  const [editingStartup, setEditingStartup] = useState(null as any);

  return (
    <div className="space-y-10">

      {/* Header */}
      {/* Page Intro */}
<div className="flex items-center space-x-3 mb-4">
  <div className="w-6 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
  <h2 className="text-[13px] font-semibold tracking-wider uppercase text-slate-300">
    Settings
  </h2>
</div>

<h1 className="text-3xl font-bold tracking-tight mb-8">Account & App Settings</h1>


{/* ==================== Profile Section ==================== */}
<div className="bg-white/10 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-8 shadow-[0_0_50px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_60px_-10px_rgba(0,255,255,0.1)] transition-all">
  
  {/* Section Header */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-semibold text-white">Profile Information</h3>
    <span className="text-xs text-slate-400 italic">Update your personal details</span>
  </div>

  {/* Avatar Upload */}
  <div className="flex items-center space-x-6 mb-8">
    <div className="relative group">
      <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center text-4xl shadow-lg border border-slate-700 group-hover:scale-105 group-hover:shadow-cyan-500/20 transition-all cursor-pointer">
        👤
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition absolute top-0 left-0 w-full h-full bg-black/50 rounded-full flex items-center justify-center text-xs text-white">
        Change
      </div>
    </div>

    <button className="bg-slate-700 hover:bg-slate-600 text-white py-2.5 px-5 rounded-lg text-sm shadow-md transition">
      Upload New Photo
    </button>
  </div>

  {/* Form Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="flex flex-col">
      <label className="text-sm text-slate-300 mb-1">First Name</label>
      <input
        className="w-full p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 
                   focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600 transition"
        placeholder="John"
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm text-slate-300 mb-1">Last Name</label>
      <input
        className="w-full p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 
                   focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600 transition"
        placeholder="Doe"
      />
    </div>

    {/* Email - Read Only */}
    <div className="md:col-span-2 flex flex-col">
      <label className="text-sm text-slate-300 mb-1">Email Address</label>
      <input
        readOnly
        value={email}
        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700/70 text-gray-400 cursor-not-allowed
                   shadow-inner italic"
      />
      <span className="text-[11px] text-slate-400 mt-1">Email cannot be changed</span>
    </div>

  </div>

  {/* Save Button */}
  <div className="mt-7">
    <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-8 rounded-xl font-semibold 
                       shadow-md hover:shadow-cyan-500/30 transition-all">
      Save Profile
    </button>
  </div>
</div>





     {/* ==================== Reset Password Section ==================== */}
<div className="bg-white/10 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-8 shadow-[0_0_40px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.15)] transition-all">

  {/* Section Title */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
      <svg
        className="w-5 h-5 text-emerald-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 2a4 4 0 00-4 4v2H5a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1v-8a1 1 0 00-1-1h-1V6a4 4 0 00-4-4zm2 6V6a2 2 0 10-4 0v2h4z" />
      </svg>
      <span>Reset Password</span>
    </h3>

    <span className="text-xs text-slate-400 italic">
      Make sure your new password is strong
    </span>
  </div>

  {/* Form Inputs */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Current Password */}
    <div className="flex flex-col">
      <label className="text-sm text-slate-300 mb-1">Current Password</label>
      <input
        type="password"
        className="w-full p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white
        focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600 transition placeholder-slate-500"
        placeholder="••••••••"
      />
    </div>

    {/* New Password */}
    <div className="flex flex-col">
      <label className="text-sm text-slate-300 mb-1">New Password</label>
      <input
        type="password"
        className="w-full p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white
        focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600 transition placeholder-slate-500"
        placeholder="••••••••"
      />
    </div>

    {/* Confirm Password */}
    <div className="flex flex-col">
      <label className="text-sm text-slate-300 mb-1">Confirm New Password</label>
      <input
        type="password"
        className="w-full p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white
        focus:border-emerald-500 focus:ring-2 focus:ring-emerald-600 transition placeholder-slate-500"
        placeholder="••••••••"
      />
    </div>
  </div>

  {/* Weak/Strong Password Hint */}
  <div className="mt-4 text-sm text-slate-400 flex items-center space-x-2">
    <svg className="w-4 h-4 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 5h2v6H9V5zm0 8h2v2H9v-2z" />
    </svg>
    <span>
      Use at least <span className="text-emerald-300">8 characters</span>, including numbers & symbols.
    </span>
  </div>

  {/* Save Button */}
  <button
    className="mt-7 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-8 rounded-xl font-semibold 
               shadow-md hover:shadow-emerald-500/30 transition-all"
  >
    Update Password
  </button>
</div>





      {/* ==================== Startup Manager ==================== */}
     {/* ==================== Startup Manager ==================== */}
<div className="bg-white/10 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-8 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] transition-all">

  {/* Section Header */}
  <div className="flex items-center justify-between mb-8">
    <h3 className="text-xl font-semibold text-white tracking-tight flex items-center space-x-2">
      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
      <span>Your Startups</span>
    </h3>
    <span className="text-xs text-slate-400 italic">Manage your organizations</span>
  </div>

  {/* Startup Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Add Startup Card */}
    <div
      onClick={() => setEditingStartup({
        id: "new",
        name: "",
        tagline: "",
        industry: "",
        website: "",
        about: ""
      })}
      className="bg-slate-900/40 border border-slate-700/70 rounded-2xl h-48 flex flex-col items-center justify-center
                 cursor-pointer hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(0,255,255,0.2)]
                 hover:-translate-y-1 transition-all group"
    >
      <div
        className="w-14 h-14 bg-slate-800 group-hover:bg-cyan-600/40 border border-slate-700 flex items-center justify-center 
                   rounded-2xl text-3xl font-light text-slate-300 group-hover:text-cyan-300 transition">
        +
      </div>
      <p 
      onClick={()=>{
        setStartups([])
      }}
      className="mt-4 text-slate-300 font-medium group-hover:text-cyan-300 transition">
        Add Startup
      </p>
    </div>

    {/* Startup Cards */}
    {startups.map((s) => (
      <div
        key={s.id}
        className="relative bg-white/10 backdrop-blur-md border border-slate-700 rounded-2xl p-6 
                   hover:bg-white/20 hover:-translate-y-1 hover:shadow-[0_0_30px_-6px_rgba(0,255,255,0.15)]
                   transition-all"
      >
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-semibold text-lg text-white">{s.name}</h4>
            <p className="text-slate-300 text-sm">{s.tagline}</p>
          </div>

          {/* Logo placeholder */}
          <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center">
  <svg
    className="w-7 h-7 text-cyan-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
  </svg>
</div>

        </div>

        {/* Details */}
        <div className="mt-3 text-xs text-slate-400">
          <span className="block">Industry: <span className="text-slate-300">{s.industry}</span></span>
          <span className="block truncate">Website: <span className="text-cyan-300">{s.website}</span></span>
        </div>

        {/* Edit button */}
        <button
          onClick={() => setEditingStartup(s)}
          className="mt-5 bg-slate-800 hover:bg-slate-700 text-white py-2 px-5 rounded-lg text-sm 
                     transition shadow-sm hover:shadow-cyan-500/20"
        >
          Edit Startup
        </button>
      </div>
    ))}

  </div>


  {/* ========== EDITOR PANEL ========== */}
  {editingStartup && (
    <div className="mt-12 bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-inner">
      
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" />
          </svg>
          <span>{editingStartup.id === "new" ? "Add New Startup" : "Edit Startup"}</span>
        </h3>

        <button
          className="text-slate-400 hover:text-white text-sm"
          onClick={() => setEditingStartup(null)}
        >
          Close ✕
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Name */}
        <div>
          <label className="text-sm text-slate-300 mb-1 block">Startup Name</label>
          <input
            className="w-full p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white 
                       focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600 transition"
            defaultValue={editingStartup.name}
          />
        </div>

        {/* Tagline */}
        <div>
          <label className="text-sm text-slate-300 mb-1 block">Tagline</label>
          <input
            className="w-full p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white
                       focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600 transition"
            defaultValue={editingStartup.tagline}
          />
        </div>

        {/* Industry */}
        <div>
          <label className="text-sm text-slate-300 mb-1 block">Industry</label>
          <input
            className="w-full p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white
                       focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600 transition"
            defaultValue={editingStartup.industry}
          />
        </div>

        {/* Website */}
        <div>
          <label className="text-sm text-slate-300 mb-1 block">Website</label>
          <input
            className="w-full p-3 rounded-lg bg-slate-900/60 border border-slate-700 text-white
                       focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600 transition"
            defaultValue={editingStartup.website}
          />
        </div>

        {/* About */}
        <div className="md:col-span-2">
          <label className="text-sm text-slate-300 mb-1 block">About</label>
          <textarea
            className="w-full p-4 h-28 rounded-lg bg-slate-900/60 border border-slate-700 text-white
                       focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600 transition"
            defaultValue={editingStartup.about}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-8">
        <button 
        onClick={() => setEditingStartup(null)}
        className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-7 rounded-xl font-semibold 
                           shadow-md hover:shadow-cyan-500/30 transition-all">
          Save Startup
        </button>

        <button
          className="bg-slate-700 hover:bg-slate-600 text-white py-3 px-7 rounded-xl transition-all"
          onClick={() => setEditingStartup(null)}
        >
          Cancel
        </button>
      </div>
    </div>
  )}

</div>





      {/* ==================== Preferences ==================== */}
     {/* ==================== Preferences Section ==================== */}
<div className="bg-white/10 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-8 shadow-[0_0_40px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.15)] transition-all">

  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
      <svg
        className="w-5 h-5 text-cyan-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 6V4m0 16v-2m8-6h2M4 12H2m14.95 4.95l1.4 1.4m-12.7 0l1.4-1.4m12.7-9.9l-1.4 1.4m-12.7 0l-1.4-1.4" />
      </svg>
      <span>Preferences</span>
    </h3>

    <span className="text-xs text-slate-400 italic">Customize your experience</span>
  </div>

  <div className="space-y-8">

    {/* Theme Selection */}
    <div>
      <label className="text-sm text-slate-300 block mb-2">Theme</label>

      <div className="relative">
        <select
          className="w-full p-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white appearance-none
                     focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600 transition"
        >
          <option>Dark</option>
          <option>Light</option>
          <option>System</option>
        </select>

        {/* Dropdown Icon */}
        <svg
          className="w-5 h-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>

    {/* Notification Toggles */}
    <div>
      <label className="text-sm text-slate-300 block mb-3">Notifications</label>

      <div className="space-y-4">

        {/* Toggle Component */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-300">Pitch reminder emails</span>
          
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-700 peer-focus:ring-2 peer-focus:ring-cyan-500 rounded-full peer peer-checked:bg-cyan-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-300">New feedback notifications</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-700 peer-focus:ring-2 peer-focus:ring-cyan-500 rounded-full peer peer-checked:bg-cyan-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-300">Product updates</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-700 peer-focus:ring-2 peer-focus:ring-cyan-500 rounded-full peer peer-checked:bg-cyan-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
          </label>
        </div>

      </div>
    </div>

  </div>

  <button
    className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-8 rounded-xl font-semibold 
               shadow-md hover:shadow-emerald-500/30 transition-all"
  >
    Save Preferences
  </button>
</div>





      {/* ==================== Danger Zone ==================== */}
     {/* ==================== Danger Zone ==================== */}
<div className="bg-red-950/40 backdrop-blur-xl border border-red-800/40 rounded-2xl p-8 
                shadow-[0_0_50px_-20px_rgba(255,0,0,0.4)] transition-all">

  {/* Header */}
  <div className="flex items-center space-x-3 mb-4">
    <svg
      className="w-6 h-6 text-red-400 animate-pulse"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 9v4m0 4h.01M12 2l9 18H3L12 2z" />
    </svg>

    <h3 className="text-xl font-semibold text-red-300 tracking-wide">
      Danger Zone
    </h3>
  </div>

  <p className="text-sm text-red-200 mb-8">
    These actions are permanent and cannot be undone.
  </p>

  {/* Divider */}
  <div className="border-t border-red-700/40 my-6"></div>

  {/* Action Buttons */}
  <div className="flex flex-col md:flex-row gap-6">

    {/* Delete Account */}
    <div className="flex-1 bg-red-900/30 border border-red-800 rounded-xl p-5">
      <h4 className="text-red-300 font-medium mb-2">Delete Account</h4>
      <p className="text-xs text-red-200 mb-4">
        Permanently remove your account and all data. This cannot be undone.
      </p>

      <button
        className="w-full bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 
                   text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-red-500/30 
                   transition-all"
      >
        Delete My Account
      </button>
    </div>

    {/* Logout All Devices */}
    <div className="flex-1 bg-slate-900/40 border border-slate-700 rounded-xl p-5">
      <h4 className="text-slate-200 font-medium mb-2">Logout All Devices</h4>
      <p className="text-xs text-slate-400 mb-4">
        Force-sign out from all browsers and active sessions.
      </p>

      <button
        className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 px-6 rounded-xl font-semibold 
                   shadow-md transition-all"
      >
        Logout All Devices
      </button>
    </div>

  </div>
</div>


    </div>
  );
};

export default Settings;
