import { auth } from "@/lib/auth";
import Configuration from "../_components/Configuration";
import GeneralInfo from "../_components/GeneralInfo";
import { getUser } from "@/lib/actions";

// SettingsPage Component: Combines the above components in a responsive layout.
export default async function SettingsPage() {
  const session = await auth();

  const user = await getUser(session.user.email);

  const configInfo = {
    writingGoal: "I would like to set a daily writing goal.",
    defaultPrompts: "I would like to set my default writing prompts.",
  };

  const alertsInfo = {
    emailReminders: "I would like to receive email reminders to write.",
  };

  return (
    <div className="px-4">
      <GeneralInfo
        fullName={user.fullName}
        email={user.email}
        timeZone={user.timezone}
      />
      <Configuration
        writingGoal={configInfo.writingGoal}
        defaultPrompts={configInfo.defaultPrompts}
        user={user}
      />
    </div>
  );
}
