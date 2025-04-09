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
      BgColor: "#F5F5F5",
      Tittle: "Pain Points for Companies",
      SubTittle: "Lease Chaos Costs You Millions - Here’s what’s going wrong",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: Pricingmeter,
          subTitle: "Tracking leases across locations eats hours.",
        },
        {
          svg: DollarBag,
          subTitle: "Sky-high energy bills drain your budget.",
        },
        {
          svg: Warning,
          subTitle: "Missed renewals hit you with penalties.",
        },
        {
          svg: TrashBin,
          subTitle: "No visibility into energy waste.",
        },
        {
          svg: Confused,
          subTitle: "Compliance rules trip you up constantly.",
        },
        {
          svg: Infilation,
          subTitle: "Paying for unused space kills profits.",
        },
        {
          svg: MoneyCalculation,
          subTitle: "Budgeting leases is a total crapshoot.",
        },
      ],
    },
    {
      BgColor: "#E9F8F9",
      Tittle: "Lease-Core driven Solutions ",
      SubTittle: "Control Restored - Here’s how we save the day",
      TittleVariant: "large",
      CardDetails: [
        {
          svg: Pricingmeter,
          subTitle: "One hub to manage every lease - done.",
        },
        {
          svg: DollarBag,
          subTitle: "Smart energy tracking cuts costs fast.",
        },
        {
          svg: Warning,
          subTitle: "Auto-alerts keep renewals on lock.",
        },
        {
          svg: TrashBin,
          subTitle: "See energy use in real time, save big.",
        },
        {
          svg: Confused,
          subTitle: "Compliance sorted, no sweat.",
        },
        {
          svg: Infilation,
          subTitle: "Optimize space, ditch the waste.",
        },
        {
          svg: MoneyCalculation,
          subTitle: "Budget with precision, not guesswork.",
        },
      ],
    },
  ],
  ActiveFeatureData: [],
};

const tabDataSlice = createSlice({
  name: "tabDataSlice",
  initialState,
  reducers: {
    SetAcitveTab: (state, actions) => {
      state.activeTab = actions.payload;
    },
    SetActiveFeatureData: state => {
      if (state.activeTab === "Lease-Core") {
        state.ActiveFeatureData = [
          state.AllFeatureCardData[0],
          state.AllFeatureCardData[1],
        ];
      } else if (state.activeTab === "ESG-Horizon") {
        state.ActiveFeatureData = [
          state.AllFeatureCardData[2],
          state.AllFeatureCardData[3],
        ];
      } else if (state.activeTab === "Lease-Core") {
        state.ActiveFeatureData = [
          state.AllFeatureCardData[4],
          state.AllFeatureCardData[5],
        ];
      } else if (state.activeTab === "ESG-Horizon") {
        state.ActiveFeatureData = [
          state.AllFeatureCardData[6],
          state.AllFeatureCardData[7],
        ];
      } else if (state.activeTab === "Lease-Core") {
        state.ActiveFeatureData = [
          state.AllFeatureCardData[8],
          state.AllFeatureCardData[9],
        ];
      }
    },
  },
});

// Export actions
export const { SetAcitveTab } = tabDataSlice.actions;

// Export reducer to be added to the store
export default tabDataSlice.reducer;
