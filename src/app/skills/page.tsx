import { Sparkles, Search } from "lucide-react";

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Sparkles size={48} className="mx-auto mb-4 text-ranch-gold" />
        <h1 className="font-pixel text-xl mb-4 text-ranch-brown">技能库</h1>
        <p className="text-gray-600 mb-6">5,400+ OpenClaw Skills 正在整理中...</p>
        
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder="搜索技能..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-ranch-green focus:outline-none focus:border-ranch-green-dark"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SkillCard name="天气查询" description="获取全球天气预报" category="工具" />
        <SkillCard name="邮件管理" description="读取和发送邮件" category="生产力" />
        <SkillCard name="日历助手" description="管理日程和提醒" category="生产力" />
        <SkillCard name="社交媒体" description="Twitter/微博发布" category="社交" />
        <SkillCard name="文件处理" description="PDF/Word/Excel 处理" category="工具" />
        <SkillCard name="代码助手" description="编程问题解答" category="开发" />
        <SkillCard name="翻译官" description="多语言翻译" category="工具" />
        <SkillCard name="图像识别" description="图片内容分析" category="AI" />
        <SkillCard name="数据抓取" description="网页内容提取" category="工具" />
      </div>
      
      <div className="text-center mt-12 text-gray-500">
        <p>更多技能正在整理中，敬请期待～</p>
        <p className="text-sm mt-2">数据来源: awesome-openclaw-skills</p>
      </div>
    </div>
  );
}

function SkillCard({ name, description, category }: {
  name: string;
  description: string;
  category: string;
}) {
  return (
    <div className="ranch-card p-4 hover:transform hover:-translate-y-1 transition-transform cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-ranch font-bold text-ranch-brown-dark">{name}</h3>
        <span className="text-xs bg-ranch-gold/20 text-ranch-brown px-2 py-1 rounded">
          {category}
        </span>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
