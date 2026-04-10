import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Section, InputField, SubmitButton, PhoneNumberInput } from "../../../features/UI";
import { useT } from "../../../stores/languageStore";
import { workWithUs } from "../translations/workWithUs";

function WorkWithUsApplicationForm({ form, onSubmit }) {
  const t = useT(workWithUs);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields, isSubmitted, isSubmitSuccessful, isSubmitting },
  } = form;

  function dismissSuccessModal() {
    form.reset();
  }

  useEffect(() => {
    if (!isSubmitSuccessful) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isSubmitSuccessful]);

  return (
    <Section className="bg-off-white text-primary-900">
      {isSubmitSuccessful
        ? createPortal(
            <div
              className="success-modal-overlay"
              role="presentation"
              onClick={dismissSuccessModal}
            >
              <div
                className="success-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="work-with-us-success-title"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="success-modal__close"
                  onClick={dismissSuccessModal}
                  aria-label={t.closeSuccessModal}
                >
                  <X className="size-5" strokeWidth={2} aria-hidden />
                </button>
                <p id="work-with-us-success-title" className="success-modal__message">
                  {t.success}
                </p>
              </div>
            </div>,
            document.body
          )
        : null}

      <div className="contact-section">
        <div className="contact-section__intro">
          <h2>{t.formHeading}</h2>
          <p className="text-paragraph mt-4">{t.formTagline}</p>
        </div>

        {errors.root?.message ? (
          <p className="input-field__error mt-6" role="alert">
            {errors.root.message}
          </p>
        ) : null}

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

            <PhoneNumberInput
              register={register}
              watch={watch}
              errors={errors}
              touchedFields={touchedFields}
              isSubmitted={isSubmitted}
              labels={{
                phone: t.phone,
                phoneCountry: t.phoneCountryLabel,
                countryNO: t.countryNO,
                countryGB: t.countryGB,
              }}
            />

            <InputField
              className="md:col-span-2"
              label={t.profileUrl}
              name="profileUrl"
              type="url"
              inputMode="url"
              autoComplete="url"
              placeholder={t.profileUrlPlaceholder}
              error={errors.profileUrl?.message}
              success={!errors.profileUrl && (touchedFields.profileUrl || isSubmitted)}
              {...register("profileUrl")}
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
                <SubmitButton variant="primary" type="submit" icon disabled={isSubmitting}>
                  {t.apply}
                </SubmitButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}

export default WorkWithUsApplicationForm;
