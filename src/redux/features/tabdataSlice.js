// src/store/userSlice.js

import { createSlice } from "@reduxjs/toolkit";
import {
  Confused,
  DollarBag,
  Infilation,
  MoneyCalculation,
  Pricingmeter,
  TrashBin,
  Warning,
} from "@/components/svg-container/SvgContainer";

// Initial state for user data
const initialState = {
  activeTab: "Lease-Core",
  AllFeatureCardData: [
    {
      id: 1,
      identifier: "Lease-Core",
      SvgColorCode: "#4A3B2C",
      BgColor: "#F5F5F5",
      Tittle: "Pain Points for Companies",
      SubTittle: "Lease Chaos Costs You Millions - Here’s what’s going wrong",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Pricingmeter",
          subTitle: "Tracking leases across locations eats hours.",
        },
        {
          svg: "DollarBag",
          subTitle: "Sky-high energy bills drain your budget.",
        },
        {
          svg: "Warning",
          subTitle: "Missed renewals hit you with penalties.",
        },
        {
          svg: "TrashBin",
          subTitle: "No visibility into energy waste.",
        },
        {
          svg: "Confused",
          subTitle: "Compliance rules trip you up constantly.",
        },
        {
          svg: "Infilation",
          subTitle: "Paying for unused space kills profits.",
        },
        {
          svg: "MoneyCalculation",
          subTitle: "Budgeting leases is a total crapshoot.",
        },
      ],
    },
    {
      id: 2,
      SvgColorCode: "#4A3B2C",
      identifier: "Lease-Core",
      BgColor: "#E9F8F9",
      Tittle: "Lease-Core driven Solutions",
      SubTittle: "Control Restored - Here’s how we save the day",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Idea",
          subTitle: "One hub to manage every lease - done.",
        },
        {
          svg: "CostCutting",
          subTitle: "Smart energy tracking cuts costs fast.",
        },
        {
          svg: "Energy",
          subTitle: "Auto-alerts keep renewals on lock.",
        },
        {
          svg: "Donation",
          subTitle: "See energy use in real time, save big.",
        },
        {
          svg: "Certified",
          subTitle: "Compliance sorted, no sweat.",
        },
        {
          svg: "Box",
          subTitle: "Optimize space, ditch the waste.",
        },
        {
          svg: "DollarSetting",
          subTitle: "Budget with precision, not guesswork.",
        },
      ],
    },
    {
      id: 3,
      Direction: "start",
      HighLightedTxt: "Pain Points ",
      isHighlight: true,
      identifier: "ESG-Horizon",
      SvgColorCode: "#2F5D50",
      BgColor: "#F8FBFF",
      Tittle: "for Companies",
      SubTittle: "ESG Is Eating Your Time - These hurt the most",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Pricingmeter",
          subTitle: "Scope 1, 2, 3 tracking is a mess.",
        },
        {
          svg: "DollarBag",
          subTitle: "Scope 3 investments? Total blind spot.",
        },
        {
          svg: "Warning",
          subTitle: "ESG data fails audits every time.",
        },
        {
          svg: "TrashBin",
          subTitle: "Reporting takes months, not days.",
        },
        {
          svg: "Confused",
          subTitle: "Inconsistent data screws everything.",
        },
        {
          svg: "Infilation",
          subTitle: "Compliance costs keep climbing.",
        },
        {
          svg: "MoneyCalculation",
          subTitle: "Can’t compare to competitors.",
        },
      ],
    },
    {
      id: 4,
      identifier: "ESG-Horizon",
      SvgColorCode: "#2F5D50",
      Direction: "end",
      HighLightedTxt: "Solutions",
      isHighlight: true,
      BgColor: "#E9F8F9",
      Tittle: "ESG-Horizon driven ",
      SubTittle: "ESG-Horizon: Clarity Unlocked - We have got your back",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Idea",
          subTitle: "Track all Scopes, zero hassle.",
        },
        {
          svg: "CostCutting",
          subTitle: "Scope 3 investment mapping - nailed.",
        },
        {
          svg: "Energy",
          subTitle: "Audit-proof data you can trust.",
        },
        {
          svg: "Certified",
          subTitle: "Instant reports for any framework.",
        },
        {
          svg: "Box",
          subTitle: "Consistent data, every time.",
        },
        {
          svg: "Donation",
          subTitle: "Cut compliance costs in half.",
        },
        {
          svg: "DollarSetting",
          subTitle: "Benchmark and beat the competition.",
        },
      ],
    },
    {
      id: 5,
      identifier: "Flow-Forge",
      SvgColorCode: "#3B2F2A",
      Direction: "start",
      HighLightedTxt: "Pain Points ",
      isHighlight: true,
      BgColor: "#FFFBFB",
      Tittle: "for Companies",
      SubTittle: "Operations Are Bleeding Cash - Here’s the damage",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Pricingmeter",
          subTitle: "Downtime kills your production daily.",
        },
        {
          svg: "DollarBag",
          subTitle: "No real-time data, just guesses.",
        },
        {
          svg: "Warning",
          subTitle: "New tech clashes with old systems.",
        },
        {
          svg: "TrashBin",
          subTitle: "Supply chain snags cost millions.",
        },
        {
          svg: "Confused",
          subTitle: "Scaling up breaks the bank.",
        },
        {
          svg: "Infilation",
          subTitle: "Maintenance fees never stop.",
        },
        {
          svg: "MoneyCalculation",
          subTitle: "Inefficiency drags your stock price down.",
        },
      ],
    },
    {
      id: 6,
      identifier: "Flow-Forge",
      SvgColorCode: "#3B3B3B",
      BgColor: "#FFF3F3",
      Direction: "end",
      HighLightedTxt: "Solutions",
      isHighlight: true,
      Tittle: "Flow-Forge SaaS ",
      SubTittle: "Efficiency Unleashed - Here’s the fix",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Idea",
          subTitle: "Streamline ops, end downtime.",
        },
        {
          svg: "CostCutting",
          subTitle: "Real-time data at your fingertips.",
        },
        {
          svg: "Energy",
          subTitle: "Integrate anything, seamlessly.",
        },
        {
          svg: "Donation",
          subTitle: "Optimize your supply chain fast.",
        },
        {
          svg: "Certified",
          subTitle: "Optimize your supply chain fast.",
        },
        {
          svg: "Box",
          subTitle: "Predict maintenance, cut costs.",
        },
        {
          svg: "DollarSetting",
          subTitle: "Boost efficiency, skyrocket profits & market cap",
        },
      ],
    },
    {
      id: 7,
      identifier: "Pay-Pulse",
      SvgColorCode: "#1D1842",
      Direction: "start",
      HighLightedTxt: "Pain Points ",
      isHighlight: true,
      BgColor: "#F9FFFC",
      Tittle: "for Businesses",
      SubTittle: "Payments Slow You Down - These stings the most",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Pricingmeter",
          subTitle: "High commercial card fees drain profits. ",
        },
        {
          svg: "DollarBag",
          subTitle: "Rigid terms frustrate midcap customers. ",
        },
        {
          svg: "Warning",
          subTitle: "Outdated tools slow B2B payments.",
        },
        {
          svg: "TrashBin",
          subTitle: "Delays in recurring payments hurt.",
        },
        {
          svg: "Confused",
          subTitle: "Global compliance is a challenge. ",
        },
        {
          svg: "Infilation",
          subTitle: "Customers demand more features. ",
        },
        {
          svg: "MoneyCalculation",
          subTitle: "Large B2B payment deals pose risks.",
        },
      ],
    },
    {
      id: 8,
      identifier: "Pay-Pulse",
      SvgColorCode: "#1D1842",
      BgColor: "#F3FFFA",
      Direction: "end",
      HighLightedTxt: "Solutions",
      isHighlight: true,
      Tittle: "Pay-Pulse driven",
      SubTittle: "Cash Flow Freed - Here’s the win",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Idea",
          subTitle: "Low-cost commercial card transactions. ",
        },
        {
          svg: "CostCutting",
          subTitle: "Flexible terms for midcap needs. ",
        },
        {
          svg: "Energy",
          subTitle: "Advanced dashboard for control. ",
        },
        {
          svg: "Donation",
          subTitle: "Instant tracking for recurring payments. ",
        },
        {
          svg: "Certified",
          subTitle: "Easy global compliance support",
        },
        {
          svg: "Box",
          subTitle: "Integrated features that impress. ",
        },
        {
          svg: "DollarSetting",
          subTitle: "Robust fraud protection for large deals.",
        },
      ],
    },
    {
      id: 9,
      identifier: "Ledger-Hub ",
      SvgColorCode: "#1F2526",
      Direction: "start",
      HighLightedTxt: "Pain Points ",
      isHighlight: true,
      BgColor: "#FEFFF6",
      Tittle: " CA Practices",
      SubTittle: "Financial Chaos Drags You Down - These hurt the most",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Pricingmeter",
          subTitle: "High commercial card fees drain profits. ",
        },
        {
          svg: "DollarBag",
          subTitle: "Juggling between various platforms wastes hours daily. ",
        },
        {
          svg: "Warning",
          subTitle: "Compliance deadlines sneak up fast.  ",
        },
        {
          svg: "TrashBin",
          subTitle: "Disconnected data slows every task. ",
        },
        {
          svg: "Confused",
          subTitle: "High staff costs eat your profits.",
        },
        {
          svg: "Infilation",
          subTitle: "Audits are a stressful nightmare.  ",
        },
        {
          svg: "MoneyCalculation",
          subTitle: "Growth stalls with outdated tools.",
        },
      ],
    },
    {
      id: 10,
      identifier: "Ledger-Hub",
      SvgColorCode: "#1F2526",
      BgColor: "#FBFFE7",
      Direction: "start",
      HighLightedTxt: "Ledger-Hub ",
      isHighlight: true,
      Tittle: " led Solutions",
      SubTittle: "Finances Tamed - Here’s the win",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Idea",
          subTitle: "One platform unifies all systems. ",
        },
        {
          svg: "CostCutting",
          subTitle: "Automation cuts errors to zero.",
        },
        {
          svg: "Energy",
          subTitle: "Compliance alerts keep you on track. ",
        },
        {
          svg: "Donation",
          subTitle: "Real-time data speeds up everything.",
        },
        {
          svg: "Certified",
          subTitle: "Lower staff costs boost your margins. ",
        },
        {
          svg: "Box",
          subTitle: "Audit-ready tools make checks easy. ",
        },
        {
          svg: "DollarSetting",
          subTitle: "Scalable tech drives seamless growth.",
        },
      ],
    },
  ],
  ActiveFeatureData: [
    {
      id: 1,
      identifier: "Lease-Core",
      SvgColorCode: "#4A3B2C",
      BgColor: "#F5F5F5",
      Tittle: "Pain Points for Companies",
      SubTittle: "Lease Chaos Costs You Millions - Here’s what’s going wrong",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Pricingmeter",
          subTitle: "Tracking leases across locations eats hours.",
        },
        {
          svg: "DollarBag",
          subTitle: "Sky-high energy bills drain your budget.",
        },
        {
          svg: "Warning",
          subTitle: "Missed renewals hit you with penalties.",
        },
        {
          svg: "TrashBin",
          subTitle: "No visibility into energy waste.",
        },
        {
          svg: "Confused",
          subTitle: "Compliance rules trip you up constantly.",
        },
        {
          svg: "Infilation",
          subTitle: "Paying for unused space kills profits.",
        },
        {
          svg: "MoneyCalculation",
          subTitle: "Budgeting leases is a total crapshoot.",
        },
      ],
    },
    {
      id: 2,
      SvgColorCode: "#4A3B2C",
      identifier: "Lease-Core",
      BgColor: "#E9F8F9",
      Tittle: "Lease-Core driven Solutions",
      SubTittle: "Control Restored - Here’s how we save the day",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: "Idea",
          subTitle: "One hub to manage every lease - done.",
        },
        {
          svg: "CostCutting",
          subTitle: "Smart energy tracking cuts costs fast.",
        },
        {
          svg: "Energy",
          subTitle: "Auto-alerts keep renewals on lock.",
        },
        {
          svg: "Donation",
          subTitle: "See energy use in real time, save big.",
        },
        {
          svg: "Certified",
          subTitle: "Compliance sorted, no sweat.",
        },
        {
          svg: "Box",
          subTitle: "Optimize space, ditch the waste.",
        },
        {
          svg: "DollarSetting",
          subTitle: "Budget with precision, not guesswork.",
        },
      ],
    },
  ],
};

const tabDataSlice = createSlice({
  name: "tabDataSlice",
  initialState,
  reducers: {
    SetAcitveTab: (state, actions) => {
      state.activeTab = actions.payload;
    },
    SetActiveFeatureData: (state, action) => {
      const matchedItems = state.AllFeatureCardData.filter(
        feature => feature.identifier === action.payload
      );

      matchedItems.forEach(item => {
        const alreadyExists = state.ActiveFeatureData.some(
          existing => existing.id === item.id
        );

        if (!alreadyExists) {
          // If the length of ActiveFeatureData is already 2, remove the first item
          if (state.ActiveFeatureData.length === 2) {
            state.ActiveFeatureData.shift();
          }

          // Add the new item
          state.ActiveFeatureData.push(item);
        }
      });
    },
  },
});

// Export actions
export const { SetAcitveTab, SetActiveFeatureData } = tabDataSlice.actions;

// Export reducer to be added to the store
export default tabDataSlice.reducer;
