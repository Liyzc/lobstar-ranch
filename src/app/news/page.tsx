export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-5xl block mb-4">📰</span>
        <h1 className="font-pixel text-xl mb-4 text-ranch-brown">新闻动态</h1>
        <p className="text-gray-600">OpenClaw 最新资讯一网打尽</p>
      </div>
      
      <div className="space-y-6">
        <NewsCard 
          date="2025-03-10"
          title="Lobstar Ranch 正式上线！🎉"
          description="养虾人的星露谷社区正式开张，欢迎各位养虾人入驻！"
          source="社区公告"
        />
        <NewsCard 
          date="2025-03-08"
          title="OpenClaw v3.0 发布"
          description="全新版本带来更多集成和更好的性能优化。"
          source="GitHub"
        />
        <NewsCard 
          date="2025-02-20"
          title="Awesome OpenClaw Skills 收录 5,400+ 技能"
          description="技能库持续扩充，覆盖各行各业的使用场景。"
          source="GitHub"
        />
      </div>
    </div>
  );
}

function NewsCard({ date, title, description, source }: {
  date: string;
  title: string;
  description: string;
  source: string;
}) {
  return (
    <div className="ranch-card p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-500">{date}</span>
        <span className="text-xs bg-ranch-green/20 text-ranch-green-dark px-2 py-1 rounded">
          {source}
        </span>
      </div>
      <h3 className="font-ranch font-bold text-lg text-ranch-brown-dark mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
