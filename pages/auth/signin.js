import Header from "../../components/header";
import { getProviders, signIn } from "next-auth/react";


const SignIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <img className="w-52 object-cover "
              src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
              alt="google logo"
            />
            <p className="text-sm italic my-10 text-center">This website we are creating for learning purposes.</p>
            <button className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500" onClick={() => signIn(provider.id, {callbackUrl : "/"})}>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SignIn;

export const getServerSideProps = async (req, res) => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
