type TimelineProps = {
  timeline?: { title: string; period: string; description: string }[];
};

const Timeline = ({ timeline = [] }: TimelineProps) => {
  return (
    <section className="container mx-auto h-screen">
      <h1 className="text-1xl px-4 font-bold md:text-3xl">Timeline</h1>
      {timeline.length > 0 && (
        <ul>
          {timeline.map(({ title, period, description }, index) => (
            <li className="" key={`timeline-period-${index}`}></li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Timeline;
