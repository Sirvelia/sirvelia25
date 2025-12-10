import { Card, CardContent } from "../../../components/ui/card";
import Image from "next/image";

export default function FeaturesGrid() {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-8 items-center">
                <div className="hidden lg:block absolute top-0 left-0 w-full h-1/2 border-b-2 border-dashed border-accent">

                </div>

                <Card className="col-span-1  relative text-text-dark" hasGradient gradientPosition="right">
                    <CardContent className="space-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="space-y-2">
                                <Image src="/icons/ico--044-settings gear icon.svg" alt="Introduce new features" width={30} height={30} />
                                <p className="text-lg font-medium leading-[120%]">Introduce new features</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1  relative text-text-dark" hasGradient gradientPosition="right">
                    <CardContent className="space-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="space-y-2">
                                <Image src="/icons/ico--048-growth chart.svg" alt="Increase productivity" width={30} height={30} />
                                <p className="text-lg font-medium leading-[120%]">Increase productivity</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-1  relative text-text-dark" hasGradient gradientPosition="right">
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="space-y-2">
                                <Image src="/icons/ico--031-cloud upload.svg" alt="Launch new digital products" width={30} height={30} />
                                <p className="text-lg font-medium leading-[120%]">Launch new digital products</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}