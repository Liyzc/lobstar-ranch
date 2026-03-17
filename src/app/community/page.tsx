import { Users, MessageCircle, Gift, Trophy, Star } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Users size={48} className="mx-auto mb-4 text-ranch-brown" />
        <h1 className="font-pixel text-xl mb-4 text-ranch-brown">社区中心</h1>
        <p className="text-gray-600">养虾人的星露谷乐园 🦀🌻</p>
      </div>
      
      {/* User Levels */}
      <div className="mb-12">
        <h2 className="font-ranch font-bold text-lg text-ranch-brown-dark mb-6 flex items-center gap-2">
          <Trophy size={20} className="text-ranch-gold" />
          社区等级
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <LevelCard level="1" name="小龙虾" emoji="🦐" color="bg-gray-100" />
          <LevelCard level="2" name="大龙虾" emoji="🦞" color="bg-green-100" />
          <LevelCard level="3" name="龙虾侠" emoji="🦀" color="bg-blue-100" />
          <LevelCard level="4" name="虾神" emoji="🐉" color="bg-ranch-gold/30" />
        </div>
      </div>
      
      {/* Community Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <FeatureBox 
          icon={<MessageCircle className="text-ranch-green" size={24} />}
          title="交流论坛"
          description="发帖讨论、问答互助"
        />
        <FeatureBox 
          icon={<Gift className="text-red-500" size={24} />}
          title="领养龙虾"
          description="创建你的宠物龙虾"
        />
        <FeatureBox 
          icon={<Star className="text-ranch-gold" size={24} />}
          title="成就系统"
          description="完成任务获得奖励"
        />
      </div>
      
      {/* Coming Soon */}
      <div className="ranch-card p-8 text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h3 className="font-ranch font-bold text-xl text-ranch-brown-dark mb-2">
          社区正在建设中
        </h3>
        <p className="text-gray-600 mb-4">
          更多功能即将上线，敬请期待！
        </p>
        <p className="text-sm text-gray-500">
          先行加入：<a href="https://clawd.org.cn/forum/" className="text-ranch-green hover:underline">OpenClaw 中文社区</a>
        </p>
      </div>
    </div>
  );
}

function LevelCard({ level, name, emoji, color }: {
  level: string;
  name: string;
  emoji: string;
  color: string;
}) {
  return (
    <div className={`${color} rounded-lg p-4 text-center`}>
      <div className="text-4xl mb-2">{emoji}</div>
      <div className="font-pixel text-xs text-gray-600">Lv.{level}</div>
      <div className="font-ranch font-bold text-ranch-brown-dark">{name}</div>
    </div>
  );
}

function FeatureBox({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="ranch-card p-4 text-center">
      <div className="mb-3 flex justify-center">{icon}</div>
      <h3 className="font-ranch font-bold text-ranch-brown-dark mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
