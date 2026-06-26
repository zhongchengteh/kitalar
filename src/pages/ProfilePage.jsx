import { Award, Flame, QrCode, Recycle, UserRound } from "lucide-react";
import PageHeader from "../components/layout/PageHeader.jsx";
import StatCard from "../components/features/StatCard.jsx";
import Badge from "../components/ui/Badge.jsx";
import Card from "../components/ui/Card.jsx";
import ProgressBar from "../components/ui/ProgressBar.jsx";
import { useEcoCycle } from "../context/EcoCycleContext.jsx";
import { achievements } from "../data/mockData.js";

export default function ProfilePage() {
  const { stats } = useEcoCycle();

  return (
    <div className="animate-rise">
      <PageHeader eyebrow="Profile" title="Your recycling profile" description="A quick view of your current impact and badges." />

      <Card variant="elevated" className="mb-4 !bg-eco-800 !text-white">
        <div className="flex items-center gap-3">
          <span className="grid size-16 place-items-center rounded-full bg-white/15">
            <UserRound className="size-8" />
          </span>
          <div>
            <h2 className="text-xl font-black">Alex Tan</h2>
            <p className="text-sm text-eco-100">Community Member</p>
            <Badge className="mt-2 bg-white/15 text-white">Green Starter</Badge>
          </div>
        </div>
        <div className="mt-5">
          <ProgressBar value={stats.points} max={stats.nextReward} label="Progress to next reward" />
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={Award} label="Total points" value={stats.points} helper="Reward balance" />
        <StatCard icon={QrCode} label="Total scans" value={stats.scans} tone="sky" helper="Plastic items" />
        <StatCard icon={Flame} label="Streak" value={`${stats.streak} days`} tone="amber" helper="Recycling habit" />
        <StatCard icon={Recycle} label="CO2 saved" value="4.2 kg" tone="rose" helper="Estimated impact" />
      </div>

      <section className="mt-5">
        <h2 className="mb-3 text-lg font-black text-slate-950">Badges</h2>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((item) => (
            <Card key={item.title} className="p-3 text-center" variant="tinted">
              <item.icon className="mx-auto size-6 text-eco-700" />
              <p className="mt-2 text-xs font-bold text-eco-900">{item.title}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
