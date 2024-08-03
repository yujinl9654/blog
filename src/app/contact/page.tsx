import ContactForm from '@/components/ContactForm';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const LINKS = [
  { icon: <AiFillGithub />, url: 'https://github.com' },
  { icon: <AiFillLinkedin />, url: 'https://linkedin.com' },
  { icon: <AiFillYoutube />, url: 'https://youtube.com' },
];
export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me!</h2>
      <p>test.next@gmail.com</p>
      <div className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className="text-5xl hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <h2 className="text-3xl font-bold my-8">or Send me an email!</h2>
      <ContactForm />
    </section>
  );
}
