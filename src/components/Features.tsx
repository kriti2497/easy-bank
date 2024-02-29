import ApiIcon from "../assets/images/icon-api.svg";
import BankingIcon from "../assets/images/icon-online.svg";
import BudgetIcon from "../assets/images/icon-budgeting.svg";
import OnboardingIcon from "../assets/images/icon-onboarding.svg";

const Features = () => {
  interface IFeature {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    heading: string;
    desc: string;
  }
  const features: IFeature[] = [
    {
      icon: BankingIcon,
      heading: "Online Banking",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      icon: BudgetIcon,
      heading: "Simple Budgeting",
      desc: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    {
      icon: OnboardingIcon,
      heading: "Fast Onboarding",
      desc: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      icon: ApiIcon,
      heading: "Open API",
      desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <div className="features-section">
      <h3 className="title">Why choose Easybank?</h3>
      <p className="subtext subtitle">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="features-main">
        {features.map((each: IFeature) => (
          <div className="feature-item">
            <div className="feature-icon">
              <img src={each.icon} alt="budget" />
            </div>
            <div className="feature-heading">{each.heading}</div>
            <div className="feature-desc">{each.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
