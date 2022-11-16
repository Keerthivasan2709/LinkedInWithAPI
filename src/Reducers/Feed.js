import { createSlice } from "@reduxjs/toolkit";

const Feed = createSlice({
  name: "Feed",
  initialState: {
    profile: {},
    recent: {},
    post: [],
    news: [],
    ads: {},
  },
  reducers: {
    setProfile: (state, e) => {
      state.profile = { ...state.profile, ...e.payload };
    },
    setRecent: (state, e) => {
      state.recent = { ...state.recent, ...e.payload };
    },
    setPost: (state, e) => {
      state.post = [...state.post, ...e.payload];
    },
    setNews: (state, e) => {
      state.news = { ...state.news, ...e.payload };
    },
    setAds: (state, e) => {
      state.ads = { ...state.ads, ...e.payload };
    },
  },
});

export const { setProfile, setRecent, setPost, setAds, setNews } = Feed.actions;
export default Feed.reducer;
