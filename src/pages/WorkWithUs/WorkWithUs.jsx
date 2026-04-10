import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { workWithUsSchema } from "./schema/workWithUsSchema";
import WorkWithUsHero from "./sections/WorkWithUsHero";
import WorkWithUsExperience from "./sections/WorkWithUsExperience";
import WorkWithUsExpect from "./sections/WorkWithUsExpect";
import WorkWithUsApplicationForm from "./sections/WorkWithUsApplicationForm";

function WorkWithUs() {
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
      message: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    form.reset();
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
