import { Section, InputField, SubmitButton, PhoneNumberInput } from "../../../features/UI";
import { useT } from "../../../stores/languageStore";
import { workWithUs } from "../translations/workWithUs";

function WorkWithUsApplicationForm({ form, onSubmit }) {
  const t = useT(workWithUs);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields, isSubmitted, isSubmitSuccessful },
  } = form;

  return (
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
  );
}

export default WorkWithUsApplicationForm;
