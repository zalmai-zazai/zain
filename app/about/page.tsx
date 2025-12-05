import AboutHero from "@/components/about/AboutHero";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import VisitUs from "@/components/about/VisitUs";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <OurStory />
      <OurValues />
      <MeetTheTeam />
      <VisitUs />
    </div>
  );
}
