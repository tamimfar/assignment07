
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Bolt,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Gauge,
  LayoutDashboard,
  Lightbulb,
  Menu,
  ShieldCheck,
  Activity,
  Zap,
  Radio,
  Power,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Monitor power status, electricity usage, and system activity from one central dashboard.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: BatteryCharging,
    title: "Smart Power Management",
    description:
      "Keep track of backup power, battery levels, and available energy during outages.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Clock3,
    title: "Load Shedding Schedule",
    description:
      "View planned outages and organize your power usage around scheduled interruptions.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "Reliable System Control",
    description:
      "Access essential power information through a clear, secure, and easy-to-use interface.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect Your System",
    description:
      "Connect your supported power monitoring devices and configure your system.",
  },
  {
    number: "02",
    title: "Monitor Power Status",
    description:
      "Check electricity availability, energy usage, and backup power status.",
  },
  {
    number: "03",
    title: "Manage Efficiently",
    description:
      "Use system insights to plan power consumption and prepare for outages.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
      <span className="h-2 w-2 rounded-full bg-emerald-500" />
      {children}
    </span>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Navbar */}
      

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12),_transparent_45%),radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.08),_transparent_40%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <SectionLabel>
              <Radio size={15} />
              Smarter Energy. Better Control.
            </SectionLabel>

            <h1 className="mt-7 max-w-2xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Take Control of Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Power Supply.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              A smarter way to monitor electricity, manage backup power, and
              stay prepared for load shedding. Everything you need to understand
              your power system in one place.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="group inline-flex items-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700"
              >
                Open Dashboard
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                Explore Features <ChevronRight size={17} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />
                Simple monitoring
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-emerald-600" />
                Centralized dashboard
              </span>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 -z-10 rounded-[36px] bg-gradient-to-br from-emerald-200/60 via-cyan-100/40 to-transparent blur-2xl" />

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <LayoutDashboard size={20} />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold">Power Overview</h2>
                    <p className="mt-0.5 text-xs text-slate-500">
                      System dashboard preview
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Demo
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <div className="rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-slate-300">
                        Power Supply Status
                      </p>
                      <h3 className="mt-2 text-2xl font-bold">Power Monitor</h3>
                      <p className="mt-2 text-xs text-slate-400">
                        Illustrative dashboard preview
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                      <Bolt size={26} />
                    </div>
                  </div>

                  <div className="mt-7 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                      <Power size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Monitoring Ready</p>
                      <p className="mt-1 text-xs text-slate-400">
                        Connect your system for live readings
                      </p>
                    </div>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <BatteryCharging
                        size={20}
                        className="text-emerald-300"
                      />
                      <p className="mt-3 text-xs text-slate-400">
                        Backup Power
                      </p>
                      <p className="mt-1 text-sm font-bold">Not Connected</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <Gauge size={20} className="text-cyan-300" />
                      <p className="mt-3 text-xs text-slate-400">
                        Energy Usage
                      </p>
                      <p className="mt-1 text-sm font-bold">Awaiting Data</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-100 p-3 text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Activity size={18} />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-slate-700">
                      Monitoring
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 p-3 text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <Clock3 size={18} />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-slate-700">
                      Scheduling
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-100 p-3 text-center">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                      <Lightbulb size={18} />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-slate-700">
                      Insights
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <ShieldCheck size={21} />
              </div>
              <div>
                <p className="text-sm font-bold">One Central Platform</p>
                <p className="mt-1 text-xs text-slate-500">
                  Power information at a glance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Powerful Features</SectionLabel>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Everything Your Power System Needs
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Useful tools to help you understand power availability, track
              backup resources, and prepare for load shedding.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.bg} ${feature.color} transition group-hover:scale-105`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-emerald-700">
                    Learn more <ArrowRight size={15} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <SectionLabel>Simple Process</SectionLabel>
            <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Smarter Power Management in Three Steps
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              PowerFlow brings your power information into one organized
              workspace, helping you make better-informed energy decisions.
            </p>

            <Link
              href="/login"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Get Started Today <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-200 hover:bg-emerald-50/30 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-sm font-black text-white shadow-lg shadow-emerald-600/20">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-emerald-700 to-teal-800 px-6 py-12 text-white sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[45px] border-white/5" />
          <div className="absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold">
                <Zap size={14} /> POWER MANAGEMENT SYSTEM
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Ready to Manage Power Smarter?
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-emerald-50/90">
                Sign in to access your system dashboard and manage your power
                information from one place.
              </p>
            </div>

            <Link
              href="/login"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-emerald-800 shadow-lg transition hover:-translate-y-1 hover:bg-emerald-50"
            >
              Sign In to Dashboard <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </main>
  );
}
