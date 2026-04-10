import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section, SubmitButton, InputField } from "../../../features/UI";
import { contactSchema } from "./schema/contactSchema";
import { contacts } from "../translations/contact";
import { useT } from "../../../stores/languageStore";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

if (!ACCESS_KEY) {
  console.error("VITE_WEB3FORMS_ACCESS_KEY is not set.");
}

function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitted, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState("idle"); // "idle" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const t = useT(contacts);

  async function onSubmit(data) {
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: "Juniors.dev website",
          ...data,
        }),
      });

      if (!response.ok) {
        setSubmitStatus("error");
        setErrorMessage(t.errorGeneric);
        return;
      }

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setErrorMessage("");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(t.errorGeneric);
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage(t.errorNetwork);
    }
  }

  function handleReset() {
    setSubmitStatus("idle");
    setErrorMessage("");
    reset();
  }

  return (
    <Section className="bg-off-white">
      <div className="contact-section">
        <div className="contact-section__intro">
          <h2>{t.heading}</h2>
          <p className="text-paragraph">
            {t.tagLine1}
            <br />
            {t.tagLine2}
          </p>
        </div>

        {submitStatus === "success" ? (
          <div className="contact-form__success" role="alert">
            <p>{t.successMessage}</p>
            <button type="button" className="btn btn-secondary mt-4" onClick={handleReset}>
              {t.sendAnother}
            </button>
          </div>
        ) : null}

        {submitStatus !== "success" ? (
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            {submitStatus === "error" ? (
              <div className="contact-form__error" role="alert" aria-live="assertive">
                <p>{errorMessage}</p>
              </div>
            ) : null}

            <div className="contact-form__grid">
              <InputField
                label={t.firstName}
                name="firstName"
                required
                error={errors.firstName?.message}
                success={!errors.firstName && (touchedFields.firstName || isSubmitted)}
                {...register("firstName")}
              />

              <InputField
                label={t.lastName}
                name="lastName"
                required
                error={errors.lastName?.message}
                success={!errors.lastName && (touchedFields.lastName || isSubmitted)}
                {...register("lastName")}
              />

              <InputField
                label={t.email}
                name="email"
                type="email"
                required
                error={errors.email?.message}
                success={!errors.email && (touchedFields.email || isSubmitted)}
                {...register("email")}
              />

              <InputField
                label={t.subject}
                name="subject"
                required
                error={errors.subject?.message}
                success={!errors.subject && (touchedFields.subject || isSubmitted)}
                {...register("subject")}
              />

              <div className="contact-form__message">
                <InputField
                  as="textarea"
                  label={t.message}
                  name="message"
                  required
                  rows={5}
                  error={errors.message?.message}
                  success={!errors.message && (touchedFields.message || isSubmitted)}
                  {...register("message")}
                  inputClassName="resize-none"
                />
                <div className="contact-form__actions">
                  <SubmitButton variant="primary" type="submit" icon={true} disabled={isSubmitting}>
                    {isSubmitting ? t.sending : t.send}
                  </SubmitButton>
                </div>
              </div>
            </div>
          </form>
        ) : null}
      </div>
    </Section>
  );
}

export default ContactSection;
