import { RoadmapTimeline } from "../../features/roadmap/index.js";

function Roadmap() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Project Roadmap</h2>
      <div className="max-w-2xl mx-auto">
        <RoadmapTimeline />
      </div>
    </section>
  );
}

export default Roadmap;
