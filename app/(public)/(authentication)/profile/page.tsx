
"use client";

import { ImgUpload } from "@/components/layout/public/Img.upload";

import { useGetMe } from "@/hook";
import {
  Mail,
  Phone,
  ShieldCheck,
  User,
  CalendarDays,
  CircleCheck,
  UserRound,
  KeyRound,
  Clock3,
  Pencil,
  Zap,
  Activity,
  BadgeCheck,
} from "lucide-react";


export default function Profile() {
  const { data, isLoading } = useGetMe();

  const user = data?.data;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500/20 border-t-blue-500" />
            <Zap className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-blue-400" />
         
          </div>

          <p className="text-sm text-slate-400">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
          <UserRound className="mx-auto mb-3 h-10 w-10 text-slate-500" />

          <h2 className="font-semibold text-white">
            Profile Not Found
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            User information could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 text-slate-200 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= PAGE HEADER ================= */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-cyan-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Power Management
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              My Profile
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your account and system access information.
            </p>
          </div>

          {/* System Status */}
          <div className="flex w-fit items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-2.5">
            <div className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                Account Status
              </p>

              <p className="text-xs font-semibold text-emerald-400">
                {user.status}
              </p>
            </div>
          </div>
        </div>

        {/* ================= PROFILE HERO ================= */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/20">

          {/* Top Power Line */}
          <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

          {/* Background */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-600/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-cyan-500/5 blur-3xl" />

          {/* Hero */}
          <div className="relative p-6 sm:p-8">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* User */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                {/* Avatar */}
                <div className="relative">
                  <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-blue-500/30 bg-slate-800 shadow-xl shadow-blue-500/10">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <UserRound className="h-14 w-14 text-slate-500" />
                    )}
                  </div>

                  {/* Online indicator */}
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-lg border-4 border-slate-900 bg-emerald-500">
                    <Activity className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>

                {/* User Details */}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-bold text-white">
                      {user.name}
                    </h2>

                    {user.emailVerified && (
                      <span className="flex items-center gap-1 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[11px] font-semibold text-emerald-400">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        VERIFIED
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {user.email}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="flex items-center gap-1.5 rounded-md border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-400">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {user.role}
                    </span>

                    <span className="flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-400">
                      <KeyRound className="h-3.5 w-3.5" />
                      {user.authProvider}
                    </span>
                  </div>
                </div>
              </div>

              {/* Edit */}
              <div
                
                className="flex w-fit items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-400 transition-all hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-blue-300"
              >
                <Pencil className="h-4 w-4" />
                <ImgUpload />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid border-t border-slate-800 sm:grid-cols-3">

            <MiniStat
              icon={<ShieldCheck className="h-4 w-4" />}
              label="Access Level"
              value={user.role}
            />

            <MiniStat
              icon={<Activity className="h-4 w-4" />}
              label="System Status"
              value={user.status}
            />

            <MiniStat
              icon={<Zap className="h-4 w-4" />}
              label="Authentication"
              value={user.authProvider}
            />
  
          </div>
        </div>

        {/* ================= INFORMATION ================= */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">

          {/* Personal Information */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500/20">

            <SectionHeader
              icon={<User className="h-5 w-5" />}
              title="Personal Information"
              description="Basic account information"
            />

            <div className="mt-6 space-y-2">

              <ProfileItem
                icon={<User className="h-4 w-4" />}
                label="Full Name"
                value={user.name}
              />

              <ProfileItem
                icon={<Mail className="h-4 w-4" />}
                label="Email Address"
                value={user.email}
                verified={user.emailVerified}
              />

              <ProfileItem
                icon={<Phone className="h-4 w-4" />}
                label="Phone Number"
                value={user.phone || "Not provided"}
              />

            </div>
          </div>

          {/* Security */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500/20">

            <SectionHeader
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Security & Access"
              description="Authentication and permissions"
            />

            <div className="mt-6 space-y-2">

              <ProfileItem
                icon={<ShieldCheck className="h-4 w-4" />}
                label="Account Role"
                value={user.role}
              />

              <ProfileItem
                icon={<KeyRound className="h-4 w-4" />}
                label="Authentication Method"
                value={user.authProvider}
              />

              <ProfileItem
                icon={<CircleCheck className="h-4 w-4" />}
                label="Account Status"
                value={user.status}
                status
              />

            </div>
          </div>
        </div>

        {/* ================= ACTIVITY ================= */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">

          <SectionHeader
            icon={<Clock3 className="h-5 w-5" />}
            title="Account Activity"
            description="Account lifecycle information"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <DateCard
              icon={<CalendarDays className="h-5 w-5" />}
              label="ACCOUNT CREATED"
              value={formatDate(user.createdAt)}
            />

            <DateCard
              icon={<Clock3 className="h-5 w-5" />}
              label="LAST UPDATED"
              value={formatDate(user.updatedAt)}
            />

          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 pb-4 text-[11px] text-slate-600">
          <Zap className="h-3 w-3 text-blue-500" />
          Load Shating Power Management System
        </div>

      </div>
    </div>
  );
}

/* ================= SECTION HEADER ================= */

function SectionHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-0.5 text-xs text-slate-500">
          {description}
        </p>
      </div>

    </div>
  );
}

/* ================= PROFILE ITEM ================= */

function ProfileItem({
  icon,
  label,
  value,
  verified,
  status,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  verified?: boolean;
  status?: boolean;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition hover:border-slate-800 hover:bg-slate-800/40">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition group-hover:bg-blue-500/10 group-hover:text-blue-400">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-600">
          {label}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-2">

          <p
            className={`truncate text-sm font-semibold ${
              status
                ? "text-emerald-400"
                : "text-slate-200"
            }`}
          >
            {value}
          </p>

          {verified && (
            <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
              <CircleCheck className="h-3 w-3" />
              Verified
            </span>
          )}

        </div>
      </div>
    </div>
  );
}

/* ================= MINI STAT ================= */

function MiniStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 px-5 py-4">

      <div className="text-blue-400">
        {icon}
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-wider text-slate-600">
          {label}
        </p>

        <p className="mt-0.5 text-xs font-semibold text-slate-300">
          {value}
        </p>
      </div>

    </div>
  );
}

/* ================= DATE CARD ================= */

function DateCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <div>
        <p className="text-[10px] font-semibold tracking-wider text-slate-600">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-300">
          {value}
        </p>
      </div>

    </div>
  );
}

/* ================= DATE FORMATTER ================= */

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
