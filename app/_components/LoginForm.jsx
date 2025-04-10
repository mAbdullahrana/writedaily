import SignInButton from "./SignInButton";

function LoginForm() {
  return (
    <div className="flex flex-col flex-1 bg-secondary items-center justify-center p-8">
      <div className="w-full max-w-md items-center justify-center flex bg-lightgray p-8 rounded-xl shadow-lg">
       
        <SignInButton />
      </div>
    </div>
  );
}

export default LoginForm;
