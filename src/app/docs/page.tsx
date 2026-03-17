import { Book, Terminal, Monitor, Cloud } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Book size={48} className="mx-auto mb-4 text-ranch-green" />
        <h1 className="font-pixel text-xl mb-4 text-ranch-brown">安装指南</h1>
        <p className="text-gray-600">选择你的平台开始安装 OpenClaw</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <InstallCard 
          icon={<Monitor className="text-blue-500" size={32} />}
          title="macOS"
          description="通过 Homebrew 或安装包安装"
          platforms={['brew', 'dmg', 'npm']}
        />
        <InstallCard 
          icon={<Terminal className="text-green-500" size={32} />}
          title="Linux"
          description="支持 Ubuntu、Debian、Arch 等"
          platforms={['apt', 'yum', 'aur']}
        />
        <InstallCard 
          icon={<Monitor className="text-blue-400" size={32} />}
          title="Windows"
          description="通过 WSL 或直接运行"
          platforms={['wsl', 'exe', 'docker']}
        />
        <InstallCard 
          icon={<Cloud className="text-purple-500" size={32} />}
          title="Docker"
          description="容器化部署，适合服务器"
          platforms={['docker', 'docker-compose']}
        />
      </div>
      
      <div className="mt-12 ranch-card p-6">
        <h2 className="font-ranch font-bold text-lg text-ranch-brown-dark mb-4">
          快速开始
        </h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`# 安装 OpenClaw
npm install -g openclaw

# 初始化配置
openclaw init

# 启动向导
openclaw onboard`}</pre>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="https://docs.openclaw.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ranch-green hover:underline"
        >
          查看完整官方文档 →
        </a>
      </div>
    </div>
  );
}

function InstallCard({ icon, title, description, platforms }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  platforms: string[];
}) {
  return (
    <div className="ranch-card p-6 hover:transform hover:-translate-y-1 transition-transform cursor-pointer">
      <div className="mb-4">{icon}</div>
      <h3 className="font-ranch font-bold text-lg text-ranch-brown-dark mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {platforms.map(p => (
          <span key={p} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
