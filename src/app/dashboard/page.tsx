import React from "react";

const userProposal = {
  brand: "Tesla",
  campaign: "Model X Electric Revolution",
  name: "Elon Doe",
  phone: "+234 801 234 5678",
  email: "elon.doe@example.com",
  totalMediaBudget: "$500,000",
  overview: "A campaign to promote the latest Tesla Model X as the future of electric vehicles.",
  objectives: "Increase reservations and brand trust in electric mobility.",
  requirements: "High-quality video ads, social media promotion, and influencer partnerships.",
  primaryTargetAudience: "Tech enthusiasts and sustainability advocates.",
  secondaryTargetAudience: "Luxury car buyers interested in innovation.",
  callToAction: "Reserve your Tesla Model X today!",
  projectedTimeline: "June - December 2025",
  importantDates: "Launch event: June 15, 2025",
  otherInformation: "Featuring exclusive test drive experiences.",
};

const ProposalDashboard = () => {
  return (

    <div className="min-h-screen bg-[#111827] flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-[#14203a] shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Proposal Details</h2>
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(userProposal).map(([key, value]) => (
            <div key={key} className="border-b pb-3">
              <h3 className="text-sm font-semibold text-gray-300 uppercase">
                {key.replace(/([A-Z])/g, " $1").toUpperCase()}
              </h3>
              <p className="text-gray-100 text-base">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProposalDashboard;
