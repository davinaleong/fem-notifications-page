const profiles = {
  markWebber: {
    name: "Mark Webber",
    avatar: "./../images/avatar-mark-webber.webp",
  },
  angelaGray: {
    name: "Angela Gray",
    avatar: "./../images/avatar-angela-gray.webp",
  },
  jacobThompson: {
    name: "Jacob Thompson",
    avatar: "./../images/avatar-jacob-thompson.webp",
  },
  rizkyHasanuddin: {
    name: "Rizky Hasanuddin",
    avatar: "./../images/avatar-rizky-hasanuddin.webp",
  },
  kimberlySmith: {
    name: "Kimberly Smith",
    avatar: "./../images/avatar-kimberly-smith.webp",
  },
  nathanPeterson: {
    name: "Nathan Peterson",
    avatar: "./../images/avatar-nathan-peterson.webp",
  },
  annaKim: {
    name: "Anna Kim",
    avatar: "./../images/avatar-anna-kim.webp",
  },
}

const notificationTypes = {
  reaction: {
    name: "Reaction",
    message: "reacted to your recent post",
  },
  following: {
    name: "Following",
    message: "followed you",
  },
  joinedGroup: {
    name: "Joined Group",
    message: "has joined your group",
  },
  privateMessage: {
    name: "Private Message",
    message: "sent you a private message",
  },
  comment: {
    name: "Comment",
    message: "commented on your picture",
  },
  leftGroup: {
    name: "Left Group",
    message: "left the group",
  },
}

const notifications = [
  {
    read: false,
    type: notificationTypes.reaction,
    date: "1m ago",
    content: {
      title: "My first tournament today!",
      description: "",
      image: "",
    },
    sender: profiles.markWebber
  },
  {
    read: false,
    type: notificationTypes.following,
    date: "5m ago",
    content: {
      title: "",
      description: "",
      image: "",
    },
    sender: profiles.angelaGray
  },
  {
    read: false,
    type: notificationTypes.joinedGroup,
    date: "1day ago",
    content: {
      title: "Chess Club",
      description: "",
      image: "",
    },
    sender: profiles.jacobThompson
  },
  {
    read: true,
    type: notificationTypes.privateMessage,
    date: "5days ago",
    content: {
      title: "",
      description:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      image: "",
    },
    sender: profiles.rizkyHasanuddin
  },
  {
    read: true,
    type: notificationTypes.comment,
    date: "1week ago",
    content: {
      title: "",
      description: "",
      image: "./../images/image-chess.webp",
    },
    sender: profiles.kimberlySmith
  },
  {
    read: true,
    type: notificationTypes.reaction,
    date: "2weeks ago",
    content: {
      title: "5 end-game strategies to increase your win rate",
      description: "",
      image: "",
    },
    sender: profiles.nathanPeterson
  },
  {
    read: true,
    type: notificationTypes.leftGroup,
    date: "2weeks ago",
    content: {
      title: "Chess Club",
      description: "",
      image: "",
    },
    sender: profiles.annaKim
  },
]
