
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Bolt,
  CheckCircle2,
  ShieldCheck,
  Activity,
  Users,
  Target,
  Eye,
} from "lucide-react";

const highlights = [
  "Power status monitoring in one place",
  "Load shedding schedule management",
  "Backup power and battery tracking",
  "Simple and user-friendly dashboard",
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make power management simpler by helping users monitor electricity availability, prepare for load shedding, and manage backup power efficiently.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To create a smarter and more reliable power management experience where essential power information is easy to access and understand.",
  },
  {
    icon: ShieldCheck,
    title: "Our Commitment",
    description:
      "We focus on usability, clear information, and responsible power management to help users make informed decisions.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 dark:bg-slate-950 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* About heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-400">
            <Bolt size={16} />
            About Our System
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Making Power Management{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Smarter & Simpler
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Our Load Shedding Power Management System is designed to help users
            stay informed about power availability, organize load shedding
            schedules, and manage backup power from one convenient platform.
          </p>
        </div>

        {/* Main about content */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual card */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    POWER MANAGEMENT
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                    One System. Better Control.
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  <Activity size={25} />
                </div>
              </div>

              {/* Power illustration */}
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                    <BatteryCharging size={30} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">
                      Power Information
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      Connected in One Place
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-slate-300">
                        Power Monitoring
                      </span>
                      <Activity
                        size={17}
                        className="text-emerald-400"
                      />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-slate-300">
                        Schedule Management
                      </span>
                      <CheckCircle2
                        size={17}
                        className="text-cyan-400"
                      />
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 rounded-full bg-cyan-400" />
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-xs leading-5 text-slate-400">
                  Illustrative graphic showing system capabilities, not live
                  measurements.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <Bolt size={21} />
                  </div>
                  <p className="mt-3 font-bold text-slate-900 dark:text-white">
                    Smart Monitoring
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Clear power information
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400">
                    <ShieldCheck size={21} />
                  </div>
                  <p className="mt-3 font-bold text-slate-900 dark:text-white">
                    Easy Access
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Organized dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Who We Are
            </p>

            <h3 className="mt-4 text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-4xl">
              Better Visibility.
              <br />
              Smarter Decisions.
            </h3>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
              Managing electricity interruptions can be challenging. Our
              platform aims to bring important power-related information
              together, so users can understand their system and plan ahead
              with greater confidence.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                  />
                  <p className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/login"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Explore Your Dashboard
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Mission, Vision, Commitment */}
        <div className="mt-20 grid gap-5 md:grid-cols-3 lg:mt-28">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 dark:border-emerald-900/60 dark:bg-emerald-950/20 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 dark:bg-slate-900 dark:text-emerald-400">
              <Users size={22} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Designed Around Your Needs
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                A straightforward platform for viewing and managing essential
                power information.
              </p>
            </div>
          </div>

          <Link
            href="/login"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
