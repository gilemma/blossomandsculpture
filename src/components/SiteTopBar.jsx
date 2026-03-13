
import SocialIconsComponent from "./SocialMediaIcons";

export default function SiteTopBar() {
  const rotatingMessageClass =
    "absolute inset-0 flex items-center justify-center whitespace-nowrap [animation:top-bar-message_8s_linear_infinite_both] [will-change:transform,opacity]";

  return (
    <div className="bg-[#c4d9d8] text-[10px] sm:text-xs uppercase tracking-[0.12em] text-gray-800">
      <div className="mx-auto grid h-7 max-w-7xl grid-cols-[1fr_minmax(0,40rem)_1fr] items-center gap-3 px-6 md:px-10">
        <span className="shrink-0"><SocialIconsComponent /></span>

        <span className="relative block h-[1.2em] w-full min-w-0 overflow-hidden text-center leading-none">
          <span className={rotatingMessageClass}>
            FREE SHIPPING for all orders over $50
          </span>
          <span className={`${rotatingMessageClass} [animation-delay:4s]`}>
            Envelopes included
          </span>
        </span>

        <span className="justify-self-end"></span>
      </div>
    </div>
  );
}