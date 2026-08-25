import ChannelStudio from "@/components/ChannelStudio";
import { categories, projects } from "@/lib/projects";

export default function Home() {
  return <ChannelStudio projects={projects} categories={categories} />;
}
