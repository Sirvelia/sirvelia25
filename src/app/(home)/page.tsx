import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Hero from "./components/Hero";
import IconsGrid from "@/components/IconsGrid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FeaturesGrid from "@/app/(home)/components/FeaturesGrid";
import ServicesGrid from "./components/ServicesGrid";
import TechGrid from "./components/TechGrid";
import VerticalTabs from "@/components/VerticalTabs";
import IconGlobalCommunication from "@/components/icons/ico--045-global communication";
import IcoGrowthChart from "@/components/icons/ico--048-growth chart";
import IconLeaf from "@/components/icons/ico--049-leaf";
import RowGrid from "@/components/RowGrid";
import SubHeading from "@/components/SubHeading";
import LastPublishedPosts from "./components/LastPublishedPosts";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <div>
      <Hero />

      <IconsGrid>
        <IconsGrid.Icon src="/logos/logo--Alpine.svg" alt="Alpine.js" />
        <IconsGrid.Icon src="/logos/logo--WordPress.svg" alt="WordPress" />
        <IconsGrid.Icon src="/logos/logo--NuxtJS.svg" alt="NuxtJS" />
        <IconsGrid.Icon src="/logos/logo--Supabase.svg" alt="Supabase" />
        <IconsGrid.Icon src="/logos/logo--Tailwind.svg" alt="TailwindCSS" />
        <IconsGrid.Icon src="/logos/logo--Laravel.svg" alt="Laravel" />
      </IconsGrid>

      <Container className="space-y-8">
        <div className="max-w-xl mx-auto">
          <Heading title={<>The technology you need, without the limitations that hold you back</>} as="h2" size="medium" variant="body" className="text-center" />
        </div>

        <FeaturesGrid />

        <div className="flex justify-center">
          <Link href="/contact">
            <Button variant="primary" size="lg">Let's schedule a call</Button>
          </Link>
        </div>
      </Container>

      <Container className="space-y-8">
        <div className="max-w-2xl">
          <Heading title={<>Three services to make technology work for you</>} as="h2" size="medium" variant="body" className="" hasSlash />
        </div>

        <ServicesGrid />

      </Container>

      <Container className="space-y-8">
        <div className="max-w-2xl mx-auto">
          <Heading title={<>How do we create your solution?</>} as="h2" size="medium" variant="body" className="text-center mb-2" />
          <p className="text-center">We bring your project to life with one or more of these technologies.</p>
        </div>

        <TechGrid />

      </Container>

      <div className="bg-website-background-ultra-dark bg-[url('/textures/bg-pattern--dark.png')] bg-repeat bg-center bg-contain">
        <Container className="space-y-8">
          <div className="max-w-2xl mx-auto">
            <Heading title={<>Our essential <span className="text-accent">technical pillars</span></>} as="h2" size="medium" variant="white" className="text-center" />
          </div>

          <VerticalTabs tabs={[
            {
              label: "Integration from the ground up",
              content: (
                <div className="space-y-6 text-lg md:text-xl">
                  <IconGlobalCommunication width={50} height={50} className="text-accent" />

                  <p>Solutions do not exist in isolation. We design them with their integration into your systems in mind from the outset, such as CRMs, ERPs, and analytics platforms, to ensure frictionless implementation and an operation-focused vision.</p>
                </div>
              )
            },
            {
              label: "Scalability as a principle",
              content: (
                <div className="space-y-6 text-lg md:text-xl">
                  <IcoGrowthChart width={50} height={50} className="text-accent" />

                  <p>Solutions must be aligned with the pace of business growth.</p>

                  <p>We use modular architectures and cutting-edge technologies for rapid prototyping. They can evolve according to technical needs, with the security of a robust and adaptable infrastructure.</p>
                </div>
              )
            },
            {
              label: "Optimization through simplicity",
              content: (
                <div className="space-y-6 text-lg md:text-xl">
                  <IconLeaf width={50} height={50} className="text-accent" />

                  <p>Development is complex because the solution must be easy to use, maintain, and evolve.</p>

                  <p>We create clean, agile, and well-documented code to provide you with efficient, high-performance solutions.</p>
                </div>
              )
            }
          ]} variant="dark" />

          <div className="w-full max-w-xs mx-auto flex flex-col items-center gap-2">
            <p className="text-center text-lg text-text-light-muted">We have the solution, we just need to hear your idea.</p>
            <Link href="/contact">
              <Button variant="accent" size="lg">Schedule a call</Button>
            </Link>
          </div>


        </Container>
      </div>

      <div className="py-12 md:py-24">
        <TestimonialSlider testimonials={[
          {
            stars: 5,
            content: "100% recommended: human quality, easy communication, and absolute professionalism. We've been working with them for six months, and the quality and reliability of their work is unbeatable.",
            person: {
              name: "Guillermo Barquero",
              title: "Founder & CTO @ Zrive",
              imageUrl: "/testimonials/guillermo-barquero.png",
            },
            company: {
              name: "Zrive",
              logoUrl: "/testimonials/zrive.svg",
            }
          },
          {
            stars: 5,
            content: "We've hired Sirvelia on several occasions for WordPress plugin development, and the results couldn't have been better. They're incredibly easy to work with because they're such great professionals, not only technically but also personally. We'll definitely work with them again whenever we need them. 100% recommended.",
            person: {
              name: "Abián R. Zaya",
              title: "CEO",
              imageUrl: "/testimonials/abian-zaya.png",
            },
            company: {
              name: "ITGallery",
              logoUrl: "/testimonials/itgallery.png",
            }
          },
          {
            stars: 5,
            content: "Working with Sirvelia is always a pleasure. At GAMMA GROUP, we have worked on a wide variety of projects with them, and all of them have been a success. Their response is quick, personalized, and effective, which makes working with them easy and efficient. At Sirvelia, they don't just do what you ask them to do; they first understand your business and your real needs and then propose the best solution.",
            person: {
              name: "Cristina Fernández Freixa",
              title: "CMO",
              imageUrl: "/testimonials/cristina-fernandez.jpeg",
            },
            company: {
              name: "GAMMA GROUP",
              logoUrl: "/testimonials/gamma-group.jpeg",
            }
          },
          {
            stars: 5,
            content: "We were looking for versatile developers to strengthen our dev team. We've been successfully collaborating with Sirvelia for more than a year. They've been able to smoothly intervene in our environment and communicate with our international team.",
            person: {
              name: "Philippe Tarrare",
              title: "CEO",
              imageUrl: "/testimonials/philippe-tarrare.jpeg",
            },
            company: {
              name: "Voodootix",
              logoUrl: "/testimonials/voodoo.png",
            }
          },
          {
            stars: 5,
            content: "Great development team and skilled professionals. Excellent communication and work delivery. We've hired several teams to solve various WordPress optimization issues that we couldn't resolve with other professionals. Recommended.",
            person: {
              name: "David Carrasco",
              title: "SEO & Growth Advisor",
              imageUrl: "/testimonials/david-carrasco.jpeg",
            }
          },
          {
            stars: 5,
            content: "They helped us develop a new, fully customized WordPress website, developing everything completely ad hoc. We now have a fast, self-manageable website with management features developed specifically for our needs, particularly for managing the content and documents for all the products we have on the website, in all languages, and with version control for everything.",
            person: {
              name: "Néstor Díaz",
              title: "Managing Director SPAIN",
              imageUrl: "/testimonials/nestor-diaz.jpeg",
            },
            company: {
              name: "EKSELANS BY ITS",
              logoUrl: "/testimonials/ekselans.png",
            }
          }
        ]} />
      </div>

      <div className="relative py-12 md:py-24">
        <RowGrid>
          <RowGrid.Item>
            <RowGrid.Left>
              <div className="md:text-right space-y-2">
                <SubHeading title="Skin in the game" as="p" size="small" variant="primary" className="" />
                <Heading title="It's easy to create for others and tell them how to do things from the comfort of your sofa. But the fun part is taking risks." as="p" size="medium" variant="body" className="" />
              </div>
            </RowGrid.Left>
          </RowGrid.Item>
          <RowGrid.Item>
            <RowGrid.Right>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p>At Sirvelia, we know what we're talking about (and how complex it is) because we launch our own products and spin-off brands to explore new verticals and experiment with technologies.</p>

                  <p>Do you have a great idea and need a technology partner? Maybe you could be our next partner.</p>
                </div>

                <Link href="/spin-offs">
                  <Button variant="primaryOutline" size="lg">I want to see the projects</Button>
                </Link>
              </div>
            </RowGrid.Right>
          </RowGrid.Item>
        </RowGrid>
      </div>

      <Container className="space-y-8">
        <Heading title={<>Last published posts</>} as="h2" size="medium" variant="body" className="" hasSlash />

        <LastPublishedPosts />
      </Container>
    </div>
  )
}
