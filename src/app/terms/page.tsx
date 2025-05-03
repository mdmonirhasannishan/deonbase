import BgEffect from '../../components/BgEffect';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-back  px-4 py-10 sm:px-10 lg:px-32 text-slate-200">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="mb-6 text-sm text-gray-500">Effective Date: May 1, 2025</p>

        <div className="space-y-6">
          <p>
            These Terms and Conditions ("Terms") govern the use, licensing, and distribution of the
            software solution developed and provided by <strong>MD Monir Hasan Nishan</strong> under
            the brand name <strong>Deonbase</strong> ("we", "our", "us"). By purchasing, accessing,
            or using the Deonbase software, you ("Client", "you") agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-semibold">1. Software Ownership</h2>
          <p>
            The Deonbase software and all associated intellectual property rights are solely owned
            by MD Monir Hasan Nishan. The software is not sold to you but licensed for your business
            use under these Terms.
          </p>

          <h2 className="text-xl font-semibold">2. License Type</h2>
          <p>
            You are granted a{' '}
            <strong>non-exclusive, non-transferable, and non-sublicensable</strong> license to use
            the software on one server or domain, as specified at the time of purchase. The license
            is valid for lifetime use unless terminated due to a breach of these terms.
          </p>

          <h2 className="text-xl font-semibold">3. Prohibition of Resale and Redistribution</h2>
          <p>
            You may not resell, redistribute, sublicense, lease, or offer the software — in whole or
            in part — to any third party under any circumstance. Violating this clause will result
            in immediate license termination and possible legal action.
          </p>

          <h2 className="text-xl font-semibold">4. Deployment and Usage</h2>
          <p>
            The software will be deployed and configured on the agreed environment/server. Any
            misuse, modification, or deployment outside the permitted scope may result in suspension
            or termination of the license.
          </p>

          <h2 className="text-xl font-semibold">5. Payment Terms</h2>
          <p>
            All payments are due upfront before software delivery. Since this is a digital product
            and includes deployment/setup, <strong>no refunds</strong> will be issued after
            delivery.
          </p>

          <h2 className="text-xl font-semibold">6. Client Responsibilities</h2>
          <p>
            You are responsible for securing access to your server and managing user permissions
            within your organization. Deonbase is not liable for any internal misuse or data loss
            caused by your team or third-party interventions.
          </p>

          <h2 className="text-xl font-semibold">7. Intellectual Property Protection</h2>
          <p>
            You acknowledge that the software, source code, design, features, and structure are
            protected by copyright and other applicable laws. Unauthorized reproduction,
            modification, or reuse is strictly prohibited.
          </p>

          <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
          <p>
            In no event shall Deonbase or MD Monir Hasan Nishan be liable for any indirect,
            incidental, or consequential damages, or loss of data or business opportunity resulting
            from the use of the software.
          </p>

          <h2 className="text-xl font-semibold">9. International Sales and Jurisdiction</h2>
          <p>
            This software is sold globally, including but not limited to the United States, Europe,
            and Asia. Regardless of the client's location, these Terms shall be governed by and
            construed under the laws of <strong>Bangladesh</strong>.
          </p>
          <p>
            Any legal disputes or claims arising out of or in connection with these Terms shall be
            subject to the exclusive jurisdiction of the courts in{' '}
            <strong>Dhaka, Bangladesh</strong>.
          </p>

          <h2 className="text-xl font-semibold">10. Acceptance</h2>
          <p>
            By placing an order, completing a payment, or otherwise using the software, you confirm
            that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-xl font-semibold">11. Contact Information</h2>
          <p>For any questions or concerns about these Terms, please contact:</p>
          <ul className="list-none ml-0">
            <li>
              <strong>Name:</strong> MD Monir Hasan Nishan
            </li>
            <li>
              <strong>Email:</strong> deonbasehelp@gamil.com
            </li>
            <li>
              <strong>Phone:</strong> +8801922252908
            </li>
            <li>
              <strong>Location:</strong> Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>
      <BgEffect />
    </div>
  );
};

export default TermsPage;
