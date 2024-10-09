"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"




const chartData = [
    { month: "julio", pleno: 100, educacion: 100, salud: 100 },
    { month: "agosto", pleno: 100, educacion: 100, salud: 100 },
    { month: "septiembre", pleno: 100, educacion: 100, salud: 100 },
    { month: "octubre", pleno: 100, educacion: 100, salud: 100 },

]

const chartConfig = {
    pleno: {
        label: "Pleno",
        color: "hsl(var(--chart-2))",
    },
    educacion: {
        label: "Educación",
        color: "hsl(var(--chart-4))",
    },
    salud: {
        label: "Salud",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig
const GraficoBarH = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Asistencias </CardTitle>
                <CardDescription>Julio - Octubre 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: -20,
                        }}
                    >
                        <XAxis type="number" dataKey="pleno" hide />
                        <YAxis
                            dataKey="month"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="pleno" fill="var(--color-pleno)" radius={4} />
                        <Bar dataKey="educacion" fill="var(--color-educacion)" radius={4} />
                        <Bar dataKey="pleno" fill="var(--color-salud)" radius={4} />

                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}
                    <div className="flex justify-center items-center gap-2">
                        <span className="h-6 w-6  flex bg-[hsl(var(--chart-2))]"></span>
                        <p>Sesiones Plenarias 100%</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <span className="h-6 w-6  flex bg-[hsl(var(--chart-4))]"></span>
                        <p>Comisión de Educación 100%</p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <span className="h-6 w-6  flex bg-[hsl(var(--chart-1))]"></span>
                        <p>Comisión de Salud 100%</p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
export default GraficoBarH