// src/store/userSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Initial state for user data
const initialState = {
  PriceData: [
    {
      identifier: "Lease-Core",
      HighlightTittle: "Lease-Core",
      isNote: false,
      Note: "",
      subTittle: "Pick what fits, tweak as needed",
      AvailablePackage: [
        {
          title: "Bronze",
          subTittle: "Leases Covered - Up to 250",
          btnTxt: "Most Popular",
          pricePerMinute: "$2,500/m",
          pricingSubTitle: "Lease tracking dashboard, Email support (9-5)",
          HotDetails: [
            "Potential Savings - Replace 2 accountants, save $10,000/m",
            "Net Savings - $7,500/m",
            "ROI - 3X",
          ],
        },
        {
          title: "Silver",
          subTittle: "Most Demandable",
          btnTxt: "Most Demandable",
          pricePerMinute: "$4,000/m",
          pricingSubTitle: "All Bronze + Energy usage reports, Priority chat",
          HotDetails: [
            "Potential Savings - Replace 4 accountants, save $20,000/m",
            "Net Savings - $16,000/m",
            "ROI - 4X",
          ],
        },
        {
          title: "Gold",
          subTittle: "Leases Covered - 501 to 1,000",
          btnTxt: "Most Elegeant",
          pricePerMinute: "$2,500/m",
          pricingSubTitle:
            "All Silver + Compliance automation, Dedicated manager",
          HotDetails: [
            "Potential Savings - Replace 8 accountants, save $40,000/m",
            "Net Savings - $34,000/m",
            "ROI - 5.7X",
          ],
        },
        {
          title: "Platinum",
          subTittle: "Leases Covered - Over 1,001",
          btnTxt: "Fully Customizable",
          pricePerMinute: "Price on Application",
          pricingSubTitle: "All Gold + Budget forecasting tools, 10/7 support",
          HotDetails: [
            "Potential Savings - Custom savings",
            "Net Savings - Custom",
            "ROI - Custom",
          ],
        },
      ],
    },
    {
      identifier: "ESG-Horizon",
      HighlightTittle: "ESG-Horizon",
      subTittle: "Your ESG-Horizon Plan - Choose and customize",
      isNote: true,
      Note: "Note: Savings are estimates based on average energy costs (USD 1.225/month per premise) and staff salaries (USD 5,000/month per full-time employee). Actual savings may vary depending on premise size, energy usage patterns, and implementation of best practices based on data provided by ESG-Horizon.",
      AvailablePackage: [
        {
          title: "Bronze",
          subTittle: "Premises Covered - Up to 250",
          btnTxt: "Most Popular",
          pricePerMinute: "$3,000/m",
          pricingSubTitle:
            "Tracking for Scope 1, 2, and basic Scope 3. Basic reporting for compliance. Email support (9-5).",
          HotDetails: [
            "Potential Savings - Staff time savings: USD 5,000/month. Energy savings: 5% of total energy cost ",
            "Net Savings - 17,312.50/m",
            "ROI - 5.77X",
          ],
        },
        {
          title: "Silver",
          subTittle: "Premises Covered - 251 to 500",
          btnTxt: "Most Demandable",
          pricePerMinute: "$5,000/m",
          pricingSubTitle:
            "All Bronze features. Detailed Scope 3 tracking and investment mapping. Priority chat support.",
          HotDetails: [
            "Potential Savings - Staff time savings: USD 10,000/month. Energy savings: 5% of total energy cost",
            "Net Savings - $35,625/m",
            "ROI - 7.13X",
          ],
        },
        {
          title: "Gold",
          subTittle: "Premises Covered - 501 to 1,000",
          btnTxt: "Most Elegeant",
          pricePerMinute: "$8,000/m",
          pricingSubTitle:
            "All Silver features. Investment analysis tools. Benchmarking capabilities. Dedicated account manager",
          HotDetails: [
            "Potential Savings - Staff time savings: USD 20,000/month. Energy savings: 5% of total energy cost",
            "Net Savings - $73,250/m",
            "ROI - 9.16X",
          ],
        },
        {
          title: "Platinum",
          subTittle: "Premises Covered - Over 1,001",
          btnTxt: "Fully Customizable",
          pricePerMinute: "Price on Application",
          pricingSubTitle:
            "All Gold features. Full benchmarking suite with advanced analytics. 24/7 phone support. Customizable features and reports",
          HotDetails: [
            "Potential Savings - Custom savings",
            "Net Savings - Custom",
            "ROI - Custom",
          ],
        },
      ],
    },
    {
      identifier: "Flow-Forge",
      HighlightTittle: "Flow-Forge",
      subTittle:
        "Your Flow-Forge Plan - Choose the plan that fits your operations",
      isNote: true,
      Note: "Savings are estimates based on average energy costs (USD 1.225/month per premise) and staff salaries (USD 5,000/month per full-time employee). Actual savings may vary depending on premise size, energy usage patterns, and implementation of best practices based on data provided by ESG-Horizon.",
      AvailablePackage: [
        {
          title: "Bronze",
          subTittle: "Suitable For: Up to 20 critical assets or processes",
          btnTxt: "Most Popular",
          pricePerMinute: "$150,000/m",
          pricingSubTitle: "One-Time Development Cost",
          HotDetails: [
            "Monthly Maintenance Cost: USD 8,000  ",
            "Expected Annual Savings - Up to USD 1 million",
            "First-Year ROI - 3.06X",
            "Subsequent Years ROI - 9.46X",
          ],
        },
        {
          title: "Silver",
          subTittle: "Suitable For: 21-50 critical assets or processes",
          btnTxt: "Most Demandable",
          pricePerMinute: "$300,000",
          pricingSubTitle: "One-Time Development Cost",
          HotDetails: [
            "Monthly Maintenance Cost: USD 15,000 ",
            "Expected Annual Savings - Up to USD 2 million",
            "First-Year ROI - 3.17X",
            "Subsequent Years ROI - 10.67X",
          ],
        },
        {
          title: "Gold",
          subTittle: "Suitable For: 51-100 critical assets or processes",
          btnTxt: "Most Elegeant",
          pricePerMinute: "$500,000/m",
          pricingSubTitle:
            "All Silver features. Investment analysis tools. Benchmarking capabilities. Dedicated account manager",
          HotDetails: [
            "Monthly Maintenance Cost: USD 25,000",
            "Expected Annual Savings - Up to USD 4 million",
            "First-Year ROI - 3.75X",
            "Subsequent Years ROI - 12.33X",
          ],
        },
        {
          title: "Platinum",
          subTittle: "Suitable For: Over 100 critical assets or processes",
          btnTxt: "Contact Sales",
          pricePerMinute: "Custom",
          pricingSubTitle:
            "All Gold features. Full benchmarking suite with advanced analytics. 24/7 phone support. Customizable features and reports",
          HotDetails: [
            "Monthly Maintenance Cost: Custom  ",
            "Expected Annual Savings - Custom",
            "First-Year ROI - Custom",
            "Subsequent Years ROI - Custom",
          ],
        },
      ],
    },
    {
      identifier: "Ledger-Hub",
      HighlightTittle: "Ledger-Hub",
      subTittle: "Your Ledger-Hub Plan - Choose and change",
      ExtraSubtitle:
        "The pricing tiers are designed for mid-level and small CA firms, based on the number of clients managed, with savings from AI-driven productivity gains:",
      isNote: true,
      Note: "Savings are based on an average accountant salary of $30,000/year. For Bronze Tier, saving 1 accountant yields $30,000/year, offering a 12.9X ROI. Actual savings and ROI may vary depending on firm size and",
      AvailablePackage: [
        {
          title: "Bronze",
          subTittle: "Target Firm Size - 1-5 staff",
          btnTxt: "Most Popular",
          pricePerMinute: "$194/m",
          HotDetails: [
            "Users Included - 5",
            "Client Portal Access - 100 clients",
            "Accountants Saved - 1 accountant",
            "Savings (USD/year) - $30,000",
            "Annual Cost (USD) - $2,328",
            "ROI - 12.9X",
          ],
        },
        {
          title: "Silver",
          subTittle: "Target Firm Size - 5-15 staff",
          btnTxt: "Most Demandable",
          pricePerMinute: "$584/m",
          HotDetails: [
            "Users Included - 15",
            "Client Portal Access - 250 clients",
            "Accountants Saved - 2 accountants",
            "Savings (USD/year) - $60,000",
            "Annual Cost (USD) - $3,888",
            "ROI - 15.8X",
          ],
        },
        {
          title: "Gold",
          subTittle: "Target Firm Size - 15-50 staff",
          btnTxt: "Most Elegeant",
          pricePerMinute: "$2,500/m",
          pricingSubTitle:
            "All Silver + Compliance automation, Dedicated manager",
          HotDetails: [
            "Users Included - 50",
            "Client Portal Access - 500 clients",
            "Accountants Saved - 3 accountants",
            "Savings (USD/year) - $90,000",
            "Annual Cost (USD) - $7,008",
            "ROI - 12.8X",
          ],
        },
        {
          title: "Platinum",
          subTittle: "Target Firm Size - 50+ staff or custom needs",
          btnTxt: "Fully Customizable",
          pricePerMinute: "Price on Application",
          pricingSubTitle: "All Gold + Budget forecasting tools, 10/7 support",
          HotDetails: [
            "Users Included - Unlimited",
            "Client Portal Access - Unlimited",
            "Accountants Saved - Unlimited",
            "Savings (USD/year) - Unlimited",
            "Annual Cost (USD) - Unlimited",
            "ROI - Unlimited",
          ],
        },
      ],
    },
  ],
  ActivePricingTier: {
    identifier: "Lease-Core",
    HighlightTittle: "Lease-Core",
    isNote: false,
    Note: "",
    subTittle: "Pick what fits, tweak as needed",
    AvailablePackage: [
      {
        title: "Bronze",
        subTittle: "Leases Covered - Up to 250",
        btnTxt: "Most Popular",
        pricePerMinute: "$2,500/m",
        pricingSubTitle: "Lease tracking dashboard, Email support (9-5)",
        HotDetails: [
          "Potential Savings - Replace 2 accountants, save $10,000/m",
          "Net Savings - $7,500/m",
          "ROI - 3X",
        ],
      },
      {
        title: "Silver",
        subTittle: "Most Demandable",
        btnTxt: "Most Demandable",
        pricePerMinute: "$4,000/m",
        pricingSubTitle: "All Bronze + Energy usage reports, Priority chat",
        HotDetails: [
          "Potential Savings - Replace 4 accountants, save $20,000/m",
          "Net Savings - $16,000/m",
          "ROI - 4X",
        ],
      },
      {
        title: "Gold",
        subTittle: "Leases Covered - 501 to 1,000",
        btnTxt: "Most Elegeant",
        pricePerMinute: "$2,500/m",
        pricingSubTitle:
          "All Silver + Compliance automation, Dedicated manager",
        HotDetails: [
          "Potential Savings - Replace 8 accountants, save $40,000/m",
          "Net Savings - $34,000/m",
          "ROI - 5.7X",
        ],
      },
      {
        title: "Platinum",
        subTittle: "Leases Covered - Over 1,001",
        btnTxt: "Fully Customizable",
        pricePerMinute: "Price on Application",
        pricingSubTitle: "All Gold + Budget forecasting tools, 10/7 support",
        HotDetails: [
          "Potential Savings - Custom savings",
          "Net Savings - Custom",
          "ROI - Custom",
        ],
      },
    ],
  },
};

const priceSlice = createSlice({
  name: "priceSlice",
  initialState,
  reducers: {
    setActivePricingTears: (state, action) => {
      const matchedPrice = state.PriceData.find(
        price => price.identifier === action.payload
      );
      state.ActivePricingTier = matchedPrice || null;
    },
  },
});

// Export actions
export const { setActivePricingTears } = priceSlice.actions;

// Export reducer to be added to the store
export default priceSlice.reducer;
