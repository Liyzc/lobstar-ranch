import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-ranch-green text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90">
            <span className="text-2xl">🦀</span>
            <span className="font-pixel text-sm">Lobstar Ranch</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/news">新闻动态</NavLink>
            <NavLink href="/skills">技能库</NavLink>
            <NavLink href="/docs">安装指南</NavLink>
            <NavLink href="/community">社区</NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="font-ranch font-bold hover:text-ranch-gold transition-colors"
    >
      {children}
    </Link>
  );
}
