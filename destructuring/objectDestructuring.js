const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfollow: false,
  },
  color: {
    theme: "dark",
  },
};

const {
  color: { theme = false },
} = settings;

// one-line-statement
// const { notifications: { follow = flase } = {} } = settings;

console.log(theme);
