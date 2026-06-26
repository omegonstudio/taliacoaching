"use client";

import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { startCheckout } from "@/lib/api/checkout.functions";
import { cn } from "@/lib/utils";

type BuyEbookButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function BuyEbookButton({ children, className }: BuyEbookButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);

    try {
      const { initPoint } = await startCheckout();
      window.location.href = initPoint;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "No pudimos iniciar el pago. Intentá de nuevo.";
      setError(message);
      setLoading(false);
    }
  }

  return (
    <div className="inline-flex flex-col items-stretch">
      <Button
        type="button"
        variant="hero"
        size="xl"
        className={cn(className)}
        disabled={loading}
        onClick={handleClick}
      >
        {loading ? "Procesando..." : children}
      </Button>
      {error ? <p className="mt-2 text-center text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
