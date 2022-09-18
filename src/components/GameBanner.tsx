interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

const GameBanner = (props: GameBannerProps) => {
  return (
    <a href="#" className="relative rounded-lg overflow-hidden">
      <img src={props.bannerUrl} alt={`${props.title} poster`} />

      <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block pl-3">
          {props.title}
        </strong>
        <span className="text-zinc-300 text-sm mt-1 pl-3">
          {props.adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
};

export default GameBanner;
