
"use client";

const Admin = () => {
  const stats = [
    { title: "Total Users", value: 5, icon: "👥" },
    { title: "Technicians", value: 2, icon: "🛠️" },
    { title: "Complaints", value: 5, icon: "📋" },
    { title: "Payments", value: 1, icon: "💳" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-3xl font-bold text-slate-800">
        Admin Dashboard
      </h1>

      <p className="mt-2 text-slate-500">
        Welcome back, Admin! Manage your system from here.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                {stat.title}
              </p>
              <span className="text-2xl">{stat.icon}</span>
            </div>

            <p className="mt-4 text-3xl font-bold text-slate-800">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800">
          Quick Actions
        </h2>

        <div className="mt-4 flex flex-wrap gap-3">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Manage Users
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Manage Technicians
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            View Complaints
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            View Payments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
