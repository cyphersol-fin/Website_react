import React from "react";
import { GlowEffect1 } from "../UI/GlowEffect";
import { Badge } from "../UI/Badge";
import { cn } from "../lib/utils";
import { Helmet } from "react-helmet-async";

export const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | CypherSOL</title>
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
              <Badge>Refund</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-center">
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white/90 to-blue-500"
                )}
              >
                Refund Policy
              </span>
            </h1>
            <div className="text-gray-400 text-lg leading-8 px-4 py-4">
              <p className="mb-4">
                The Customer can choose between a pay-as-you-go option, allowing
                immediate access to the service upon payment, or opt for a
                subscription. In the case of a subscription, access will be
                active throughout the paid subscription period. Upon payment, an
                invoice will be promptly issued, granting the customer immediate
                service usage.
              </p>
              <p className="mb-4">
                The Customer must pay the Charges by debit card, credit card,
                direct debit, bank transfer, UPI, or by using such payment
                details as are notified by the Provider to the Customer from
                time to time. The payments shall be made in the official bank
                account of the Provider only.
              </p>

              <h3 className="text-2xl text-white font-semibold mb-4">
                Payment and Refund Terms:
              </h3>

              <div className="pl-10">
                <p className="mb-4">
                  1) The company charges and collects fees in advance for the
                  usage of our service, and all services rendered are
                  non-refundable.
                </p>
                <p className="mb-4">
                  2) Subscriptions are monthly, automatically renewing on their
                  due date until officially cancelled. Customers can cancel
                  anytime through the{" "}
                  <b className="text-white">
                    M/s CypherSOL Fintech India Private Limited
                  </b>{" "}
                  Web Application, Manage Subscription Page, or by sending a
                  notice via email to:
                </p>
              </div>
              <p className="mb-4">
                <b className="text-white">
                  M/s CypherSOL Fintech India Private Limited
                </b>{" "}
                retains the authority to decline or annul a subscription for any
                of its SaaS services. In the event of such refusal, whether for
                a new or renewing subscription/membership, customers will be
                eligible for a prorated refund corresponding to the remaining
                days in the purchased subscription plan or the unused portion of
                the pre-established service limits.
              </p>
              <p className="mb-4">
                No refunds or credits for a partial month of service will be
                issued upon cancellation from the user.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
