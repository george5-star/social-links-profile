interface Props {
  refLink: string;
  refName: string;
}

const SocialMediaLink = ({ refLink, refName }: Props) => {
  return (
    <a
      className="block bg-neutral-clr-grey my-4 py-2 rounded-md hover:bg-primary-clr-green hover:text-neutral-clr-dark-grey font-bold"
      href={refLink}
    >
      {refName}
    </a>
  );
};

export default SocialMediaLink;
