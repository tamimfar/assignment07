
"use client";

import {
  Users,
  Wrench,
  ShieldCheck,
  MapPin,
  CalendarDays,
  MessageSquareWarning,
  ClipboardCheck,
  CreditCard,
  Star,
  CheckCircle2,
  Clock3,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useDashboard } from "@/hook";

type DashboardData = {
  users: { total: number };
  technicians: { total: number };
  admins: { total: number };
  areas: { total: number };
  schedules: { total: number };
  complaints: {
    total: number;
    pending: number;
    resolved: number;
  };
  assignments: { total: number };
  payments: {
    total: number;
    paid: number;
  };
  reviews: { total: number };
};

const emptyDashboardData: DashboardData = {
  users: { total: 0 },
  technicians: { total: 0 },
  admins: { total: 0 },
  areas: { total: 0 },
  schedules: { total: 0 },
  complaints: {
    total: 0,
    pending: 0,
    resolved: 0,
  },
  assignments: { total: 0 },
  payments: {
    total: 0,
    paid: 0,
  },
  reviews: { total: 0 },
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: DashboardData;
};

type OverviewItemProps = {
  icon: LucideIcon;
  label: string;
  value: number;
};

export default function AdminDashboard() {
  const {
    data: response,
    isPending,
    isError,
    refetch,
    isFetching,
  } = useDashboard();

  // Supports either the complete API response or the extracted data.
  const rawResponse = response as
    | DashboardData
    | ApiResponse
    | undefined;

  const dashboardData: DashboardData =
    rawResponse && "data" in rawResponse
      ? rawResponse.data ?? emptyDashboardData
      : rawResponse ?? emptyDashboardData;

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="size-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
          <p className="text-sm text-muted-foreground">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-destructive/10">
          <MessageSquareWarning className="size-7 text-destructive" />
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            Failed to load dashboard
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Something went wrong while fetching dashboard statistics.
          </p>
        </div>

        <Button onClick={() => refetch()} disabled={isFetching}>
          <RefreshCw
            className={`mr-2 size-4 ${isFetching ? "animate-spin" : ""}`}
          />
          Try again
        </Button>
      </div>
    );
  }

  const stats: {
    title: string;
    value: number;
    icon: LucideIcon;
    description: string;
    iconColor: string;
    iconBg: string;
  }[] = [
    {
      title: "Total Users",
      value: dashboardData.users.total,
      icon: Users,
      description: "Registered users",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-500/10",
    },
    {
      title: "Technicians",
      value: dashboardData.technicians.total,
      icon: Wrench,
      description: "Registered technicians",
      iconColor: "text-violet-600",
      iconBg: "bg-violet-500/10",
    },
    {
      title: "Administrators",
      value: dashboardData.admins.total,
      icon: ShieldCheck,
      description: "System administrators",
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-500/10",
    },
    {
      title: "Service Areas",
      value: dashboardData.areas.total,
      icon: MapPin,
      description: "Available areas",
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-500/10",
    },
    {
      title: "Schedules",
      value: dashboardData.schedules.total,
      icon: CalendarDays,
      description: "Scheduled services",
      iconColor: "text-orange-600",
      iconBg: "bg-orange-500/10",
    },
    {
      title: "Assignments",
      value: dashboardData.assignments.total,
      icon: ClipboardCheck,
      description: "Technician assignments",
      iconColor: "text-cyan-600",
      iconBg: "bg-cyan-500/10",
    },
    {
      title: "Reviews",
      value: dashboardData.reviews.total,
      icon: Star,
      description: "Customer reviews",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-500/10",
    },
    {
      title: "Payments",
      value: dashboardData.payments.total,
      icon: CreditCard,
      description: "Total payments",
      iconColor: "text-pink-600",
      iconBg: "bg-pink-500/10",
    },
  ];

  const complaints = dashboardData.complaints;
  const payments = dashboardData.payments;

  const complaintsResolved =
    complaints.total > 0
      ? Math.min(
          100,
          (complaints.resolved / complaints.total) * 100,
        )
      : 0;

  const paymentsPaid =
    payments.total > 0
      ? Math.min(100, (payments.paid / payments.total) * 100)
      : 0;

  return (
    <main className="min-h-screen bg-muted/30 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-primary">
              ADMINISTRATION
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Dashboard
            </h1>

            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Monitor your platform activity and performance.
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => refetch()}
            disabled={isFetching}
            className="w-fit rounded-xl"
          >
            <RefreshCw
              className={`mr-2 size-4 ${isFetching ? "animate-spin" : ""}`}
            />
            Refresh data
          </Button>
        </section>

        {/* Statistics */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">
              Platform Statistics
            </h2>
            <p className="text-sm text-muted-foreground">
              An overview of your platform resources.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <Card
                  key={stat.title}
                  className="group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-muted-foreground">
                          {stat.title}
                        </p>

                        <h3 className="mt-3 text-3xl font-bold tracking-tight tabular-nums">
                          {stat.value}
                        </h3>

                        <p className="mt-2 text-xs text-muted-foreground">
                          {stat.description}
                        </p>
                      </div>

                      <div
                        className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${stat.iconBg} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon
                          className={`size-6 ${stat.iconColor}`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Complaints and Payments */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Complaints */}
          <Card className="rounded-2xl border shadow-sm">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500/10">
                      <MessageSquareWarning className="size-5 text-orange-600" />
                    </div>
                    Complaints Overview
                  </CardTitle>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Track complaint resolution progress.
                  </p>
                </div>

                <span className="shrink-0 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                  {complaints.total} Total
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">
                    Resolution rate
                  </span>
                  <span className="text-sm font-bold tabular-nums">
                    {Math.round(complaintsResolved)}%
                  </span>
                </div>

                <Progress
                  value={complaintsResolved}
                  className="h-2.5"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border bg-amber-500/5 p-4">
                  <div className="flex items-center gap-2 text-amber-600">
                    <Clock3 className="size-4" />
                    <span className="text-sm font-medium">
                      Pending
                    </span>
                  </div>

                  <p className="mt-3 text-3xl font-bold tabular-nums">
                    {complaints.pending}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Awaiting resolution
                  </p>
                </div>

                <div className="rounded-xl border bg-emerald-500/5 p-4">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle2 className="size-4" />
                    <span className="text-sm font-medium">
                      Resolved
                    </span>
                  </div>

                  <p className="mt-3 text-3xl font-bold tabular-nums">
                    {complaints.resolved}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Successfully resolved
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payments */}
          <Card className="rounded-2xl border shadow-sm">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
                      <CreditCard className="size-5 text-emerald-600" />
                    </div>
                    Payment Overview
                  </CardTitle>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Track payment collection status.
                  </p>
                </div>

                <span className="shrink-0 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-600">
                  {payments.paid} Paid
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-medium">
                    Payment success
                  </span>
                  <span className="text-sm font-bold tabular-nums">
                    {Math.round(paymentsPaid)}%
                  </span>
                </div>

                <Progress
                  value={paymentsPaid}
                  className="h-2.5"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border bg-muted/30 p-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CreditCard className="size-4" />
                    <span className="text-sm font-medium">
                      Total Payments
                    </span>
                  </div>

                  <p className="mt-3 text-3xl font-bold tabular-nums">
                    {payments.total}
                  </p>
                </div>

                <div className="rounded-xl border bg-emerald-500/5 p-4">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <CheckCircle2 className="size-4" />
                    <span className="text-sm font-medium">
                      Paid Payments
                    </span>
                  </div>

                  <p className="mt-3 text-3xl font-bold tabular-nums">
                    {payments.paid}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Overview */}
        <section>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">
              Quick Overview
            </h2>
            <p className="text-sm text-muted-foreground">
              Your key platform metrics at a glance.
            </p>
          </div>

          <Card className="rounded-2xl border shadow-sm">
            <CardContent className="grid gap-4 p-5 sm:grid-cols-2 xl:grid-cols-4">
              <OverviewItem
                icon={Users}
                label="Users"
                value={dashboardData.users.total}
              />

              <OverviewItem
                icon={MapPin}
                label="Service Areas"
                value={dashboardData.areas.total}
              />

              <OverviewItem
                icon={ClipboardCheck}
                label="Assignments"
                value={dashboardData.assignments.total}
              />

              <OverviewItem
                icon={Star}
                label="Reviews"
                value={dashboardData.reviews.total}
              />
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-2 border-t pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Admin Dashboard</p>

          <p className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />
            Statistics loaded from your dashboard API
            <ArrowUpRight className="size-3" />
          </p>
        </footer>
      </div>
    </main>
  );
}

function OverviewItem({
  icon: Icon,
  label,
  value,
}: OverviewItemProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border bg-background p-4 transition-colors hover:bg-muted/50">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="size-5 text-primary" />
      </div>

      <div className="min-w-0">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-2xl font-bold tabular-nums">
          {value}
        </p>
      </div>
    </div>
  );
}
