/* eslint-disable @typescript-eslint/no-explicit-any */
export const validateStep = (step: number, formData: any) => {
    const newErrors: { [key: string]: string } = {};
  
    if (step === 1) {
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
    }
  
    if (step === 2) {
      if (!formData.brand) newErrors.brand = "Brand Name is required";
      if (!formData.campaign) newErrors.campaign = "Campaign is required";
      if (!formData.name) newErrors.name = "Username is required";
      if (!formData.phone) newErrors.phone = "Phone Number is required";
    }
  
    if (step === 3) {
      if (!formData.totalMediaBudget) newErrors.totalMediaBudget = "Total Media Budget is required";
      if (!formData.objectives) newErrors.objectives = "Objectives are required";
      if (!formData.requirements) newErrors.requirements = "Requirements are required";
    }
  
    if (step === 4) {
      if (!formData.primaryTargetAudience) newErrors.primaryTargetAudience = "Primary target audience is required";
      if (!formData.secondaryTargetAudience) newErrors.secondaryTargetAudience = "Secondary target audience is required";
      if (!formData.callToAction) newErrors.callToAction = "Call to action is required";
    }
  
    if (step === 5) {
      if (!formData.projectedTimeline) newErrors.projectedTimeline = "Projected timeline is required";
      if (!formData.importantDates) newErrors.importantDates = "Important dates are required";
    }
  
    return newErrors;
  };
  