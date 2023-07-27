import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <section className="flex w-[90vw] justify-center h-screen  " >
     
    <div className="">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/protectedPage"
      />
    
    </div>
    </section>
  );
};

export default SignUpPage;

