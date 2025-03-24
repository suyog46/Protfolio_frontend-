import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


interface CarouselProps {
  imagePrefix: string; // Prefix for image filenames (e.g., "img/pj1_")
  imageCount: number;  // Total number of images
}

export const CarouselDemo: React.FC<CarouselProps> = ({ imagePrefix, imageCount }) => {
  // Number of images in the carousel
  // const imageCount = imageCount;
  return (
    <Carousel className="w-full  ">
      <CarouselContent>
        {Array.from({ length: imageCount }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 ">
              <Card className="w-full ">
                <CardContent className="flex  items-center justify-center p-6 ">
                  {/* Display the image */}
                  <img 
                    // src={`img/pj1_${index + 1}.jpg`}
                    src={`${imagePrefix}${index + 1}.jpg`}  
                    alt={`Slide ${index + 1}`} 
                    className="object-cover w-full h-full" 
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
