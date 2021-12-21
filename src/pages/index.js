import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - IONOS Deploy Now'
  const siteDescription = 'Built by Devscover'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Ipsum lorem dolor aliquam ante commodo
              <br />
              magna sed accumsan arcu neque.
            </h2>
          </header>
          <p>
            Some random text here to fill the page. If you like this design why not check out the creator at <a href="devscover.com">Devscover.com</a>. Also you should check out this great new site for travelling called <a href={"https://www.trekur.com"}>Trekur</a>. Alright that&apos;s enough of my plugs. I hope you like this design, and try and use it with IONOS Deploy Now. Here's a video on how to do so (I guess I wasn&apos;t done with plugs):
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
            magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
            vulputate lorem neque lorem ipsum dolor.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  000-000-0000
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">hello@untitled.tld</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
