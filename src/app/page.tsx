import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 grass-pattern opacity-50"></div>
        <div className="absolute top-10 left-10 w-20 h-20 animate-float">
          <span className="text-6xl">🌻</span>
        </div>
        <div className="absolute top-20 right-20 w-16 h-16 animate-float" style={{ animationDelay: '1s' }}>
          <span className="text-5xl">🌾</span>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-block lobster-wiggle text-8xl mb-4">
              🦀
            </div>
            <h1 className="font-pixel text-2xl md:text-4xl text-ranch-brown-dark mb-4">
              Lobstar Ranch
            </h1>
            <p className="text-xl md:text-2xl text-ranch-green-dark font-ranch font-bold">
              养虾人的星露谷社区 🦀🌟
            </p>
          </div>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            这里是 OpenClaw 开源 AI 助手的信息聚集地。分享最新动态、探索万千技能、交流养虾心得～
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/news" className="ranch-btn flex items-center gap-2">
              <Rss size={20} />
              最新动态
            </Link>
            <Link href="/skills" className="ranch-btn flex items-center gap-2">
              <Sparkles size={20} />
              技能库
            </Link>
            <Link href="/docs" className="ranch-btn flex items-center gap-2">
              <Book size={20} />
              安装指南
            </Link>
            <Link href="/community" className="ranch-btn flex items-center gap-2">
              <Users size={20} />
              社区
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="ranch-card p-6 text-center">
              <div className="text-4xl mb-2">⭐</div>
              <div className="font-pixel text-xs text-gray-600 mb-1">GitHub</div>
              <div className="text-2xl font-bold text-ranch-green">310k+</div>
              <div className="text-sm text-gray-500">Stars</div>
            </div>
            <div className="ranch-card p-6 text-center">
              <div className="text-4xl mb-2">✨</div>
              <div className="font-pixel text-xs text-gray-600 mb-1">Skills</div>
              <div className="text-2xl font-bold text-ranch-green">5,400+</div>
              <div className="text-sm text-gray-500">已收录</div>
            </div>
            <div className="ranch-card p-6 text-center">
              <div className="text-4xl mb-2">📡</div>
              <div className="font-pixel text-xs text-gray-600 mb-1">平台</div>
              <div className="text-2xl font-bold text-ranch-green">50+</div>
              <div className="text-sm text-gray-500">集成支持</div>
            </div>
            <div className="ranch-card p-6 text-center">
              <div className="text-4xl mb-2">🌍</div>
              <div className="font-pixel text-xs text-gray-600 mb-1">社区</div>
              <div className="text-2xl font-bold text-ranch-green">成长中</div>
              <div className="text-sm text-gray-500">欢迎加入</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Preview */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-pixel text-lg text-center mb-10 text-ranch-brown">
            农场特色
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<span className="text-4xl">🦀</span>}
              title="宠物龙虾"
              description="领养你的专属小龙虾，学习如何接入 OpenClaw 作为你的智能宠物～"
            />
            <FeatureCard 
              icon={<span className="text-4xl">📖</span>}
              title="安装指南"
              description="详细的安装教程，涵盖 macOS、Linux、Windows 和 Docker 全平台～"
            />
            <FeatureCard 
              icon={<span className="text-4xl">👥</span>}
              title="交流社区"
              description="和其他养虾人一起交流经验，分享你的 OpenClaw 使用技巧～"
            />
          </div>
        </div>
      </section>
      
      {/* GitHub CTA */}
      <section className="py-16 px-4 bg-ranch-green/10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-5xl block mb-6">🐙</span>
          <h2 className="font-pixel text-lg mb-4 text-ranch-brown">开源项目</h2>
          <p className="text-gray-700 mb-6">
            Lobstar Ranch 也是开源的！欢迎 Star、Issue、Pull Request～
          </p>
          <a 
            href="https://github.com/Liyzc/lobstar-ranch"
            target="_blank"
            rel="noopener noreferrer"
            className="ranch-btn inline-flex items-center gap-2"
          >
            <Github size={20} />
            访问仓库
          </a>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="ranch-card p-6 hover:transform hover:-translate-y-1 transition-transform">
      <div className="mb-4">{icon}</div>
      <h3 className="font-ranch font-bold text-lg text-ranch-brown-dark mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}
