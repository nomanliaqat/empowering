import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSection = (props) => {
  const { title, desc, icon, textColor, titleColor, iconColor } = props;
  return (
    <div className="text-center">
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size="3x"
          style={{ color: iconColor ? iconColor : "#ff7355" }}
        />
      )}
      <div className="pillar-text pillar-heading mt-4">
        <h4 style={{ color: titleColor ? titleColor : "#2b76df" }}>{title}</h4>
      </div>
      <div
        className="pillar-text pillar-subheading"
        style={{ color: textColor ? textColor : "#000" }}
      >
        <h1>{desc}</h1>
      </div>
    </div>
  );
};

export default HeaderSection;
