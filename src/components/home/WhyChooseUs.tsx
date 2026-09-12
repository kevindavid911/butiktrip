import { Section } from '@/components/layout';
import styles from './WhyChooseUs.module.css';
import { BsShieldFillCheck } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export function WhyChooseUs() {
  const features = [
    {
      icon:<BsShieldFillCheck />,
      title: 'Trusted',
      description: 'Thousands of customers have entrusted their travel plans to us.'
    },
    {
      icon: <FaMoneyBill />,
      title: 'Best Price',
      description: 'We offer the most competitive prices with premium service quality.'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Tour Guide',
      description: 'Led by experienced local guides who know the destination inside and out.'
    },
    {
      icon: <IoCall />,
      title: '24/7 Support',
      description: 'Our team is always ready to help you whenever and wherever you are.'
    }
  ];

  return (
    <Section 
      title="Why Choose ButikTrip?" 
      subtitle="Why Us?"
    >
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{feature.icon}</span>
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
