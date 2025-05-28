import React from "react";
import { GlowEffect1 } from "../UI/GlowEffect";
import { Badge } from "../UI/Badge";
import { cn } from "../lib/utils";
import { Helmet } from "react-helmet-async";

export const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | CypherSOL</title>
        <meta
          name="description"
          content="Contact Cyphersol to learn more about our IT solutions and accounting automation services. We assist chartered accountants and MSMEs in India to streamline workflows and enhance efficiency. Reach out to us today!"
        />
        <meta
          name="keywords"
          content="Cyphersol contact, IT solutions, accounting automation, chartered accountants, MSME solutions, accounting software, customer support, get in touch"
        />
      </Helmet>
      <div className="relative bg-black min-h-screen overflow-hidden">
        <GlowEffect1 />
        <div className="relative">
          <div className="container max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-8">
              <Badge>Disclaimer</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-center">
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-500"
                )}
              >
                Our Disclaimer
              </span>
            </h1>
            <div className="text-gray-400 text-lg leading-8 px-4 py-4">
              <p className="mb-4">
                The information contained on this Website is provided on an "as
                is", and “as available” basis without warranties of any kind.{" "}
                <b className="text-white">CYPHERSOL FINTECH INDIA PVT LTD</b>{" "}
                (hereinafter referred to as{" "}
                <b className="text-white">“CYPHERSOL”</b>) assumes no
                responsibility for errors or omissions in the contents of the
                services or data available on the platforms owned or operated by{" "}
                <b className="text-white">CYPHERSOL</b> .
              </p>
              <p className="mb-4">
                In no event shall <b className="text-white">CYPHERSOL</b> be
                held responsible or liable;
              </p>
              <div className="pl-10 mb-4">
                <li>
                  as to the accuracy, completeness, correctness, reliability,
                  timeliness, non-infringement, title, merchantability, or
                  fitness for any particular purpose of the contents of this
                  Website;
                </li>
                <li>
                  the contents available through this Website or any functions
                  associated therewith will be uninterrupted or error-free, or
                  defects will be corrected, or that this Website and the server
                  is and will be free of all viruses and/or other harmful
                  elements.
                </li>
              </div>
              <p className="mb-4">
                It is Your responsibility to evaluate the accuracy,
                completeness, and usefulness of our Services and other
                information provided by us on the platforms owned or operated by{" "}
                <b className="text-white">CYPHERSOL</b> .
              </p>
              <p className="mb-4">
                Any content downloaded or otherwise obtained through the use of
                our website is done at your own discretion and risk, and We
                cannot confirm that such documents or contents are errors or
                viruses free and You understand and acknowledge that you are
                solely responsible for any damage to your devices, for any loss
                of data that may result from the download of such contents.
              </p>
              <p className="mb-4">
                <b className="text-white">CYPHERSOL</b> reserves the right to
                disable any unauthorized links or frames and disclaims any
                responsibility for the content available on any other site
                reached by links to or from this Website or any of the contents.
              </p>
              <p className="mb-4">
                Click here for the complete Website Terms and conditions Policy
                of <b className="text-white">CYPHERSOL</b>
              </p>
              <p className="mb-4">
                If you click on <b className="text-white">“I AGREE”</b>,{" "}
                <b className="text-white">“SUBMIT”</b>,{" "}
                <b className="text-white">“ACCEPT”</b> or the like (if provided)
                indicates your acceptance you certify you are a qualified
                individual of Legal Age (Eighteen (18) Years or above) and that
                you have read, reviewed, understood, and agreed to be bound by
                all the terms and conditions and agree to comply with its terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
