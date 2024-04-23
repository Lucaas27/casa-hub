interface InfoCardProps {
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  buttonInfo: {
    link: string;
    text: string;
    bgColor?: string;
    txtColor?: string;
  };
  children: string;
}

const InfoCard = ({
  heading,
  backgroundColor = 'bg-secondary ',
  textColor = 'text-secondary-foreground',
  buttonInfo: {
    link,
    text,
    bgColor = 'bg-secondary-foreground hover:bg-accent ',
    txtColor = 'text-secondary  hover:text-accent-foreground',
  },
  children,
}: InfoCardProps) => {
  return (
    <div className={`rounded-lg ${backgroundColor} p-6 ${textColor} shadow-md`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mb-4 mt-2">{children}</p>
      <a href={link} className={`${bgColor} ${txtColor} inline-block rounded-lg px-4 py-2 `}>
        {text}
      </a>
    </div>
  );
};
export default InfoCard;
