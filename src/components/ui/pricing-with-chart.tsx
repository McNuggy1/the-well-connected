'use client';

import { Button } from '@/components/ui/button';
import { CheckCircleIcon } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export function PricingWithChart() {
  return (
    <div className="mx-auto max-w-6xl" id="pricing">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Pricing that Scales with You
        </h2>
        <p className="text-muted-foreground mt-4 text-sm md:text-base">
          Choose the right plan for your events and sponsorships. Transparent
          pricing built for modern teams.
        </p>
      </div>

      <div className="bg-background grid rounded-xl border md:grid-cols-6">
        <div className="flex flex-col justify-between border-b p-6 md:col-span-2 md:border-r md:border-b-0">
          <div className="space-y-4">
            <div>
              <h3 className="backdrop-blur-2 inline rounded-[2px] p-1 text-xl font-semibold">
                Starter
              </h3>
              <span className="my-3 block text-3xl font-bold text-wistful">
                Custom
              </span>
              <p className="text-muted-foreground text-sm">
                Best for single events & pilots
              </p>
            </div>

            <Button asChild variant="outline" className="w-full">
              <a href="#contact">Get in Touch</a>
            </Button>

            <div className="bg-border my-6 h-px w-full" />

            <ul className="text-muted-foreground space-y-3 text-sm">
              {[
                'Event strategy & concept',
                'Sponsorship deck',
                'Email support',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-wistful" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="z-10 grid gap-8 overflow-hidden p-6 md:col-span-4 lg:grid-cols-2">
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Full-Service Package</h3>
              <span className="my-3 block text-3xl font-bold text-wistful">
                Custom
              </span>
              <p className="text-muted-foreground text-sm">
                End-to-end events & sponsorship programs
              </p>
            </div>
            <div className="bg-muted/30 h-fit w-full rounded-lg border p-2">
              <InterestChart />
            </div>
          </div>
          <div className="relative w-full">
            <div className="text-sm font-medium">Everything in Starter plus:</div>
            <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
              {[
                'Full event production',
                'Sponsor acquisition & management',
                'Brand activations',
                'Community engagement programs',
                'Analytics & reporting',
                'Dedicated account lead',
                'Custom creative & experiential design',
                'Ongoing partnership strategy',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-wistful" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid w-full grid-cols-2 gap-2.5">
              <Button
                asChild
                className="bg-wistful text-white hover:bg-wistful/90"
              >
                <a href="#contact">Get Started</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Book a discovery call</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InterestChart() {
  const chartData = [
    { month: 'Jan', interest: 120 },
    { month: 'Feb', interest: 180 },
    { month: 'Mar', interest: 150 },
    { month: 'Apr', interest: 210 },
    { month: 'May', interest: 250 },
    { month: 'Jun', interest: 300 },
    { month: 'Jul', interest: 280 },
    { month: 'Aug', interest: 320 },
    { month: 'Sep', interest: 340 },
    { month: 'Oct', interest: 390 },
    { month: 'Nov', interest: 420 },
    { month: 'Dec', interest: 500 },
  ];

  const chartConfig = {
    interest: {
      label: 'Interest',
      color: '#ADA8D3',
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader className="space-y-0 border-b p-3">
        <CardTitle className="text-lg">Plan Popularity</CardTitle>
        <CardDescription className="text-xs">
          Monthly trend of teams considering this plan.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="interest"
              type="monotone"
              stroke="var(--color-interest)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
