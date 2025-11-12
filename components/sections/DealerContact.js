"use client";
export default function DealerContact() {
  return (
    <div className="dealer_contact box max-w-[600px] w-full mx-auto bg-gray-50 rounded-md shadow-box p-6 text-center transition-all duration-500">
      <h3 className="text-xl font-medium pb-2 w-fit border-b border-blue-500 mb-6 mx-auto">
        Customer helpline
      </h3>
      <p className="text-base mb-6">
        You can reach us Monday to Thursday from 9:00 a.m. to 4:00 p.m. and Friday from 9:00 a.m. to 2:00 p.m. at:
      </p>
      <a href="tel:+910000000000" className="text-base text-blue-500 font-medium">
        (Phone number)
      </a>
    </div>
  );
}
