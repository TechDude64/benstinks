// filepath: src/components/Achievements.tsx
import './Achievements.css';

interface Achievement {
  title: string;
  description: string;
  medal: string;
}

const achievements: Achievement[] = [
  {
    title: "The 2019 Gym Incident",
    description: "Cleared an entire gymnasium in under 3 minutes. 47 people evacuated. One janitor quit on the spot.",
    medal: "🥇",
  },
  {
    title: "The Elevator Ride",
    description: "Single-handedly stopped a 12-story elevator between floors. Fire department was called.",
    medal: "🥈",
  },
  {
    title: "The First Date",
    description: "His date left the restaurant before appetizers arrived. She gave him 1 star on Yelp.",
    medal: "🥉",
  },
  {
    title: "The Bus Victory",
    description: "Made an entire public bus pull over early. The driver said, \"Something died in here.\"",
    medal: "🏅",
  },
];

const Achievements = () => {
  return (
    <section id="achievements">
      <h2>🏆 Greatest Stinks</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <h3>
              {achievement.medal} {achievement.title}
            </h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;