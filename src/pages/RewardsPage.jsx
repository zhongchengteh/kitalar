import { Gift } from "lucide-react";
import { useState } from "react";
import PageHeader from "../components/layout/PageHeader.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import Modal from "../components/ui/Modal.jsx";
import ProgressBar from "../components/ui/ProgressBar.jsx";
import { useEcoCycle } from "../context/EcoCycleContext.jsx";
import { rewards } from "../data/mockData.js";

export default function RewardsPage() {
  const { stats } = useEcoCycle();
  const [redeemed, setRedeemed] = useState(null);

  return (
    <div className="animate-rise">
      <PageHeader eyebrow="Rewards" title="Redeem points" description="Motivate recycling with simple community rewards." />
      <Card variant="elevated" className="mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-500">Available points</p>
            <p className="text-3xl font-black text-eco-800">{stats.points}</p>
          </div>
          <span className="grid size-12 place-items-center rounded-lg bg-eco-100 text-eco-800">
            <Gift className="size-6" />
          </span>
        </div>
        <div className="mt-4">
          <ProgressBar value={stats.points} max={stats.nextReward} label="Digital certificate progress" />
        </div>
      </Card>

      <div className="grid gap-3">
        {rewards.map((reward) => {
          const canRedeem = stats.points >= reward.points;
          return (
            <Card key={reward.id} variant="interactive">
              <div className="flex gap-3">
                <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-eco-100 text-eco-700">
                  <reward.icon className="size-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-black text-slate-950">{reward.title}</h2>
                    <Badge variant={canRedeem ? "success" : "neutral"}>{reward.points} pts</Badge>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{reward.description}</p>
                  <Button className="mt-3 w-full" variant={canRedeem ? "primary" : "outline"} onClick={() => setRedeemed(reward)} disabled={!canRedeem}>
                    Redeem
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Modal open={Boolean(redeemed)} title="Reward redeemed successfully!" actionLabel="Done" onClose={() => setRedeemed(null)}>
        {redeemed ? `${redeemed.title} has been added to your reward list for this demo.` : null}
      </Modal>
    </div>
  );
}
