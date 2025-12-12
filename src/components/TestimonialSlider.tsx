"use client"

import TestimonialCard, { type TestimonialCardProps } from "./TestimonialCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface TestimonialSliderProps {
    testimonials: TestimonialCardProps[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className="p-4">
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-md">
                        <TestimonialCard {...testimonial} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="z-10" />
            <CarouselNext className="z-10" />
        </Carousel>
    )
}