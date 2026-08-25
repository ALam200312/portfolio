"use client";

import { useState } from "react";
import { Project } from "@/lib/types";
import Sidebar from "./Sidebar";
import VideoPanel from "./VideoPanel";

type Props = {
  projects: Project[];
  categories: string[];
};

export default function ChannelStudio({ projects, categories }: Props) {
  const [selected, setSelected] = useState<Project>(projects[0]);
  const [mobileView, setMobileView] = useState<"list" | "player">("list");

  function handleSelect(project: Project) {
    setSelected(project);
    setMobileView("player");
  }

  function handleEnded() {
    const sameCategory = projects.filter(
      (p) => p.category === selected.category
    );
    const indexInCategory = sameCategory.findIndex(
      (p) => p.id === selected.id
    );
    const nextInCategory = sameCategory[indexInCategory + 1];
    if (nextInCategory) {
      setSelected(nextInCategory);
      return;
    }

    const categoryIndex = categories.indexOf(selected.category);
    const nextCategory = categories[categoryIndex + 1];
    const firstOfNextCategory = projects.find(
      (p) => p.category === nextCategory
    );
    if (firstOfNextCategory) setSelected(firstOfNextCategory);
  }

  return (
    <div className="min-h-dvh w-full bg-background text-foreground md:flex">
      <aside
        className={`w-full border-border md:w-1/2 md:shrink-0 md:border-r ${
          mobileView === "player" ? "hidden md:block" : "block"
        }`}
      >
        <Sidebar
          categories={categories}
          projects={projects}
          selectedId={selected.id}
          onSelect={handleSelect}
        />
      </aside>

      <main
        className={`min-h-dvh min-w-0 md:h-dvh md:flex-1 md:sticky md:top-0 ${
          mobileView === "list" ? "hidden md:block" : "block"
        }`}
      >
        <VideoPanel
          project={selected}
          onBack={() => setMobileView("list")}
          onEnded={handleEnded}
        />
      </main>
    </div>
  );
}
