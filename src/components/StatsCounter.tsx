"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 180, suffix: "+", label: "Families Helped" },
  { value: 9, suffix: " yrs", label: "Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 7, label: "Communities Served" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-navy-900 sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="border-y border-navy-100 bg-white py-14">
      <div className="container-page grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-navy-400">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
