// SyncWave Mock Data for Frontend Chat Experience

export const currentUser = {
  id: "currentUser",
  name: "Alex Rivera",
  email: "alex.rivera@syncwave.com",
  phone: "+1 (555) 019-2834",
  bio: "Product Designer & Tech Enthusiast | Syncing lives, one wave at a time 🌊",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  status: "online",
};

export const mockUsers = [
  {
    id: "user1",
    name: "Sarah Chen",
    email: "sarah.chen@syncwave.com",
    phone: "+1 (555) 012-3456",
    bio: "Software Engineer @ Google. Love coding, coffee, and climbing. ☕🧗‍♀️",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    status: "online",
  },
  {
    id: "user2",
    name: "Marcus Vance",
    email: "marcus.vance@syncwave.com",
    phone: "+1 (555) 013-4567",
    bio: "Digital Nomad | Photography is capturing souls, not just smiles. 📸✈️",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    status: "away",
  },
  {
    id: "user3",
    name: "Elena Rostova",
    email: "elena.r@syncwave.com",
    phone: "+1 (555) 014-5678",
    bio: "UX Researcher. I ask questions to make technology feel more human. 🔍💡",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    status: "offline",
  },
  {
    id: "user4",
    name: "David Kim",
    email: "david.kim@syncwave.com",
    phone: "+1 (555) 015-6789",
    bio: "Product Manager. Building tools that shape the future. Let's collaborate!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    status: "online",
  },
  {
    id: "user5",
    name: "Amara Diallo",
    email: "amara.d@syncwave.com",
    phone: "+1 (555) 016-7890",
    bio: "Creative Director. Crafting visual stories that inspire action. 🎨✨",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80",
    status: "online",
  },
];

export const mockChats = [
  {
    id: "chat1",
    userId: "user1",
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    status: "online",
    unreadCount: 2,
    lastMessage: "Are we still on for the sync meeting at 3 PM?",
    timestamp: "10:35 AM",
  },
  {
    id: "chat2",
    userId: "user2",
    name: "Marcus Vance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    status: "away",
    unreadCount: 0,
    lastMessage: "Check out these photos I took in Tokyo! 🗼",
    timestamp: "Yesterday",
  },
  {
    id: "chat3",
    userId: "user3",
    name: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    status: "offline",
    unreadCount: 0,
    lastMessage: "Thanks for the feedback on the designs.",
    timestamp: "June 14",
  },
  {
    id: "chat4",
    userId: "user4",
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    status: "online",
    unreadCount: 0,
    lastMessage: "Awesome work on the dashboard UI!",
    timestamp: "June 12",
  },
];

export const mockMessages = {
  chat1: [
    {
      id: "msg1",
      senderId: "user1",
      text: "Hey Alex! Did you review the wireframes for the new chat interface?",
      timestamp: "10:15 AM",
    },
    {
      id: "msg2",
      senderId: "currentUser",
      text: "Hey Sarah! Yes, I did. They look incredibly clean. I love the spacing around the user profile card.",
      timestamp: "10:18 AM",
    },
    {
      id: "msg3",
      senderId: "user1",
      text: "Awesome! I added some custom animations to the sidebar transitions. Let me know what you think.",
      timestamp: "10:20 AM",
    },
    {
      id: "msg4",
      senderId: "currentUser",
      text: "The transitions look smooth. What library are we using for animations in React?",
      timestamp: "10:22 AM",
    },
    {
      id: "msg5",
      senderId: "user1",
      text: "We are using Framer Motion! It's super lightweight and flexible.",
      timestamp: "10:25 AM",
    },
    {
      id: "msg6",
      senderId: "user1",
      text: "Are we still on for the sync meeting at 3 PM?",
      timestamp: "10:35 AM",
    },
  ],
  chat2: [
    {
      id: "msg7",
      senderId: "currentUser",
      text: "Hey Marcus, how's Japan treating you?",
      timestamp: "Yesterday, 2:10 PM",
    },
    {
      id: "msg8",
      senderId: "user2",
      text: "It's absolutely incredible! The food, the culture, the neon lights at night.",
      timestamp: "Yesterday, 2:15 PM",
    },
    {
      id: "msg9",
      senderId: "user2",
      text: "Check out these photos I took in Tokyo! 🗼",
      timestamp: "Yesterday, 2:16 PM",
    },
  ],
  chat3: [
    {
      id: "msg10",
      senderId: "user3",
      text: "Hi Alex, I've finished the user testing report for SyncWave.",
      timestamp: "June 14, 4:05 PM",
    },
    {
      id: "msg11",
      senderId: "currentUser",
      text: "Perfect! I'll read through it tonight. Did the respondents find the theme toggler intuitive?",
      timestamp: "June 14, 4:15 PM",
    },
    {
      id: "msg12",
      senderId: "user3",
      text: "Yes, 95% of them loved the transition between light and dark modes.",
      timestamp: "June 14, 4:20 PM",
    },
    {
      id: "msg13",
      senderId: "user3",
      text: "Thanks for the feedback on the designs.",
      timestamp: "June 14, 4:30 PM",
    },
  ],
  chat4: [
    {
      id: "msg14",
      senderId: "user4",
      text: "Hey team, the initial build has been deployed successfully to staging.",
      timestamp: "June 12, 11:00 AM",
    },
    {
      id: "msg15",
      senderId: "currentUser",
      text: "Fantastic news, David. The responsiveness works perfectly on both iPhone and desktop viewports.",
      timestamp: "June 12, 11:15 AM",
    },
    {
      id: "msg16",
      senderId: "user4",
      text: "Awesome work on the dashboard UI!",
      timestamp: "June 12, 11:20 AM",
    },
  ],
};

export const mockNotifications = [
  {
    id: "notif1",
    type: "message",
    title: "New Message from Sarah Chen",
    body: "Are we still on for the sync meeting at 3 PM?",
    time: "10:35 AM",
    read: false,
  },
  {
    id: "notif2",
    type: "friend_request",
    title: "Friend Request",
    body: "Amara Diallo wants to connect with you.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "notif3",
    type: "system",
    title: "System Update",
    body: "SyncWave version 1.2.0 is now live! Check out the new dark mode aesthetics.",
    time: "Yesterday",
    read: true,
  },
  {
    id: "notif4",
    type: "friend_request",
    title: "Friend Request Accepted",
    body: "David Kim accepted your connection request.",
    time: "June 12",
    read: true,
  },
];

export const mockGroups = [
  {
    id: "group1",
    name: "SyncWave Design Team",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=150&q=80",
    memberCount: 4,
    memberIds: ["currentUser", "user1", "user3", "user5"],
    description: "Official channel for UI/UX visual alignments and design systems updates. 🎨",
    lastMessage: "Alex: The new glassmorphism logins are ready!",
    timestamp: "11:20 AM",
  },
  {
    id: "group2",
    name: "Coffee & Climb Club 🧗‍♀️☕",
    avatar: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=150&q=80",
    memberCount: 3,
    memberIds: ["currentUser", "user1", "user2"],
    description: "Weekend plans, active bouldering hangouts and caffeinated debates.",
    lastMessage: "Sarah: Let's climb this Saturday morning!",
    timestamp: "Yesterday",
  }
];

export const mockGroupMessages = {
  group1: [
    {
      id: "gmsg1",
      senderId: "user1",
      senderName: "Sarah Chen",
      text: "Hey design crew! Did we align on the card shadow elevations?",
      timestamp: "11:10 AM",
    },
    {
      id: "gmsg2",
      senderId: "user3",
      senderName: "Elena Rostova",
      text: "Yes, we agreed to use var(--shadow-md) as the default container depth.",
      timestamp: "11:12 AM",
    },
    {
      id: "gmsg3",
      senderId: "user5",
      senderName: "Amara Diallo",
      text: "Exactly. I've updated the Figma style guides accordingly.",
      timestamp: "11:15 AM",
    },
    {
      id: "gmsg4",
      senderId: "currentUser",
      senderName: "Alex Rivera",
      text: "Perfect! The new glassmorphism logins are ready!",
      timestamp: "11:20 AM",
    },
  ],
  group2: [
    {
      id: "gmsg5",
      senderId: "user2",
      senderName: "Marcus Vance",
      text: "Who's up for some espresso shots and climbing this week?",
      timestamp: "Yesterday, 3:00 PM",
    },
    {
      id: "gmsg6",
      senderId: "currentUser",
      senderName: "Alex Rivera",
      text: "Count me in! I need a good stretch and caffeine rush.",
      timestamp: "Yesterday, 3:05 PM",
    },
    {
      id: "gmsg7",
      senderId: "user1",
      senderName: "Sarah Chen",
      text: "Let's climb this Saturday morning!",
      timestamp: "Yesterday, 3:10 PM",
    },
  ]
};

export const mockCalls = [
  {
    id: "call1",
    userName: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    type: "video",
    status: "incoming",
    timestamp: "Today, 10:15 AM"
  },
  {
    id: "call2",
    userName: "Marcus Vance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    type: "audio",
    status: "outgoing",
    timestamp: "Today, 9:30 AM"
  },
  {
    id: "call3",
    userName: "David Kim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    type: "video",
    status: "missed",
    timestamp: "Yesterday, 4:45 PM"
  },
  {
    id: "call4",
    userName: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    type: "audio",
    status: "incoming",
    timestamp: "June 13, 2:15 PM"
  }
];

