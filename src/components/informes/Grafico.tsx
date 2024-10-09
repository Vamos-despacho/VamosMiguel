"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive bar chart"

const chartData = [
    { month: "julio", pleno: 100, salud: 100, educacion: 100 },
    { month: "agosto", pleno: 100, salud: 100, educacion: 100 },
    { month: "septiembre", pleno: 100, salud: 100, educacion: 100 },
    { month: "octubre", pleno: 100, salud: 100, educacion: 100 },
];
const total = {
    pleno: 100,
    salud: 100,
    educacion: 100,
};

const chartConfig = {
    views: {
        label: "Page Views",
    },
    pleno: {
        label: "Sesiones Plenarias",
        color: "hsl(var(--chart-2))",
    },
    salud: {
        label: "Comision de Salud",
        color: "hsl(var(--chart-4))",
    },
    educacion: {
        label: "Comision de Educación",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

const Grafico = () => {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>("pleno")

    const total = React.useMemo(
        () => ({
            pleno: chartData.reduce((acc, curr) => acc + curr.pleno, 0),
            salud: chartData.reduce((acc, curr) => acc + curr.salud, 0),
            educacion: chartData.reduce((acc, curr) => acc + curr.educacion, 0),
        }),
        []
    )

    return (
        <Card>
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle>Asistencias</CardTitle>
                    <CardDescription>

                    </CardDescription>
                </div>
                <div className="flex">
                    {["pleno", "salud", "educacion"].map((key) => {
                        const chart = key as keyof typeof chartConfig
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="relative z-30  flex flex-1 flex-col justify-center gap-1 border-t px-4
                                 py-4  even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0  m-auto p-auto  items-center"
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="text-xs text-muted-foreground">
                                    {chartConfig[chart].label}
                                </span>
                                <span className="text-lg font-bold leading-none sm:text-2xl">
                                    100%
                                </span>
                            </button>
                        )
                    })}
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[200px] w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
export default Grafico