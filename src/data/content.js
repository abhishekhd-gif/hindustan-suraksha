import logo from "../assets/images/logo.png";

// HERO images (3 blocks like the reference page) :contentReference[oaicite:1]{index=1}
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";

// Feature tile icons (3 tiles) :contentReference[oaicite:2]{index=2}
import tile1 from "../assets/images/tile1.png";
import tile2 from "../assets/images/tile2.png";
import tile3 from "../assets/images/tile3.png";

import step1Img from "../assets/images/clothes.webp";
import step2Img from "../assets/images/insurance.jpg";
import step3Img from "../assets/images/refer.jpg";
import spotlightImg from "../assets/images/featured-causes.jpg";

export const SITE = {
  brandName: "Hindustan Suraksha Kavach",
  logo,
  nav: [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#about" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ's", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
};

export const HERO_SLIDES = [
  {
    title: "Refer & Earn",
    subtitle: "Scratch Cards up to ₹10 Lakhs",
    desc: "Every new account you activate brings 100 bonus points and unlocks milestone-based scratch cards worth ₹10 to ₹5 lakhs as the community grows from 25K to 1 lakh members.",
    image: hero1,
    cta1: { label: "View Milestones", href: "#milestones" },
    cta2: { label: "Start Referring", href: "#contact" },
  },
  {
    title: "Donate Unused Clothes",
    subtitle: "Get Rewards & Benefits",
    desc: "Donate in good condition and unlock benefits and support programs.",
    image: hero2,
    cta1: { label: "Explore Benefits", href: "#benefits" },
    cta2: { label: "Book Pickup", href: "#contact" },
  },
  {
    title: "Health & Support",
    subtitle: "Camps, Wallet Points & More",
    desc: "Community-first support programs with easy participation.",
    image: hero3,
    cta1: { label: "See Programs", href: "#benefits" },
    cta2: { label: "Join Now", href: "#contact" },
  },
];

export const FEATURE_TILES = [
  {
    title: "Donate Usable Clothes",
    desc: "Share garments in great condition. We pick them up, refurbish them with dignity and route them to families in crisis.",
    icon: tile1,
    // highlight: true, // golden by default
  },
  {
    title: "Unlock Wallet Rewards",
    desc: "Earn 200 welcome points, 100 referral points and milestone scratch cards with every activation.",
    icon: tile2,
  },
  {
    title: "Get Support & Insurance",
    desc: "Access blood assistance, job placements, service partners, vehicle insurance and up to ₹15 lakhs coverage.",
    icon: tile3,
  },
];

// about data
import aboutImg from "../assets/images/hero2.jpg"; // change file name

export const ABOUT = {
  title: "A Circular Support Movement",
  description:
    "Hindustan Suraksha Kavach turns every wardrobe clean-up into a safety net for both donors and recipients. If you donate your unused clothes (in good condition) to us, you will get 20 special benefits. Clothes are sorted, sanitised and delivered to frontline relief partners while you collect structured benefits that include health camps, referral bonuses, insurance payouts, scratch cards, reality shows and community fame.",
  points: [
    "Give what you no longer need; we guarantee dignified redistribution.",
    "Track milestones for wallet points, scratch cards and insurance covers.",
    "Tap into blood support, placements and service experts when required.",
  ],
  ctaPrimary: "Discover All Benefits",
  ctaSecondary: "Schedule a Pickup",
  image: aboutImg,
};

export const JOURNEY_STEPS = [
  {
    image: step1Img,
    title: "Step 1: Donate & Register",
    meta1: "Available Now",
    meta2: "Collection Hubs",
    description:
      "Hand over good-condition clothes, get 200 wallet points instantly and access annual health camps plus 365-day discount coupons.",
    ctaText: "Explore Benefits",
  },
  {
    image: step2Img,
    title: "Step 2: Unlock Insurance",
    meta1: "10 / 20 / 30 Referrals",
    meta2: "Milestone Desk",
    description:
      "When 6 new accounts are activated, you receive ₹15 lakhs term insurance and ₹15 lakhs health insurance coverage. Vehicle insurance service is provided at best price to our members.",
    ctaText: "View Insurance Details",
  },
  {
    image: step3Img,
    title: "Step 3: Refer & Earn",
    meta1: "After Signup",
    meta2: "Digital Dashboard",
    description:
      "Earn 100 bonus points for each referral that activates and stack progress towards scratch cards worth up to ₹10 lakhs.",
    ctaText: "Refer Now",
  },
];

export const SPOTLIGHT = {
  image: spotlightImg,
  title: "3 Lakh Accounts = Mega Finale",
  meta1: "Community Goal",
  meta2: "Reality Show Arena",
  description:
    "Every time 1 Lakh new accounts is activated, 100 people are randomly selected for a reality show. Three shows with prizes: First show - EV Mopeds, Second show - Bikes, Third show - 2/3 BHK Flat, Car and Bike.",
  buttonText: "Track Progress",
  progressPct: 83,
  leftFoot: "Activated: 1,85,000 accounts",
  rightFoot: "Goal: 3,00,000 accounts",
};

import coreIcon from "../assets/images/clothes.webp";
import scratchIcon from "../assets/images/feature3.png";
import supportIcon from "../assets/images/featured-causes.jpg";
import trophyIcon from "../assets/images/hero1.jpg";

export const BENEFITS_SNAPSHOT = [
  {
    icon: coreIcon,
    title: "Core Coverage",
    description:
      "Annual health camps, 365-day coupons, sports day, 200 welcome points, ₹15L term & health insurance at 6 activations, and monthly food competition.",
  },
  {
    icon: scratchIcon,
    title: "Scratch Cards",
    description:
      "Free scratch cards for every new account plus mega draws up to ₹5 lakhs as we cross 25K, 50K and 1 lakh activations.",
  },
  {
    icon: supportIcon,
    title: "Support Desk",
    description:
      "Refer & earn points, free account activation, blood helpline, placement desk, service experts and vehicle insurance at best price.",
  },
  {
    icon: trophyIcon,
    title: "Reality Shows",
    description:
      "Three reality shows at 1L, 2L and 3L account milestones with prizes including EV Mopeds, Bikes, 2/3 BHK flat and car.",
  },
];

export const BENEFITS_VIDEOS = [
  {
    type: "iframe",
    title: "YouTube Video 1",
    src: "https://www.youtube-nocookie.com/embed/Ec08db2hP10?si=LN8K74Xnp_MU73z0",
  },
  {
    type: "iframe",
    title: "Instagram Reel 1",
    src: "https://www.youtube.com/embed/D5iM8UerZJY?si=wLvwGCzN_Ta_Lhx1",
  },
  {
    type: "iframe",
    title: "YouTube Video 2",
    src: "https://www.youtube.com/embed/VWCBZpvjZfc?si=Xt_QOA9vM6wAUvZ8",
  },
];

export const NUMBERS_SECTION = {
  title: "Suraksha Kavach in Numbers",
  desc: "Together we have moved and activated thousands of Clothes donor accounts and delivered on emergency requests across the country.",
  items: [
    {
      icon: "users",
      value: "12k",
      label: "Accounts Activated",
      variant: "circle",
    },
    { icon: "hands", value: "2k", label: "Donor accounts", variant: "line" },
    {
      icon: "dove",
      value: "253",
      label: "Support Cases Closed",
      variant: "line",
    },
  ],
};

export const FAQS = [
  { q: "What clothes are accepted?", a: "Add your policy here." },
  { q: "How do points work?", a: "Add your points rules here." },
  { q: "How do I register?", a: "Explain signup and verification here." },
];

export const CONTACT = {
  phone: "+91 8073631123",
  email: "contact@hindustansurakshakavach.com",
  address: "Bengaluru Urban- 560002",
};
