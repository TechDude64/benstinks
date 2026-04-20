// filepath: src/components/OdorLog.tsx
import './OdorLog.css';

interface DayData {
  day: string;
  level: string;
  className: string;
}

const odorData: DayData[] = [
  { day: 'Monday', level: 'EXTREME', className: 'stink-level-high' },
  { day: 'Tuesday', level: 'EXTREME', className: 'stink-level-high' },
  { day: 'Wednesday', level: 'CATASTROPHIC', className: 'stink-level-critical' },
  { day: 'Thursday', level: 'EXTREME', className: 'stink-level-high' },
  { day: 'Friday', level: 'SEVERE', className: 'stink-level-medium' },
  { day: 'Saturday', level: 'EXTREME', className: 'stink-level-high' },
  { day: 'Sunday', level: 'REST DAY', className: 'stink-level-off' },
];

const OdorLog = () => {
  return (
    <section id="odor-log">
      <h2>📊 Daily Odor Log</h2>
      <div className="odor-tracker">
        {odorData.map((data, index) => (
          <div key={index} className="odor-day">
            <span className="day">{data.day}</span>
            <span className={`level ${data.className}`}>{data.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OdorLog;