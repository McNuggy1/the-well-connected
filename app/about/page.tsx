"use client";

import { Section, SectionHeading } from "@/components/Section";
import { MotionInView } from "@/components/MotionInView";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <Section background="white" className="py-16 md:py-24">
        <SectionHeading
          label="Who we are"
          title="About The Well Connected"
          className="max-w-3xl mb-20"
        />
        <MotionInView>
          <p className="body-lg text-black/85 max-w-2xl mb-16">
            We are a premium creative agency dedicated to crafting meaningful
            connections between brands and people. Through immersive events,
            strategic sponsorships, and unforgettable experiences, we help our
            clients leave a lasting impression.
          </p>
        </MotionInView>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
          <MotionInView delay={0.1}>
            <div>
              <h3 className="font-display headline-sm text-wistful mb-4">
                Our Mission
              </h3>
              <p className="body-md text-black/85">
                To craft unforgettable experiences, forge meaningful
                connections, and deliver exceptional results through innovative
                event and sponsorship strategies.
              </p>
            </div>
          </MotionInView>
          <MotionInView delay={0.2}>
            <div>
              <h3 className="font-display headline-sm text-wistful mb-4">
                Our Vision
              </h3>
              <p className="body-md text-black/85">
                To be the most trusted partner for brands seeking to create
                lasting impact through experiences that resonate, inspire, and
                connect.
              </p>
            </div>
          </MotionInView>
          <MotionInView delay={0.3}>
            <div>
              <h3 className="font-display headline-sm text-wistful mb-4">
                Our Ethos
              </h3>
              <p className="body-md text-black/85">
                We believe in the power of human connection. Every event we
                design and every partnership we build is rooted in authenticity,
                creativity, and excellence.
              </p>
            </div>
          </MotionInView>
        </div>
      </Section>
      <Section background="wistful" className="py-24 md:py-32">
        <div className="max-w-3xl">
          <MotionInView>
            <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-black">
              We measure success not only in attendance numbers but in the
              relationships formed, the communities strengthened, and the
              lasting memories created.
            </p>
          </MotionInView>
        </div>
      </Section>
    </div>
  );
}
