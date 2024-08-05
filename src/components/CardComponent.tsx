import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import SubHeading from "./SubHeading"
import Text from "./Text"

export function CardComponent() {
  return (
    <div className="flex px-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[50vw]"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                    <SubHeading text={`Coin ${index+1}`} />
                    <Text text="Help us reach 1M!" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
