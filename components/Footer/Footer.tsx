export default function Footer() {
  return (
    <footer className="w-full py-8 mt-16 bg-black/40 backdrop-blur-md text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <div className="text-sm text-white">
          © {new Date().getFullYear()} Jyotiraditiya Misra · Built by Jyotiraditiya Misra
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/Jyotiraditiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition font-medium"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/Jyotiraditiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
