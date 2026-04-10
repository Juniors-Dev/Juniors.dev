import { createElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookOpen, CalendarCheck, Code2, Folder } from "lucide-react";
import { Section, SubmitButton, InputField } from "../../features/UI";
import { workWithUsSchema } from "./schema/workWithUsSchema";
import { workWithUs } from "./translations/workWithUs";
import { useT } from "../../stores/languageStore";
import flagNorway from "../../assets/emojione_flag-for-norway.png";

function WorkWithUs() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields, isSubmitSuccessful, isSubmitted },
  } = useForm({
    resolver: zodResolver(workWithUsSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const t = useT(workWithUs);
  const phoneValue = watch("phone");

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  const phoneControlClass = [
    "input-field__control",
    "flex items-stretch gap-2 ps-2",
    errors.phone
      ? "input-field__control--error"
      : !errors.phone && (touchedFields.phone || isSubmitted) && String(phoneValue || "").trim()
        ? "input-field__control--filled"
        : "input-field__control--default",
  ]
    .filter(Boolean)
    .join(" ");

  const expectCards = [
    {
      Icon: BookOpen,
      title: t.learningTitle,
      body: t.learningBody,
      tone: "blue",
    },
    {
      Icon: CalendarCheck,
      title: t.weeklyTitle,
      body: t.weeklyBody,
      tone: "lime",
    },
    {
      Icon: Code2,
      title: t.techTitle,
      body: t.techBody,
      tone: "lime",
    },
    {
      Icon: Folder,
      title: t.projectTitle,
      body: t.projectBody,
      tone: "blue",
    },
  ];

  return (
    <>
      <Section className="bg-primary-800 text-off-white">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <h1 className="max-w-[14ch] text-balance">{t.heroTitle}</h1>
          <p className="text-subheading-2 max-w-xl shrink-0 lg:pt-2 lg:text-right">
            {t.heroSubtitle}
          </p>
        </div>
      </Section>

      <Section className="bg-off-white text-primary-900">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-h2 mb-4">{t.introTitle}</h2>
            <p className="text-paragraph text-pretty">{t.introBody}</p>
          </div>
          <div className="flex flex-wrap items-start gap-4 lg:justify-end">
            <span
              className="select-none font-sans text-[5rem] leading-none font-light text-primary-500 md:text-[7rem]"
              aria-hidden="true"
            >
              {"{"}
            </span>
            <p className="text-subheading-1 max-w-md pt-4 text-pretty">
              {t.introAsideLead}{" "}
              <strong className="font-semibold text-primary-800">{t.introAsideEmphasis}</strong>{" "}
              {t.introAsideTail}
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-primary-100 text-primary-900">
        <h2 className="mb-10 text-center">{t.expectHeading}</h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {expectCards.map(({ Icon, title, body, tone }) => {
            const isBlue = tone === "blue";
            return (
              <div
                key={title}
                className={`rounded-lg p-6 md:p-8 ${
                  isBlue ? "bg-primary-500 text-off-white" : "bg-secondary-500 text-primary-900"
                }`}
              >
                <div
                  className={`mb-4 inline-flex rounded-full p-3 ${
                    isBlue
                      ? "bg-primary-800/30 text-off-white"
                      : "bg-primary-900/10 text-primary-900"
                  }`}
                >
                  {createElement(Icon, {
                    className: "size-8 md:size-9",
                    strokeWidth: 1.75,
                    "aria-hidden": true,
                  })}
                </div>
                <h3 className="text-subheading-1 mb-3">{title}</h3>
                <p className="text-body text-pretty opacity-95">{body}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-off-white text-primary-900">
        <div className="contact-section">
          <div className="contact-section__intro">
            <h2>{t.formHeading}</h2>
            <p className="text-paragraph mt-4">{t.formTagline}</p>
          </div>

          {isSubmitSuccessful ? <p className="contact-form__success mt-6">{t.success}</p> : null}

          <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
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

              <div className="input-field">
                <label
                  htmlFor="phone"
                  className={`input-field__label ${errors.phone ? "input-field__label--error" : ""}`}
                >
                  {t.phone} *
                </label>
                <div className={phoneControlClass}>
                  <span
                    className="flex shrink-0 items-center self-center pb-2 md:pb-3"
                    aria-hidden="true"
                  >
                    <img src={flagNorway} alt="" className="h-5 w-7 rounded-sm object-cover" />
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className="input-field__input min-w-0 flex-1 ps-0"
                    aria-invalid={errors.phone ? "true" : undefined}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    {...register("phone")}
                  />
                  {!errors.phone &&
                  (touchedFields.phone || isSubmitted) &&
                  String(phoneValue || "").trim() ? (
                    <span className="input-field__icon" aria-hidden="true">
                      ✓
                    </span>
                  ) : null}
                </div>
                <div className="h-4.5">
                  {errors.phone ? (
                    <p id="phone-error" className="input-field__error">
                      {errors.phone.message}
                    </p>
                  ) : null}
                </div>
              </div>

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
                  <SubmitButton variant="primary" type="submit" icon>
                    {t.apply}
                  </SubmitButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}

export default WorkWithUs;
