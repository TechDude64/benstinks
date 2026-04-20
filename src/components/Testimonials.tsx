// filepath: src/components/Testimonials.tsx
import './Testimonials.css';

interface Testimonial {
  quote: string;
  cite: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I've smelled a lot of things in my life, but nothing compares to Ben. He's not just stinky—he's a force of nature.",
    cite: "— Fiona Curl, His Mum",
  },
  {
    quote: "We had to install industrial ventilation in our classrooms after Ben enrolled.",
    cite: "— Adrian Farrer, His Principal at School",
  },
  {
    quote: "I once saw a dog walk away from Ben. The dog. Not the other way around.",
    cite: "— Hugh Chadwick, Ben's Brother",
  },
  {
    quote: "He once made a skunk pass out. True story.",
    cite: "— William Kenafacke, Some Guy at a Party",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>💬 What People Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index}>
            <em>{testimonial.quote}</em>
            <cite>{testimonial.cite}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;