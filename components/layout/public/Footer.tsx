import { Zap } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Zap size={18} fill="currentColor" />
            </div>
            <span className="font-extrabold">
              Power<span className="text-emerald-600">Flow</span>
            </span>
          </Link>

          <p className="text-sm text-slate-500">
            Load Shedding Power Management System
          </p>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} PowerFlow. All rights reserved.
          </p>
        </div>
      </footer>
    );
}

export default Footer