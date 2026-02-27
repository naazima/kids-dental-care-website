import { Hero } from "@/components/sections/hero";
import { Welcome } from "@/components/sections/welcome";
import { FeatureGentle } from "@/components/sections/feature-gentle";
import { FeatureAffordable } from "@/components/sections/feature-affordable";
import { FeatureEmergency } from "@/components/sections/feature-emergency";
import { QualityCare } from "@/components/sections/quality-care";
import { DoctorProfile } from "@/components/sections/doctor-profile";
import { Benefits } from "@/components/sections/benefits";
import { Testimonials } from "@/components/sections/testimonials";
import { ServiceAreaMap } from "@/components/sections/service-area-map";
import { ActionCards } from "@/components/sections/action-cards";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <FeatureGentle />
      <ServiceAreaMap />
      <QualityCare />
      <DoctorProfile />
      <Benefits />
      <Testimonials />
      {/* <FeatureAffordable /> */}
      {/* <FeatureEmergency /> */}
      <ActionCards />
    </>
  );
}
