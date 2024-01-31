import Avatar from "./assets/images/avatar-jessica.jpeg";
import SocialMediaLink from "./components/SocialMediaLink";

const App = () => {
  return (
    <div className="text-neutral-clr-white container min-h-60 rounded-md flex flex-col bg-neutral-clr-dark-grey mx-auto text-center p-10">
      <img
        className="size-20 mb-5 rounded-full text-center block mx-auto"
        src={Avatar}
        alt="Profile picture of Jessica Randall"
      />
      <h1 className="font-semibold tracking-wider">Jessica Randall</h1>
      <h3 className="text-primary-clr-green font-bold text-sm">
        London, United Kingdom
      </h3>
      <h2 className="mt-4 mb-2">"Front-end developer and avid reader."</h2>
      <div>
        <SocialMediaLink refLink="" refName="GitHub" />
        <SocialMediaLink refLink="" refName="Frontend Mentor" />
        <SocialMediaLink refLink="" refName="LinkedIn" />
        <SocialMediaLink refLink="" refName="Twitter" />
        <SocialMediaLink refLink="" refName="Instagram" />
      </div>
    </div>
  );
};

export default App;
