import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { CalendarDaysIcon, MedalIcon, StarIcon, TrophyIcon } from 'lucide-react';
import React from 'react';
import { IFAtleta } from '@/interface/atletas';

const Athlete = ({ athlete }: { athlete: IFAtleta }) => {
    return (
        <Card className="w-full max-w-xs bg-background shadow-md transition-all duration-300 hover:scale-105">
            <div className="relative">
                {athlete.isHighlighted && (
                    <div className="absolute top-3 right-3 bg-primary opacity-30 text-primary-foreground rounded-full p-1.5">
                        <StarIcon className="w-4 h-4" />
                    </div>
                )}
                <img
                    src="/images/avatarh.webp"
                    width={320}
                    height={240}
                    alt="Athlete"
                    className="rounded-t-lg object-cover w-full h-48 opacity-20"
                />
            </div>
            <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold">{athlete.name}</h3>
                        <p className="text-muted-foreground text-sm h-4">{athlete?.sports.length > 0 && athlete?.sports[0].discipline}</p>
                    </div>
                </div>
                <Separator />
                <div className="grid gap-1.5">
                    <div className="flex items-center gap-2">
                        <TrophyIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">4x Olympic Gold Medalist</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MedalIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">7x World Champion</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarDaysIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Born: March 14, 1997</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Athlete;
