import { Leaf, Recycle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="phone-shell flex min-h-screen flex-col justify-center bg-white px-4 py-8">
        <div className="mx-auto grid size-20 place-items-center rounded-lg bg-eco-700 text-white shadow-soft">
          <Leaf className="size-10" />
        </div>

        <section className="mt-6 text-center">
          <h1 className="text-4xl font-black text-slate-950">Kitarlar</h1>
          <p className="mt-3 text-base font-semibold text-eco-800">Recycle smarter. Earn greener.</p>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
            A simple recycling reward prototype for scanning QR bins, collecting points, learning better habits, and finding recycling locations.
          </p>
        </section>

        <div className="mt-8 grid gap-3">
          <Link to="/login">
            <Button className="w-full" size="lg">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="w-full" variant="secondary" size="lg">
              Sign up
            </Button>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <Card variant="tinted" className="p-4 text-center">
            <Recycle className="mx-auto size-7 text-eco-700" />
            <p className="mt-2 text-sm font-black text-eco-900">Scan & earn</p>
          </Card>
          <Card variant="tinted" className="p-4 text-center">
            <Sparkles className="mx-auto size-7 text-eco-700" />
            <p className="mt-2 text-sm font-black text-eco-900">Learn & improve</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
