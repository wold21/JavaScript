function saveSettings({ notifications, color: { theme } }) {
  console.log(notifications);
}

saveSettings({
  notifications: {
    follow: true,
    alert: true,
    mkt: false,
  },
  color: {
    theme: "blue",
  },
});
