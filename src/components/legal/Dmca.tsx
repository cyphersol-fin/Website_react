import React from "react";
import { GlowEffect1 } from "../UI/GlowEffect";
import { cn } from "../lib/utils";
import { Badge } from "../UI/Badge";

export const Dmca = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <GlowEffect1 />
      <div className="relative">
        <div className="container mx-auto max-w-6xl max-auto px-4 py-12">
          <div className="text-center mb-8">
            <Badge>DMCA</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-center">
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-500"
              )}
            >
              DMCA Policy
            </span>
          </h1>
          <div className="text-gray-400 text-lg leading-8 px-4 py-4">
            <p className="mb-4">
              <b className="font-semibold text-white">
                CYPHERSOL FINTECH INDIA PVT. LTD.
              </b>{" "}
              ("Company") respects the intellectual property rights of others
              and is committed to complying with and upholding the provisions of
              the Digital Millennium Copyright Act ("DMCA"). This policy
              outlines the procedures for addressing copyright infringement
              claims and sets forth the actions that the Company will take in
              response to such claims.
            </p>
            <h3 className="text-2xl text-white font-semibold mb-4">
              NOTICE AND TAKEDOWN PROCEDURE
            </h3>
            <p className="mb-4">
              If you believe that your copyrighted work has been infringed upon
              on any of the Company's platforms, websites, or services, you may
              submit a notification ("DMCA Notice") to our Designated Agent/
              Legal Representative. The DMCA Notice should include the following
              information:
            </p>
            <div className="pl-14 mb-4">
              <li>
                A physical or electronic signature of the copyright owner or a
                person authorized to act on their behalf.
              </li>
              <li>
                Identification of the copyrighted work claimed to have been
                infringed.
              </li>
              <li>
                Identification of the material that is claimed to be infringing
                or to be the subject of infringing activity and that is to be
                removed or access to which is to be disabled.
              </li>
              <li>
                Sufficient information to permit us to locate the material.
              </li>
              <li>
                Your contact information, including your name, address,
                telephone number, and email address.
              </li>
              <li>
                A statement that you have a good faith belief that the use of
                the material in the manner complained of is not authorized by
                the copyright owner, its agent, or the law.
              </li>
              <li>
                A statement that the information in the notification is
                accurate, and under penalty of perjury, that you are authorized
                to act on behalf of the copyright owner.
              </li>
            </div>
            <h3 className="text-2xl text-white font-semibold mb-4">
              DESIGNATED AGENT/ LEGAL REPRESENTATIVE
            </h3>
            <p className="mb-4">
              Please send the DMCA Notice to our Designated Agent / Legal
              Representative:
            </p>
            <p className="mb-4">
              <b className="font-semibold text-white">
                SonisVision Corporates LLP{" "}
              </b>
              , having registered address at N 2 Dhola Bhata Ajmer Rajasthan-
              305001, or mail them officesonisvision@gmail.com or call them at
              +91 72970 51181.
            </p>
            <h3 className="text-2xl text-white font-semibold mb-4">
              COUNTER-NOTICE PROCEDURE
            </h3>
            <p className="mb-4">
              If you believe that material was mistakenly removed or disabled
              due to an error or misidentification, you may submit a counter
              notice to our Designated Agent/ Legal Representative. The
              counter-notice should include the following information:
            </p>
            <div className="pl-14 mb-4">
              <li>Your physical or electronic signature.</li>
              <li>
                Identification of the material that was removed or disabled and
                the location where it appeared before its removal or
                disablement.
              </li>
              <li>
                A statement under penalty of perjury that you have a good faith
                belief that the material was removed or disabled as a result of
                mistake or misidentification.
              </li>
              <li>Your name, address, telephone number, and email address.</li>
              <li>
                A statement that you consent to the jurisdiction of the court in
                Rajasthan, India, and a statement that you will accept service
                of process from the person who provided the original DMCA Notice
                or an agent of such person.
              </li>
              <li>Actions Taken</li>
            </div>
            <p className="mb-4">
              Upon receipt of a valid DMCA Notice, we will take the following
              actions:
            </p>
            <h3 className="text-2xl text-white font-semibold mb-4">
              Removal or Disabling of Infringing Material
            </h3>
            <p className="mb-4">
              If the DMCA Notice meets the requirements set forth above, we will
              promptly remove or disable access to the allegedly infringing
              material after doing our own due diligence.
            </p>
            <h3 className="text-2xl text-white font-semibold mb-4">
              Notice to Alleged Infringer
            </h3>
            <p className="mb-4">
              If the material is removed or access is disabled, we will notify
              the user who posted the material of the takedown and provide them
              with a copy of the DMCA Notice. We will also inform the user about
              their right to submit a counter-notice.
            </p>
            <h3 className="text-2xl text-white font-semibold mb-4">
              REPEAT INFRINGERS
            </h3>
            <p className="mb-4">
              It is the Company's policy to terminate the accounts of repeat
              infringers. In cases where a user is determined to be a repeat
              infringer, we may, at our discretion, take further actions,
              including removing content, disabling accounts, or pursuing legal
              remedies.
            </p>
            <h3 className="text-2xl text-white font-semibold mb-4">
              NON-INTERFERENCE AND FAIR USE
            </h3>
            <p className="mb-4">
              The company respects the fair use doctrine and the rights of
              individuals to use copyrighted material for purposes such as
              criticism, commentary, teaching, research, and news reporting.
              This DMCA Policy is not intended to hinder or interfere with
              legitimate fair use or other non-infringing uses of copyrighted
              material.
            </p>
            <h3 className="text-2xl text-white font-semibold mb-4">
              DISCLAIMER OF LIABILITY
            </h3>
            <p className="mb-4">
              The company is not liable for any damages, losses, or costs
              resulting from the actions of its users or third parties. However,
              we are committed to promptly responding to and addressing valid
              DMCA Notices in accordance with this policy.
            </p>
            <h3 className="text-2xl text-white font-semibold mb-4">
              COOPERATION WITH LAW ENFORCEMENT
            </h3>
            <p className="mb-4">
              The company will cooperate with law enforcement agencies as
              required and may disclose relevant user information in compliance
              with applicable laws and regulations.
            </p>
            <h3 className="text-2xl text-white font-semibold mb-4">
              SEVERABILITY
            </h3>
            <p className="mb-4">
              If any provision of this DMCA Policy is found to be invalid or
              unenforceable, the remaining provisions shall continue to be in
              effect.
            </p>
            <p className="mb-4">
              Please note that this DMCA Policy is subject to change at the
              Company's discretion. We encourage you to review this policy
              periodically for any updates. Designated
            </p>
            <p className="mb-4">
              If you have any questions or concerns about this DMCA Policy,
              please contact our Designated Agent/ Legal Representative at the
              address provided above.
            </p>
            <p className="mb-4">
              By using the Company's platforms, websites, or services, you agree
              to comply with this DMCA Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
