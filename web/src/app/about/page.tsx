import Footer from "../components/footer";
import Header from "../components/header";

export default function About() {
  return (
    <>
      <div className="flex flex-col min-h-full justify-center h-screen">
        <Header />
        <div className="mb-auto">
          <AboutSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

function AboutSection() {
  return (
    <>
      <div className="container">
        <section>
          <h1>Welcome to Url Shortener!</h1>
          <p>
            At Url Shortener, we understand the importance of simplicity and
            efficiency in today&aposs fast-paced digital landscape. Our mission
            is to provide users with a reliable, user-friendly URL shortening
            service that enhances their online communication experience. We
            believe that every click counts, and by shortening URLs, we help
            users save time, improve readability, and maximize the impact of
            their online presence.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>
              <strong>Customizable Short Links:</strong> Tailor your shortened
              URLs to reflect your brand or message with customizable short
              links.
            </li>
            <li>
              <strong>Detailed Analytics:</strong> Gain valuable insights into
              your link performance with detailed analytics.
            </li>
            <li>
              <strong>Secure and Reliable:</strong> Rest easy knowing that your
              shortened URLs are secure and reliable.
            </li>
            <li>
              <strong>API Integration:</strong> Seamlessly integrate Url
              Shortener into your applications, websites, or workflows with our
              API.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why Choose Url Shortener?</h2>
          <ul>
            <li>
              <strong>Effortless Convenience:</strong> With Url Shortener,
              generating shortened URLs is quick and hassle-free.
            </li>
            <li>
              <strong>Enhanced User Experience:</strong> Url Shortener improves
              user experience by making links cleaner, more concise, and easier
              to share.
            </li>
            <li>
              <strong>Optimized Performance:</strong> Url Shortener helps you
              optimize your online performance by increasing click-through rates
              and providing powerful analytics tools.
            </li>
          </ul>
        </section>

        <section>
          <h2>Get Started Today</h2>
          <p>
            Ready to experience the convenience and efficiency of Url Shortener?
            Sign up now and start shortening URLs with ease.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? Contact our friendly support team at{" "}
            <a href="mailto:support@Url Shortener.com">
              support@Url Shortener.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>Connect With Us</h2>
          <p>
            Stay up-to-date with the latest news, updates, and tips from Url
            Shortener by following us on social media.
          </p>
          <p>
            Join the conversation on <a href="#">Twitter</a>,{" "}
            <a href="#">Facebook</a>, and <a href="#">Instagram</a> to connect
            with our community and share your Url Shortener success stories!
          </p>
        </section>
      </div>
    </>
  );
}
