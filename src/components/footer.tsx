export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10 text-center text-sm text-neutral-400">
      <div className="flex items-center justify-center gap-4 mb-3">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jan-elia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="opacity-80 hover:opacity-100 transition text-neutral-300 hover:text-emerald-400 icon-emerald-glow"
          title="LinkedIn"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23.5h-4V8zm7.5 0h3.8v2.11h.05c.53-1 1.82-2.11 3.75-2.11 4.01 0 4.75 2.64 4.75 6.08V23.5h-4v-7.17c0-1.71-.03-3.92-2.39-3.92-2.39 0-2.76 1.86-2.76 3.79V23.5h-4V8z"/>
          </svg>
        </a>
        {/* X */}
        <a
          href="https://x.com/eliajan0?s=21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="opacity-80 hover:opacity-100 transition text-neutral-300 hover:text-emerald-400 icon-emerald-glow"
          title="X"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2H21.5l-7.63 8.72L22.5 22h-6.18l-4.84-5.87L5.9 22H2.64l8.2-9.37L1.5 2h6.3l4.37 5.3L18.244 2zm-2.16 18h1.7L7.99 4h-1.7l9.804 16z"/>
          </svg>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/jan-elia-24"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="opacity-80 hover:opacity-100 transition text-neutral-300 hover:text-emerald-400 icon-emerald-glow"
          title="GitHub"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.24 3.4 9.68 8.12 11.26.6.12.82-.27.82-.58 0-.29-.01-1.06-.02-2.08-3.3.73-4-1.63-4-1.63-.55-1.43-1.34-1.81-1.34-1.81-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.63-.31-5.4-1.36-5.4-6.05 0-1.34.47-2.44 1.25-3.3-.12-.31-.54-1.57.12-3.27 0 0 1.02-.33 3.34 1.26a11.7 11.7 0 0 1 6.08 0c2.32-1.59 3.34-1.26 3.34-1.26.66 1.7.24 2.96.12 3.27.78.86 1.25 1.96 1.25 3.3 0 4.7-2.77 5.74-5.41 6.05.43.38.82 1.12.82 2.26 0 1.63-.02 2.95-.02 3.35 0 .32.22.71.83.58A11.51 11.51 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5z" />
          </svg>
        </a>
      </div>

      <p className="footer-pulse inline-flex items-center gap-2">
        © Jan Elia 2025
      </p>
    </footer>
  );
}
