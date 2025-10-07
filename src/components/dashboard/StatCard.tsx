import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "success" | "warning" | "primary";
}

export function StatCard({ title, value, icon: Icon, trend, variant = "default" }: StatCardProps) {
  const variantStyles = {
    default: "bg-card",
    success: "bg-success-light",
    warning: "bg-warning-light",
    primary: "bg-primary-light",
  };

  return (
    <Card className={cn("transition-all hover:shadow-card-hover", variantStyles[variant])}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="mt-2 text-3xl font-bold text-foreground">{value}</h3>
            {trend && (
              <p
                className={cn(
                  "mt-2 text-sm font-medium",
                  trend.isPositive ? "text-success" : "text-destructive"
                )}
              >
                {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
              </p>
            )}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background/50">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
