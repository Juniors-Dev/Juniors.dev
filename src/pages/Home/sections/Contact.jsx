import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section, SubmitButton, InputField, EmailInput } from "../../../features/UI";
import { contactSchema } from "./schema/contactSchema";
import { contacts } from "../translations/contact";
import { useT } from "../../../stores/languageStore";

function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitSuccessful, isSubmitted },
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

  const t = useT(contacts);

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <Section className="bg-off-white">
      <div className="contact-section">
        <div className="contact-section__intro">
          <h2>{t.heading}</h2>
          <p className="text-paragraph">
            {t.tagline1}
            <br />
            {t.tagline2}
          </p>
        </div>

        {isSubmitSuccessful ? (
          <p className="contact-form__success">Your message has been sent successfully.</p>
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

            <EmailInput
              label={t.email}
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
                <SubmitButton variant="primary" type="submit" icon={true}>
                  Send
                </SubmitButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}

export default ContactSection;
