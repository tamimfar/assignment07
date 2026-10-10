
import { ArrowLeft, Home, LockKeyhole } from "lucide-react";

export const AccessDenied = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background Glow */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative w-full max-w-md text-center">
        {/* Lock Icon */}
        <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-3xl border border-red-500/20 bg-red-500/10 shadow-2xl shadow-red-500/10">
          <LockKeyhole className="h-11 w-11 text-red-400" />
        </div>

        {/* Error Code */}
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          Error 403
        </p>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Access Denied
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-400 sm:text-base">
          Sorry, you don&apos;t have permission to access this page.
          Please contact an administrator if you believe this is a mistake.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            <Home className="h-4 w-4" />
            Go Home
          </button>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-slate-600">
          If you need access, please contact your administrator.
        </p>
      </div>
    </div>
  );
};
