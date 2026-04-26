import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Section, InputField, PhoneNumberInput } from "../../../features/UI";
import FormSubmitButton from "../../../features/UI/Buttons/FormSubmitButton";
import { applySchema } from "../schema/applySchema";
import { applyForm } from "../translations/apply";
import { useT } from "../../../stores/languageStore";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

if (!ACCESS_KEY) {
  console.error("VITE_WEB3FORMS_ACCESS_KEY is not set.");
}

function ApplyForm() {
  const t = useT(applyForm);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields, isSubmitted, isSubmitting },
  } = useForm({
    resolver: zodResolver(applySchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneCountry: "no",
      phone: "",
      linkedinUrl: "",
      githubUrl: "",
      portfolioUrl: "",
      otherUrl: "",
      message: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
          from_name: "Juniors.dev work with us form",
          form_type: "apply",
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

  return (
    <Section className="bg-off-white">
      <div className="site-form-section">
        <div className="site-form-section__intro">
          <h2>{t.heading}</h2>
          <p className="text-paragraph">
            {t.tagLine1}
            <br />
            {t.tagLine2}
          </p>
        </div>

        <form className="site-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          {submitStatus === "success" ? (
            <div className="site-form__success" role="alert" aria-live="polite">
              <p>{t.successMessage}</p>
            </div>
          ) : null}

          {submitStatus === "error" ? (
            <div className="site-form__error" role="alert" aria-live="assertive">
              <p>{errorMessage}</p>
            </div>
          ) : null}

          <div className="site-form__grid">
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
              autoComplete="email"
              error={errors.email?.message}
              success={!errors.email && (touchedFields.email || isSubmitted)}
              {...register("email")}
            />

            <PhoneNumberInput
              register={register}
              watch={watch}
              errors={errors}
              touchedFields={touchedFields}
              isSubmitted={isSubmitted}
              labels={t.phoneLabels}
              required
            />

            <InputField
              label={t.linkedinUrl}
              name="linkedinUrl"
              type="url"
              required
              placeholder={t.urlPlaceholder}
              autoComplete="url"
              error={errors.linkedinUrl?.message}
              success={!errors.linkedinUrl && (touchedFields.linkedinUrl || isSubmitted)}
              {...register("linkedinUrl")}
            />
            <InputField
              label={t.portfolioUrl}
              name="portfolioUrl"
              type="url"
              placeholder={t.urlPlaceholder}
              autoComplete="url"
              error={errors.portfolioUrl?.message}
              success={!errors.portfolioUrl && (touchedFields.portfolioUrl || isSubmitted)}
              {...register("portfolioUrl")}
            />
            <InputField
              label={t.githubUrl}
              name="githubUrl"
              type="url"
              required
              placeholder={t.urlPlaceholder}
              autoComplete="url"
              error={errors.githubUrl?.message}
              success={!errors.githubUrl && (touchedFields.githubUrl || isSubmitted)}
              {...register("githubUrl")}
            />

            <InputField
              label={t.otherUrl}
              name="otherUrl"
              type="url"
              placeholder={t.urlPlaceholder}
              autoComplete="url"
              error={errors.otherUrl?.message}
              success={!errors.otherUrl && (touchedFields.otherUrl || isSubmitted)}
              {...register("otherUrl")}
            />
          </div>

          <div className="site-form__message">
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
          </div>

          <div className="site-form__actions">
            <FormSubmitButton isLoading={isSubmitting} loadingLabel={t.submitting}>
              {t.submit}
            </FormSubmitButton>
          </div>
        </form>
      </div>
    </Section>
  );
}

export default ApplyForm;
