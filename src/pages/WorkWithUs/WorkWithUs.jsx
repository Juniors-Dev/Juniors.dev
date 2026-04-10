import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getPhoneCountryOption } from "../../features/PhoneNumberInput/phoneCountryOptions";
import { useT } from "../../stores/languageStore";
import { workWithUsSchema } from "./schema/workWithUsSchema";
import WorkWithUsHero from "./sections/WorkWithUsHero";
import WorkWithUsExperience from "./sections/WorkWithUsExperience";
import WorkWithUsExpect from "./sections/WorkWithUsExpect";
import WorkWithUsApplicationForm from "./sections/WorkWithUsApplicationForm";
import { workWithUs } from "./translations/workWithUs";

const WORK_WITH_US_INBOX = "juniors@thejuniors.dev";

function WorkWithUs() {
  const t = useT(workWithUs);
  const form = useForm({
    resolver: zodResolver(workWithUsSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneCountry: "no",
      phone: "",
      profileUrl: "",
      message: "",
    },
  });

  async function onSubmit(data) {
    const country = getPhoneCountryOption(data.phoneCountry);
    const phoneLine = `${country.dialCode} ${data.phone}`.trim();

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${WORK_WITH_US_INBOX}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Work with us: ${data.firstName} ${data.lastName}`,
          _replyto: data.email,
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: phoneLine,
          profileUrl: data.profileUrl || "",
          message: data.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      form.reset(undefined, { keepIsSubmitSuccessful: true });
    } catch {
      form.setError("root", { type: "server", message: t.submitError });
    }
  }

  return (
    <>
      <WorkWithUsHero />
      <WorkWithUsExperience />
      <WorkWithUsExpect />
      <WorkWithUsApplicationForm form={form} onSubmit={onSubmit} />
    </>
  );
}

export default WorkWithUs;
