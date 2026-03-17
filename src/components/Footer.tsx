import { Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ranch-brown text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦀</span>
            <span className="font-pixel text-xs">Lobstar Ranch</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://github.com/Liyzc/lobstar-ranch" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-ranch-gold"
            >
              <Github size={16} />
              GitHub
            </a>
            <a 
              href="https://github.com/openclaw/openclaw" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ranch-gold"
            >
              OpenClaw
            </a>
            <a 
              href="https://docs.openclaw.ai" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ranch-gold"
            >
              官方文档
            </a>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            Made with <Heart size={14} className="text-ranch-gold" /> by 养虾人
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs opacity-70">
          © 2025 Lobstar Ranch. OpenClaw is an open source project.
        </div>
      </div>
    </footer>
  );
}
