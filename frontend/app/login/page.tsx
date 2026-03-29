"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      {/* Subtle slate gradient background with tile pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100" />
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative w-full max-w-sm mx-4">
        <Card className="rounded-lg shadow-lg border border-slate-200 bg-white px-8 py-10 gap-0 ring-0">
          <CardContent className="p-0">
            <h1 className="text-2xl font-semibold text-slate-800 text-center mb-8">
              Sign In
            </h1>

            <form onSubmit={handleSubmit}>
              {/* Username field */}
              <div className="mb-5">
                <Label
                  htmlFor="username"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Username
                </Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="h-auto w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:border-amber-500 transition"
                />
              </div>

              {/* Password field */}
              <div className="mb-7">
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="h-auto w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:border-amber-500 transition"
                />
              </div>

              {/* Sign In button */}
              <Button
                type="submit"
                className="w-full bg-amber-600 text-white font-medium py-2.5 px-4 rounded-lg text-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition active:scale-[0.98]"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
