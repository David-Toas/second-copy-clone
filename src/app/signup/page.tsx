/* eslint-disable @typescript-eslint/no-explicit-any */
//* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { validateStep } from "@/lib/validations";
// import { validateStep } from "@/lib/validation";

const Signup: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    brand: "",
    campaign: "",
    name: "",
    phone: "",
    totalMediaBudget: "",
    overview: "",
    objectives: "",
    requirements: "",
    wordsPerMonth: 4000,
    primaryTargetAudience: "",
    secondaryTargetAudience: "",
    callToAction: "",
    projectedTimeline: "",
    importantDates: "",
    otherInformation: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const nextStep = async () => {
    const newErrors = validateStep(step, formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);

    if (step === 6) {
      await handleSubmit();
      return;
    }

    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsLoading(false);
    }, 2000);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      if (!authData.user?.id) throw new Error("User ID not found after signup");

      const { error: profileError } = await supabase.from("client_profiles").insert({
        user_id: authData.user.id,
        brand: formData.brand,
        campaign: formData.campaign,
        name: formData.name,
        phone: formData.phone,
        total_media_budget: formData.totalMediaBudget,
        overview: formData.overview,
        objectives: formData.objectives,
        requirements: formData.requirements,
        primary_target_audience: formData.primaryTargetAudience,
        secondary_target_audience: formData.secondaryTargetAudience,
        call_to_action: formData.callToAction,
        projected_timeline: formData.projectedTimeline,
        important_dates: formData.importantDates,
        other_information: formData.otherInformation || null,
        words_per_month: formData.wordsPerMonth,
      });

      if (profileError) throw profileError;

      alert("Account created successfully!");
      router.push("/dashboard");
    } catch (error: any) {
      setErrors({ submission: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full font-display tracking-tight relative transition duration-150">
      <div className="flex justify-center items-center h-full">
        <div className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto bg-white p-4">
          {/* step 1 */}
          {step === 1 && (
            <form className="relative pt-8 pb-4">
              <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold">
                Create an account
              </h2>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md transition duration-150 focus:ring-2 focus:ring-gray-700 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md transition duration-150 focus:ring-2 focus:ring-gray-700 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <div className="flex w-full justify-between items-center mt-4 text-sm text-gray-800 tracking-tight">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="transform scale-110 transition duration-150 focus:outline-none z-10"
                  />
                  <span>Remember for 30 days</span>
                </label>
                <a
                  href="#/ms/password-reset"
                  className="text-indigo-600 hover:text-indigo-900 font-semibold"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="button"
                onClick={nextStep}
                disabled={isLoading}
                className="justify-center gap-3 relative z-10 flex items-center px-3 text-white transition duration-200 transform rounded-md shadow-sm whitespace-nowrap hover:shadow-md bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#b91c1c] hover:bg-[#D95D39] py-2 sm:py-3 mt-3 sm:mt-5 w-full text-sm sm:text-base font-medium"
              >
                {isLoading ? (
                  <>
                    <span>Creating account</span>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  </>
                ) : (
                  <span>Sign up</span>
                )}
              </button>
            </form>
          )}
          {/* step 2 */}
          {step === 2 && (
            <form className="relative pt-8 pb-4">
              <button
                type="button"
                onClick={prevStep}
                className="hover:bg-gray-400 bg-gray-950 text-white py-2 px-4 rounded-md relative lg:-left-25 lg:-top-7 -left-7 -top-10"
              >
                <ArrowLeft />
              </button>
              <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold">
                Client Details
              </h2>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                />
                {errors.brand && (
                  <p className="text-red-500 text-sm">{errors.brand}</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Campaign
                </label>
                <input
                  type="text"
                  name="campaign"
                  value={formData.campaign}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                />
                {errors.campaign && (
                  <p className="text-red-500 text-sm">{errors.campaign}</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={isLoading}
                  className="justify-center gap-3 relative z-10 flex items-center px-3 text-white transition duration-200 transform rounded-md shadow-sm whitespace-nowrap hover:shadow-md bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#b91c1c] hover:bg-[#D95D39] py-2 sm:py-3 mt-3 sm:mt-5 w-full text-sm sm:text-base font-medium"
                >
                  {isLoading ? (
                    <>
                      <span>Updating User</span>
                      <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    </>
                  ) : (
                    <span>Next</span>
                  )}
                </button>
              </div>
            </form>
          )}
          {/* step 3 */}
          {step === 3 && (
            <form className="relative ">
              <button
                type="button"
                onClick={prevStep}
                className="hover:bg-gray-400 bg-gray-950 text-white py-2 px-4 rounded-md relative lg:-left-25 -left-15 -top-6"
              >
                <ArrowLeft />
              </button>
              <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold">
                Budget Details
              </h2>
              <div className="mt-2">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Total Media Budget
                </label>
                <input
                  type="text"
                  name="totalMediaBudget"
                  value={formData.totalMediaBudget}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                />
                {errors.totalMediaBudget && (
                  <p className="text-red-500 text-sm">
                    {errors.totalMediaBudget}
                  </p>
                )}
              </div>
              <div className="mt-2">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Overview
                </label>
                <textarea
                  name="overview"
                  value={formData.overview}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                ></textarea>
                {errors.overview && (
                  <p className="text-red-500 text-sm">{errors.overview}</p>
                )}
              </div>
              <div className="mt-2">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Objectives
                </label>
                <textarea
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                ></textarea>
                {errors.objectives && (
                  <p className="text-red-500 text-sm">{errors.objectives}</p>
                )}
              </div>
              <div className="mt-2">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                ></textarea>
                {errors.requirements && (
                  <p className="text-red-500 text-sm">{errors.requirements}</p>
                )}
              </div>
              <div className="flex justify-between mt-2">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={isLoading}
                  className="justify-center gap-3 relative z-10 flex items-center px-3 text-white transition duration-200 transform rounded-md shadow-sm whitespace-nowrap hover:shadow-md bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#b91c1c] hover:bg-[#D95D39] py-2 sm:py-3 mt-3 sm:mt-5 w-full text-sm sm:text-base font-medium"
                >
                  {isLoading ? (
                    <>
                      <span>Updating User</span>
                      <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    </>
                  ) : (
                    <span>Next</span>
                  )}
                </button>
              </div>
            </form>
          )}
          {/* step 4 */}
          {step === 4 && (
            <form className="relative pt-8 pb-4">
              <button
                type="button"
                onClick={prevStep}
                className="hover:bg-gray-400 bg-gray-950 text-white py-2 px-4 rounded-md relative lg:-left-25 lg:-top-7 -left-7 -top-10"
              >
                <ArrowLeft />
              </button>
              <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold">
                Target Audience
              </h2>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Primary Target Audience
                </label>
                <input
                  type="text"
                  name="primaryTargetAudience"
                  value={formData.primaryTargetAudience}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                />
                {errors.primaryTargetAudience && (
                  <p className="text-red-500 text-sm">
                    {errors.primaryTargetAudience}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Secondary Target Audience
                </label>
                <input
                  type="text"
                  name="secondaryTargetAudience"
                  value={formData.secondaryTargetAudience}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                />
                {errors.secondaryTargetAudience && (
                  <p className="text-red-500 text-sm">
                    {errors.secondaryTargetAudience}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Call to Action
                </label>
                <input
                  type="text"
                  name="callToAction"
                  value={formData.callToAction}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                />
                {errors.callToAction && (
                  <p className="text-red-500 text-sm">{errors.callToAction}</p>
                )}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={isLoading}
                  className="justify-center gap-3 relative z-10 flex items-center px-3 text-white transition duration-200 transform rounded-md shadow-sm whitespace-nowrap hover:shadow-md bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#b91c1c] hover:bg-[#D95D39] py-2 sm:py-3 mt-3 sm:mt-5 w-full text-sm sm:text-base font-medium"
                >
                  {isLoading ? (
                    <>
                      <span>Updating User</span>
                      <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    </>
                  ) : (
                    <span>Next</span>
                  )}
                </button>
              </div>
            </form>
          )}
          {/* step 5 */}
          {step === 5 && (
            <form className="relative pt-8 pb-4">
              <button
                type="button"
                onClick={prevStep}
                className="hover:bg-gray-400 bg-gray-950 text-white py-2 px-4 rounded-md relative lg:-left-25 lg:-top-7 -left-7 -top-10"
              >
                <ArrowLeft />
              </button>
              <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold">
                Schedule
              </h2>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Projected Timeline
                </label>
                <input
                  type="date"
                  name="projectedTimeline"
                  value={formData.projectedTimeline}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                />
                {errors.projectedTimeline && (
                  <p className="text-red-500 text-sm">
                    {errors.projectedTimeline}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Important Dates / Deadlines
                </label>
                <input
                  type="date"
                  name="importantDates"
                  value={formData.importantDates}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                />
                {errors.importantDates && (
                  <p className="text-red-500 text-sm">
                    {errors.importantDates}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  Other Information
                </label>
                <textarea
                  name="otherInformation"
                  value={formData.otherInformation}
                  onChange={handleChange}
                  className="border w-full px-4 py-2 rounded-md text-base sm:text-sm"
                ></textarea>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={isLoading}
                  className="justify-center gap-3 relative z-10 flex items-center px-3 text-white transition duration-200 transform rounded-md shadow-sm whitespace-nowrap hover:shadow-md bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#b91c1c] hover:bg-[#D95D39] py-2 sm:py-3 mt-3 sm:mt-5 w-full text-sm sm:text-base font-medium"
                >
                  {isLoading ? (
                    <>
                      <span>Recieving Plan</span>
                      <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    </>
                  ) : (
                    <span>Complete Profile</span>
                  )}
                </button>
              </div>
            </form>
          )}
          {/* step 6 */}
          {step === 6 && (
            <form className="relative pt-8 pb-4">
              <button
                type="button"
                onClick={prevStep}
                className="hover:bg-gray-400 bg-gray-950 text-white py-2 px-4 rounded-md relative lg:-left-25 lg:-top-7 -left-7 -top-10"
              >
                <ArrowLeft />
              </button>
              <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold">
                Choose your plan
              </h2>
              <p className="text-gray-600 text-sm">
                Cancel within the first week for a full refund. No contracts or
                commitments.
              </p>
              <div className="mt-4">
                <label className="block mb-2 text-gray-800 text-sm font-semibold">
                  {formData.wordsPerMonth.toLocaleString()} words per month
                </label>
                <input
                  type="range"
                  name="wordsPerMonth"
                  min="4000"
                  max="32000"
                  step="1000"
                  value={formData.wordsPerMonth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      wordsPerMonth: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>4,000</span>
                  <span>32,000</span>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                Your card will be billed USD$
                {(formData.wordsPerMonth * 0.09).toFixed(2)} today.
              </p>
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="justify-center gap-3 relative z-10 flex items-center px-3 text-white transition duration-200 transform rounded-md shadow-sm whitespace-nowrap hover:shadow-md bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#b91c1c] hover:bg-[#D95D39] py-2 sm:py-3 mt-3 sm:mt-5 w-full text-sm sm:text-base font-medium"
                >
                  {isLoading ? (
                    <>
                      <span>Checking out</span>
                      <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    </>
                  ) : (
                    <span>Finish Signup</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      {/* image */}
      <div className="w-full h-full overflow-hidden hidden md:block">
        <img
          src="signup.png"
          alt="Signup"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Signup;
