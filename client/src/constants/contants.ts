export const categoryData: CategoryData = {
  Medications: {
    "Pain Relievers": [
      "Headache Relief",
      "Muscle Pain Relief",
      "Joint Pain Relief",
    ],
    "Psychiatric Medications": ["Depression", "Anxiety", "Bipolar Disorder"],
    "Anticancer Drugs": ["Chemotherapy", "Targeted Therapy", "Immunotherapy"],
    "Diabetes Medications": [
      "Blood Sugar Control",
      "Insulin Therapy",
      "Oral Hypoglycemics",
    ],
    Antivirals: ["Cold Sores", "Flu", "HIV", "Hepatitis C"],
    "Hormonal Medications": [
      "Menopause",
      "Thyroid Disorders",
      "Testosterone Replacement",
    ],
  },
  HealthProducts: {
    "Vitamins and Supplements": [
      "Immune Support",
      "Bone Health",
      "Energy Boost",
      "Skin Health",
    ],
    "Cough and Cold Remedies": [
      "Cough Suppressants",
      "Decongestants",
      "Expectorants",
    ],
    "Heart and Blood Pressure": [
      "Cholesterol Control",
      "Blood Pressure Regulation",
      "Heart Health",
    ],
    "Digestive Health": [
      "Gut Health",
      "Acid Reflux",
      "Bloating",
      "Constipation Relief",
    ],
    "Allergy Medication": [
      "Seasonal Allergies",
      "Hay Fever",
      "Dust Mite Allergies",
    ],
    "Lung Health": ["Asthma Relief", "COPD", "Breathing Support"],
    "Weight Loss": ["Appetite Control", "Metabolism Boost", "Fat Burning"],
    "Anti-inflammatory Drugs": [
      "Arthritis Relief",
      "Injury Recovery",
      "Swelling Reduction",
    ],
  },
  PersonalCare: {
    SkinCare: [
      "Anti-aging",
      "Acne Treatment",
      "Hydration",
      "Pigmentation Treatment",
      "Dry Skin",
    ],
    HairCare: [
      "Hair Growth",
      "Shiny Hair",
      "Dandruff Treatment",
      "Frizz Control",
    ],
    "Oral Health": [
      "Teeth Whitening",
      "Gum Care",
      "Fresh Breath",
      "Cavity Prevention",
    ],
    "Eye Care": ["Eye Strain", "Dry Eyes", "Dark Circles", "Eye Brightening"],
    "Cold Sore Treatments": ["Healing", "Pain Relief", "Antiviral"],
  },
  Vaccines: {
    "Flu Vaccine": ["Seasonal Protection", "Flu Strain Prevention"],
    "Hepatitis Vaccine": [
      "Hepatitis A",
      "Hepatitis B",
      "Hepatitis C Prevention",
    ],
    "COVID-19 Vaccine": ["Protection Against COVID-19", "Variants Prevention"],
    "Pneumococcal Vaccine": ["Pneumonia Prevention", "Respiratory Health"],
    "HPV Vaccine": ["Cervical Cancer Prevention", "HPV-related Cancers"],
  },
  FertilityAndCessation: {
    Smoking: [
      "Nicotine Withdrawal",
      "Quit Smoking Support",
      "Smoking Cessation",
    ],
    "Fertility Treatments": [
      "Ovulation Induction",
      "Egg Quality",
      "Sperm Health",
      "IVF Support",
    ],
  },
};

export type CategoryData = {
  Medications: {
    [key: string]: string[];
  };
  HealthProducts: {
    [key: string]: string[];
  };
  PersonalCare: {
    [key: string]: string[];
  };
  Vaccines: {
    [key: string]: string[];
  };
  FertilityAndCessation: {
    [key: string]: string[];
  };
};
