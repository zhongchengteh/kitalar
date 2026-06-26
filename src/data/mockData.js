import {
  Award,
  BookOpen,
  CalendarDays,
  Gift,
  GraduationCap,
  Leaf,
  MapPin,
  Medal,
  Recycle,
  ShieldCheck,
  Sprout,
  Ticket,
  Trophy,
  Users,
} from "lucide-react";

export const recentActivities = [
  { id: "a1", item: "PET bottle", location: "Neighborhood Eco Bin", points: 10, time: "Today, 10:20 AM" },
  { id: "a2", item: "Plastic cup", location: "Community Center Bin", points: 8, time: "Yesterday" },
  { id: "a3", item: "Food container", location: "Market Recycling Point", points: 12, time: "2 days ago" },
];

export const rewards = [
  { id: "r1", title: "Eco Badge", points: 80, icon: Medal, description: "Unlock a profile badge for consistent recycling." },
  { id: "r2", title: "Snack Voucher", points: 150, icon: Ticket, description: "Redeem at participating partner cafes." },
  { id: "r3", title: "Reusable Bottle", points: 260, icon: Recycle, description: "A limited reusable bottle for top recyclers." },
  { id: "r4", title: "Digital Certificate", points: 200, icon: GraduationCap, description: "Downloadable SDG participation certificate." },
];

export const locations = [
  {
    id: "l1",
    name: "Community Eco Bin Station",
    address: "Community Center Main Entrance",
    hours: "Mon-Fri, 8:00 AM - 8:00 PM",
    types: ["PET bottles", "Plastic cups", "Clean containers"],
    category: "Public recycling point",
    map: "https://www.google.com/maps/search/Community+Center",
  },
  {
    id: "l2",
    name: "Market Recycling Wall",
    address: "Local Market, Level 1 near food court",
    hours: "Daily, 7:00 AM - 10:00 PM",
    types: ["Plastic bottles", "Aluminium cans", "Paper"],
    category: "Public recycling point",
    map: "https://www.google.com/maps/search/Local+Market",
  },
  {
    id: "l3",
    name: "Municipal Bulky Waste Bay",
    address: "Recycling Facility, Service Road B",
    hours: "Wed and Fri, 10:00 AM - 4:00 PM",
    types: ["Bulky plastics", "Broken bins", "Large packaging"],
    category: "Bulky waste disposal",
    map: "https://www.google.com/maps/search/Facilities+Block",
  },
];

export const educationCards = [
  { title: "Plastic lasts centuries", text: "Many plastics can persist for hundreds of years when not recovered properly.", icon: ShieldCheck },
  { title: "Clean before recycling", text: "Rinse containers so bins stay usable and contamination stays low.", icon: Recycle },
  { title: "SDG 12 matters", text: "Responsible consumption starts with reducing waste and improving reuse habits.", icon: Leaf },
  { title: "Small habits scale", text: "One bottle a day becomes hundreds of recovered items across a semester.", icon: Sprout },
];

export const leaderboard = [
  { rank: 1, name: "Aina Rahman", role: "Green Volunteer", points: 520 },
  { rank: 2, name: "Jason Lim", role: "Neighborhood Member", points: 480 },
  { rank: 3, name: "Mei Tan", role: "Eco Advocate", points: 430 },
  { rank: 4, name: "You", role: "Community Member", points: 120 },
  { rank: 5, name: "Priya Kumar", role: "Recycling Supporter", points: 110 },
];

export const features = [
  { title: "QR recycling scans", description: "People scan bin QR codes and get instant simulated points.", icon: Recycle },
  { title: "Reward motivation", description: "A simple points store keeps participation visible and fun.", icon: Gift },
  { title: "Location guidance", description: "Find fixed recycling and bulky waste drop-off points quickly.", icon: MapPin },
  { title: "Awareness campaigns", description: "Short education cards reinforce SDG 12 recycling behavior.", icon: BookOpen },
];

export const adminMetrics = [
  { label: "Total users", value: "1,248", icon: Users, tone: "sky" },
  { label: "Total scans", value: "8,930", icon: Recycle, tone: "eco" },
  { label: "Active campaigns", value: "6", icon: CalendarDays, tone: "amber" },
  { label: "Rewards redeemed", value: "392", icon: Award, tone: "rose" },
];

export const campaignPerformance = [
  { name: "Bottle Week", value: 86 },
  { name: "Clean Cup Drive", value: 68 },
  { name: "Hostel Challenge", value: 74 },
  { name: "SDG Fair", value: 92 },
];

export const activeUsers = [
  { name: "Aina Rahman", scans: 41 },
  { name: "Jason Lim", scans: 37 },
  { name: "Mei Tan", scans: 33 },
  { name: "Farhan Lee", scans: 28 },
];

export const achievements = [
  { title: "5-day streak", icon: Trophy },
  { title: "15 scans", icon: Recycle },
  { title: "SDG learner", icon: BookOpen },
];
