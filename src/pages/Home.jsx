import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import AboutSection from '../components/AboutSection';
import SkillCard from '../components/SkillCard';
import TestimonialCard from '../components/TestimonialCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  const skills = [
    { title: 'React', proficiency: 75 },
    { title: 'JavaScript', proficiency: 80 },
    { title: 'HTML/CSS', proficiency: 95 },
    { title: 'Node.js', proficiency: 75 },
    { title: 'css frameworks', proficiency: 80 },
    { title: 'Python', proficiency: 90 },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO at TechCorp',
      photo: 'https://via.placeholder.com/150',
      quote: 'An exceptional developer who delivers outstanding results.',
    },
    {
      name: 'Jane Smith',
      role: 'Project Manager',
      photo: 'https://via.placeholder.com/150',
      quote: 'Great communication and technical skills. Highly recommended!',
    },
    {
      name: 'Mike Johnson',
      role: 'Senior Developer',
      photo: 'https://via.placeholder.com/150',
      quote: 'One of the most talented developers I\'ve worked with.',
    },
    {
      name: 'Sarah Wilson',
      role: 'UI/UX Designer',
      photo: 'https://via.placeholder.com/150',
      quote: 'Incredible attention to detail and great design sensibility.',
    },
    {
      name: 'David Brown',
      role: 'Product Manager',
      photo: 'https://via.placeholder.com/150',
      quote: 'Always delivers high-quality work ahead of schedule.',
    }
  ];

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Full-Stack Developer & Forex Trader
        </p>
      </motion.section>

      <AboutSection />

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-slider !pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev !text-blue-500"></div>
          <div className="swiper-button-next !text-blue-500"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;