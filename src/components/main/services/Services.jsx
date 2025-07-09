import { pageData } from "../../../data/pageData";

export default function Services() {
  const services = pageData.main.services;

  return (
    <>
      {/* Services section */}
      <section className="services">
        <h2>{services.title}</h2>
        <div className="serviceContainer">
          {services.items.map((service) => (
            <div className="service" key={service.id}>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <a
                href={service.link.href}
                target={service.link.target}
                rel={service.link.rel}
                className="itemButton"
              >
                {service.link.text}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
