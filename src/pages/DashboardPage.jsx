import { Award, Flame, QrCode, Recycle, Sparkles, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/layout/PageHeader.jsx";
import StatCard from "../components/features/StatCard.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import ProgressBar from "../components/ui/ProgressBar.jsx";
import { useEcoCycle } from "../context/EcoCycleContext.jsx";
import { achievements } from "../data/mockData.js";

export default function DashboardPage() {
  const { stats, activities } = useEcoCycle();

  return (
    <div className="animate-rise">
      <PageHeader eyebrow="Member dashboard" title="Hi, Alex" description="Your recycling impact this month." />

      <Card variant="elevated" className="mb-4 !bg-eco-800 !text-white">
        <div className="flex items-center gap-3">
          <span className="grid size-14 place-items-center rounded-lg bg-white/15">
            <UserRound className="size-7" />
          </span>
          <div>
            <h2 className="text-lg font-black">Alex Tan</h2>
            <p className="text-sm text-eco-100">Community Member - Green Starter</p>
            <Badge className="mt-2 bg-white/15 text-white">Green Starter</Badge>
          </div>
        </div>
        <div className="mt-5">
          <ProgressBar value={stats.points} max={stats.nextReward} label="Progress to next reward" />
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={Award} label="Total points" value={stats.points} helper="Mock balance" />
        <StatCard icon={QrCode} label="Total scans" value={stats.scans} tone="sky" helper="Plastic items" />
        <StatCard icon={Flame} label="Streak" value={`${stats.streak} days`} tone="amber" helper="Keep it going" />
        <StatCard icon={Recycle} label="CO2 saved" value="4.2 kg" tone="rose" helper="Estimated impact" />
      </div>

      <section className="mt-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-950">Quick actions</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/app/scan">
            <Button className="w-full" size="lg">
              <QrCode className="size-5" /> Scan item
            </Button>
          </Link>
          <Link to="/app/rewards">
            <Button className="w-full" variant="secondary" size="lg">
              <Sparkles className="size-5" /> View rewards
            </Button>
          </Link>
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-3 text-lg font-black text-slate-950">Achievements</h2>
        <div className="grid grid-cols-3 gap-3">
          {achievements.map((item) => (
            <Card key={item.title} className="p-3 text-center" variant="tinted">
              <item.icon className="mx-auto size-6 text-eco-700" />
              <p className="mt-2 text-xs font-bold text-eco-900">{item.title}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="mb-3 text-lg font-black text-slate-950">Recent activity</h2>
        <div className="grid gap-3">
          {activities.map((activity) => (
            <Card key={activity.id} className="flex items-center justify-between gap-3">
              <div>
                <p className="font-bold text-slate-950">{activity.item}</p>
                <p className="text-xs text-slate-500">{activity.location} • {activity.time}</p>
              </div>
              <Badge variant="success">+{activity.points}</Badge>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
