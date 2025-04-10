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
      identifier: "ESG-Horizon",
      BgColor: "#F8FBFF",
      Tittle: "Pain Points for Companies",
      SubTittle: "ESG Is Eating Your Time - These hurt the most",
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
  ActiveFeatureData: [
    {
      id: 1,
      identifier: "Lease-Core",
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
