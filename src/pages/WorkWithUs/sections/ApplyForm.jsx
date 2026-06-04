import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section, InputField, PhoneNumberInput } from "../../../features/UI";
import FormSubmitButton from "../../../features/UI/Buttons/FormSubmitButton";
import { applySchema } from "../schema/applySchema";
import { applyForm } from "../translations/apply";
import { useT } from "../../../stores/languageStore";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

if (!ACCESS_KEY) {
  console.error("VITE_WEB3FORMS_ACCESS_KEY is not set.");
}

function ApplyForm() {
  const captchaRef = useRef(null);
  const t = useT(applyForm);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
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
      portfolioUrl: "",
      captchaToken: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleCaptchaVerify(token) {
    setValue("captchaToken", token, { shouldValidate: true });
  }

  function handleCaptchaExpire() {
    setValue("captchaToken", "", { shouldValidate: isSubmitted });
  }

  async function onSubmit(data) {
    setSubmitStatus("idle");
    setErrorMessage("");

    const { captchaToken, ...fields } = data;

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
          "h-captcha-response": captchaToken,
          ...fields,
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
        reset();
        captchaRef.current?.resetCaptcha();
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
    <Section className="work-with-us-form-section">
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
              placeholder={t.firstNamePlaceholder}
              required
              error={errors.firstName?.message}
              success={!errors.firstName && (touchedFields.firstName || isSubmitted)}
              {...register("firstName")}
            />

            <InputField
              label={t.lastName}
              name="lastName"
              placeholder={t.lastNamePlaceholder}
              required
              error={errors.lastName?.message}
              success={!errors.lastName && (touchedFields.lastName || isSubmitted)}
              {...register("lastName")}
            />

            <InputField
              label={t.email}
              name="email"
              placeholder={t.emailPlaceholder}
              type="email"
              required
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
              placeholder={t.phonePlaceholder}
              required
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

            <div className="site-form__privacy-section">
              <label className="site-form__privacy-checkbox">
                <input
                  id="privacyPolicy"
                  type="checkbox"
                  aria-invalid={errors.privacyPolicy ? "true" : undefined}
                  aria-describedby={errors.privacyPolicy ? "privacyPolicy-error" : undefined}
                  {...register("privacyPolicy")}
                />
                <span>
                  {t.privacyAgreement}{" "}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                    {t.privacyPolicyLink}
                  </a>
                  .{t.privacyDisclaimer}
                </span>
              </label>
              {errors.privacyPolicy ? (
                <p id="privacyPolicy-error" className="input-field__error">
                  {t.privacyErrorMessage}
                </p>
              ) : null}
            </div>
            <HCaptcha
              sitekey={HCAPTCHA_SITEKEY}
              reCaptchaCompat={false}
              onVerify={handleCaptchaVerify}
              onExpire={handleCaptchaExpire}
              ref={captchaRef}
            />
          </div>
          <FormSubmitButton className="mt-6" isLoading={isSubmitting} loadingLabel={t.submitting}>
            {t.submit}
          </FormSubmitButton>
        </form>
      </div>
    </Section>
  );
}

export default ApplyForm;
