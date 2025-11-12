import Heading from "@/components/ui/Heading";

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="wrapper max-w-[900px] mx-auto">
        <Heading
          as="h1"
          className="text-[28px] font-semibold mb-10 pb-2 border-b border-blue-500 w-fit"
        >
          About Us
        </Heading>

        <div className="space-y-10 text-gray-800 leading-relaxed">
          <SectionBlock
            title="Our Mission"
            content="At [Your Company Name], our mission is to revolutionize the automotive industry by providing innovative and reliable solutions that meet the needs of our customers. We strive to deliver top-quality vehicles, services, and experiences that enhance the way people move and connect with the world."
          />

          <SectionBlock
            title="Who We Are"
            content="[Your Company Name] was founded with a passion for automobiles and a commitment to excellence. Over the years, we have grown into a trusted name in the industry, known for our dedication to quality, safety, and customer satisfaction. Our team of experts brings together decades of experience in automotive engineering, design, and customer service."
          />

          <SectionBlock
            title="What We Do"
            content="We specialize in [mention specific areas like manufacturing high-performance vehicles, providing advanced automotive services, or offering cutting-edge automotive technology]. Our products are designed with the latest innovations to ensure that they are not only powerful and efficient but also safe and environmentally friendly."
          />

          <div>
            <Heading as="h3" className="text-xl font-medium mb-4">
              Our Values
            </Heading>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Innovation:</strong> We constantly push the boundaries of what's possible, integrating the latest technologies to create vehicles that are ahead of their time.
              </li>
              <li>
                <strong>Quality:</strong> We hold ourselves to the highest standards, ensuring that every vehicle and service we offer meets rigorous quality criteria.
              </li>
              <li>
                <strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do. We are committed to providing exceptional service and support to ensure a seamless experience.
              </li>
              <li>
                <strong>Sustainability:</strong> We are dedicated to reducing our environmental impact by embracing sustainable practices in our operations and products.
              </li>
            </ul>
          </div>

          <SectionBlock
            title="Our History"
            content="Founded in [Year], [Your Company Name] began with a simple vision: to create vehicles that combine style, performance, and innovation. Over the years, we have expanded our offerings, launching [mention key milestones, such as new vehicle models or services] and earning a reputation for excellence in the automotive industry."
          />

          <SectionBlock
            title="Why Choose Us?"
            content="What sets [Your Company Name] apart is our unwavering commitment to our customers and our passion for automobiles. Whether you're looking for a new vehicle, expert service, or innovative automotive solutions, you can trust us to deliver with integrity and excellence."
          />

          <SectionBlock
            title="Our Team"
            content="Our team is made up of talented professionals who share a love for automobiles and a dedication to quality. From our engineers and designers to our customer service representatives, every member of our team plays a crucial role in delivering the best products and services to our customers."
          />

          <SectionBlock
            title="Get in Touch"
            content="We love hearing from our customers and partners. If you have any questions, feedback, or would like to learn more about our offerings, please don’t hesitate to reach out to us. You can contact us at [contact information] or visit our office at [address]."
          />

          <SectionBlock
            title="Join Us on Our Journey"
            content="At [Your Company Name], we are on a journey to redefine the automotive experience. Join us as we continue to innovate and drive the future of transportation. Follow us on [social media links] to stay updated with our latest news and offerings."
          />
        </div>
      </div>
    </section>
  );
}

/* ✅ Helper component for consistent section styling */
function SectionBlock({ title, content }) {
  return (
    <div>
      <Heading as="h3" className="text-xl font-medium mb-4">
        {title}
      </Heading>
      <p>{content}</p>
    </div>
  );
}
