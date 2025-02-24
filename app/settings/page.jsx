import Configuration from "../_components/Configuration";
import GeneralInfo from "../_components/GeneralInfo";

// SettingsPage Component: Combines the above components in a responsive layout.
export default function SettingsPage() {
  // Replace with your actual data.
  const userInfo = {
    fullName: "Le Bim",
    email: "mefew123@gmail.com",
    timeZone: "Asia/Karachi",
    phone: "Not set",
  };

  const configInfo = {
    writingGoal: "I would like to set a daily writing goal.",
    defaultPrompts: "I would like to set my default writing prompts.",
  };

  const alertsInfo = {
    emailReminders: "I would like to receive email reminders to write.",
  };

  return (
    <div>
      <GeneralInfo
        fullName={userInfo.fullName}
        email={userInfo.email}
        timeZone={userInfo.timeZone}
        phone={userInfo.phone}
      />
      <Configuration
        writingGoal={configInfo.writingGoal}
        defaultPrompts={configInfo.defaultPrompts}
      />
    </div>
  );
}
