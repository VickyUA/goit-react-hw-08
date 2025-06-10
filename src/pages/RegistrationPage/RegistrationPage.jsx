// import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function RegistrationPage() {
  return (
    <div>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
    </div>
  );
}
