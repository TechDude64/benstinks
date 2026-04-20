// filepath: src/components/Navigation.tsx
import './Navigation.css';

const Navigation = () => {
  const navItems = [
    { href: '#biography', label: 'Biography' },
    { href: '#achievements', label: 'Greatest Stinks' },
    { href: '#odor-log', label: 'Daily Odor Log' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#gallery', label: 'Gallery' },
  ];

  return (
    <nav>
      {navItems.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;