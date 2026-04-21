// filepath: src/components/Biography.tsx
import './Biography.css';

const Biography = () => {
  return (
    <section id="biography">
      <h2>📖 The Legend Begins</h2>
      <div className="content-box">
        <p>
          Born on a fateful day in 2010, Ben Chadwick was destined for greatness—not in sports, 
          not in academics, but in the sacred art of <strong>stinking</strong>.
        </p>
        <p>
          From his first breath in the delivery room, the nurses knew something was different. 
          The doctor reportedly said, "I've never smelled anything like this... and I've been 
          in medicine for 30 years."
        </p>
        <p>
          Today, Ben continues his legacy as a renowned aromatic athlete, inspiring millions 
          around the globe to embrace their inner stink.
        </p>
        <p>
          Rumor has it that Ben's stench is so potent, it can be detected from space. NASA is
          currently investigating the possibility of using Ben's unique scent as a new form of 
          interstellar communication. Stay tuned for updates on this groundbreaking research!
        </p>
      </div>
    </section>
  );
};

export default Biography;