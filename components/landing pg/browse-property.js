'use client'
import Link from "next/link";
import { Building, Home, Store } from "lucide-react";

export default function PropertyTypes() {
  const types = [
    {
      name: "Apartments",
      icon: <Home className="w-6 h-6" />,
      description: "Find modern apartments in prime locations",
      href: "/properties?type=apartment",
      color: "bg-blue-50 text-blue-600",
    },
    {
      name: "Rooms",
      icon: <Building className="w-6 h-6" />,
      description: "Affordable rooms for short and long stays",
      href: "/properties?type=room",
      color: "bg-green-50 text-green-600",
    },
    {
      name: "Houses",
      icon: <Home className="w-6 h-6" />,
      description: "Spacious houses for families and groups",
      href: "/properties?type=house",
      color: "bg-purple-50 text-purple-600",
    },
    {
      name: "Commercial",
      icon: <Store className="w-6 h-6" />,
      description: "Office spaces and retail locations",
      href: "/properties?type=commercial",
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <section className="my-16">
      <h2 className="mb-8 text-2xl font-bold md:text-3xl">Browse by Property Type</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {types.map((type) => (
          <Link
            key={type.name}
            href={type.href}
            className="flex flex-col p-6 transition-all border rounded-lg hover:shadow-md"
          >
            <div className={`p-3 rounded-full w-fit ${type.color}`}>{type.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{type.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{type.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
