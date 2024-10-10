"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
const color1 = "#4a729b"
const color2 = "#2b5989"
const color3 = "#1a456d"
// const color1 = "#8ab6d6"
// const color2 = "#f5b971"
// const color3 = "#7ea65f"

const chartConfig = {
    pleno: {
        label: "Pleno",
        color: color1,
    },
    educacion: {
        label: "Educación",
        color: color2,
    },
    salud: {
        label: "Salud",
        color: color3,
    },
} satisfies ChartConfig

const GraficoBar = () => {
    return (
        <Card
            className="shadow-sm"
        >
            <CardHeader>
                <CardTitle>Asistencias </CardTitle>

            </CardHeader>
            <CardContent
            >
                <ChartContainer
                    config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value: any) => `${value}%`}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
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
                    <div className="flex justify-center items-center gap-1">
                        <span className="h-6 w-7  flex " style={{ backgroundColor: color1 }}></span>
                        <p>Sesiones Plenarias 100%</p>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <span className="h-6 w-7  flex " style={{ backgroundColor: color2 }}></span>
                        <p>Comisión de Educación 100%</p>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <span className="h-6 w-7  flex " style={{ backgroundColor: color3 }}></span>
                        <p>Comisión de Salud 100%</p>
                    </div>
                </div>
                {/* <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div> */}
            </CardFooter>
        </Card>
    )
}
export default GraficoBar