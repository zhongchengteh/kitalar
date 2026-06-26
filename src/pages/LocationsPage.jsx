import { ExternalLink, MapPin, Recycle } from "lucide-react";
import PageHeader from "../components/layout/PageHeader.jsx";
import Badge from "../components/ui/Badge.jsx";
import Button from "../components/ui/Button.jsx";
import Card from "../components/ui/Card.jsx";
import { locations } from "../data/mockData.js";

export default function LocationsPage() {
  return (
    <div className="animate-rise">
      <PageHeader eyebrow="Locations" title="Find recycling points" description="Static public locations for the clickable prototype." />

      <Card variant="tinted" className="mb-4">
        <div className="flex gap-3">
          <MapPin className="mt-0.5 size-5 shrink-0 text-eco-700" />
          <p className="text-sm leading-6 text-eco-900">
            No live GPS or maps API is used. Each location includes a simple external Google Maps search link.
          </p>
        </div>
      </Card>

      <div className="grid gap-3">
        {locations.map((location) => (
          <Card key={location.id} variant="interactive">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <Badge variant={location.category.includes("Bulky") ? "warning" : "success"}>{location.category}</Badge>
                <h2 className="mt-2 text-lg font-black text-slate-950">{location.name}</h2>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-eco-100 text-eco-700">
                <Recycle className="size-5" />
              </span>
            </div>
            <dl className="grid gap-2 text-sm leading-6 text-slate-600">
              <div>
                <dt className="font-bold text-slate-800">Address</dt>
                <dd>{location.address}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-800">Operating hours</dt>
                <dd>{location.hours}</dd>
              </div>
              <div>
                <dt className="font-bold text-slate-800">Accepted waste</dt>
                <dd>{location.types.join(", ")}</dd>
              </div>
            </dl>
            <a href={location.map} target="_blank" rel="noreferrer">
              <Button className="mt-4 w-full" variant="secondary">
                Open Google Maps <ExternalLink className="size-4" />
              </Button>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
