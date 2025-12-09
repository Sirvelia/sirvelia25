import { Button } from "../ui/button";
import { getImageProps } from 'next/image'
import Link from "next/link";
import Container from "../Container";

function getBackgroundImage(srcSet = '') {
    const imageSet = srcSet
        .split(', ')
        .map((str) => {
            const [url, dpi] = str.split(' ')
            return `url("${url}") ${dpi}`
        })
        .join(', ')
    return `image-set(${imageSet})`
}

export default function Banner() {
    const {
        props: { srcSet, src },
    } = getImageProps({
        src: '/textures/bg-pixel-pattern.png',
        alt: '',
        width: 1920,
        height: 1080,
    })

    const backgroundImage = srcSet ? getBackgroundImage(srcSet) : `url("${src}")`

    return (
        <div className="relative px-2 md:px-6 -mb-8 z-10">
            <Container className="bg-primary rounded-lg p-4 md:p-12 text-primary-foreground grid grid-cols-12 gap-2 md:gap-4 items-center bg-[length:100%] md:bg-[length:50%]" style={{ backgroundImage, backgroundPosition: 'center right', backgroundRepeat: 'no-repeat' }}>
                <div className="col-span-12 md:col-span-6">
                    <p className="font-display font-normal text-2xl  md:text-4xl">Support and optimization<br /> from start to finish</p>
                </div>

                <div className="col-span-12 md:col-span-3">
                    <p className="text-text-light-muted font-light">We have the solution, we just need to know your idea.</p>
                </div>

                <div className="col-span-12 md:col-span-3 flex md:justify-end">
                    <Link href="/contact">
                        <Button variant="primaryDark" size="lg">Schedule a call</Button>
                    </Link>
                </div>

            </Container>
        </div>
    );
}