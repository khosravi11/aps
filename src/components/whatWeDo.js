import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox, faFire, faFaucet, faToilet, faWater, faPumpSoap, faShower, faPersonArrowDownToLine, faDroplet, faHouseDamage, faSearch } from '@fortawesome/free-solid-svg-icons';


const services = [
  {
    title: 'Plumbing Services',
    description: 'Comprehensive plumbing services for residential and commercial properties. From leaks to full installations, we do it all.',
    icon: faToolbox,
    link: 'https://donerighttoday.com/plumbing-services/',
  },
  {
    title: 'Water Heaters',
    description: 'Expert water heater installation and repair services to ensure you have a reliable hot water supply.',
    icon: faFire,
    link: 'https://donerighttoday.com/water-heaters/',
  },
  {
    title: 'Faucets Repair and Replacement',
    description: 'Professional faucet repair and replacement services to fix leaks and upgrade your fixtures.',
    icon: faFaucet,
    link: 'https://donerighttoday.com/faucets-repair-and-faucet-replacement/',
  },
  {
    title: 'Toilets',
    description: 'Toilet installation and repair services, including unclogging and fixing leaks, to keep your bathroom functioning smoothly.',
    icon: faToilet,
    link: 'https://donerighttoday.com/toilets/',
  },
  {
    title: 'Sump Pump Installation and Repair',
    description: 'Reliable sump pump installation and repair services to protect your basement from flooding.',
    icon: faWater,
    link: 'https://donerighttoday.com/sump-pumps/',
  },
  {
    title: 'Well Pump Repair and Replacement',
    description: 'Expert well pump repair and replacement services to ensure a steady water supply from your well.',
    icon: faPumpSoap,
    link: 'https://donerighttoday.com/well-pump-repair-and-replacement/',
  },
  {
    title: 'Drain Cleaning',
    description: 'Professional drain cleaning services to clear blockages and prevent backups in your plumbing system.',
    icon: faShower,
    link: 'https://donerighttoday.com/drain-cleaning/',
  },
  {
    title: 'Water Line Repair',
    description: 'Fast and efficient water line repair services to fix leaks and restore water flow to your property.',
    icon: faDroplet,
    link: 'https://donerighttoday.com/water-line-repair/',
  },
  {
    title: 'Sewer Line Repair',
    description: 'Expert sewer line repair services to address blockages, breaks, and other issues in your sewer system.',
    icon: faPersonArrowDownToLine,
    link: 'https://donerighttoday.com/sewer-line-repair/',
  },
  {
    title: 'Whole House Repipes',
    description: 'Comprehensive repiping services to replace old or damaged pipes throughout your entire home.',
    icon: faHouseDamage,
    link: 'https://donerighttoday.com/whole-house-repipes/',
  },
  {
    title: 'Plumbing Inspections',
    description: 'Thorough plumbing inspections to identify potential issues before they become costly problems.',
    icon: faSearch,
    link: 'https://donerighttoday.com/plumbing-inspections/',
  },
];

const ServiceCards = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fs-1 text-primary fw-bold">What We Do</h2>
        <div className="row align-items-stretch justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="text-center p-4 shadow-sm rounded h-100">
                <div className="icon mb-3">
                  <span className='text-primary'>
                  <FontAwesomeIcon icon={service.icon} size="4x" />
                  </span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
