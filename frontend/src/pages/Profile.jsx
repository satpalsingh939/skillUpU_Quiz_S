import React, { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    fetch("http://localhost:5000/api/user/profile", {
      headers: { Authorization: "Bearer " + token },
    })
      .then((r) => r.json())
      .then(setProfile)
      .catch(() => setProfile(null));
  }, []);

  if (!profile)
    return (
      <div className="bg-[#25222f] text-white text-center p-6 rounded-lg shadow-md">
        Login to see your profile.
      </div>
    );

  return (
    <div className="bg-[#25222f] min-h-screen text-white px-6 py-10">
      <section className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="w-full md:w-1/3 flex flex-col items-center text-center bg-[#2a2a2d4f] shadow-md rounded-xl p-6">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#4facfe] mb-4">
            <img
              src={`https://ui-avatars.com/api/?name=${profile.name}&background=4facfe&color=fff&size=200`}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold">{profile.name}</h2>
          <p className="text-gray-400 text-sm">{profile.email}</p>
          <p className="mt-3 italic text-gray-300">
            {profile.bio || "No bio available."}
          </p>
        </div>

        <div className="flex-1 bg-[#2a2a2d4f] shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
            📊 Test History
          </h3>
          <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2">
            {profile.scores && profile.scores.length ? (
              profile.scores.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#1f1f2268] p-4 rounded-lg flex justify-between items-center hover:bg-[#333333a9] transition"
                >
                  <div>
                    <h4 className="text-[#4facfe] font-medium">
                      {s.domain.toUpperCase()}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {new Date(s.date).toLocaleDateString()} •{" "}
                      {new Date(s.date).toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block font-semibold text-lg">
                      {s.score}/{s.total}
                    </span>
                    <span
                      className={`font-bold ${
                        s.passed ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {s.passed ? "Passed ✅" : "Failed ❌"}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No tests taken yet</p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#2a2a2d4f] shadow-md rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
          🎓 My Certificates
        </h3>
        {profile.certificates && profile.certificates.length ? (
          <div className="grid md:grid-cols-2 gap-6">
            {profile.certificates.map((c, i) => (
              <div
                key={i}
                className="bg-[#1f1f2268] p-4 rounded-lg flex flex-col hover:bg-[#333333a9] transition"
              >
                <h4 className="text-[#4facfe] font-medium mb-2">{c.title}</h4>
                <p className="text-sm text-gray-400 mb-2">
                  Earned on: {new Date(c.date).toLocaleDateString()}
                </p>
                <button
                  onClick={() => window.open(c.url, "_blank")}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg mt-auto transition"
                >
                  📥 Download PDF
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No certificates earned yet</p>
        )}
      </section>
    </div>
  );
}
