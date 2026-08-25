import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <p className="mx-auto max-w-5xl text-center text-xs text-muted-2">
        © {new Date().getFullYear().toString()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
