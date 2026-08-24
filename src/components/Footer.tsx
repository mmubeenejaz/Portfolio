import { profile } from "@/lib/data";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {profile.name}
            </p>
            <p className="mt-1 text-xs text-muted">{profile.title}</p>
            <p className="mt-1 text-xs text-muted-2">{profile.disciplines}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mubeen Ejaz on LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mubeen Ejaz on GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-border pt-6 text-xs text-muted-2">
          © {new Date().getFullYear().toString()} {profile.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
