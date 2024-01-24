"use client";

import { useTheme } from "@/context/ThemeProvider";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { mode } = useTheme();

  return (
    <div className="h-screen">
      {mode}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
